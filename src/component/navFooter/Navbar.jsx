import React from "react";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GrClose } from "react-icons/gr";
import { FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [itemActive, setItemActive] = useState(false);
  const [activeLink, setActiveLink] = useState(' ');
  const [scrollAnimation, setScrollAnimation] = useState(false);



  /*
    THIS IS FOR NAVBAR SCROLL ANIMATION
  */
  window.addEventListener("scroll", () => {
    window.scrollY > 50 ? setScrollAnimation(true) : setScrollAnimation(false);
  });

  /*
     FOR CLOSING NAVBAR AND ADDING ACTIVE COLOR IN NAV LINK
  */
  const closeNavFun = (value) => {
    setActive(false);
    setActiveLink(value)
  }


  return (
    <div
      className={`navbar fixed top-0 left-0 z-20 w-full h-auto padding-inline border-b-[2px] border-b-[#FFFFFF38]  flex items-center justify-between  ${scrollAnimation ? 'nav-scroll shadow ' : ' '}`}
    >
      <div className="logo py-3">
        <Link to="/">
          <img src="/image/logo.png" alt="" />
        </Link>
      </div>
      {/* LARGE SCREEN NAV-LINKS */}
      <div className="links_section lg:block hidden">
        <ul className="list-none flex items-center gap-6">
          <li className="py-3">
            <button className="capitalize flex group items-center gap-x-1 font-semibold text-slate-500 transition duration-500 hover:text-sky-500 relative dropdown">
              Services{" "}
              <span className="caret transition duration-300 inline-block ">
                <FaCaretDown />
              </span>
              <ul className="list-none dropdown bg-white absolute top-[250%] left-[-10%] w-[230px]  p-4 rounded-md  z-10  border border-soft-white  opacity-0 text-start">
                <li>
                  <Link
                    to="/servicesolution"
                    className={`text-[14px] capitalize font-[500]  transition duration-500 hover:text-sky-500 inline-block mb-2 ${activeLink === 'solution' ? 'text-sky-500' : 'text-black'} `}
                    onClick={() => setActiveLink('solution')}
                  >
                    communication solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/servicesoftware"
                    className={`text-[14px] capitalize font-[500] text-black transition duration-500 hover:text-sky-500 inline-block mb-2 ${activeLink === 'development' ? 'text-sky-500' : 'text-slate-500'} `}
                    onClick={() => setActiveLink('development')}
                  >
                    software development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/serviceautomation"
                    className={`text-[14px] capitalize font-[500] text-black transition duration-500 hover:text-sky-500 inline-block ${activeLink === 'automation' ? 'text-sky-500' : 'text-slate-500'} `}
                    onClick={() => setActiveLink('automation')}
                  >
                    process automation
                  </Link>
                </li>
              </ul>
            </button>
          </li>
          <li className=" py-3">
            <Link
              to="/about"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${activeLink === 'about' ? 'text-sky-500' : 'text-slate-500'}`}
              onClick={() => setActiveLink('about')}
            >
              about us
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="/career"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${activeLink === 'career' ? 'text-sky-500' : 'text-slate-500'}`}
              onClick={() => setActiveLink('career')}
            >
              careers
            </Link>
          </li>
          <li className=" py-3">
            <Link
              to="/blog"
              className={`capitalize font-semibold transition duration-500 hover:text-sky-500 ${activeLink === 'blog' ? 'text-sky-500' : 'text-slate-500'}`}
              onClick={() => setActiveLink('blog')}
            >
              blogs
            </Link>
          </li>
          <li className=" py-3">
            <Link to="/contact" className="btn-primary-sm " onClick={() => setActiveLink('blog')}>
              contact us
            </Link>
          </li>
        </ul>
      </div>

      <button
        className={`menu lg:hidden block text-[20px] text-gray p-2 border border-gray transition duration-300 ${active ? " focus:border-sky-500 focus:text-sky-500" : ""
          } `}
        onClick={() => setActive(!active)}
      >
        <FaBarsStaggered />
      </button>

      {/* SMALL SCREEN NAV-LINKS */}
      <div
        className={`mobile_menu lg:hidden block fixed top-0  bg-white shadow-lg md:w-[35%] sm:w-[60%] w-[65%] h-screen z-50 duration-300 bg-blue-500 px-4 pt-4 ${active ? "left-[0%]" : "left-[-100%]"
          } `}
      >
        {/* HEADER SECTION */}
        <div className="menu_header flex items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img
                src="/image/logo.png"
                alt=""
                className="inline-block w-[150px] h-auto object-cover"
              />
            </Link>
          </div>
          <button
            className="close_btn text-[16px] text-[#43525B] p-2 border-2  border-[#43525B] rounded-md transition duration-300 hover:border-sky-500 hover:text-sky-500 "
            onClick={() => setActive(false)}
          >
            <GrClose />
          </button>
        </div>

        {/* LNIKS SECTION */}
        <div className="w-full h-[80vh] flex items-start justify-start flex-col pt-[60px] ">
          <button
            className="capitalize mb-5 font-semibold text-start text-slate-500 transition duration-500 hover:text-sky-500 relative mobile_menu "
            onClick={() => setItemActive(!itemActive)}
          >
            Service
            <span className="caret transition duration-500 inline-block ">
              <FaCaretDown />
            </span>
            <ul
              className={`list-none dropdown w-full transition duration-300 shadow  ${itemActive
                ? "max-h-[150px] h-auto mt-2  p-3  opacity-100  "
                : "max-h-0 mt-0 opacity-0 "
                }  rounded-md  bg-white  `}
            >
              <li>
                <Link
                  to="/servicesolution"
                  className={`text-[14px] capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-2 ${activeLink === 'solution' ? 'text-sky-500' : 'text-slate-500'}`}
                  onClick={() => closeNavFun('solution')}
                >
                  communication solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/servicesoftware"
                  className={`text-[14px]  capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-2 ${activeLink === 'development' ? 'text-sky-500' : 'text-slate-500'}`}
                  onClick={() => closeNavFun('development')}
                >
                  software development
                </Link>
              </li>
              <li>
                <Link
                  to="/serviceautomation"
                  className={`text-[14px]  capitalize font-normal transition duration-500 hover:text-sky-500 inline-block ${activeLink === 'automation' ? 'text-sky-500' : 'text-slate-500'} `}
                  onClick={() => closeNavFun('automation')}
                >
                  process automation
                </Link>
              </li>
            </ul>
          </button>
          <ul className="list-none flex items-start justify-start flex-col gap-4   ">
            {/* <li>
              <button
                className="capitalize font-semibold text-start text-slate-500 transition duration-500 hover:text-sky-500 relative mobile_menu "
                onClick={() => setItemActive(!itemActive)}
              >
                Service
                <span className="caret transition duration-500 inline-block ">
                  <FaCaretDown />
                </span>
                <ul
                  className={`list-none dropdown w-full transition duration-300 shadow  ${itemActive
                    ? "h-auto mt-4  p-4  opacity-100  "
                    : "h-0 mt-0 opacity-0 "
                    }  rounded-md  bg-white  `}
                >
                  <li>
                    <Link
                      to="/servicesolution"
                      className={`font-xs capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-3 ${activeLink === 'solution' ? 'text-sky-500' : 'text-slate-500'}`}
                      onClick={() => closeNavFun('solution')}
                    >
                      communication solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/servicesoftware"
                      className={`font-xs  capitalize font-normal transition duration-500 hover:text-sky-500   inline-block mb-3 ${activeLink === 'development' ? 'text-sky-500' : 'text-slate-500'}`}
                      onClick={() => closeNavFun('development')}
                    >
                      software development
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/serviceautomation"
                      className={`font-xs  capitalize font-normal transition duration-500 hover:text-sky-500 inline-block ${activeLink === 'automation' ? 'text-sky-500' : 'text-slate-500'} `}
                      onClick={() => closeNavFun('automation')}
                    >
                      process automation
                    </Link>
                  </li>
                </ul>
              </button>
            </li> */}
            <li>
              <Link
                to="/about"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${activeLink === 'about' ? 'text-sky-500' : 'text-slate-500'}`}
                onClick={() => closeNavFun('about')}
              >
                about
              </Link>
            </li>

            <li>
              <Link
                to="/career"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${activeLink === 'career' ? 'text-sky-500' : 'text-slate-500'}`}
                onClick={() => closeNavFun('career')}
              >
                careers
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${activeLink === 'blog' ? 'text-sky-500' : 'text-slate-500'}`}
                onClick={() => closeNavFun('blog')}
              >
                blogs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`capitalize font-semibold text-slate transition duration-500 hover:text-blue-500 ${activeLink === 'contact' ? 'text-sky-500' : 'text-slate-500'}`}
                onClick={() => closeNavFun('contact')}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
