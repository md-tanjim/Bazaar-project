import Image from 'next/image';
import DateShow from './Date';


const Banner = () => {

    // const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" })
    return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-gray-100 bg-white p-6 sm:p-8 md:flex-row md:gap-10 md:p-12">
            {/* Left side: Text content */}
            <div className="w-full md:w-3/5">
                <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    <DateShow></DateShow>
                </span>

                <h1 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                    আজকের বাজারের দাম এক নজরে
                </h1>

                <p className="mt-4 text-sm  text-gray-500 sm:text-lg">
                    চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                    বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
                    দামের পরিবর্তন এক জায়গায়।
                </p>
 <button className="btn w-40 mt-5 border-none bg-[#16A34A] text-lg font-semibold text-white hover:bg-[#15803D]">
                    সব পণ্য দেখুন
                </button>
               
            </div>

            <div className="flex w-full justify-center md:w-2/5 md:justify-end">
                <Image
                    src="/bazar-hero.png"
                    alt="banner"
                    width={280}
                    height={240}
                    className="h-auto w-48 object-contain sm:w-60 md:w-full md:max-w-[280px]"
                />
            </div>
        </div>
    </div>
    );
};

export default Banner;