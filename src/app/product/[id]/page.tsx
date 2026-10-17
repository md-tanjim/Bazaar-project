import { translations } from '@/components/marquee';
import Link from 'next/link';
import React from 'react';

const ProductDetailsPage = async ({params}) => {

    const {id} = await params;
    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${id}`);
    const item = await res.json();

    console.log(item, "item from product page")
    
    
    
    const lowestPrice = Math.min(...item.markets.map((market) => market.min));
    const highestPrice = Math.max(...item.markets.map((market) => market.max));
    const avrg = (highestPrice + lowestPrice)/2;
    console.log(highestPrice, "highestPrice from product page")

    return (
        <div className="mx-auto w-full max-w-7xl space-y-5 px-4 py-5 sm:px-6">



  <div className="flex flex-wrap items-center gap-2 text-lg text-gray-600">
    <Link href="/" className="transition hover:text-green-700">
      হোম
    </Link>

    <span>›</span> 

    <Link
      href={`/catagory/${item.category}`}
      className="transition hover:text-green-700"
    >
      {item.categoryNameBn}
    </Link>

    <span>›</span>

    <span className="font-medium text-gray-800">
      {item.nameBn}
    </span>
  </div>

  
  <div className="flex flex-col gap-4 rounded-2xl border border-[#DCE5DC] bg-[#FAFCFA] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

    
    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
      <div className="flex size-14  items-center justify-center rounded-2xl bg-[#F0F5F0] text-3xl sm:size-16">
        {item.image}
      </div>

      <div className="">
        <h1 className="text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
          {item.nameBn}
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          প্রতি {translations[item.unit] ?? item.unit}  {item.nameBn}
       
        </p>

        <p className="mt-2 text-sm text-gray-700">
          গতকালের তুলনায় আজ দাম{" "}
          {item.change.dir === "up"
            ? "বেড়েছে"
            : item.change.dir === "down"
              ? "কমেছে"
              : "অপরিবর্তিত"}
          {" · "}
          {Math.abs(item.today - item.yesterday).toLocaleString("bn-BD")} টাকা
        </p>
      </div>
    </div>

    
    <div className="flex  items-center justify-between gap-4 rounded-xl bg-[#F0F5F0] px-5 py-3 text-center sm:min-w-24 sm:flex-col sm:gap-0 sm:px-4">
      <p className="text-lg text-gray-500">
        আজকের দাম
      </p>

      <p className="text-2xl font-bold text-gray-900">
        {Number(item.today).toLocaleString("bn-BD")}
      </p>

      <p className="text-lg text-gray-500">
        টাকা / {translations[item.unit] ?? item.unit}
      </p>

      <p
        className={`text-lg font-bold ${
          item.change.dir === "up"
            ? "text-red-600"
            : item.change.dir === "down"
              ? "text-green-600"
              : "text-gray-500"
        }`}
      >
        {item.change.dir === "up"
          ? "▲"
          : item.change.dir === "down"
            ? "▼"
            : "—"}{" "}
        {Math.abs(item.change.pct).toLocaleString("bn-BD")}%
      </p>
    </div>

  </div>




  <div className="rounded-2xl border border-[#DCE5DC] bg-[#FAFCFA] p-4 sm:p-5">
  <h2 className="mb-4 text-2xl font-bold text-[#263329]">
    দামের সারসংক্ষেপ
  </h2>

  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

    <div className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">
      <p className="text-lg text-[#59645B]">সর্বনিম্ন দাম</p>
      <p className="mt-1 text-xl font-bold text-[#16A34A]">
        {lowestPrice} <span className="text-sm font-medium">টাকা</span>
      </p>
      <p className="mt-1 text-lg text-[#6B756D]">
        সবচেয়ে কম দামের বাজার
      </p>
    </div>

  
    <div className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">
      <p className="text-lg text-[#59645B]">সর্বোচ্চ দাম</p>
      <p className="mt-1 text-xl font-bold text-red-500">
        {highestPrice} <span className="text-sm font-medium">টাকা</span>
      </p>
      <p className="mt-1 text-lg text-[#6B756D]">
        সবচেয়ে বেশি দামের বাজার
      </p>
    </div>

   
    <div className="rounded-xl border border-[#E1E9E1] bg-[#FAFCFA] p-4">
      <p className="text-lg text-[#59645B]">গড় দাম</p>
      <p className="mt-1 text-xl font-bold text-[#16A34A]">
        {avrg} <span className="text-sm font-medium">টাকা</span>
      </p>
      <p className="mt-1 text-lg text-[#6B756D]">
        প্রতি {translations[item.unit] ?? item.unit}-এর হিসাবে
      </p>
    </div>
  </div>



{/* বাজারভিত্তিক আজকের দাম */}
<div className="mt-5">
  <h2 className="mb-3 text-base font-bold text-[#263329]">
    বাজারভিত্তিক আজকের দাম
  </h2>

  <div className="overflow-x-auto rounded-xl border border-[#E1E9E1]">
    <table className="w-full min-w-[600px] border-collapse text-lg">
      <thead>
        <tr className="bg-[#FAFCFA] text-left text-[#7A847B]">
          <th className="px-3 py-3 font-semibold sm:px-4">
            বাজার
          </th>
          <th className="px-3 py-3 font-semibold sm:px-4">
            বিভাগ
          </th>
          <th className="px-3 py-3 text-right font-semibold sm:px-4">
            সর্বনিম্ন
          </th>
          <th className="px-3 py-3 text-right font-semibold sm:px-4">
            সর্বাধিক
          </th>
          <th className="px-3 py-3 text-right font-semibold sm:px-4">
            গড়
          </th>
        </tr>
      </thead>

      <tbody>
        {item.markets.map((market, index) => {
          const avg = (market.min + market.max) / 2;

          return (
            <tr
            //   key={`${market.market}-${market.division}`}
              key={index}
              className={`border-t border-[#DCE5DC] ${
                index % 2 === 0
                  ? "bg-[#FAFCFA]"
                  : "bg-[#F0F5F0]"
              }`}
            >
              {/* Market name */}
              <td className="whitespace-nowrap px-3 py-3 font-medium text-[#263329] sm:px-4">
                {market.market}
              </td>

              {/* Division */}
              <td className="whitespace-nowrap px-3 py-3 text-[#263329] sm:px-4">
                {market.division}
              </td>

              {/* Minimum price */}
              <td className="whitespace-nowrap px-3 py-3 text-right text-[#263329] sm:px-4">
                {market.min.toLocaleString("bn-BD")} টাকা
              </td>

              {/* Maximum price */}
              <td className="whitespace-nowrap px-3 py-3 text-right text-[#263329] sm:px-4">
                {market.max.toLocaleString("bn-BD")} টাকা
              </td>

              {/* Average price */}
              <td className="whitespace-nowrap px-3 py-3 text-right font-bold text-[#263329] sm:px-4">
                {avg.toLocaleString("bn-BD", { maximumFractionDigits: 2,})}{" "} টাকা
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
</div>



















</div>












</div>
    );
};

export default ProductDetailsPage;