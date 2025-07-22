import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedEmail } from "../utils/appSlice";
import { motion } from "framer-motion";

const Message = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={openMail}
      className="flex items-start justify-between border-b border-gray-200 px-4 py-2 text-sm hover:shadow-md  "
    >
      <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-semibold">{email.to}</h1>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="text-gary-600 truncate hidden md:block">
          {email.message}
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p className="hidden lg:block"> {new Date(email.createdAt?.toDate()).toUTCString()} </p>
      </div>
    </motion.div>
  );
};

export default Message;
