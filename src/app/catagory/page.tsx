'use client';

import Cards from '@/components/Cards';
import { Ichange } from '@/components/marquee';


import React, { useState } from 'react';


interface itemsProps {
    id : number,
    CatagoryDetailsPage : string,
    categoryIcon : string,
    categoryNameBn : string,
    today : string,

    image: string,
    nameBn : string,
    unit: string,
    change : Ichange,
}

interface props{
    items : itemsProps[]
}






const CatagoryDetailsPage = ({items} : props) => {


    const [sortBy, setSortBy] = useState<"default" | "price-low" | "price-high">("default");

     const sortedItems = [...items].sort((a, b) => {
        
    if (sortBy === "price-low") {
      return Number(a.today) - Number(b.today);
    }

    if (sortBy === "price-high") {
      return Number(b.today) - Number(a.today);
    }

    return 0;

  });

//   console.log(items, "==============items from CatagoryDetailsPage ------------------")
//  console.log(sortedItems, "----------------sorted from CatagoryDetailsPage===================")




    return (
        <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6 my-20">

  {/* Category header */}
  <div className="rounded-2xl border border-[#DCE5DC] bg-[#FAFCFA] p-5">
    <div className="flex items-center gap-3">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F5F0] text-2xl">
        {items[0]?.categoryIcon}
      </div>

      <div className="min-w-0">
        <h1 className="text-xl font-bold text-gray-900">
          {items[0]?.categoryNameBn}
        </h1>

        <p className="text-sm text-gray-500">
          {items.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
        </p>
      </div>
    </div>
  </div>

  {/* Results count and sorting */}
  <div className="flex items-center justify-between gap-3 py-5">
    <p className="text-sm text-gray-600">
      মোট {items.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
    </p>

    <div className="flex shrink-0 items-center gap-2">
      <label htmlFor="sort" className="text-sm text-gray-600">
        সাজান
      </label>

      <select
        id="sort"
        className="select select-bordered  py-2 select-sm w-48 rounded-lg border border-[#DCE5DC] bg-white text-sm text-gray-800 focus:border-[#078B45] focus:outline-none"
        value={sortBy}
        onChange={(e) =>
          setSortBy(
            e.target.value as "default" | "price-low" | "price-high"
          )
        }
      >
        <option value="default">ডিফল্ট</option>
        <option value="price-low">দাম: কম থেকে বেশি</option>
        <option value="price-high">দাম: বেশি থেকে কম</option>
      </select>
    </div>
  </div>

  {/* Product cards */}
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {sortedItems.map((item: itemsProps) => (
      <Cards key={item.id} items={item} />
    ))}
  </div>

</div>
    );
};

export default CatagoryDetailsPage;