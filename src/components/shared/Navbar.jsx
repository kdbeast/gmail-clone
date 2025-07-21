import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { TbGridDots } from "react-icons/tb";
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../utils/appSlice";
import { AnimatePresence } from "framer-motion";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { motion } from "framer-motion";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [toogle, setToogle] = useState(false);
  const { user } = useSelector((state) => state.appSlice);
  const dispatch = useDispatch();

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input]);

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt=""
          />
          <h1 className="text-2xl font-medium text-gray-600">Gmail</h1>
        </div>
      </div>
      <div className="md:block hidden w-[50%] mr-60 px-9">
        <div className="flex items-center bg-[#dde3ed] px-2 py-3 rounded-full">
          <IoIosSearch className="text-gray-500" size={"24px"} />
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search mail"
            className="rounded-full w-full outline-none px-1"
          />
        </div>
      </div>
      <div className="md:block hidden">
        <div className="flex items-center gap-1">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={"24px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <TbGridDots size={"24px"} />
          </div>
          <div className="cursor-pointer">
            <Avatar
              onClick={() => setToogle(!toogle)}
              src={user?.photoURL}
              size="30px"
              round={true}
            />
            <AnimatePresence>
              {toogle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, y: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                  <p onClick={signOutHandler} className="p-2 underline">
                    Logout
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
