
import { Iitem, translations } from './marquee';


const Allitems = ({items} : {items : Iitem}) => {
    return (
        <div>
            
             <div className="min-w-0 rounded-3xl border border-[#DCE5DC] bg-[#FAFCFA] p-4 sm:p-5">
      {/* Product name and image */}
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F0] text-2xl">
          {items.image}
        </div>

        <div className="min-w-0">
          <h3 className="truncate text-lg leading-tight font-bold text-black">
            {items.nameBn}
          </h3>

          <p className="mt-1 text-sm text-gray-700">
            প্রতি {translations[items.unit] ?? items.unit}
          </p>
        </div>
      </div>

      {/* Price and price change */}
      <div className="mt-3 flex min-w-0 items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm text-gray-700">আজকের দাম</p>

          <p className="mt-1 text-xl font-bold text-gray-900">
            {Number(items.today).toLocaleString("bn-BD")} টাকা
          </p>
        </div>

        <span
            className={`flex items-center gap-1 whitespace-nowrap font-bold ${items.change.dir == "up" ? "text-red-600" :
                    items.change.dir == "down" ? "text-green-600" :
                        "text-gray-500"
                }`}
                >
                    <span>{items.change.dir == "up" ? "▲" : items.change.dir == "down" ? "▼" : "—"}</span>
                    <span>{Math.abs(items.change.pct).toLocaleString("bn-BD")}%</span>
                </span>
      </div>
    </div>
        </div>
    );
};

export default Allitems;