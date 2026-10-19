import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
         <div className="flex min-h-[70vh] items-center justify-center bg-[#F7FAF7] px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl border border-[#DCE5DC] bg-white px-6 py-10 text-center shadow-sm sm:px-10 sm:py-14">
       
        <div className="mx-auto mb-6 flex size-24 items-center justify-center rounded-3xl bg-[#EAF2EA] text-5xl">
          🛒
        </div>

        <p className="text-sm font-bold tracking-widest text-[#16A34A]">
          ERROR 404
        </p>

        <h1 className="mt-3 text-3xl font-extrabold text-[#263329] sm:text-4xl">
          পেজটি খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-4 max-w-sm text-sm leading-7 text-[#6B756D] sm:text-base">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
          পেজটি সরানো হয়েছে অথবা ঠিকানাটি ভুল হতে পারে।
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#166534] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#14532D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#166534]"
          >
            <span aria-hidden="true">⌂</span>
            হোম পেজে ফিরে যান
          </Link>

         
        </div>

        <div className="mt-8 border-t border-[#E8EEE8] pt-5">
          <p className="text-sm text-[#7A847B]">
            বাজারদর জানুন, সঠিক সিদ্ধান্ত নিন।
          </p>
        </div>
      </div>
    </div>
    );
};

export default notFound;