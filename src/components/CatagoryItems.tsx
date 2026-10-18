'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';




interface Icatagory {
    
    id: string,
    slug: string,
    nameBn: string,
    icon: string,
}

const CatagoryItems = ({data} : {data : Icatagory[]}) => {

  

    const pathname = usePathname();

    

    // console.log(catagory, "catagory list from CatagoryItems==============")
    return (
       
    <div className="flex items-center gap-4 overflow-x-auto border-t border-gray-100 py-3 sm:gap-6">
      {data.map((catagory: Icatagory) => {


         const isActive = pathname === `/catagory/${catagory.id}`;

        return (
          <Link key={catagory.id} href={`/catagory/${catagory.id}`}>
          <div
            className="flex shrink-0 cursor-pointer items-center gap-1.5 text-black transition-colors hover:text-green-700"
          >
             <span className="text-3xl   sm:text-xl">{catagory.icon}</span>
  <span 
  className={`
  ${
    (isActive) ? "text-green-700" : ""
     
  }
  text-2xl sm:text-xl `} >
    
    {catagory.nameBn}</span>
          </div>
          </Link>
        );
      })}
    </div>

    );
};

export default CatagoryItems;

