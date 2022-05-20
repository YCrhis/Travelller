import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../../api";
import { logregAction, transition, userActions } from "../../lib/animation";

interface register {
  reg: any;
  setReg: (log: boolean) => void;
}

const Register = ({ reg, setReg }: register) => {

  const [inputs, setInputs] = useState({});
  const [profileImg, setprofileImg] = useState('');
  const [success, setSuccess] = useState(false)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) =>{
      const {name, value} = target;

      setInputs({
        ...inputs,
        [name]:value
      })
  }

  const handleSubmit = async(e:any) =>{
    e.preventDefault();
    const data = new FormData();
    data.append('file', profileImg);
    data.append('upload_preset',"upload")
    try {
      const newImage = await axios.post('https://api.cloudinary.com/v1_1/yeridi/image/upload',data)

      const {url} = newImage.data;
      const newUser = {
        ...inputs,
        profileImg:url
      }
      const user = await register(newUser)
      if (user) setSuccess(true)
    } 
    catch (error) {
      console.log(error)
    }
    
  }


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
                  name="email"
                  onChange={handleChange}
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
                  placeholder="Traveller"
                  name="name"
                  onChange={handleChange}
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
                  name="password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col mb-6">
              <label className="mb-3">Profile Image</label>
              <div className="flex items-center  w-[100%] p-2 rounded-full">
                <input
                  type="file"
                  className="w-[100%]"
                  placeholder="min 6 characters"
                  name="image"
                  onChange={(e:any)=>setprofileImg(e.target.files[0])}
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
            className="bg-red-400 text-white m-auto block mt-7 py-2 w-full hover:bg-red-600 transition-all">
              Register
            </button>
            {success &&
            <motion.div 
            initial="out"
            animate="in"
            exit="out"
            variants={logregAction}
            transition={transition}
            className="bg-zinc-600 text-center p-2 absolute bottom-0 left-0 right-0 text-white text-sm">
                <p>Account created successfully</p>
                <p>Now you hace to Log In</p>
            </motion.div>
            }
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Register;
