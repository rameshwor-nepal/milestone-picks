import { useCreateBettingTipsInfoMutation, useLazyFetchSingleBettingTipsInfoQuery, useUpdateBettingTipsInfoMutation } from '@/redux/features/other/bettingInfo/bettingTipsInfo/bettingTipsApi';
import Button from '@/ui/button/Button';
import { ImageUploadCard } from '@/ui/fileUpload/ImageUpload';
import { Form, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import Toggle from '@/ui/toggle/Toggle';
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
    slug: string;
    content: string;
    order: string;
}
const BettingTipsModalForm = ({ closeModal, editId }: PropsI) => {
    const [missionImage, setMissionImage] = useState<File | null>(null)
    const [isActive, setIsActive] = useState<boolean>(true)
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<FormFields>();

    const [createBettingTips] = useCreateBettingTipsInfoMutation();
    const [trigger, { data }] = useLazyFetchSingleBettingTipsInfoQuery();
    const [updateTips] = useUpdateBettingTipsInfoMutation()

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
            setValue("content", data.content)
            setValue("slug", data.slug)
            setValue("order", data.order.toLocaleString())

            getFile(data.image).then((val) => {
                setMissionImage(val);
            });
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const formData = new FormData();
        formData.append("title", data?.title);
        formData.append("content", data?.content)
        formData.append("slug", data?.slug);
        formData.append("order", data?.order);
        formData.append("is_active", String(isActive));

        if (missionImage) {
            formData.append("image", missionImage);
        }
        if (editId) {
            await updateTips({ body: formData, id: editId })
                .unwrap()
                .then(() => {
                    toast.success("Betting tips updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createBettingTips(formData)
                .unwrap()
                .then(() => {
                    toast.success("Betting tips added successfully");
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
                            <TextInput
                                label='Content'
                                placeholder='Enter a Content'
                                {...register("content", {
                                    required: {
                                        value: true,
                                        message: "Content is required.",
                                    },
                                })}
                                errorMsg={errors?.content?.message}
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
                                label='Image'
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

export default BettingTipsModalForm