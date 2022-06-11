import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { changeImage, transition, userActions } from "../lib/animation";

interface carrousel {
  images: [string];
  name:string
}

const SliderPlace = ({ images, name }: carrousel) => {


  const [imageSelected, setImageSelected] = useState('https://p4.wallpaperbetter.com/wallpaper/772/542/489/room-interior-design-resort-window-wallpaper-preview.jpg');

  return (
    <div>
      <div className="mt-[2rem] relative">
        <div className="w-[100%] h-[500px]">
          <AnimatePresence exitBeforeEnter>
            <motion.img
              initial="out"
              animate="in"
              exit="out"
              key={imageSelected}
              variants={changeImage}
              src={imageSelected}
              className="w-[100%] h-[500px] object-cover image"
            />
          </AnimatePresence>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center justify-center">
            {images?.map((image) => (
              <img
                src={image}
                alt=""
                className="w-[100px] h-[80px] mr-2 cursor-pointer rounded-xl block border-2 border-white-500"
                onClick={() => setImageSelected(image)}
                key={image}
              />
            ))}
          </div>
        </div>

        <div className="absolute left-0 w-[500px] h-[50px] right-0 top-0 bottom-0 m-auto z-50 text-center">
          <h3 className="text-sm text-white">company name</h3>
          <h1 className="text-4xl font-bold text-white">{name}</h1>
        </div>
      </div>
    </div>
  );
};

export default SliderPlace;
