'use client'
import React from 'react'
import AuthContainer from '../container/AuthContainer'
import Button from '@/ui/button/Button'
import { useRouter } from 'next/router'
import { useResetPasswordMutation } from '@/redux/features/auth/authApi';
import { ToastError } from '@/utils/toast/ToastError';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';

interface FormFields {
  password: string;
  confirmPassword: string;
}

const ResetPasswordForm = () => {
  const router = useRouter();
  const { email, otp } = router.query;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormFields>();
  const password1 = watch('password')
  const [resetPassword, { isLoading: isResetPasswordLoading, isSuccess: isResetPasswordSuccess }] = useResetPasswordMutation();

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
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
  console.log("email", email)
  console.log("otp", otp)
  return (
    <AuthContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-2">
          <label className="block  text-sm font-bold mb-2">Password</label>
          <input
            className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
            type="password"
            {...register("password", {
              required: {
                value: true,
                message: "password is required.",
              },
            })}
          />
        </div>
        <div className="mt-2">
          <label className="block  text-sm font-bold mb-2"> Confirm Password <span className='text-red-500'>*</span></label>
          <input
            className="bg-gray-200 text-blue-1 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is required.",
              validate: (value) => value === password1 || "Passwords do not match.",
            })}
          // value={confirmPassword ? confirmPassword : ''}
          // onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className='mt-1 text-[12px] text-red-500 min-h-[18px] block'>
            {/* {passwordMatchError ? passwordMatchError : ''} */}
            {errors?.confirmPassword?.message}
          </span>
        </div>

        <div className="mt-8">
          <Button title={"Continue"} type="submit" />
        </div>
      </form>

    </AuthContainer>
  )
}

export default ResetPasswordForm