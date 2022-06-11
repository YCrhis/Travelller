import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, useContext, useState } from "react";
import { logIn } from "../../api";
import { AuthContext } from "../../context/UserContext";
import { logregAction, transition, userActions } from "../../lib/animation";
import { useNavigate } from "react-router-dom";

interface login {
  log: any;
  setLog: (log: boolean) => void;
}

const Login = ({ log, setLog }: login) => {
  let navigate = useNavigate();
  const { dispatch, loading, error } = useContext(AuthContext);

  const [credentials, setCredential] = useState({});

  const handleLogin = async () => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials, {
        withCredentials: true,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      if (res.data.isAdmin === true) {
        navigate('/admin')
      }
      setLog(false);
    } catch (error: any) {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { message: "You are not allowed" },
      });
    }
  };

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setCredential({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <AnimatePresence>
      {log === true && (
        <motion.div
          className="bg-zinc-700 fixed z-50 top-0 left-0 h-[100vh] w-full bg-opacity-50"
          initial="out"
          animate="in"
          exit="out"
          variants={userActions}
          key="funciona"
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
              onClick={() => setLog(!log)}
            />
            <h1 className="text-3xl font-bold text-red-400 mb-5">TRAVELLER</h1>
            <h3 className="text-xl mb-4">You Are Back, please Log In</h3>
            <div className="flex flex-col mb-6">
              <label className="mb-3">Email</label>
              <div className="flex items-center bg-zinc-200 w-[100%] p-2 rounded-full">
                <i className="fa-solid fa-at mr-3 ml-2 text-zinc-600" />
                <input
                  type="email"
                  className="w-[100%]"
                  placeholder="example@gmail.com"
                  onChange={handleChange}
                  name="email"
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
                  onChange={handleChange}
                  name="password"
                />
              </div>
            </div>

            <button
              className="bg-red-400 text-white m-auto block mt-7 py-2 w-full hover:bg-red-600 transition-all"
              onClick={() => handleLogin()}
            >
              {loading ? "Loading " : "Log In"}
            </button>
            {error &&
              (
                <div className="text-red-400 text-center absolute bottom-10 left-0 right-0">
                  Usuario no encontrado :(
                </div>
              )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Login;
