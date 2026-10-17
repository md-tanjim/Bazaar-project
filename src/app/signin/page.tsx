'use client';
import { authClient, useSession } from '@/lib/auth-client';
import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { GoEye, GoEyeClosed } from 'react-icons/go';
import { toast } from 'react-toastify';

const SignInPage = () => {


  const [showPassword, setShowPassword] = useState(false);
  const { refetch } = useSession()
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as { email: string, password: string }

    const { data, error } = await authClient.signIn.email({
      ...user,
      
    })
    if (data) {
      console.log(data)
      toast.success("সফলভাবে সাইন ইন হয়েছে! আপনাকে স্বাগতম।");
      await refetch();
      router.push("/");
    }
    else {
      toast.error("ইমেল অথবা পাসওয়ার্ডটি সঠিক নয়।");
    }


  }

  const handleGoogleSignIn = async()=>{
  const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  const handleGithubSignIn = async()=>{
  const data = await authClient.signIn.social({
    provider: "github",
  });
  }

  return (
    <div className='min-h-200 mt-20'>

      <div className="mb-1 text-center ">
        <h2 className="text-xl font-bold text-gray-900">
          সাইন ইন
        </h2>
        <p className="my-3 text-lg text-gray-500">
          বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
        </p>
      </div>
      <Form
        className="mx-auto flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-[#DCE5DC] bg-[#FAFCFA] p-5 sm:p-6"
        onSubmit={onSubmit}
      >




        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "সঠিক ইমেইল ঠিকানা লিখুন";
            }
            return null;
          }}
        >
          <Label className="text-sm text-gray-800">ইমেইল</Label>
          <Input
            placeholder="আপনার ইমেইল লিখুন"
            className="h-10 w-full rounded-lg border border-[#DCE5DC] bg-transparent px-3 outline-none focus:border-[#16A34A]"
          />
          <FieldError />
        </TextField>



        <TextField
          isRequired
          name="password"
          type={showPassword ? "text" : "password"}
        >
          <Label className="text-sm text-gray-800">
            পাসওয়ার্ড
          </Label>

          <div className="relative">
            <Input
              name="password"
              placeholder="পাসওয়ার্ড লিখুন"
              className="h-10 w-full rounded-lg border border-[#DCE5DC] bg-transparent px-3 pr-10 outline-none focus:border-[#16A34A]"
            />

            <button
              type="submit"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-800"
              aria-label={
                showPassword
                  ? "পাসওয়ার্ড লুকান"
                  : "পাসওয়ার্ড দেখান"
              }
            >
              {showPassword ? (
                <GoEyeClosed size={18} />
              ) : (
                <GoEye size={18} />
              )}
            </button>
          </div>

          <FieldError />
        </TextField>


        <Button
          type="submit"
          className="mt-1 h-10 w-full rounded-lg border-none bg-[#16A34A] font-semibold text-white hover:bg-[#15803D]"
        >
          সাইন ইন
        </Button>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-[#DCE5DC]" />
          <span className="text-xs text-gray-500">অথবা</span>
          <div className="h-px flex-1 bg-[#DCE5DC]" />
        </div>

        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2">
          <Button
           
            variant="secondary"
            //   onClick={handleGoogleSignIn}
            className="flex h-10 min-w-0 items-center justify-center gap-1 rounded-lg border border-[#DCE5DC] bg-transparent px-2 text-xs text-gray-900"
          onClick={handleGoogleSignIn}
          >
            <span className=''> <FcGoogle className='h-7 w-7' /> </span>

            <span className="text-sm">Google দিয়ে সাইন আপ</span>
          </Button>

          <Button
            type="button"
            variant="secondary"
            //   onClick={handleGithubSignIn}
            className="flex h-10 min-w-0 items-center justify-center gap-1 rounded-lg border border-[#DCE5DC] bg-transparent px-2 text-xs text-gray-900"
          onClick={handleGithubSignIn}
          >
            <span><FaGithub className='h-7 w-7' /></span>
            <span className="text-sm">GitHub দিয়ে সাইন আপ</span>
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600">
          অ্যাকাউন্ট আছে?{" "}
          <Link href={'/signin'}
            className="font-medium text-[#16A34A] hover:underline">
            সাইন ইন করুন
          </Link>
        </p>
      </Form>


      <div className="mt-5 text-center">

        <Link href={'/'} className="text-xs text-gray-500 hover:text-[#16A34A]">
          ← হোম পেজে ফিরে যান

        </Link>

      </div>


    </div>
  );
};

export default SignInPage;