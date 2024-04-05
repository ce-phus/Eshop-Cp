import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSignInAlt, FaSignOutAlt, FaShoppingBag } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";
import { logout } from "../actions/userActions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartReducer.cartItems || []);
  // login reducer
  const userLoginReducer = useSelector(state => state.userLoginReducer)
  const { userInfo } = userLoginReducer

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/login");
  };

  const menus = [
    { name: "dashboard", link: "/", icon: MdOutlineDashboard },
    { name: userInfo ? userInfo.username: "user", link: "/", icon: AiOutlineUser, margin: true },
    { name: "Sign In", link: "/login", icon: FaSignInAlt },
    { name: "Register", link: "/register/", icon: SiGnuprivacyguard },
    {
      name: "Products",
      link: "/product",
      icon: FaShoppingBag,
      subMenus: [
        { name: "Laptops", link: "/laptop" },
        { name: "TFTs", link: "/products/tfts" },
        { name: "Gaming PCs", link: "/pc" },
        { name: "Accessories", link: "/products/accessories" },
        { name: "Graphics Cards", link: "/products/graphics-cards" },
        { name: "Computer Parts", link: "/products/computer-parts" },
      ],
    },
    {
      name: "Settings",
      link: "#",
      icon: RiSettings4Line,
      subMenus: [
        { name: "Account Settings", link: "/account/" },
        { name: "Address Settings", link: "/all-addresses/" },
        { name: "Order Settings", link: "/orders" },
      ],
    },
    // Updated logout menu item
    { name: "Sign Out", onClick: logoutHandler, icon: FaSignOutAlt },
  ];

  const [openMenu, setOpenMenu] = useState(null);
  const [open, setOpen] = useState(true);

  // Function to toggle submenu
  const toggleSubMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <section className="flex gap-6">
      <div
        className={`fixed bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 z-10`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <Link to="/cart" className="">
            <FiShoppingCart size="20" />
            {cartItems.length > 0 && (
              <span className='absolute top-1 right-3 inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full'>
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
        {menus.map((menu, i) => (
          <div key={i}>
            <Link
              to={menu.link} 
              className={`${menu.margin && "mt-5"
                } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
              onClick={() => menu.subMenus && toggleSubMenu(menu.name)}
            >
              <div>{React.createElement(menu.icon, { size: "20" })}</div>
              <h2 className={`whitespace-pre ${!open && "opacity-0"}`}>{menu.name}</h2>
            </Link>
            {/* Only show submenus if 'open' and 'openMenu' conditions are met */}
            {open && openMenu === menu.name &&
              menu.subMenus?.map((subMenu, index) => (
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
    </section>
  );
};

export default Home;
