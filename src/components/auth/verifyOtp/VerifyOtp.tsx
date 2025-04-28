'use client'
import { useResetPasswordMutation, useVerifyOtpMutation } from '@/redux/features/auth/authApi';
import Button from '@/ui/button/Button'
import { Form, PasswordInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormFieldsOtp {
    email: string;
    otp: string;
}

interface FormFieldsReset {
    password: string;
    confirmPassword: string;
}

interface PropsI {
    email: string
}

const VerifyOtp = ({ email }: PropsI) => {
    const router = useRouter();
    const {
        register: otpRegister,
        handleSubmit: otpHandleSubmit,
        formState: { errors: otpErrors },
        setValue: setOtpValue,
    } = useForm<FormFieldsOtp>();

    const {
        register: resetPasswordRegister,
        handleSubmit: resetPasswordHandleSubmit,
        formState: { errors: resetPasswordErrors },
        watch: resetPasswordWatch,
    } = useForm<FormFieldsReset>();

    const password1 = resetPasswordWatch('password')
    const [otp, setOtp] = useState<string>('');
    const [verifyOtp, { isSuccess: isVerifyOtpSuccess }] = useVerifyOtpMutation();
    const [resetPassword] = useResetPasswordMutation();

    const inputRefs = useRef<HTMLInputElement[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        // if (!/^\d*$/.test(value)) return; 

        const otpArray = otp.split('');
        otpArray[index] = value[0] || '';
        const newOtp = otpArray.join('').substring(0, 6);
        setOtp(newOtp);
        setOtpValue('otp', newOtp);

        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            e.preventDefault();
            const otpArray = otp.split('');
            if (otpArray[index]) {
                otpArray[index] = '';
                setOtp(otpArray.join(''));
                setOtpValue('otp', otpArray.join(''));
            } else if (index > 0) {
                otpArray[index - 1] = '';
                setOtp(otpArray.join(''));
                setOtpValue('otp', otpArray.join(''));
                inputRefs.current[index - 1]?.focus();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('Text').replace(/\D/g, '').slice(0, 6);
        if (pasteData.length === 0) return;

        setOtp(pasteData);
        setOtpValue('otp', pasteData);

        if (pasteData.length < 6) {
            inputRefs.current[pasteData.length]?.focus();
        }
    };
    const handleFocus = (index: number) => {
        inputRefs.current[index]?.select();
    };

    const onOTPSubmit: SubmitHandler<FormFieldsOtp> = async (data) => {
        console.log("data", data)
        await verifyOtp({
            otp: otp,
            email: email
        })
            .unwrap()
            .then(() => {
                toast.success("OTP validate successfully")
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };

    const onResetSubmit: SubmitHandler<FormFieldsReset> = async (data) => {
        await resetPassword({
            email: email,
            otp: otp,
            new_password: data?.password
        })
            .unwrap()
            .then(() => {
                toast.success("Password reset successfully");
                router.push('/login')
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    return (
        !isVerifyOtpSuccess ?
            <div className='px-3'>
                <p className="text-slate-500 py-2 mt-4">Enter the OTP you receive </p>
                <form onSubmit={otpHandleSubmit(onOTPSubmit)}>
                    <input type="hidden"
                        {...otpRegister('otp', {
                            required: {
                                value: true,
                                message: "Email is required.",
                            },
                        })}
                        value={otp} />

                    <div className="flex flex-row items-center justify-between  w-full max-w-xs mt-2">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                ref={(el) => {
                                    if (el) inputRefs.current[index] = el;
                                }}
                                className="w-12 h-12 text-blue-1 text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="text"
                                maxLength={1}
                                value={otp[index] || ''}
                                onChange={(e) => handleInputChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                onPaste={handlePaste}
                                onFocus={() => handleFocus(index)}
                            />
                        ))}
                        <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{otpErrors?.otp?.message}</span>

                    </div>

                    <div className="mt-7 mb-2">
                        <Button title={"Continue"}
                            type="submit"
                            secondary
                        // isLoading={isVerifyOtpLoading} 
                        />
                    </div>
                </form>
            </div>
            :
            <>
                <p className="text-slate-500 py-2 mt-4">Set up a new password </p>
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Col size='lg'>
                                <PasswordInput
                                    label='Password'
                                    placeholder='Enter a password'
                                    {...resetPasswordRegister("password", {
                                        required: {
                                            value: true,
                                            message: "Password is required.",
                                        },
                                    })}
                                    errorMsg={resetPasswordErrors?.password?.message}
                                    required
                                />
                            </Grid.Col>
                            <Grid.Col size='lg'>
                                <PasswordInput
                                    label='Confirm Password'
                                    placeholder='Re-enter a password'
                                    {...resetPasswordRegister("confirmPassword", {
                                        required: "Confirm Password is required.",
                                        validate: (value) => value === password1 || "Passwords do not match.",
                                    })}
                                    errorMsg={resetPasswordErrors?.confirmPassword?.message}
                                />
                            </Grid.Col>

                        </Grid.Row>
                    </Grid>
                    <div className='mt-5'>
                        <Button
                            title='Save'
                            onClick={resetPasswordHandleSubmit(onResetSubmit)}
                            secondary={true}
                        />
                    </div>

                </Form>
            </>


        // <form onSubmit={resetPasswordHandleSubmit(onResetSubmit)}>
        //     <div className="mt-2">
        //         <label className="block  text-sm font-bold mb-2">Password <span className='text-red-500'>*</span></label>
        //         <input
        //             className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        //             type="password"
        //             {...resetPasswordRegister("password", {
        //                 required: {
        //                     value: true,
        //                     message: "Password is required.",
        //                 },
        //             })}
        //         />
        //         <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
        //             {/* {passwordMatchError ? passwordMatchError : ''} */}
        //             {resetPasswordErrors?.password?.message}
        //         </span>
        //     </div>
        //     <div className="mt-2">
        //         <label className="block  text-sm font-bold mb-2"> Confirm Password <span className='text-red-500'>*</span></label>
        //         <input
        //             className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
        //             type="password"
        //             {...resetPasswordRegister("confirmPassword", {
        //                 required: "Confirm Password is required.",
        //                 validate: (value) => value === password1 || "Passwords do not match.",
        //             })}
        //         />
        //         <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
        //             {resetPasswordErrors?.confirmPassword?.message}
        //         </span>
        //     </div>

        //     <div className="mt-8">
        //         <Button title={"Continue"} type="submit" />
        //     </div>
        // </form>

    )
}

export default VerifyOtp