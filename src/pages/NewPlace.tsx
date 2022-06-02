import axios from "axios";
import { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import Failed from "../components/modals/Failed";
import { Success } from "../components/modals/Success";
import { spaces } from "../spaces";
import { pageAnimation, transition2 } from "../lib/animation";

const NewPlace = () => {
  const [response, setResponse] = useState<string>("");

  const [inputs, setInputs] = useState({
    featured: false,
  });
  const [img, setImg] = useState("");

  const handleChange = ({
    target,
  }: ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    const { name, value } = target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "upload");

    try {
      const list = await Promise.all(
        Object.values(img).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/yeridi/image/upload",
            data,
          );

          const { url } = uploadRes.data;

          return url;
        }),
      );
      const newPlace = {
        ...inputs,
        photos: list,
      };
      /* const place = await registerPlace(inputs) */
      try {
        await axios.post("/places", newPlace);
        setResponse("success");
      } catch (err) {
        console.log(err);
        setResponse("failured");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRespo = () => {
    if (response === "success") {
      return <Success setResponse={setResponse} response={response} />;
    }
    if (response === "failured") {
      return <Failed setResponse={setResponse} response={response} />;
    }
  };

  console.log(response);

  const handleCheck = ({ target }: any) => {
    setInputs({
      ...inputs,
      featured: target.checked,
    });
  };

  return (
    <motion.div
      className="flex items-center justify-center"
      initial="out"
      animate="in"
      exit="out"
      variants={pageAnimation}
      transition={transition2}
    >
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
            <label className="text-lg text-zinc-600 mb-2 block">Name</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-bell-concierge mr-2"></i>
              <input
                type="text"
                placeholder="Hotel name example"
                className="w-full"
                onChange={handleChange}
                name="name"
              />
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
                onChange={handleChange}
                name="email"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">
              Phone Number
            </label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-phone mr-2" />
              <input
                type="number"
                placeholder="999 999 999"
                className="w-full"
                onChange={handleChange}
                name="phone"
              />
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
                onChange={handleChange}
                name="company"
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
                onChange={handleChange}
                name="location"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">Space</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-earth-africa mr-2" />
              <select
                name="type"
                id=""
                className="w-full"
                onChange={handleChange}
              >
                {spaces.map((space) => (
                  <option value={space.name} key={space.id}>
                    {space.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">N° Rooms</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-hotel mr-2" />
              <input
                type="text"
                placeholder="Street, Avenue, etc"
                className="w-full"
                onChange={handleChange}
                name="rooms"
              />
            </div>
          </div>

          <div className="p-1">
            <label className="text-lg text-zinc-600 mb-2 block">Price</label>
            <div className="w-full bg-zinc-100 p-3 rounded-full flex items-center">
              <i className="fa-solid fa-money-bill mr-2" />
              <input
                type="number"
                placeholder="00.00"
                className="w-full"
                onChange={handleChange}
                name="price"
              />
            </div>
          </div>
        </div>
        <div className="p-1 mt-5 ">
          <label className="text-lg text-zinc-600 mb-2 block">
            Description
          </label>
          <div className="w-full bg-zinc-100 p-3 rounded-2xl flex items-center  ">
            <textarea
              name="descirption"
              className="w-full rounded-2xl h-[200px]"
              placeholder="The place has three rooms ...."
              onChange={handleChange}
            >
            </textarea>
          </div>
        </div>

        <div className="p-1">
          <label className="text-lg text-zinc-600 mb-2 block">Featured</label>
          <div className="w-full  p-3 rounded-full flex items-center">
            <i className="fa-solid fa-location-pin mr-2" />
            <p className="mr-3">Is featured?</p>
            <input type="checkbox" name="featured" onChange={handleCheck} />
          </div>
        </div>

        <div className="p-1">
          <label className="text-lg text-zinc-600 mb-2 block">
            Hotel Images
          </label>
          <div className="w-full  p-3 rounded-full flex items-center">
            <i className="fa-solid fa-image mr-2" />
            <input
              type="file"
              multiple
              name="photos"
              onChange={(e: any) => setImg(e.target.files)}
            />
          </div>
        </div>

        <button
          className="w-[80%] m-auto block mt-6 bg-red-400 text-white py-2 rounded-2xl"
          onClick={handleSubmit}
        >
          Send Information
        </button>
      </div>
      {handleRespo()}
    </motion.div>
  );
};

export default NewPlace;
