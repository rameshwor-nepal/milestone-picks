import { useCreateFaqContentMutation } from '@/redux/features/other/faq/faqContentApi';
import Button from '@/ui/button/Button';
import { Form, TextArea, TextInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import Toggle from '@/ui/toggle/Toggle';
import { ToastError } from '@/utils/toast/ToastError';
import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormFields {
    main_heading: string;
    title: string;
    title_description: string;
    order: string | null;
    is_active: string;
    category: string | null;

}
interface PropsI {
    closeModal: () => void;
}

const FaqModalForm = ({ closeModal }: PropsI) => {
    const [isActive, setIsActive] = useState<boolean>(true)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormFields>();
    const [createFaq] = useCreateFaqContentMutation();

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        if (data) {
            await createFaq({
                ...data,
                is_active: isActive,
                order: data.order === "" ? null : data.order,
                category: data.category === "" ? null : data.category,
            }).unwrap()
                .then(() => {
                    toast.success("FAQ created successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
    };
    return (
        <>
            <Form>
                <Grid>
                    <Grid.Row>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Question'
                                placeholder='Enter a Question'
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: "Question is required.",
                                    },
                                })}
                                errorMsg={errors?.title?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Main Heading'
                                placeholder='Enter a Main heading'
                                {...register("main_heading", {
                                    required: {
                                        value: true,
                                        message: "main_heading is required.",
                                    },
                                })}
                                errorMsg={errors?.main_heading?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextArea
                                label='Answer'
                                placeholder='Enter a answer'
                                {...register("title_description", {
                                    required: {
                                        value: true,
                                        message: "Answer is required.",
                                    },
                                })}
                                errorMsg={errors?.title_description?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Order'
                                // placeholder='Enter a order'
                                {...register("order")}
                                errorMsg={errors?.order?.message}
                                disabled={true}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextInput
                                label='Category'
                                // placeholder='Enter a category'
                                {...register("category")}
                                errorMsg={errors?.category?.message}
                                disabled={true}
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
                    />
                    <Button
                        onClick={closeModal}
                        title='Cancel'
                        secondary={true}
                    />
                </div>
            </Form>
        </>
    )
}

export default FaqModalForm