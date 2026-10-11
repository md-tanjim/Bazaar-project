import Banner from "@/components/Banner";
import Marquee, { Iitem } from "@/components/marquee";
import PriceDown from "@/components/PriceDown";
import PriceUp from "@/components/PriceUp";

import { ToastContainer } from "react-toastify";

export default async function Home() {

  const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products');
  const data = await res.json();

  console.log(data, "for cards from app")
  return (
   <div className="mx-auto max-w-7xl">
   
   <Banner></Banner>


    <p className="text-2xl font-bold px-5 mt-6"><span className="text-red-600">▲</span>আজ দাম বেড়েছে</p>
   <div className=" px-4 py-6 sm:py-8 ">


    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      
    {
      data.map((items : Iitem)=> {
        return(
          (items.change.dir === "up")? <PriceUp key={items.id} items={items}></PriceUp> : ""
        )
      })
    }
    </div>
    
      <p className="text-2xl font-bold px-5 mt-12 mb-5"><span className="text-red-600">▲</span>আজ দাম বেড়েছে</p>
    
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-3">
      {
      data.map((items : Iitem)=> {
        return(
          (items.change.dir === "down")? <PriceDown key={items.id} items={items}></PriceDown> : ""
        )
      })
    }
    </div>



   </div>
   





    <ToastContainer />
   </div>
  );
}
