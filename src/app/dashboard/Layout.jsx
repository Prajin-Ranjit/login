import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";
import { IoMdNotifications } from "@react-icons/all-files/io/IoMdNotifications";
import { MdLocalPostOffice } from "@react-icons/all-files/md/MdLocalPostOffice";
import { AiOutlineTransaction } from "@react-icons/all-files/ai/AiOutlineTransaction";
import { FaTasks } from "@react-icons/all-files/fa/FaTasks";
import { GoFileDirectory } from "@react-icons/all-files/go/GoFileDirectory";
import { IoSettingsOutline } from "@react-icons/all-files/io5/IoSettingsOutline";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover/Popover";
import { useUserContext } from "../../components/context/LoggedInUserProvider";
import Loader from "../../components/ui/loading/Loader";

const Layout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const getUser = useUserContext();
  const getTokenFromLocalStorage = localStorage.getItem('token')

  useEffect(() => {
    // checks if either the current logged in data in state is available or if token is still there in the local storage
    if (Object.keys(getUser).length !== 0 || getTokenFromLocalStorage) {
      setLoading(false);
    } else {
      navigate("/");
    }
  }, []);

  // show loader until the page is ready 
  if (loading) return <Loader />;

  return (
    <section className="flex flex-col h-screen">
      {/* Top Header */}
      <header className="flex flex-row justify-between w-full h-16 py-2 px-14 bg-background">
        <div className="flex flex-row items-center gap-x-28">
          <img
            src="/logo.png"
            alt="logo of company"
            className="hidden sm:block w-28"
          />
          <div className="flex flex-row items-center gap-3">
            <button type="button">
              {" "}
              <GiHamburgerMenu className="w-6 h-6 text-gray-500" />
            </button>
            <span className="text-lg font-semibold text-gray-500">
              Transaction
            </span>
          </div>
        </div>
        <div className="flex flex-row items-center gap-5">
          <IoMdNotifications className="w-6 h-6 text-gray-500" />
          <MdLocalPostOffice className="w-6 h-6 text-gray-500" />
          <Popover>
            <PopoverTrigger className="flex flex-row gap-2">
              <img
                src="/person.png"
                alt="profile picture"
                className="object-cover w-10 h-10 rounded-full"
              />
            </PopoverTrigger>
            <PopoverContent>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </header>
      {/* left side navigation menu */}
      <section className="flex flex-row h-full">
        <nav className="w-64 h-full px-5 py-10 bg-secondary shrink-0">
          <ul className="space-y-2">
            <li className="flex flex-row items-center gap-3 px-5 py-2 rounded-md cursor-pointer text-background hover:bg-background/10 bg-background/10">
              <AiOutlineTransaction className="w-5 h-5" />
              Transaction
            </li>
            <li className="flex flex-row items-center gap-3 px-5 py-2 rounded-md cursor-pointer text-background hover:bg-background/10">
              <FaTasks className="w-5 h-4" />
              Task
            </li>
            <li className="flex flex-row items-center gap-3 px-5 py-2 rounded-md cursor-pointer text-background hover:bg-background/10">
              <GoFileDirectory className="w-5 h-4" />
              Files
            </li>
            <li className="flex flex-row items-center gap-3 px-5 py-2 rounded-md cursor-pointer text-background hover:bg-background/10">
              <IoSettingsOutline className="w-5 h-4" />
              Settings
            </li>
          </ul>
        </nav>
        {/* rest of the body */}
        <Outlet />
      </section>
    </section>
  );
};

export default Layout;
