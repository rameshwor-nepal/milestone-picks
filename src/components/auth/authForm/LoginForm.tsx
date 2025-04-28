'use client'
import Button from '@/ui/button/Button'
import React, { useEffect, useState } from 'react'
import AuthContainer from '../container/AuthContainer'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { ToastError } from '@/utils/toast/ToastError';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { Form, PasswordInput, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';

interface FormFields {
    email: string;
    password: string;
}

const LoginForm = () => {
    const [visibility, setVisibility] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const router = useRouter();

    const [login, { isError, error, isSuccess }] = useLoginMutation()

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
        <AuthContainer redirectLink={'/signup'}>
            <Form>
                <Grid>
                    <Grid.Row>
                        <Grid.Col size={"lg"}>
                            <TextInput
                                label='Email'
                                placeholder='Enter a email'
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required.",
                                    },
                                })}
                                errorMsg={errors?.email?.message}
                                required
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <PasswordInput
                                label='Password'
                                placeholder='Enter a password'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required.",
                                    },
                                })}
                                errorMsg={errors?.password?.message}
                                required
                                forgetPasswordLink
                            />
                        </Grid.Col>
                    </Grid.Row>
                </Grid>
                <div className='mt-5'>
                    <Button
                        title='Save'
                        onClick={handleSubmit(onSubmit)}
                        secondary={true}
                    />
                </div>
            </Form>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2 text-left">
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
                    <span
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                        onClick={() => setVisibility(!visibility)}
                    >
                        {visibility ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                    </span>
                    <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>{errors?.password?.message}</span>

                </div>

                <div className="mt-4">
                    <Button title={"Save"} type="submit" secondary />
                </div>
            </form> */}

        </AuthContainer>
    )
}

export default LoginForm