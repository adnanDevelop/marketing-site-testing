import React from "react";
import { useState } from "react";
// import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [itemActive, setItemActive] = useState(false);
  const [activeLink, setActiveLink] = useState(" ");
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [isDropdown, setDropdown] = useState(false);
  const location = useLocation();

  /*
    This is for navbar scroll animation
  */
  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

  /*
     For opening sidebar
  */

  const openSideBar = () => {
    setOpen(!open);
    setActive(!active);
  };

  /*
     For closing sidebar and adding active class to all navlinks
  */

  const navClickFunc = (value) => {
    setActiveLink(value);
    window.scrollTo({
      top: 0,
    });
  };

  console.log(activeLink, location.pathname);

  return (
    <nav
      className={`navbar fixed top-0 left-0 z-20 w-full h-auto padding-inline border-b-[2px] border-b-[#FFFFFF38]  flex items-center justify-between  ${
        scrollAnimation ? "nav-scroll shadow " : " "
      }`}
    >
      <div className="py-3 logo">
        <Link to="/" className="navbar_img" onClick={() => navClickFunc("img")}>
          <img src="/image/logo.png" loading="lazy" alt="" />
        </Link>
      </div>

      {/* Large screen nav links */}
      <div className="hidden links_section lg:block">
        <ul className="flex items-center gap-6 list-none">
          {/* Dropdown section */}
          <li className="py-3">
            <button
              className={`relative flex items-center font-semibold capitalize transition duration-500 ease-in-out group gap-x-1 text-slate-500 hover:text-sky-500 dropdown `}
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}
            >
              Services{" "}
              <span className="inline-block transition duration-300 caret">
                <FaCaretDown />
              </span>
              <ul
                className={`list-none dropdown bg-white absolute h-[7.5rem] left-[-10%] w-[230px] rounded-md z-10 border border-soft-white transition duration-500 ease-in-out text-start flex items-start justify-center flex-col ${
                  isDropdown
                    ? "opacity-100 visibile top-[110%]"
                    : "top-[200%] opacity-0 invisible"
                }`}
              >
                <li>
                  <Link
                    to="/servicesolution"
                    className={`ps-4 text-[14px] capitalize font-[500]  transition duration-500 hover:text-sky-500 inline-block mb-[7px] ${
                      "/servicesolution" === location.pathname
                        ? "text-sky-500"
                        : "text-black"
                    } `}
                  >
                    communication solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicesoftware"
                    className={`ps-4 text-[14px] capitalize font-[500] text-black transition duration-500 hover:text-sky-500 inline-block mb-[7px] ${
                      "/servicesoftware" === location.pathname
                        ? "text-sky-500"
                        : "text-slate-500"
                    } `}
                    onClick={() => navClickFunc("development")}
                  >
                    software development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serviceautomation"
                    className={`ps-4 text-[14px] capitalize font-[500] text-black transition duration-500 hover:text-sky-500 inline-block ${
                      "/serviceautomation" === location.pathname
                        ? "text-sky-500"
                        : "text-slate-500"
                    } `}
                    onClick={() => navClickFunc("automation")}
                  >
                    process automation
                  </Link>
                </li>
              </ul>
            </button>
          </li>
          <li className="py-3 ">
            <Link
              to="/about"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${
                "/about" === location.pathname
                  ? "text-sky-500"
                  : "text-slate-500"
              }`}
            >
              about us
            </Link>
          </li>
          <li className="py-3 ">
            <Link
              to="/career"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${
                "/career" === location.pathname
                  ? "text-sky-500"
                  : "text-slate-500"
              }`}
            >
              careers
            </Link>
          </li>
          <li className="py-3 ">
            <Link
              to="/blog"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${
                "/blog" === location.pathname
                  ? "text-sky-500"
                  : "text-slate-500"
              }`}
            >
              blogs
            </Link>
          </li>
          <li className="py-3 ">
            <Link to="/contact" className="btn-primary-sm ">
              contact us
            </Link>
          </li>
        </ul>
      </div>

      {/* Animated hamburger */}
      <div className="lg:hidden">
        <button
          type="button"
          className="hamburger flex flex-col md:gap-y-[7px] gap-y-[6px]"
          onClick={openSideBar}
        >
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? "rotate-45 md:translate-y-[0.5rem] translate-y-[0.6rem]"
                : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.4px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open ? " opacity-0" : ""
            }`}
          ></span>
          <span
            className={`md:w-[30px] w-[25px] md:h-[2.4px] h-[2.2px] bg-[#43525B] rounded-full transform transition duration-500 ease-in-out ${
              open
                ? " -rotate-45 md:translate-y-[-.6rem] translate-y-[-.45rem]"
                : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Small screen nav-links */}
      <div
        className={`mobile_menu lg:hidden block fixed top-0  bg-white shadow-lg md:w-[35%] sm:w-[60%] w-[65%] h-screen z-50 duration-300 bg-blue-500 px-4 pt-4 ${
          active ? "left-[0%]" : "left-[-100%]"
        } `}
      >
        {/* Header section */}
        <div className="flex items-center justify-between menu_header">
          <div className="logo">
            <Link to="/">
              <img
                src="/image/logo.png"
                alt=""
                className="inline-block w-[150px] h-auto object-cover"
                onClick={() => {
                  setActive(false);
                  setOpen(false);
                }}
                loading="lazy"
              />
            </Link>
          </div>
          <button
            className="close_btn text-[16px] text-[#43525B] p-2 border-2  border-[#43525B] rounded-md transition duration-300 hover:border-sky-500 hover:text-sky-500 "
            onClick={() => {
              setActive(false);
              setOpen(false);
            }}
          >
            <GrClose />
          </button>
        </div>

        {/* Link section */}
        <div className="w-full h-[80vh] flex items-start justify-start flex-col pt-[60px] ">
          <button
            className="relative mb-3 font-semibold capitalize transition duration-500 gap-x-1 text-start text-slate-500 hover:text-sky-500 mobile_menu"
            onClick={() => setItemActive(!itemActive)}
          >
            Service
            <span className="inline-block align-middle transition duration-500 ms-1 caret ">
              <FaCaretDown />
            </span>
            <ul
              className={`list-none dropdown w-full transition duration-300 ease-in-out shadow  ${
                itemActive
                  ? "h-[120px] opacity-100 mt-2 p-3 visible"
                  : "h-0 mt-0 opacity-0 invisible"
              }  rounded-md  bg-white  `}
            >
              <li>
                <Link
                  to="/servicesolution"
                  className={`text-[14px] capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-2 ${
                    "/servicesolution" === location.pathname
                      ? "text-sky-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => {
                    setActive(false);
                    setOpen(false);
                  }}
                >
                  communication solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/servicesoftware"
                  className={`text-[14px]  capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-2 ${
                    "/servicesoftware" === location.pathname
                      ? "text-sky-500"
                      : "text-slate-500"
                  }`}
                  onClick={() => {
                    setActive(false);
                    setOpen(false);
                  }}
                >
                  software development
                </Link>
              </li>
              <li>
                <Link
                  to="/serviceautomation"
                  className={`text-[14px]  capitalize font-normal transition duration-500 hover:text-sky-500 inline-block ${
                    "/serviceautomation" === location.pathname
                      ? "text-sky-500"
                      : "text-slate-500"
                  } `}
                  onClick={() => {
                    setActive(false);
                    setOpen(false);
                  }}
                >
                  process automation
                </Link>
              </li>
            </ul>
          </button>
          <ul className="flex flex-col items-start justify-start gap-4 list-none ">
            <li>
              <Link
                to="/about"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${
                  "/about" === location.pathname
                    ? "text-sky-500"
                    : "text-slate-500"
                }`}
                onClick={() => {
                  setActive(false);
                  setOpen(false);
                }}
              >
                about
              </Link>
            </li>

            <li>
              <Link
                to="/career"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${
                  "/career" === location.pathname
                    ? "text-sky-500"
                    : "text-slate-500"
                }`}
                onClick={() => {
                  setActive(false);
                  setOpen(false);
                }}
              >
                careers
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${
                  "/blog" === location.pathname
                    ? "text-sky-500"
                    : "text-slate-500"
                }`}
                onClick={() => {
                  setActive(false);
                  setOpen(false);
                }}
              >
                blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${
                  activeLink === "contact" ? "text-sky-500" : "text-slate-500"
                }`}
                onClick={() => {
                  setActive(false);
                  setOpen(false);
                }}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
