'use client'
import { useCreateHeroSectionMutation } from '@/redux/features/other/generalInfo/generalInfoApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload'
import { Form, TextArea, TextInput } from '@/ui/formInput/FormInput'
import Grid from '@/ui/grid/Grid'
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface PropsI {
    closeModal: () => void;
}

interface FormFields {
    title: string;
    subTitle: string;

}

const HeroSectionAdditionModalForm = ({ closeModal }: PropsI) => {
    const [heroImage, setHeroImage] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const [createHeroSection] = useCreateHeroSectionMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("subtitle", data.subTitle);

        if (heroImage) {
            formData.append("image", heroImage);
        }
        await createHeroSection(formData).unwrap()
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
                                label='Title'
                                placeholder='Enter a title'
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
                            <TextArea
                                label='Sub Title'
                                placeholder='Enter a sub title'
                                {...register("subTitle", {
                                    required: {
                                        value: true,
                                        message: "Sub title is required.",
                                    },
                                })}
                                errorMsg={errors?.subTitle?.message}
                            />

                        </Grid.Col>
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='heroSectionImage'
                                onChange={(val) => setHeroImage(val)}
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

export default HeroSectionAdditionModalForm