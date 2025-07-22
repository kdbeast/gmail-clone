import {
  MdCropSquare,
  MdInbox,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { GoTag } from "react-icons/go";
import { useState } from "react";
import Messages from "./Messages";

const mailType = [
  {
    icon: <MdInbox size={"20px"} />,
    text: "Primary",
  },
  {
    icon: <GoTag size={"20px"} />,
    text: "Promotions",
  },
  {
    icon: <FaUserFriends size={"20px"} />,
    text: "Social",
  },
];
const Inbox = () => {
  const [mailTypeSelected, setMailTypeSelected] = useState(0);

  return (
    <div className="flex-1 bg-white rounded-xl mx-5 md:w-32">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <p className="text-sm text-gray-500 hidden md:block">1-50 of 1000</p>
          <button className="hover:bg-gray-100 p-2 hover:rounded-full flex">
            <MdKeyboardArrowLeft size={"20px"} className="hidden md:block" />
          </button>
          <button className="hover:bg-gray-100 p-2 hover:rounded-full flex">
            <MdKeyboardArrowRight size={"20px"} className="hidden md:block" />
          </button>
        </div>
      </div>
      <div className="h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item) => {
            return (
              <button
                className={`${
                  mailTypeSelected === item.text
                    ? "border-b-4 bg-b-blue-600 text-blue-600"
                    : "border-b-4 border-b-transparent"
                } flex items-center justify-center gap-5 p-4 w-25 md:w-42 lg:w-62 cursor-pointer hover:bg-gray-200`}
                key={item.text}
                onClick={() => setMailTypeSelected(item.text)}
              >
                <span>{item.icon}</span>
                <span className="hidden md:block">{item.text}</span>
              </button>
            );
          })}
        </div>
        <Messages />
      </div>
    </div>
  );
};

export default Inbox;
