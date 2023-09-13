export const SkeletonCard = () => {
  return (
    <div className="rounded-3xl bg-slate-200 flex flex-col pb-5 justify-start items-center border-2 w-full">
      <div className="w-full h-[180px] rounded-t-3xl object-cover"></div>
      <div className="w-full p-3 grid grid-cols-1 items-end justify-end gap-y-5">
        <h3 className="h-3 w-4/5"></h3>
        <div className="h-3 w-2/5"></div>
      </div>
    </div>
  );
};
