import Navbar from "./components/shared/Navbar";
import Inbox from "./components/Inbox";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mail from "./components/Mail";
import Body from "./components/Body";
import SendMail from "./components/SendMail";
import Login from "./components/Login";
import { useSelector } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Inbox />,
      },
      {
        path: "/mail/:id",
        element: <Mail />,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector((state) => state.appSlice);
  return (
    <div className="bg-gray-100 h-screen w-screen overflow-hidden">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router} />
          <div className="absolute bottom-0 w-[30%] right-20 z-10">
            <SendMail />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
