const NewPlace = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[50%] addSpace xl:block md:hidden sm:hidden"></div>
      <div className="xL:w-[70%] sm:w-[100%] py-7 xl:px-[5rem] md:px-[8rem] sm:px-[2rem]">
        <div className="">
          <h1 className="text-3xl font-bold mb-4">
            Thanks for using{" "}
            <span className="text-4xl text-red-400">TRAVELLER</span>
          </h1>
          <p className="py-5 mb-4">
            🙂 We appreciate you uploading your space, the process of accepting
            your request could take a while, just be patient
          </p>
        </div>

        <div className="grid xl:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">
              Your Name
            </label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-user mr-2" />
              <input type="text" placeholder="Traveller" className="w-full" />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">Email</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-at mr-2" />
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">
              Phone Number
            </label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-phone mr-2" />
              <input type="text" placeholder="999 999 999" className="w-full" />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">
              Company name
            </label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-building mr-2" />
              <input
                type="text"
                placeholder="Traveller Company"
                className="w-full"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">Location</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-location-pin mr-2" />
              <input
                type="text"
                placeholder="Street, Avenue, etc"
                className="w-full"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">Space</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-location-pin mr-2" />
              <select name="" id="" className="w-full">
                <option value="">Office</option>
                <option value="">Free field</option>
              </select>
            </div>
          </div>
        </div>
        <div className="p-1 mt-5 ">
          <label className="text-lg text-zinc-600 mb-2 block">Description</label>
          <div className="w-full bg-zinc-100 p-3 rounded-2xl flex items-center  ">
            <textarea
              name=""
              id=""
              className="w-full rounded-2xl h-[200px]"
              placeholder="The place has three rooms ...."
            ></textarea>
          </div>
        </div>

        <button className="w-[80%] m-auto block mt-6 bg-red-400 text-white py-2 rounded-2xl">Send Information</button>
      </div>
    </div>
  );
};

export default NewPlace;
