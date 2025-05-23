import { useCreateSportCategoryMutation } from '@/redux/features/other/sportCategory/sportCategoryApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
interface FormFields {
    title: string;
    name: string;

}
interface PropsI {
    closeModal: () => void;
}
const SportCategoryModalForm = ({ closeModal }: PropsI) => {
    const [iconImage, setIconImage] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();

    const [createSportCategory] = useCreateSportCategoryMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("title", data?.name);
        formData.append("subtitle", data?.title);

        if (iconImage) {
            formData.append("icon", iconImage);
        }
        await createSportCategory(formData).unwrap()
            .then(() => {
                toast.success("Content for Hero section created successfully");
                closeModal()
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    return (
        <>
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
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='sportIcon'
                                onChange={(val) => setIconImage(val)}
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

export default SportCategoryModalForm