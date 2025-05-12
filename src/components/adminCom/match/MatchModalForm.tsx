import { useCreateMatchMutation, useLazyFetchSingleMatchQuery, useUpdateMatchMutation } from '@/redux/features/other/predictionAndMatch/matchApi';
import { useFetchSportsQuery } from '@/redux/features/other/predictionAndMatch/sportApi';
import Button from '@/ui/button/Button';
import { DateInput, Form, SelectInput, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface PropsI {
    closeModal: () => void;
    editId: string | null;
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
const MatchModalForm = ({ closeModal, editId }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue,
    } = useForm<FormFields>();

    const [createMatch] = useCreateMatchMutation();
    const { data: sportData, isLoading: isSportLoading, isFetching: isSportFetching } = useFetchSportsQuery({ search: '', page: 1, page_size: 10 });
    const [trigger, { data }] = useLazyFetchSingleMatchQuery();
    const [updateMatch] = useUpdateMatchMutation()

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {
        if (data) {
            setValue("team_1", data.team_1)
            setValue("team_2", data.team_2)
            setValue("location", data.location)
            setValue("match_date", data.match_date.split("T")[0])
            setValue("sport", { value: data.sport.id, label: data.sport.name })
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const postData = {
            sport_id: data?.sport.value,
            team_1: data?.team_1,
            team_2: data?.team_2,
            location: data?.location,
            match_date: data?.match_date
        }
        if (editId) {
            await updateMatch({ body: postData, id: editId as string }).unwrap()
                .then(() => {
                    toast.success("Match updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createMatch(postData).unwrap()
                .then(() => {
                    toast.success("Match created successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }

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