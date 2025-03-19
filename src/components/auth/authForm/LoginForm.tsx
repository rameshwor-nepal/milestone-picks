'use client'
import Button from '@/ui/button/Button'
import React, { useEffect } from 'react'
import AuthContainer from '../container/AuthContainer'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormFields {
    email: string;
    password: string;
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const router = useRouter();

    const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation()

    useEffect(() => {
        if (isSuccess) {
            toast.success("Logged In successfully.");
            router.push('/')
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            ToastError.serialize(error);
        }
    }, [isError, error]);

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await login(data);
    };

    return (
        <AuthContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2">
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
                <div className="mt-2">
                    <div className="flex justify-between">
                        <label className="block  text-sm font-bold mb-2">Password</label>
                        <Link href={'/forgetPassword'}>
                            <span className="text-xs text-gray-500">
                                Forget Password?
                            </span>
                        </Link>
                    </div>
                    <input
                        className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                        type="password"
                        {...register("password", {
                            required: {
                                value: true,
                                message: "Password is required.",
                            },
                        })}
                    />
                    <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{errors?.password?.message}</span>

                </div>

                <div className="mt-4">
                    <Button title={"Save"} type="submit" />
                </div>
            </form>

        </AuthContainer>
    )
}

export default LoginForm