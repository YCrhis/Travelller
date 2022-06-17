import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CardContext } from "../context/CardContext";
import { pageAnimation, transition2 } from "../lib/animation";

const CartItem = ({ cart }: any) => {
  const { dispatch } = useContext(CardContext);

  const handleRemove = () => {
    dispatch({ type: "REMOVE_CARD", payload: { id: cart.id } });
    console.log("funcionas");
  };

  return (
    <motion.div
      className="flex xl:flex-row sm:flex-col  justify-between items-center mt-4 shadow-lg sm:pb-5 xl:pb-0"
      initial="out"
      animate="in"
      exit="out"
      variants={pageAnimation}
      transition={transition2}
    >
      <div className="">
        <img
          src={cart.photos[0]}
          alt=""
          className="xl:w-[300px] sm:w-[900px] h-[200px] object-cover"
        />
      </div>
      <div className="xl:w-[250px] sm:w-[80%] sm:mt-2 xl:mt-0">
        <h1 className="font-semibold text-xl">Name of the company</h1>
        <h2 className="">{cart.name}</h2>
      </div>
      <div className="xl:w-[250px] sm:w-[80%] sm:mt-2 xl:mt-0">
        <h1 className="font-semibold text-xl">Name of the hotel</h1>
        <h2 className="">{cart.companyName}</h2>
      </div>
      <div className="xl:w-[100px] sm:w-[80%] sm:mt-2 xl:mt-0 flex items-center justify-between xl:mr-[5rem]">
        <div className="">
          <Link to={"/place/" + cart.id}>
            <i className="fa-solid fa-eye block m-auto text-xl mt-3"></i>
          </Link>
        </div>
        <div className="">
          <i
            className="fa-solid fa-trash text-red-400 text-xl cursor-pointer"
            onClick={() => handleRemove()}
          >
          </i>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
