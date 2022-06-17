import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Login from "../components/modals/Login";
import Profile from "../components/modals/Profile";
import Register from "../components/modals/Register";
import { AuthContext } from "../context/UserContext";
import { CardContext } from "../context/CardContext";

const Header = () => {
  const [log, setLog] = useState(false);
  const [reg, setReg] = useState(false);
  const [pro, setPro] = useState(false);
  let [open, setOpen] = useState(false);

  const { user, dispatch } = useContext(AuthContext);

  const {card, dispatch:nuevoDispatch} = useContext(CardContext)

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    nuevoDispatch({type:"REMOVE_ALL"})
  };

  return (
    <>
      <div className="shadow-md w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
          <div className="cursor-pointer flex items-center 1text-gray-800">
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

          <div
            onClick={() => setOpen(!open)}
            className="text-2xl absolute right-6 top-6 cursor-pointer md:hidden"
          >
            <i className="fa-solid fa-bars"></i>
          </div>

          <ul
            className={`md:flex  z-auto md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {!user
              ? (
                <>
                  <li>
                    <Button name="Add Space" link="/new" />
                  </li>
                  <li>
                    <div
                      className="flex items-center ml-8 cursor-pointer"
                      onClick={() => setReg(!reg)}
                    >
                      <i className="fa-solid fa-circle-plus mr-1" />
                      <p>Sign Up</p>
                    </div>
                  </li>
                  <li>
                    <div
                      className="flex items-center ml-8 cursor-pointer"
                      onClick={() => setLog(!log)}
                    >
                      <i className="fa-solid fa-arrow-right mr-1" />
                      <p>Log In</p>
                    </div>
                  </li>
                </>
              )
              : (
                <li>
                  <div className="flex md:flex-row sm:flex-col items-center">
                    <img
                      src={user?.profileImg}
                      alt=""
                      className="w-[40px] h-[40px] object-cover rounded-full mr-3"
                    />
                    <p
                      className="font-bold text-xl mr-3 cursor-pointer"
                      onClick={() => setPro(!pro)}
                    >
                      {user?.name}
                    </p>

                    <Button name="Add Space" link="/new" />
                    <button
                      onClick={handleLogOut}
                      className="bg-red-400 text-white ml-3 py-2 px-6 rounded-xl hover:bg-red-500 transition-all mr-3"
                    >
                      LogOut
                    </button>
                    <Link to="/">
                      <div className="relative">
                        <i className="fa-solid fa-cart-shopping text-2xl"></i>
                        <div className="absolute -top-2 -right-1 bg-red-400 px-[4px] rounded-full text-sm text-white">
                          {card.length}
                        </div>
                      </div>
                    </Link>
                  </div>
                </li>
              )}
          </ul>
        </div>
      </div>
      <Login log={log} setLog={setLog} />
      <Register reg={reg} setReg={setReg} />
      <Profile pro={pro} setPro={setPro} />
    </>
  );
};

export default Header;
