const SkeletonLoadingNavbar = () => (
  <div className="animate-pulse flex md:flex-row flex-wrap md:flex-nowrap justify-between items-center xl:mx-28 lg:mx-10 m-0 p-4">
    <div className="brand-icon md:block md:w-auto md:mb-0 flex justify-center mb-2 w-full">
      <div className="w-32 h-12 bg-slate-200 rounded" />
    </div>
    <div className="menu-link w-full md:w-fit">
      <ul className="flex items-center md:w-full">
        <li className="w-12 m-1 h-2 bg-slate-200 rounded" />
        <li className="w-12 m-1 h-2 bg-slate-200 rounded" />
        <li className="w-12 m-1 h-2 bg-slate-200 rounded" />
        <li className="w-12 m-1 h-2 bg-slate-200 rounded" />
      </ul>
    </div>
  </div>
);

export default SkeletonLoadingNavbar;
