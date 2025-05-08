import Button from '@/ui/button/Button';
import { SelectInput, TextInput, Form, TextArea } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { PredictionType } from '@/utils/ConstantValue';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreatePredictionMutation } from '@/redux/features/other/predictionAndMatch/predictionApi';
import { toast } from 'react-toastify';
import { ToastError } from '@/utils/toast/ToastError';

interface PropsI {
    closeModal: () => void;
    matchInfo: MatchesI;
}
interface FormFields {
    prediction_type: {
        label: string;
        value: string;
    };
    predicted_outcome: string;
    result: string;
    location: string | null;
    match_date: string;
    our_prediction: string;
    confidence_level: string;
}
const PredictionModalForm = ({ closeModal, matchInfo }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm<FormFields>();

    const [createPredict] = useCreatePredictionMutation();
    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const postData = {
            user: '1',
            match: matchInfo?.id,
            prediction_type: data?.prediction_type.value,
            predicted_outcome: data?.predicted_outcome,
            result: data?.result,
            our_prediction: data.our_prediction,
            confidence_level: data?.confidence_level
        }
        await createPredict(postData)
            .unwrap()
            .then(() => {
                toast.success("Prediction created successfully");
                closeModal()
            })
            .catch((error) => {
                ToastError.serialize(error);
            })
    };
    return (
        <div>
            <div className='flex flex-wrap px-3 py-2 items-center justify-between'>
                <p className='text-slate-200'>
                    Team 1:
                    <span className='font-semibold text-white'> {matchInfo.team_1}</span>
                </p>
                <p className='text-slate-200'>
                    Team 2:
                    <span className='font-semibold text-white'> {matchInfo.team_2}</span>
                </p>
            </div>

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
                                        message: "Prediction_type is required.",
                                    },
                                }}
                                label="Prediction Type"
                                name="prediction_type"
                                placeholder="Select Prediction type"
                                options={
                                    PredictionType && PredictionType.length > 0 ?
                                        PredictionType.map((el) => ({
                                            value: el.value, label: el.label
                                        }))
                                        : []
                                }
                                helperText={errors?.prediction_type?.message}
                            />
                        </Grid.Col>
                        <Grid.Col size='lg'>
                            <TextArea
                                label='Prediction Outcome'
                                placeholder='Enter a Prediction Outcome'
                                {...register("predicted_outcome", {
                                    required: {
                                        value: true,
                                        message: "Prediction Outcome is required.",
                                    },
                                })}
                                errorMsg={errors?.predicted_outcome?.message}
                                required
                                maxLength={300}
                            />

                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Our Prediction'
                                placeholder='Enter a Prediction'
                                {...register("our_prediction", {
                                    required: {
                                        value: true,
                                        message: "Prediction is required.",
                                    },
                                })}
                                errorMsg={errors?.our_prediction?.message}
                            // required
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Result'
                                placeholder='Enter a Result'
                                {...register("result", {
                                    required: {
                                        value: true,
                                        message: "Result is required.",
                                    },
                                })}
                                errorMsg={errors?.result?.message}
                                defaultValue={"PENDING"}
                                disabled
                            />
                        </Grid.Col>

                        <Grid.Col size='lg'>
                            <TextInput
                                label='Confidence Level'
                                placeholder='Enter a Confidence Level'
                                {...register("confidence_level")}
                                errorMsg={errors?.confidence_level?.message}
                                defaultValue={"5"}
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

export default PredictionModalForm