import { useCreateMatchMutation } from '@/redux/features/other/predictionAndMatch/matchApi';
import { useFetchSportsQuery } from '@/redux/features/other/predictionAndMatch/sportApi';
import Button from '@/ui/button/Button';
import { DateInput, Form, SelectInput, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface PropsI {
    closeModal: () => void;
}
interface FormFields {
    sport: {
        label: string;
        value: string;
    };
    team_1: string;
    team_2: string;
    location: string | null;
    match_date: string;
}
const MatchModalForm = ({ closeModal }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormFields>();

    const [createMatch] = useCreateMatchMutation();
    const { data: sportData, isLoading: isSportLoading, isFetching: isSportFetching } = useFetchSportsQuery({ search: '', page: 1, page_size: 10 });

    const onSubmit: SubmitHandler<FormFields> = async (data) => {

        const postData = {
            sport_id: data?.sport.value,
            team_1: data?.team_1,
            team_2: data?.team_2,
            location: data?.location,
            match_date: data?.match_date
        }
        await createMatch(postData).unwrap()
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
                            <SelectInput
                                required
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Sport is required.",
                                    },
                                }}
                                label="Sport"
                                name="sport"
                                placeholder="Select Sport"
                                options={
                                    sportData && sportData.results.length > 0 ?
                                        sportData.results.map((el) => ({
                                            value: el.id, label: el.name
                                        }))
                                        : []
                                }
                                helperText={errors?.sport?.message}
                                loading={isSportFetching || isSportLoading}
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
                                required
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
                                required
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Location'
                                placeholder='Enter a location'
                                {...register("location")}
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
                                required
                            />
                        </Grid.Col>

                    </Grid.Row>
                </Grid>
                <div className="flex items-center gap-5 p-4 md:p-5 border-t border-green-3 rounded-b">
                    <Button
                        title='Save'
                        onClick={handleSubmit(onSubmit)}
                        secondary={true}
                    />
                    <Button
                        onClick={closeModal}
                        title='Cancel'

                    />
                </div>
            </Form>
        </div>
    )
}

export default MatchModalForm