'use client';

import { signOut, useSession } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { redirect, useRouter } from 'next/navigation';
import React from 'react';
import { toast } from 'react-toastify';

const ProfileOrButton = () => {

     const {data: session} = useSession();
      
     
    
    return (
        <div>
            {(session?.user)? 
            // <div>{session?.user?.name}</div>
            <div className="dropdown dropdown-start">
  <div tabIndex={0} role="button" className="btn m-1">{session?.user?.name} ▼</div>
  <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
    <li><Link href={'/'}>প্রোফাইল</Link></li>
    <li><button onClick={async()=> {
        signOut();
        toast.success("সফলভাবে সাইন আউট হয়েছে! আপনাকে স্বাগতম।");
        redirect("/")



    }}>সাইন আউট</button></li>
  </ul>
</div>
            :
            <div className="flex items-center gap-2 text-sm text-gray-800">
                {/* <span>{session.user?.name}</span> */}
                {/* <h1 className="max-w-[100px] text-lg sm:text-xl">
          NAME
        </h1>
        <span className="text-xs text-gray-500">▼</span> */}

                <Link href={'/signin'}> <button className="btn w-25 mt-5 border-none bg-[#F0F5F0] text-sm font-semibold text-black hover:bg-[#16A34A]">
                    সাইন ইন
                </button></Link>

                <Link href={'/signup'}>
                    <button className="btn w-25 mt-5 border-none bg-[#16A34A] text-sm font-semibold text-white hover:bg-[#15803D]">
                        সাইন আপ
                    </button>
                </Link>
            </div>}
        </div>
    );
};

export default ProfileOrButton;