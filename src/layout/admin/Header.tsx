import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <div className="bg-slate-700 flex flex-col xl:p-8 sm:p-0 xl:w-[25%] sm:w-[10%] shadow-xl h-[100vh] sticky top-0 left-0 text-white">
      <div className="p-3">
        <h1 className="text-3xl font-bold text-green-400 mb-7 sm:hidden xl:block">TRAVELLER</h1>
        <h1 className="xl:hidden md:block text-2xl font-bold text-green-400 mb-7">TL</h1>
        <div className="flex items-center text-lg hover:bg-zinc-800 xl:p-3 sm:p-0 sm:py-3 cursor-pointer transition-all">
        <i className="fa-solid fa-ranking-star mr-2  sm:text-xl xl:text-nm text-zinc-200"/>
          <Link to="/admin"><h4 className="xl:block sm:hidden">Home</h4></Link>
        </div>
        <div className="flex items-center text-lg hover:bg-zinc-800 xl:p-3 sm:p-0 sm:py-3 cursor-pointer transition-all">
          <i className="fa-solid fa-earth-africa mr-2  sm:text-xl xl:text-nm text-zinc-200" />
          <Link to="/admin/places"><h4 className="xl:block sm:hidden">Places</h4></Link>
        </div>
        <div className="flex items-center text-lg hover:bg-zinc-800 xl:p-3 sm:p-0 sm:py-3 cursor-pointer transition-all">
          <i className="fa-solid fa-user mr-2 sm:text-xl xl:text-nm text-zinc-200" />
          <Link to="/admin/users"><h4 className="xl:block sm:hidden">Users</h4></Link>
        </div>
        <div className="flex items-center text-lg hover:bg-zinc-800 xl:p-3 sm:p-0 sm:py-3 cursor-pointer transition-all">
          <i className="fa-solid fa-location-pin mr-2  sm:text-xl xl:text-nm text-zinc-200" />
          <Link to="/admin/places/allowed"><h4 className="xl:block sm:hidden">Petitions</h4></Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
