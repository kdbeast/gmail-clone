import { IoMdStar } from "react-icons/io";
import { LuPencil } from "react-icons/lu";
import { TbSend2 } from "react-icons/tb";
import {
  MdOutlineWatchLater,
  MdOutlineDrafts,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { useDispatch } from "react-redux";
import { setOpen } from "../utils/appSlice";

const sidebarItems = [
  {
    icon: <LuPencil size={"24px"} />,
    text: "Inbox",
  },
  {
    icon: <IoMdStar size={"24px"} />,
    text: "Starred",
  },
  {
    icon: <MdOutlineWatchLater size={"24px"} />,
    text: "Snoozed",
  },
  {
    icon: <TbSend2 size={"24px"} />,
    text: "Sent",
  },
  {
    icon: <MdOutlineDrafts size={"24px"} />,
    text: "Drafts",
  },
  {
    icon: <MdOutlineKeyboardArrowDown size={"24px"} />,
    text: "More",
  },
];

const Sidebar = () => {
  const dispatch = useDispatch(true);

  return (
    <div className="w-[15%]">
      <div className="p-3">
        <button
          onClick={() => dispatch(setOpen(true))}
          className="flex items-center gap-2 bg-[#C2E7FF] hover:shadow-md rounded-2xl p-4"
        >
          <LuPencil size="24px" />
          Compose
        </button>
      </div>
      <div className="text-gray-500">
        {sidebarItems.map((item) => {
          return (
            <div
              key={item.text}
              className="flex items-center gap-4 pl-6 py-1 rounded-r-full hover:bg-gray-200 cursor-pointer my-2"
            >
              <span>{item.icon}</span>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
