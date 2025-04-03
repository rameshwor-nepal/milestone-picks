import { useCreateMatchMutation } from '@/redux/features/other/predictionAndMatch/matchApi';
import Button from '@/ui/button/Button';
import { DateInput, Form, TextArea, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface PropsI {
    closeModal: () => void;
}
interface FormFields {
    sports: string;
    team_1: string;
    team_2: string;
    location: string;
    match_date: string;
}
const MatchModalForm = ({ closeModal }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const [createMatch] = useCreateMatchMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        await createMatch(data).unwrap()
            .then(() => {
                toast.success("Match created successfully");
                closeModal()
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
        console.log("data from form", data)
    };
    return (
        <div>
            <Form>
                <Grid>
                    <Grid.Row>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Sport'
                                placeholder='Enter a sport'
                                {...register("sports", {
                                    required: {
                                        value: true,
                                        message: "Sport is required.",
                                    },
                                })}
                                errorMsg={errors?.sports?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Team 1'
                                placeholder='Enter a team 1'
                                {...register("team_1", {
                                    required: {
                                        value: true,
                                        message: "Team 1 is required.",
                                    },
                                })}
                                errorMsg={errors?.team_1?.message}
                            />

                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Team 2'
                                placeholder='Enter a team 2'
                                {...register("team_2", {
                                    required: {
                                        value: true,
                                        message: "Team 2 is required.",
                                    },
                                })}
                                errorMsg={errors?.team_2?.message}
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Location'
                                placeholder='Enter a location'
                                {...register("location", {
                                    required: {
                                        value: true,
                                        message: "Location is required.",
                                    },
                                })}
                                errorMsg={errors?.location?.message}
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <DateInput
                                label='Date'
                                placeholder='Enter a Date'
                                {...register("match_date", {
                                    required: {
                                        value: true,
                                        message: "Match date is required.",
                                    },
                                })}
                                errorMsg={errors?.match_date?.message}
                            />
                        </Grid.Col>

                    </Grid.Row>
                </Grid>
                <div className="flex items-center gap-5 p-4 md:p-5 border-t border-green-3 rounded-b">
                    <Button
                        title='Save'
                        onClick={handleSubmit(onSubmit)}

                    />
                    <Button
                        onClick={closeModal}
                        title='Cancel'
                        secondary={true}
                    />
                </div>
            </Form>
        </div>
    )
}

export default MatchModalForm