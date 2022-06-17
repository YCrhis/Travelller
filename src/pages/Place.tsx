import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SliderPlace from "../components/SliderPlace";
import Content from "../layout/Content";
import { motion } from "framer-motion";
import { pageAnimation, transition2 } from "../lib/animation";
import { CardContext } from "../context/CardContext";

const Place = () => {
  const { dispatch, card } = useContext(CardContext);

  const param = useParams();

  const [information, setInformation] = useState<any>({});
  const [isLoved, setIsLoved] = useState<any>(false);

  useEffect(() => {
    const loadInformation = async () => {
      const data = await axios.get("/places/" + param.id);
      setInformation(data.data);
      card.filter((c: any) =>
        c.id === param.id ? setIsLoved(true) : setIsLoved(false)
      );
    };
    loadInformation();
  }, [isLoved]);

  console.log(information)

  const handleLove = async () => {
    await dispatch({
      type: "ADD_CARD",
      payload: {
        id: information._id,
        name: information.name,
        photos: information.photos,
        companyName:information.company
      },
    });
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageAnimation}
      transition={transition2}
    >
      <Content>
        {information?.photos?.length === 0 ? <p>Loading ...</p> : (
          <SliderPlace
            images={information?.photos}
            name={information?.name}
          />
        )}
        <div className="flex xl:flex-row items-start sm:flex-col mt-7  text-zinc-500">
          <div className="xl:w-[70%] sm:w-full p-3">
            <div className="text-2xl text-black mb-9">ABOUT THE PLACE</div>
            <h2 className="text-2xl font-semibold mb-3 text-zinc-700">
              Stay in {information?.name}
            </h2>

            <div className="">
              <div className="">
                <p className="p-2">
                  {information?.descirption}
                </p>
              </div>
              <div className="">
                <h3 className="mt-3 font-semibold mb-2 text-black">
                  Special places
                </h3>
                <ul className="list-disc ml-7">
                  <li>
                    Total of rooms {information.rooms}
                  </li>
                  {information.featured &&
                    (
                      <li>
                        Fealured Included
                      </li>
                    )}
                  <li>
                    Place of type {information.type}
                  </li>
                </ul>

                <h3 className="mt-3 font-semibold mb-2 text-black">
                  Contact information
                </h3>
                <ul className="list-disc ml-7">
                  <li>Company name {information.company}</li>
                  <li>
                    Phone Number {information.phone}
                  </li>

                  <li>
                    Email {information.email}
                  </li>
                </ul>

                <h3 className="mt-3 font-semibold mb-2 text-black">
                  Rules of the place
                </h3>
                <p className="p-2">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur, provident iusto neque veritatis, deserunt
                  repellat accusantium consequatur, corporis impedit aperiam
                  sint a
                </p>

                <h3 className="mt-3 font-semibold mb-2 text-black">
                  Location
                </h3>
                <p className="p-2">
                  {information.location}
                </p>
              </div>
            </div>
          </div>

          <div className="xl:w-[30%] sm:w-[70%] shadow-md ml-3">
            <div className="p-4">
              <h1 className="text-zinc-700 text-3xl font-semibold xl:text-left sm:text-center">
                You can rent this place for{" "}
                <span className="font-bold">$/{information.price}</span> per day
              </h1>
              <div className="text-xl p-3">
                {isLoved
                  ? (
                    <button className="block w-full py-1 bg-red-400 rounded-xl text-white mt-3 text-base">
                      View in Cart <i className="fa-solid fa-cart-shopping text-xl"></i>
                    </button>
                  )
                  : (
                    <button
                      className="block w-full py-1 bg-red-400 rounded-xl text-white mt-3 text-base"
                      onClick={handleLove}
                    >
                      Adding to Favourites <i className="fa-solid fa-heart"></i>
                    </button>
                  )}
              </div>
            </div>
          </div>
        </div>
      </Content>
    </motion.div>
  );
};

export default Place;
