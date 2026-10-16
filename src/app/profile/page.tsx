
"use client";

import React from "react";
import { signOut, updateUser, useSession } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = useSession();

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const resData = await updateUser({
      name: userData.name as string,
    });

    console.log("after submit user data", resData);
  };

  return (
    <div className="min-h-screen bg-[#F0F5F0] px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-3xl space-y-5">
        
        <div>
          <h1 className="text-2xl font-bold text-[#26352F]">
            আমার প্রোফাইল
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

       
        <div className="flex flex-col gap-4 rounded-2xl border border-[#E7EEE8] bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#078B45] text-lg font-bold text-white">
              {session?.user?.name?.charAt(0)?.toUpperCase() || " "}
            </div>

            <div className="min-w-0">
              <h2 className=" font-semibold text-gray-900">
                {session?.user?.name || "ব্যবহারকারী"}
              </h2>
              <p className="text-sm text-gray-500">
                {session?.user?.email}
              </p>
            </div>
          </div>

          <Button
            type="button"
            variant="outline"
            className=" border border-red-300 bg-white text-sm font-semibold text-red-600 hover:bg-red-50"
            onClick={async()=> {
                    signOut();
                    toast.success("সফলভাবে সাইন আউট হয়েছে! আপনাকে স্বাগতম।");
                    redirect("/")
                }}
          >
            সাইন আউট
          </Button>
        </div>

        
        <div className="rounded-2xl border border-[#E7EEE8] bg-white p-5 shadow-sm sm:p-6">
          <Form onSubmit={handleUpdateUser} className="w-full">
            <Fieldset className="w-full">
              <Fieldset.Legend>
                <span className="text-lg font-bold text-gray-800">
                  নাম হালনাগাদ করুন
                </span>
              </Fieldset.Legend>

              <FieldGroup className="mt-3">
                <TextField
                  isRequired
                  name="name"
                  defaultValue={session?.user?.name || ""}
                  validate={(value) => {
                    if (value.trim().length < 3) {
                      return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                    }

                    return null;
                  }}
                  className="w-full"
                >
                  <Label className="mb-1 text-sm font-medium text-gray-700">
                    নাম
                  </Label>

                  <Input
                    placeholder="আপনার নাম লিখুন"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 outline-none focus:border-[#078B45] focus:ring-1 focus:ring-[#078B45]"
                  />

                  <FieldError />
                </TextField>
              </FieldGroup>

              <Fieldset.Actions className="mt-3">
                <Button
                  type="submit"
                  className="rounded-lg bg-[#078B45] px-4 py-2 text-sm font-semibold text-white hover:bg-[#06763B]"
                  onClick={()=> {
                    toast.success("সফলভাবে নাম বদলেছে!");
                  }}
                >
                  নাম হালনাগাদ করুন
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
