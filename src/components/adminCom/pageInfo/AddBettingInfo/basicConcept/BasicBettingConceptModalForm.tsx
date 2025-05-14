import { useCreateBettingConceptInfoMutation, useLazyFetchSingleBettingConceptInfoQuery, useUpdateBettingConceptInfoMutation } from '@/redux/features/other/bettingInfo/bettingConceptInfo/bettingConceptInfoApi';
import Button from '@/ui/button/Button';
import { Form, SelectInput, TextArea, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import Toggle from '@/ui/toggle/Toggle';
import { ContentType } from '@/utils/ConstantValue';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface PropsI {
    closeModal: () => void;
    editId: string | null;
}
interface FormFields {
    title: string;
    slug: string;
    concept_type: {
        label: string;
        value: string;
    };
    description: string;
    example: string;
    order: string;
    icon: string;
}

const BasicBettingConceptModalForm = ({ closeModal, editId }: PropsI) => {
    const [isActive, setIsActive] = useState<boolean>(true)
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue
    } = useForm<FormFields>();
    const [createBettingConcept] = useCreateBettingConceptInfoMutation();
    const [trigger, { data }] = useLazyFetchSingleBettingConceptInfoQuery();
    const [updateConcept] = useUpdateBettingConceptInfoMutation()

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {
        if (data) {
            const contentTy = ContentType.find((content) => content.value === data.concept_type)

            setValue("title", data.title)
            setValue("example", data.example)
            setValue("description", data.description)
            setValue("icon", data.icon)
            setValue("order", data.order.toLocaleString())
            setValue("concept_type", { value: contentTy?.value as string, label: contentTy?.label as string })
            setIsActive(data.is_active)
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const postData = {
            title: data.concept_type.label,
            description: data.description,
            example: data.example,
            concept_type: data.concept_type.value,
            icon: data.icon,
            order: data.order,
            is_active: isActive
        }
        if (editId) {
            await updateConcept({ body: postData, id: editId }).unwrap()
                .then(() => {
                    toast.success("Betting Concept updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createBettingConcept(postData).unwrap()
                .then(() => {
                    toast.success("Betting Concept added successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }

    };

    return (
        <div className='text-left'>
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
                                        message: "Concept Type is required.",
                                    },
                                }}
                                label="Concept Type"
                                name="concept_type"
                                placeholder="Select concept type"
                                options={
                                    ContentType ?
                                        ContentType.map((el) => ({
                                            value: el.value, label: el.label
                                        }))
                                        : []
                                }
                                helperText={errors?.concept_type?.message}
                            // loading={isSportFetching || isSportLoading}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextArea
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
                            <TextArea
                                label='Example'
                                placeholder='Enter a Example'
                                {...register("example", {
                                    required: {
                                        value: true,
                                        message: "Example is required.",
                                    },
                                })}
                                errorMsg={errors?.example?.message}
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
                        <Grid.Col size='sm'>
                            <TextInput
                                label='Icon'
                                placeholder='Enter a Icon eg: fa-user'
                                {...register("icon")}
                            // errorMsg={errors?.icon?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <Toggle
                                initialState={isActive}
                                onChange={() => setIsActive(!isActive)}
                                label="Is Active?"
                                disabled={false}
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

export default BasicBettingConceptModalForm