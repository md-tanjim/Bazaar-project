import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


export const translations: Record<string, string> = {
    kg: "কেজি",
    litre: "লিটার",
    dozen: "ডজন",
    piece: "পিস",
};

export interface Ichange{
    dir: "up" | "down" | "flat",
    pct: number
}
export interface Iitem{
    id : number,
    image: string,
    nameBn : string,
    today: number,
    unit: string,
    change : Ichange,
    
    
}
// export interface Ichange {
//   dir: "up" | "down" | "flat";
//   pct: number;
// }

// export interface Iitem {
//   id: number;
//   image: string;
//   nameBn: string;
//   today: string;
//   unit: string;
//   change: Ichange;
// }

// export interface ICategoryItem {
//   id: number;
//   CatagoryDetailsPage: string;
//   categoryIcon: string;
//   categoryNameBn: string;
//   today: string;
// }

// export type CardItem = Iitem | ICategoryItem;

const Marquee = async () => {

    const res = await fetch('https://openapi.programming-hero.com/api/bazardor/products', {cache: "force-cache"});
    const data = await res.json();
    // console.log(data, "marquee data");

    return (
        <div>
            <MarqueeText direction="right" duration={8} >
                {
                    data.map((item : Iitem) => {
                        return (
        <div
        key={item.id}
        className="flex items-center gap-2 border border-gray-200 bg-white px-0 py-0 text-black sm:gap-4 sm:px-6"
        >
            <span className=" text-2xl">
                {item.image}
            </span>

            <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xl sm:text-2xl">
                <span>{item.nameBn}</span>

                <span className="whitespace-nowrap">
                    {Number(item.today).toLocaleString("bn-BD")}

                    টাকা/

                    {translations[item.unit] ?? item.unit}

                </span>

                <span
            className={`flex items-center gap-1 whitespace-nowrap font-bold ${item.change.dir == "up" ? "text-red-600" :
                    item.change.dir == "down" ? "text-green-600" :
                        "text-gray-500"
                }`}
                >
                    <span>{item.change.dir == "up" ? "▲" : item.change.dir == "down" ? "▼" : "—"}</span>
                    <span>{Math.abs(item.change.pct).toLocaleString("bn-BD")}%</span>
                </span>
            </p>
        </div>
                        )
                    })
                }

            </MarqueeText>
        </div>
    );
};

export default Marquee;