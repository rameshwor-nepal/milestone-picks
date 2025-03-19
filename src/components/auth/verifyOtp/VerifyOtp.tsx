'use client'
import { useForgetPasswordMutation, useResetPasswordMutation, useVerifyOtpMutation } from '@/redux/features/auth/authApi';
import Button from '@/ui/button/Button'
import { ToastError } from '@/utils/toast/ToastError';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
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
    const [verifyOtp, { isLoading: isVerifyOtpLoading, isSuccess: isVerifyOtpSuccess }] = useVerifyOtpMutation();
    const [resetPassword, { isLoading: isResetPasswordLoading, isSuccess: isResetPasswordSuccess }] = useResetPasswordMutation();

    const handleOtpChange = (index: number, value: string) => {
        if (!/^\d*$/.test(value)) return; // Allow only numbers

        let newOtpArray = otp.split('');
        newOtpArray[index] = value;
        const newOtp = newOtpArray.join('').substring(0, 6);

        setOtp(newOtp);
        setOtpValue('otp', newOtp);
    };

    const onOTPSubmit: SubmitHandler<FormFieldsOtp> = async (data) => {
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
            <>
                <h1 className="text-3xl font-medium  mt-8">Verify OTP</h1>
                <p className="text-slate-500 ">Enter the OTP you receive </p>
                <form onSubmit={otpHandleSubmit(onOTPSubmit)}>
                    <input type="hidden"
                        {...otpRegister('otp', {
                            required: {
                                value: true,
                                message: "Email is required.",
                            },
                        })}
                        value={otp} />

                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs mt-8">
                        {[...Array(6)].map((_, index) => (
                            <input
                                key={index}
                                className="w-12 h-12 text-blue-1 text-center outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="text"
                                maxLength={1}
                                value={otp[index] || ''}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                            />
                        ))}
                        <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{otpErrors?.otp?.message}</span>

                    </div>

                    <div className="mt-4">
                        <Button title={"Continue"}
                            type="submit"
                        // isLoading={isVerifyOtpLoading} 
                        />
                    </div>
                </form>
            </> : <>
                <form onSubmit={resetPasswordHandleSubmit(onResetSubmit)}>
                    <div className="mt-2">
                        <label className="block  text-sm font-bold mb-2">Password <span className='text-red-500'>*</span></label>
                        <input
                            className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="password"
                            {...resetPasswordRegister("password", {
                                required: {
                                    value: true,
                                    message: "Password is required.",
                                },
                            })}
                        />
                        <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
                            {/* {passwordMatchError ? passwordMatchError : ''} */}
                            {resetPasswordErrors?.password?.message}
                        </span>
                    </div>
                    <div className="mt-2">
                        <label className="block  text-sm font-bold mb-2"> Confirm Password <span className='text-red-500'>*</span></label>
                        <input
                            className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
                            type="password"
                            {...resetPasswordRegister("confirmPassword", {
                                required: "Confirm Password is required.",
                                validate: (value) => value === password1 || "Passwords do not match.",
                            })}
                        />
                        <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
                            {resetPasswordErrors?.confirmPassword?.message}
                        </span>
                    </div>

                    <div className="mt-8">
                        <Button title={"Continue"} type="submit" />
                    </div>
                </form>
            </>




    )
}

export default VerifyOtp