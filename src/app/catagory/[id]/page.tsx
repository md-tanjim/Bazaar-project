

import Cards from '@/components/Cards';
import { notFound } from 'next/navigation';

import CatagoryDetailsPage from '../page';

const CatagoryDetailsFetch = async ({params} : {params : Promise<{id : string}>}) => {
    


    const {id} = await params;

    const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${id}`);
    
    if (!res.ok) {
      notFound();
    }
    const items = await res.json();

    if (!items) {
      notFound();
    }
    console.log(items, "item from cat id")

    


   

    
    return (
        

    <CatagoryDetailsPage items={items}></CatagoryDetailsPage>
       
    );
};

export default CatagoryDetailsFetch;