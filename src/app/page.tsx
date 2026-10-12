import Allitems from "@/components/Allitems";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Marquee, { Iitem } from "@/components/marquee";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";
import Link from "next/link";

import { ToastContainer } from "react-toastify";

export default async function Home() {

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
  const data = await res.json();

  console.log(data, "for cards from app")


  const TopRiser = data.filter((items : Iitem) => items.change.dir === "up").sort((a, b) => b.today - a.today).slice(0, 6);
  const TopLower = data.filter((items : Iitem) => items.change.dir === "down").sort((a, b) => a.today - b.today).slice(0, 6)




  return (
   <div className="mx-auto max-w-7xl">
   
   <Banner></Banner>


    <p className="text-2xl font-bold px-5 mt-6"><span className="text-red-600">▲</span>আজ দাম বেড়েছে</p>
   <div className=" px-4 py-6 sm:py-8 ">


    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      
    {
      TopRiser.map((items : Iitem)=> {
        return(
          
          (items.change.dir === "up")? <Link key={items.id} href={'/'}><PriceUp  items={items}></PriceUp></Link> : ""
        )
      })
    }
    </div>
     
     <p className="text-2xl font-bold px-5 mt-12 mb-5"><span className="text-red-600">▲</span>আজ দাম কমেছে</p>
    
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      {
      TopLower.map((items : Iitem)=> {
        return(
          (items.change.dir === "down")? <PriceDown key={items.id} items={items}></PriceDown> : ""
        )
      })
    }
    </div>

    <p className="text-2xl font-bold px-5 mt-12"><span className="text-red-600">▲</span>সব পণ্য</p>
    <p className="text-xl mt-2 mb-5 px-5">মোট {Number(data.length).toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে</p>
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      {
      data.map((items : Iitem)=> { 
      return <Allitems key={items.id} items={items}></Allitems>  })
    }
    </div>



   </div>
   



    

    <ToastContainer />
   </div>
  );
}
