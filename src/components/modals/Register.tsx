import { AnimatePresence, motion } from "framer-motion";
import { logregAction, transition, userActions } from "../../lib/animation";

interface register {
  reg: any;
  setReg: (log: boolean) => void;
}

const Register = ({ reg, setReg }: register) => {
  return (
    <AnimatePresence>
      {reg === true && (
        <motion.div
          initial="out"
          animate="in"
          exit="out"
          variants={userActions}
          key="funciona"
          className="bg-zinc-700 fixed z-50 top-0 left-0 h-[100vh] w-full bg-opacity-50"
        >
          <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={logregAction}
            transition={transition}
            className="bg-white xl:w-[30%] md:w-[40%] fixed top-0 right-0 h-[100vh] p-10"
          >
            <i
              className="fa-solid fa-xmark absolute right-5 top-5 cursor-pointer"
              onClick={() => setReg(!reg)}
            />
            <h1 className="text-3xl font-bold text-red-400 mb-5">TRAVELLER</h1>
            <h3 className="text-xl mb-4">You Are New, please Sign Up</h3>
            <div className="flex flex-col mb-6">
              <label className="mb-3">Email</label>
              <div className="flex items-center bg-zinc-200 w-[100%] p-2 rounded-full">
                <i className="fa-solid fa-at mr-3 ml-2 text-zinc-600" />
                <input
                  type="text"
                  className="w-[100%]"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-3">Username</label>
              <div className="flex items-center bg-zinc-200 w-[100%] p-2 rounded-full">
                <i className="fa-solid fa-at mr-3 ml-2 text-zinc-600" />
                <input
                  type="text"
                  className="w-[100%]"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-3">Password</label>
              <div className="flex items-center bg-zinc-200 w-[100%] p-2 rounded-full">
                <i className="fa-solid fa-key mr-3 ml-2 text-zinc-600" />
                <input
                  type="password"
                  className="w-[100%]"
                  placeholder="min 6 characters"
                />
              </div>
            </div>

            <button className="bg-red-400 text-white m-auto block mt-7 py-2 w-full hover:bg-red-600 transition-all">
              Register
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Register;
