import SkeletonLoadingNavbar from "parts/SkeletonLoadingNavbar";

export default function SkeletonLoadingDetailPage() {
  return (
    <>
      <SkeletonLoadingNavbar />
      <div className="animate-pulse xl:mx-28 mx-5 mt-5 p-4 font-poppins">
        <div className="w-24 h-2 bg-slate-200 rounded" />
      </div>
      <div className="animate-pulse flex xl:flex-row flex-col justify-center m-0">
        <div className="xl:ml-28 m-0 xl:w-1/2 w-full mt-1 flex justify-center">
          <div className="w-full h-64 bg-slate-200 rounded" />
        </div>
        <div className="xl:w-1/2 w-full xl:ml-5 xl:mr-28 m-0">
          <div className="w-64 h-12 bg-slate-200 rounded mt-5" />
          <div className="w-44 h-10 bg-slate-200 rounded my-5" />
          <div className="w-full h-8 bg-slate-200 rounded my-1" />
          <div className="w-full h-8 bg-slate-200 rounded my-1" />
          <div className="w-full h-8 bg-slate-200 rounded my-1" />
          <div className="w-full h-8 bg-slate-200 rounded my-1" />
          <div className="w-full h-8 bg-slate-200 rounded my-1" />
          <div className="my-12 flex justify-between">
            <div className="w-36 h-12 bg-slate-200 rounded" />
            <div className="w-36 h-12 bg-slate-200 rounded" />
            <div className="w-36 h-12 bg-slate-200 rounded" />
          </div>
          <div className="w-full h-44 bg-slate-200 rounded mt-1 mb-10" />
        </div>
      </div>
    </>
  );
}
