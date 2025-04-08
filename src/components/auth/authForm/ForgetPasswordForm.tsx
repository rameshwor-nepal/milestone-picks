'use client'
import Button from '@/ui/button/Button'
import React from 'react'
import AuthContainer from '../container/AuthContainer'
import { useForgetPasswordMutation } from '@/redux/features/auth/authApi';
import { ToastError } from '@/utils/toast/ToastError';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import VerifyOtp from '../verifyOtp/VerifyOtp';

interface FormFields {
    email: string;
}

const ForgetPasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<FormFields>();
    const email = watch('email');

    const [forgetPassword, { isSuccess: isForgetPasswordSuccess }] = useForgetPasswordMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await forgetPassword(data)
            .unwrap()
            .then(() => {
                toast.success("OTP sent to email")
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    return (
        <AuthContainer>
            {!isForgetPasswordSuccess ?
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mt-4">
                        <label className="block  text-sm font-bold mb-2">Email Address</label>
                        <input
                            className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                            type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required.",
                                },
                            })}
                        />
                        <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{errors?.email?.message}</span>

                    </div>

                    <div className="mt-4">
                        <Button title={"Continue"} type="submit" />
                    </div>
                </form>
                :
                <VerifyOtp email={email && email} />
            }
        </AuthContainer>

    )
}

export default ForgetPasswordForm