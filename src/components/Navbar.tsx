

import Image from 'next/image';
import Link from 'next/link';
import DateShow from '@/components/Date';
import ProfileOrButton from './ProfileOrButton';
import CatagoryItems from './CatagoryItems';
import { Suspense } from 'react';





const Navbar = async() => {
    // const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })


    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/categories', { cache: "force-cache"});
    const data = await res.json();

    console.log(data, "data from nav page");


    return (

<div className="w-full border-b border-gray-200 bg-white">
  <div className="container mx-auto max-w-7xl px-3 sm:px-4 md:px-8">

    <nav className="flex items-center justify-between gap-3 py-2">
      
      <div className="flex min-w-0 items-center gap-2">
        <Link href="/" className="hidden md:block">
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
           
          </p>
            <DateShow></DateShow>
        </div>
      </div>

      
      <ProfileOrButton></ProfileOrButton>
    </nav>

   
   
    <Suspense fallback={null}>
     <CatagoryItems data={data}></CatagoryItems>

    </Suspense>
    
    
    
    

  </div>
</div>
    );
};

export default Navbar;