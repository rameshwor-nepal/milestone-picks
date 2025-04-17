'use client'
import Button from '@/ui/button/Button';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiKey2Line } from 'react-icons/ri';
import UserPasswordChange from './UserPasswordChange';

interface FormFields {
    full_name: string;
    email: string;
    user_name: string | null;
    match_date: string;
}
const UserProfile = () => {
    const [showPasswordForm, setShowPasswordForm] = useState<boolean>(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        // const postData = {
        //     sport: data?.sport.value,
        //     team_1: data?.team_1,
        //     team_2: data?.team_2,
        //     user_name: data?.user_name,
        //     match_date: data?.match_date
        // }
        // await createMatch(postData).unwrap()
        //     .then(() => {
        //         toast.success("Match created successfully");
        //         closeModal()
        //     })
        //     .catch((error) => {
        //         ToastError.serialize(error);
        //     })
        console.log("data from form", data)
    };
    return (
        <section className='py-7'>
            <h2 className="text-2xl pl-4 font-bold text-navy ">Your Profile</h2>
            {/* profile section */}
            <div className='bg-slate-50 rounded-md p-2 my-3'>
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Col size='lg'>
                                <TextInput
                                    theme='light'
                                    label='Full name'
                                    placeholder='Enter a full name'
                                    {...register("full_name", {
                                        required: {
                                            value: true,
                                            message: "Full name is required.",
                                        },
                                    })}
                                    errorMsg={errors?.full_name?.message}
                                />

                            </Grid.Col>
                            <Grid.Col size='lg'>
                                <TextInput
                                    theme='light'
                                    label='Email'
                                    placeholder='Enter a email'
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: "email is required.",
                                        },
                                    })}
                                    errorMsg={errors?.email?.message}
                                />
                            </Grid.Col>

                            <Grid.Col size='lg'>
                                <TextInput
                                    theme='light'
                                    label='Username'
                                    placeholder='Enter a user name'
                                    {...register("user_name")}
                                    errorMsg={errors?.user_name?.message}
                                />
                            </Grid.Col>

                        </Grid.Row>
                    </Grid>
                    <div className="py-4">
                        <Button
                            title='Update'
                            onClick={handleSubmit(onSubmit)}

                        />
                    </div>
                </Form>
            </div>

            {/* security section */}
            <div>
                <h2 className="text-2xl pl-4 font-bold text-navy mt-5 pt-3 border-t-2 border-gold-light">Security</h2>
                <div className='my-3'>
                    {
                        !showPasswordForm ? (
                            <button
                                className='bg-slate-50 px-3 py-2 border-2 rounded-md border-navy-light/30 text-navy w-full hover:bg-slate-50/50'
                                onClick={() => setShowPasswordForm(true)}
                            >
                                <span className='inline-flex mr-2'> <RiKey2Line size={20} /></span>   Change Password
                            </button>
                        ) : (
                            <UserPasswordChange
                                closeForm={() => setShowPasswordForm(false)}
                            />
                        )
                    }
                </div>

            </div>

        </section>
    )
}

export default UserProfile