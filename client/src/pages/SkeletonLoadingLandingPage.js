import SkeletonLoadingNavbar from "parts/SkeletonLoadingNavbar";

const SkeletonLoadingLandingPage = () => {
  return (
    <>
      <SkeletonLoadingNavbar />

      <div className="animate-pulse xl:mx-28 lg:mx-10 xl:mt-5 p-4 m-0">
        <div className="flex items-center">
          <div className="flex flex-col md:w-1/2 w-full">
            <div className="mb-2">
              <div className="w-64 my-1 h-12 bg-slate-200 rounded" />
              <div className="w-72 my-1 h-12 bg-slate-200 rounded" />
            </div>
            <div className="my-2">
              <div className="w-40 my-1 h-3 bg-slate-200 rounded" />
              <div className="w-40 my-1 h-3 bg-slate-200 rounded" />
              <div className="w-16 my-1 h-3 bg-slate-200 rounded" />
            </div>
            <div className="my-2">
              <div className="w-48 my-1 h-12 bg-slate-200 rounded" />
            </div>
            <div className="mt-12 flex justify-between">
              <div className="w-36 h-12 bg-slate-200 rounded" />
              <div className="w-36 h-12 bg-slate-200 rounded" />
              <div className="w-36 h-12 bg-slate-200 rounded" />
            </div>
          </div>
          <div className="w-1/2 md:flex justify-center hidden">
            <div className="w-96 h-96 bg-slate-200 rounded" />
          </div>
        </div>
      </div>

      <div className="animate-pulse xl:mx-28 lg:mx-10 mt-2 p-4 font-poppins">
        <div className="w-44 h-8 bg-slate-200 rounded" />
        <div className="grid grid-rows-4 md:grid-cols-3 grid-flow-row gap-4 md:h-96 h-[40rem] mt-4">
          <div className="md:row-span-4 bg-slate-200 rounded m-2" />
          <div className="md:row-span-2 bg-slate-200 rounded m-2" />
          <div className="md:row-span-2 bg-slate-200 rounded m-2" />
          <div className="md:row-span-2 bg-slate-200 rounded m-2" />
          <div className="md:row-span-2 bg-slate-200 rounded m-2" />
          <div className="md:row-span-2 bg-slate-200 rounded m-2" />
        </div>
      </div>
    </>
  );
};

export default SkeletonLoadingLandingPage;
