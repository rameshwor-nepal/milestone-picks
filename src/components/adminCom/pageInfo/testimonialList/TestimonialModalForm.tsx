import { useCreateTestimonialsContentMutation, useLazyFetchSingleTestimonialsContentQuery, useUpdateTestimonialsContentMutation } from '@/redux/features/other/testimonials/testimonialsApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { TextInput, TextArea, Form } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { convertUrlToImageData } from '@/utils/fileUpload/UploadFile';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
interface PropsI {
    closeModal: () => void;
    editId: string | null;
}
interface FormFields {
    name: string;
    role: string;
    description: string;
    rating: string;

}
const TestimonialModalForm = ({ closeModal, editId }: PropsI) => {
    const [testimonialImage, setTestimonialImage] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormFields>();

    const [createTestimonial] = useCreateTestimonialsContentMutation();
    const [trigger, { data }] = useLazyFetchSingleTestimonialsContentQuery();
    const [updateTestimonial] = useUpdateTestimonialsContentMutation()

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {
        const getFile = async (url: string) => {
            const myFile = await convertUrlToImageData(url);

            return myFile;
        };
        if (data) {
            setValue("name", data.name)
            setValue("role", data.role)
            setValue("description", data.description)
            setValue("rating", data.star_rating.toLocaleString())

            getFile(data.image).then((val) => {
                setTestimonialImage(val);
            });
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("name", data?.name);
        formData.append("role", data?.role);
        formData.append("description", data?.description);
        formData.append("star_rating", data?.rating);

        if (testimonialImage) {
            formData.append("image", testimonialImage);
        }
        if (editId) {
            await updateTestimonial({ body: formData, id: editId as string }).unwrap()
                .then(() => {
                    toast.success("Testinomials updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createTestimonial(formData).unwrap()
                .then(() => {
                    toast.success("Testinomials added successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }

    };
    console.log("data", data)
    return (
        <>
            <Form>
                <Grid>
                    <Grid.Row>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Name'
                                placeholder='Enter a name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required.",
                                    },
                                })}
                                errorMsg={errors?.name?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Role'
                                placeholder='Enter a role'
                                {...register("role", {
                                    required: {
                                        value: true,
                                        message: "Role is required.",
                                    },
                                })}
                                errorMsg={errors?.role?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextArea
                                label='Description'
                                placeholder='Enter a description'
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
                                label='Rating'
                                placeholder='Enter a rating'
                                {...register("rating", {
                                    required: {
                                        value: true,
                                        message: "Rating is required.",
                                    },
                                })}
                                errorMsg={errors?.rating?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='testimonialsImage'
                                onChange={(val) => setTestimonialImage(val)}
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
        </>
    )
}

export default TestimonialModalForm