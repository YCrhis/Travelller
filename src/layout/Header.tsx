import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Login from "../components/modals/Login";
import Register from "../components/modals/Register";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const [log, setLog] = useState(false);
  const [reg, setReg] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const handleLogOut = () =>{
    dispatch({type:"LOGOUT"})
  }

  return (
    <>
      <div className="flex justify-between py-4 px-[3rem] text-zinc-600">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="https://static.wixstatic.com/media/3640fc_78370808444e4df6b207d8fa1624ab3e~mv2.gif/v1/fit/w_280,h_156,q_90/3640fc_78370808444e4df6b207d8fa1624ab3e~mv2.gif"
              alt=""
              className="w-[40px] h-[40px] object-cover rounded-full mr-2"
            />
            <h1 className="text-3xl font-bold">TRAVELLER</h1>
          </Link>
          <Link to="search">
            <div className="flex items-center ml-8 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass mr-1" />
              <p>Search</p>
            </div>
          </Link>
        </div>

        {!user  ? (
          <div className="flex text-lg items-center">
            <Button name="Add Space" />
            <div
              className="flex items-center ml-8 cursor-pointer"
              onClick={() => setReg(!reg)}
            >
              <i className="fa-solid fa-circle-plus mr-1" />
              <p>Sign Up</p>
            </div>
            <div
              className="flex items-center ml-8 cursor-pointer"
              onClick={() => setLog(!log)}
            >
              <i className="fa-solid fa-arrow-right mr-1" />
              <p>Log In</p>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
              <img 
              src="https://pictures.betaseries.com/banners/episodes/288120/5375651.jpg"
               alt=""
               className="w-[40px] h-[40px] object-cover rounded-full mr-3"
               />
              <p className="font-bold text-xl mr-3">{user.name}</p>
              
              <Button name="Add Space" />
              <button 
              onClick={handleLogOut}
              className="bg-red-400 text-white ml-3 py-2 px-6 rounded-xl hover:bg-red-500 transition-all mr-3">LogOut</button>
          </div>
        )}
      </div>
      <Login log={log} setLog={setLog} />
      <Register reg={reg} setReg={setReg} />
    </>
  );
};

export default Header;
