import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
interface PropsI {
    closeModal: () => void;
}
interface FormFields {
    section: string;
    number: string;
    description: string;
    order: string;
}
const StatisticsModalForm = ({ closeModal }: PropsI) => {
    const [featureIcon, setFeatureIcon] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("section", data?.section);
        formData.append("description", data?.description);
        formData.append("number", data?.number);

        if (featureIcon) {
            formData.append("icon", featureIcon);
        }
        //  await createSportCategory(formData).unwrap()
        //      .then(() => {
        //          toast.success("Content for Hero section created successfully");
        //          closeModal()
        //      })
        //      .catch((error) => {
        //          ToastError.serialize(error);
        //      })
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
                                label='Order'
                                placeholder='Enter a order'
                                {...register("order")}
                                errorMsg={errors?.order?.message}

                            />
                        </Grid.Col>
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='Icon'
                                onChange={(val) => setFeatureIcon(val)}
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