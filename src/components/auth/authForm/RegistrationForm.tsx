'use client'
import Button from '@/ui/button/Button'
import React, { useEffect } from 'react'
import AuthContainer from '../container/AuthContainer'
import { SubmitHandler, useForm } from "react-hook-form";
import { useSignUpMutation } from '@/redux/features/auth/authApi';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

interface FormFields {
    username: string;
    email: string;
    password: string;
    confirmPassword: string
}

const RegistrationForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormFields>();
    const router = useRouter();
    // const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
    // const [passwordMatchError, setPasswordMatchError] = useState<string | null>(null);

    const [signUp, { isError, error, isSuccess }] = useSignUpMutation()
    const password1 = watch('password');

    // if (password1 !== confirmPassword) {
    //     setPasswordMatchError("Password not match")
    // }

    useEffect(() => {
        if (isSuccess) {
            toast.success("Logged In successfully.");
            router.push('/login')
        }
    }, [isSuccess]);

    useEffect(() => {
        if (isError) {
            ToastError.serialize(error);
        }
    }, [isError, error]);

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await signUp(data);
    };
    return (
        <AuthContainer redirectText='or sign in' redirectLink={'/login'}>
            {/* <div className='w-full flex flex-col lg:flex-row gap-3 pr-3 mt-8'>
               <div>
                    <label className="block  text-sm font-bold mb-2">First Name</label>
                    <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block" 
                    type="text" />
                </div>
                <div>
                    <label className="block  text-sm font-bold mb-2">Last Name</label>
                    <input className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block" 
                    type="text" />
                </div>
            </div> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mt-2'>
                    <label className="block  text-sm font-bold mb-2">Username <span className='text-red-500'>*</span></label>
                    <input
                        className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
                        type="text"
                        {...register("username", {
                            required: {
                                value: true,
                                message: "Username is required.",
                            },
                        })}
                    />
                    <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{errors?.username?.message}</span>
                </div>

                <div className="mt-2">
                    <label className="block  text-sm font-bold mb-2">Email Address <span className='text-red-500'>*</span></label>
                    <input
                        className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
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
                    <label className="block  text-sm font-bold mb-2">Password <span className='text-red-500'>*</span></label>
                    <input
                        className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
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

                <div className="mt-2">
                    <label className="block  text-sm font-bold mb-2"> Confirm Password <span className='text-red-500'>*</span></label>
                    <input
                        className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required.",
                            validate: (value) => value === password1 || "Passwords do not match.",
                        })}
                    // value={confirmPassword ? confirmPassword : ''}
                    // onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
                        {/* {passwordMatchError ? passwordMatchError : ''} */}
                        {errors?.confirmPassword?.message}
                    </span>
                </div>

                <div className="mt-4">
                    <Button
                        title={"Save"} type="submit"
                    />
                </div>
            </form>

        </AuthContainer>
    )
}

export default RegistrationForm