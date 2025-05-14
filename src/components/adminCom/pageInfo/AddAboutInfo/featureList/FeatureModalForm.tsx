import { useCreateFeatureInfoMutation, useLazyFetchSingleFeatureInfoQuery, useUpdateFeatureInfoMutation } from '@/redux/features/other/aboutInfo/featureInfo/featureInfoApi';
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
    title: string;
    description: string;
    icon: string;
    order: string;
}
const FeatureModalForm = ({ closeModal, editId }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormFields>();
    const [createFeature] = useCreateFeatureInfoMutation()
    const [trigger, { data }] = useLazyFetchSingleFeatureInfoQuery();
    const [updateFeature] = useUpdateFeatureInfoMutation()

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {

        if (data) {
            setValue("title", data.title)
            setValue("description", data.description)
            setValue("icon", data.icon)
            setValue("order", data.order.toLocaleString())
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (editId) {
            await updateFeature({ body: data, id: editId }).unwrap()
                .then(() => {
                    toast.success("Feature content updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createFeature(data).unwrap()
                .then(() => {
                    toast.success("Feature content added successfully");
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
                                label='Title'
                                placeholder='Enter a Title'
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Title is required.",
                                    },
                                })}
                                errorMsg={errors?.title?.message}
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
                                label='Order'
                                placeholder='Enter a order'
                                {...register("order")}
                                errorMsg={errors?.order?.message}
                                defaultValue={0}
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

export default FeatureModalForm