import Button from '@/ui/button/Button';
import { Form, PasswordInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface PropsI {
    closeForm: () => void;
}

interface FormFields {
    current_password: string;
    new_password: string;
    confirm_password: string | null;
}
const UserPasswordChange = ({ closeForm }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
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
        <div>
            <div className='bg-slate-50 rounded-md p-2 my-3'>
                <Form>
                    <Grid>
                        <Grid.Row>
                            <Grid.Col size='lg'>
                                <PasswordInput
                                    theme='light'
                                    label='Current Password'
                                    placeholder='Enter a Current Password'
                                    {...register("current_password", {
                                        required: {
                                            value: true,
                                            message: "Current Password is required.",
                                        },
                                    })}
                                    errorMsg={errors?.current_password?.message}
                                />

                            </Grid.Col>
                            <Grid.Col size='lg'>
                                <PasswordInput
                                    theme='light'
                                    label='New Password'
                                    placeholder='Enter a New Password'
                                    {...register("current_password", {
                                        required: {
                                            value: true,
                                            message: "current_password is required.",
                                        },
                                    })}
                                    errorMsg={errors?.current_password?.message}
                                />
                            </Grid.Col>

                            <Grid.Col size='lg'>
                                <PasswordInput
                                    theme='light'
                                    label='Confirm Password'
                                    placeholder='Enter a Confirm Password'
                                    {...register("confirm_password", {
                                        required: {
                                            value: true,
                                            message: "confirm_password is required.",
                                        },
                                    })}
                                    errorMsg={errors?.confirm_password?.message}
                                />
                            </Grid.Col>

                        </Grid.Row>
                    </Grid>
                    <div className="flex items-center gap-5 py-4 md:py-5 rounded-b">
                        <Button
                            title='Update'
                            onClick={handleSubmit(onSubmit)}

                        />
                        <button
                            className='bg-slate-50 px-3 py-2 border-2 rounded-md border-navy-light/30 text-navy w-full hover:bg-slate-50/50'
                            onClick={closeForm}
                        >
                            Cancel
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default UserPasswordChange