'use client'
import React from 'react'
import AuthContainer from '../container/AuthContainer'
import Button from '@/ui/button/Button'
// import { useRouter } from 'next/navigation';
// import { useResetPasswordMutation } from '@/redux/features/auth/authApi';
// import { ToastError } from '@/utils/toast/ToastError';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, PasswordInput } from '@/ui/formInput/FormInput';
import Grid from '@/ui/grid/Grid';
// import { toast } from 'react-toastify';

interface FormFields {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm = () => {
  // const router = useRouter();
  // const { email, otp } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormFields>();
  const password1 = watch('password')
  // const [resetPassword, { isLoading: isResetPasswordLoading, isSuccess: isResetPasswordSuccess }] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log("data", data)
    // await resetPassword({
    //   email: email,
    //   otp: otp,
    //   new_password: data?.password
    // })
    //   .unwrap()
    //   .then(() => {
    //     toast.success("Password reset successfully")
    //   })
    //   .catch((error) => {
    //     ToastError.serialize(error);
    //   })
  };
  // console.log("email", email)
  // console.log("otp", otp)
  return (
    <AuthContainer>
      <Form>
        <Grid>
          <Grid.Row>

            <Grid.Col size='lg'>
              <PasswordInput
                label='Password'
                placeholder='Enter a password'
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required.",
                  },
                })}
                errorMsg={errors?.password?.message}
                required
              />
            </Grid.Col>
            <Grid.Col size='lg'>
              <PasswordInput
                label='Confirm Password'
                placeholder='Re-enter a password'
                {...register("confirmPassword", {
                  required: "Confirm Password is required.",
                  validate: (value) => value === password1 || "Passwords do not match.",
                })}
                errorMsg={errors?.confirmPassword?.message}
              />
            </Grid.Col>

          </Grid.Row>
        </Grid>
        <div className='mt-5'>
          <Button
            title='Save'
            onClick={handleSubmit(onSubmit)}
            secondary={true}
          />
        </div>

      </Form>

    </AuthContainer>
  )
}

export default ResetPasswordForm