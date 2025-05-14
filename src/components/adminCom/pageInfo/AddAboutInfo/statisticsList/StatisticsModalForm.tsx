import { useCreateStatsInfoMutation, useLazyFetchSingleStatsInfoQuery, useUpdateStatsInfoMutation } from '@/redux/features/other/aboutInfo/statsInfo/statsInfoApi';
import Button from '@/ui/button/Button';
import { Form, TextInput } from '@/ui/formInput/FormInput';
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
    section: string;
    number: string;
    description: string;
    order: string;
    icon: string;
}
const StatisticsModalForm = ({ closeModal, editId }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormFields>();
    const [createStat] = useCreateStatsInfoMutation();
    const [trigger, { data }] = useLazyFetchSingleStatsInfoQuery();
    const [updateFaq] = useUpdateStatsInfoMutation()

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {
        if (data) {
            setValue("section", data.section)
            setValue("number", data.number.toLocaleString())
            setValue("description", data.description)
            setValue("order", data.order.toLocaleString())
            setValue("icon", data.icon)
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (editId) {
            await updateFaq({ body: data, id: editId }).unwrap()
                .then(() => {
                    toast.success("Statistics updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createStat(data).unwrap()
                .then(() => {
                    toast.success("Statistics created successfully");
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