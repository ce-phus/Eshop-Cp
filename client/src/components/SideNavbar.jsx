import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "user", link: "/", icon: AiOutlineUser, margin:true },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Sign In", link: "/", icon: FaSignInAlt },
    { name: "Sign Out", link: "/", icon: FaSignOutAlt },

    {
      name: "Products",
      link: "/laptop",
      icon: FaShoppingBag,
      subMenus: [
        { name: "TFTs", link: "/products/tfts" },
        { name: "Gaming PCs", link: "/products/gaming-pcs" },
        { name: "Accessories", link: "/products/accessories" },
        { name: "Graphics Cards", link: "/products/graphics-cards" },
        { name: "Computer Parts", link: "/products/computer-parts" },
      ],
    },

    { 
      name: "Settings", 
      link: "/", 
      icon: RiSettings4Line, 
      subMenus: [
        { name: "Account Settings", link: "/account/settings" },
        { name: "Address Settings", link: "/address/settings" },
        { name: "Order Settings", link: "/order/settings" },
      ],
    },
  ];
  // State to track the open submenu
const [openMenu, setOpenMenu] = useState(null);

// Function to toggle submenu
const toggleSubMenu = (menuName) => {
  if (openMenu === menuName) {
    setOpenMenu(null);
  } else {
    setOpenMenu(menuName);
  }
};

  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={` fixed bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 z-10`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
            {menus.map((menu, i) => (
              <div key={i}>
                <Link
                  to={menu.link}
                  className={`${
                    menu.margin && "mt-5"
                  } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
                  onClick={() => menu.subMenus && toggleSubMenu(menu.name)}
                >
                  <div>{React.createElement(menu.icon, { size: "20" })}</div>
                  <h2
                    className={`whitespace-pre duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu.name}
                  </h2>
                </Link>
                {openMenu === menu.name &&
                  menu.subMenus.map((subMenu, index) => (
                    <Link
                      to={subMenu.link}
                      key={index}
                      className="pl-14 py-2 block text-sm text-gray-200 hover:bg-gray-800"
                    >
                      {subMenu.name}
                    </Link>
                  ))}
              </div>
            ))}
        </div>

      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        
      </div>
    </section>
  );
};

export default Home;
