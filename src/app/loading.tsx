export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-[1250px] px-4 py-6">
   
      <div className=" mt-10 h-[200px] w-full animate-pulse rounded-2xl bg-gray-200 md:h-[180px]" />
      
      <div className="grid grid-cols-3 gap-4 mt-30">
      
      {[...Array(10)].map((a, i) => (
        <div key={i} className="h-32 animate-pulse rounded-lg bg-gray-200" />
      ))}
    </div>
    </div>
  );
}

