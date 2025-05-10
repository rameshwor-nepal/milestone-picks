import { useCreateStatsInfoMutation } from '@/redux/features/other/aboutInfo/statsInfo/statsInfoApi';
import Button from '@/ui/button/Button';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
interface PropsI {
    closeModal: () => void;
}
interface FormFields {
    section: string;
    number: string;
    description: string;
    order: string;
    icon: string;
}
const StatisticsModalForm = ({ closeModal }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const [createStat] = useCreateStatsInfoMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        await createStat(data).unwrap()
            .then(() => {
                toast.success("Content for Hero section created successfully");
                closeModal()
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };

    return (
        <div>
            <Form>
                <Grid>
                    <Grid.Row>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Section'
                                placeholder='Enter a Section'
                                {...register("section", {
                                    required: {
                                        value: true,
                                        message: "Section is required.",
                                    },
                                })}
                                errorMsg={errors?.section?.message}
                                defaultValue={"top"}
                                disabled
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Description'
                                placeholder='Enter a Description'
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: "Description is required.",
                                    },
                                })}
                                errorMsg={errors?.description?.message}
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Count'
                                placeholder='Enter a Count'
                                {...register("number", {
                                    required: {
                                        value: true,
                                        message: "Count is required.",
                                    },
                                })}
                                errorMsg={errors?.number?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Icon'
                                placeholder='Enter a Icon eg: fa-user'
                                {...register("icon", {
                                    required: {
                                        value: true,
                                        message: "Icon is required.",
                                    },
                                })}
                                errorMsg={errors?.icon?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Order'
                                placeholder='Enter a order'
                                {...register("order")}
                                errorMsg={errors?.order?.message}
                                defaultValue={1}
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

export default StatisticsModalForm