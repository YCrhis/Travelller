import { AnimatePresence, motion } from 'framer-motion'
import {useContext} from 'react'
import { AuthContext } from '../../context/UserContext';
import { logregAction, transition, userActions } from '../../lib/animation'


interface userProfile {
  pro: any;
  setPro: (log: boolean) => void;
}

const Profile = ({pro, setPro}:userProfile) => {

  const user = useContext(AuthContext);

  return (
    <AnimatePresence>
      {pro === true && (
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
            className="bg-white xl:w-[30%] md:w-[40%] fixed top-0 right-0 bottom-0 left-0 xl:h-[460px] md:h-[300px] sm:h-[450px] m-auto p-10 text-center rounded-xl"
          >
            <i
              className="fa-solid fa-xmark absolute right-5 top-5 cursor-pointer"
              onClick={() => setPro(!pro)}
            />
            <h1 className="text-3xl font-bold text-red-400 mb-5">{user.user.name}</h1>
            <h3 className="text-xl mb-4">{user.user.email}</h3>
      
          <img src={user.user.profileImg} alt="profile" className='xl:w-[70%] sm:w-[60%] rounded-full m-auto block' />
          
          </motion.div>
          
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Profile