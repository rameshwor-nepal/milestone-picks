import { useCreateSportMutation } from '@/redux/features/other/predictionAndMatch/sportApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface PropsI {
    closeModal: () => void;
}
interface FormFields {
    name: string;
}

const SportModalForm = ({ closeModal }: PropsI) => {
    const [iconImage, setIconImage] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const [createSport] = useCreateSportMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("name", data?.name);

        if (iconImage) {
            formData.append("icon", iconImage);
        }
        await createSport(formData).unwrap()
            .then(() => {
                toast.success("Sport created successfully");
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
                                label='Name'
                                placeholder='Enter a name'
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "name is required.",
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
                <div className="flex items-center gap-5 py-4  border-t border-green-3 rounded-b">
                    <Button
                        title='Save'
                        onClick={handleSubmit(onSubmit)}
                    />
                    <Button
                        onClick={closeModal}
                        title='Cancel'
                        secondary={true}
                    />
                </div>
            </Form>
        </div>
    )
}

export default SportModalForm