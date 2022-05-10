import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { changeImage, transition, userActions } from "../lib/animation";

const SliderPlace = () => {
  const images = [
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F28%2Fwaldorf-astoria-maldives-ithaafushi-080-TOPHOTELSWB21.jpg",
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F28%2Foberoi-amarvilas-065-TOPHOTELSWB21.jpg",
    "https://media.cntraveler.com/photos/5b97ea9959ff057868b4ea22/5:4/w_3330,h_2664,c_limit/The-Peninsula-Bangkok_2018_The-Peninsula-Bangkok_The-Pool-11.jpg",
    "https://i0.wp.com/theluxuryeditor.com/wp-content/uploads/2018/10/010027-01-Swimming-Pool-17900-Amanruya.jpeg?resize=1024%2C576&ssl=1",
  ];

  const [imageSelected, setImageSelected] = useState(
    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2021%2F07%2F28%2Fwaldorf-astoria-maldives-ithaafushi-080-TOPHOTELSWB21.jpg"
  );

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
