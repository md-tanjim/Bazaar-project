

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Date from "@/components/Date";
import DateShow from '@/components/Date';



interface Icatagory {
    
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
}


const Navbar = async() => {
    // const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })


    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', { cache: "force-cache"});
    const data = await res.json();

    console.log(data);


    return (

<div className="w-full border-b border-gray-200 bg-white">
  <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-8">

    <nav className="flex items-center justify-between gap-3 py-2">
      {/* Left Side: Logo and Date */}
      <div className="flex min-w-0 items-center gap-2">
        <Link href="/" className="">
          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="h-10 w-10 rounded-xl object-contain sm:h-[50px] sm:w-[50px]"
          />
        </Link>

        <div className="min-w-0 text-black">
          <h1 className="text-2xl font-bold">
            বাজার দর
          </h1>
          <p className="text-xl text-gray-600">
            {/* {date} */}
            <DateShow></DateShow>
          </p>
        </div>
      </div>

      {/* Right Side: User Name */}
      <div className="flex items-center gap-2 text-sm text-gray-800">
        {/* <span>{session.user?.name}</span> */}
        <h1 className="max-w-[100px] text-lg sm:text-xl">
          NAME
        </h1>
        <span className="text-xs text-gray-500">▼</span>
      </div>
    </nav>

    {/* Category Navigation */}
    <div className="flex items-center gap-4 overflow-x-auto border-t border-gray-100 py-3 sm:gap-6">
      {data.map((catagory: Icatagory) => {
        return (
          <div
            key={catagory.id}
            className="flex shrink-0 cursor-pointer items-center gap-1.5 text-black transition-colors hover:text-green-700"
          >
             <span className="text-3xl   sm:text-xl">{catagory.icon}</span>
  <span className="text-2xl sm:text-xl">{catagory.nameBn}</span>
          </div>
        );
      })}
    </div>

  </div>
</div>
    );
};

export default Navbar;