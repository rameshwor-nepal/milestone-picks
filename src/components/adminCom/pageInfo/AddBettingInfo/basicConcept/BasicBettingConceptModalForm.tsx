import { useCreateBettingConceptInfoMutation } from '@/redux/features/other/bettingInfo/bettingConceptInfo/bettingConceptInfoApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, SelectInput, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import Toggle from '@/ui/toggle/Toggle';
import { ContentType } from '@/utils/ConstantValue';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface PropsI {
    closeModal: () => void;
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
}

const BasicBettingConceptModalForm = ({ closeModal }: PropsI) => {
    const [missionImage, setMissionImage] = useState<File | null>(null)
    const [isActive, setIsActive] = useState<boolean>(true)
    const {
        register,
        handleSubmit,
        formState: { errors },
        control
    } = useForm<FormFields>();
    const [createBettingConcept] = useCreateBettingConceptInfoMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description)
        formData.append("example", data?.example)
        formData.append("concept_type", data?.concept_type?.value)
        formData.append("slug", data?.slug);
        formData.append("order", data?.order);
        formData.append("is_active", String(isActive));

        if (missionImage) {
            formData.append("icon", missionImage);
        }
        await createBettingConcept(formData).unwrap()
            .then(() => {
                toast.success("Betting Concept added successfully");
                closeModal()
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    return (
        <div className='text-left'>
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
                                label='Slug'
                                placeholder='Enter a Slug'
                                {...register("slug")}
                                errorMsg={errors?.slug?.message}
                            />
                        </Grid.Col>
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

                            />
                        </Grid.Col>
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='Image'
                                onChange={(val) => setMissionImage(val)}
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