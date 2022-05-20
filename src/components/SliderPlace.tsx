import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { changeImage, transition, userActions } from "../lib/animation";

interface carrousel  {
  images:[string]
}

const SliderPlace = ({images}:carrousel) => {

  const [imageSelected, setImageSelected] = useState(images[0]);

  /* setTimeout(()=>{
      images.forEach((image)=>{
        setImageSelected(image)
      })
    },4000) */

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
              className="w-[100%] h-[500px] object-cover"
              
            />
          </AnimatePresence>
        </div>
        <div className="absolute bottom-3 left-3">
          <div className="flex items-center justify-center">
              {images.map((image) => (
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
      </div>
    </div>
  );
};

export default SliderPlace;
