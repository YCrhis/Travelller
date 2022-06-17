const Footer = () => {
  return (
    <div className="bg-zinc-700 w-full p-5">
      <div className="w-[80%] m-auto">
        <div className="flex xl:flex-row sm:flex-col xl:text-left sm:text-center justify-between text-white">
          <div className="">
            <h1 className="text-3xl font-bold mt-5">TRAVELLER</h1>
            <a
              href=""
              className="bg-white text-black py-2 px-4 rounded-xl mt-5 block text-center"
            >
              Add Location
            </a>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mt-7 mb-7">Social</h3>
            <ul className="ml-3 text-zinc-300">
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Facebook</li>
              <li className="mb-2">Twitter</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mt-7 mb-7">Information</h3>
            <ul className="ml-3 text-zinc-300">
              <li className="mb-2">About</li>
              <li className="mb-2">testimonial</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-xl font-bold mt-7 mb-7">Information</h3>
            <ul className="ml-3 text-zinc-300">
              <li  className="mb-2">About</li>
              <li className="mb-2">testimonial</li>
            </ul>
          </div>
        </div>
        <p className="text-zinc-200 mt-6 mb-7">&copy; Traveller created 2022 by Yeridi Crhis</p>
      </div>
    </div>
  );
};

export default Footer;
