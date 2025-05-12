import Button from '@/ui/button/Button';
import { SelectInput, TextInput, Form, TextArea } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
import { PredictionResultType, PredictionType } from '@/utils/ConstantValue';
import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreatePredictionMutation, useLazyFetchSinglePredictionsQuery, useUpdatePredictionMutation } from '@/redux/features/other/predictionAndMatch/predictionApi';
import { toast } from 'react-toastify';
import { ToastError } from '@/utils/toast/ToastError';

interface PropsI {
    closeModal: () => void;
    matchInfo: MatchesI;
    editId: string | null;
}

interface FormFields {
    prediction_type: {
        label: string;
        value: string;
    };
    predicted_outcome: string;
    result: {
        label: string;
        value: string;
    };
    location: string | null;
    match_date: string;
    our_prediction: string;
    confidence_level: string;
}
const PredictionModalForm = ({ closeModal, matchInfo, editId }: PropsI) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
        setValue
    } = useForm<FormFields>();
    setValue("result", {
        value: "PENDING",
        label: "Pending"
    })

    const [createPredict] = useCreatePredictionMutation();
    const [updatePrediction] = useUpdatePredictionMutation();
    const [trigger, { data }] = useLazyFetchSinglePredictionsQuery();

    useEffect(() => {
        if (editId) {
            trigger(editId);
        }
    }, [editId, trigger])

    useEffect(() => {
        if (data) {
            const prediction_ty = PredictionType.find((el) => el.value === data.prediction_type)
            const Presult = PredictionResultType.find((el) => el.value === data.result)

            setValue("predicted_outcome", data.predicted_outcome)
            setValue("our_prediction", data.our_prediction)
            setValue("predicted_outcome", data.predicted_outcome)
            setValue("prediction_type", { value: prediction_ty?.value as string, label: prediction_ty?.label as string })
            setValue("result", { value: Presult?.value as string, label: Presult?.label as string })
        }
    }, [data, setValue])

    const onSubmit: SubmitHandler<FormFields> = async (data) => {
        const postData = {
            user: '1',
            match: matchInfo?.id,
            prediction_type: data?.prediction_type.value,
            predicted_outcome: data?.predicted_outcome,
            result: data?.result.value,
            our_prediction: data.our_prediction,
            confidence_level: '5'
        }

        if (editId) {
            await updatePrediction({ body: postData, id: editId as string })
                .unwrap()
                .then(() => {
                    toast.success("Prediction updated successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }
        else {
            await createPredict(postData)
                .unwrap()
                .then(() => {
                    toast.success("Prediction created successfully");
                    closeModal()
                })
                .catch((error) => {
                    ToastError.serialize(error);
                })
        }

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
                            <SelectInput
                                required
                                control={control}
                                rules={{
                                    required: {
                                        value: true,
                                        message: "Result is required.",
                                    },
                                }}
                                label="Result"
                                name="result"
                                placeholder="Select Result"
                                options={
                                    PredictionResultType && PredictionResultType.length > 0 ?
                                        PredictionResultType.map((el) => ({
                                            value: el.value, label: el.label
                                        }))
                                        : []
                                }
                                helperText={errors?.result?.message}
                                disabled={!editId}
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