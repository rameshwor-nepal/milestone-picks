import { useCreateMissionInfoMutation, useLazyFetchSingleMissionInfoQuery, useUpdateMissionInfoMutation } from '@/redux/features/other/aboutInfo/missionInfo/missionInfoApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { convertUrlToImageData } from '@/utils/fileUpload/UploadFile';
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
    description: string;
    order: string;
}
const MissionModalForm = ({ closeModal, editId }: PropsI) => {
    const [missionImage, setMissionImage] = useState<File | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormFields>();
    const [addMission] = useCreateMissionInfoMutation();
    const [trigger, { data }] = useLazyFetchSingleMissionInfoQuery();
    const [updateMission] = useUpdateMissionInfoMutation()

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
            setValue("title", data.title)
            setValue("description", data.description)
            setValue("order", data.order.toLocaleString())

            getFile(data.image).then((val) => {
                setMissionImage(val);
            });
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);

        if (missionImage) {
            formData.append("image", missionImage);
        }

        if (editId) {
            await updateMission({ body: formData, id: editId }).unwrap()
                .then(() => {
                    toast.success("Mission content updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await addMission(formData).unwrap()
                .then(() => {
                    toast.success("Mission content added successfully");
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

                            />
                        </Grid.Col>
                        <Grid.Col size='sm'>
                            <ImageUploadCard
                                name='Image'
                                onChange={(val) => setMissionImage(val)}
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

export default MissionModalForm