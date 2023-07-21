import { useState } from "react";

const NavBar = () => {

  const [isMenuActive, setMenuAtive] = useState(false);
  const menuClass = isMenuActive === true ? "menu-active" : "menu-inactive";
  const menuIconBg = isMenuActive === true ? "bg-white z-[400]" : "bg-black";
  const menuIconText = isMenuActive === true ? "text-black" : "text-white";
  let maskClass = isMenuActive === true ? "mask-active" : "mask-inactive";

  return (
    <>
      {" "}
      <nav className="w-full h-28 md:px-14 px-6 flex items-end relative z-[400]">
        <div className="w-full h-2/4 flex justify-between">
          <div className="h-full w-40 flex items-center">
            <h1 className="text-2xl font-montserrat font-bold text-black cursor-pointer tracking-widest">
              HAFH
            </h1>
          </div>
          <div className="w-64 z-50 h-full flex items-center justify-evenly">
            <div
              id="other-hafh"
              className={`w-44 h-full relative rounded-full cursor-pointer ${menuIconBg} grid place-items-center overflow-hidden`}
            >
              <h2
                id="other-one"
                className={`font-montserrat text-md text-center ${menuIconText} first`}
              >
                The Other HAFH
              </h2>
              <h2
                id="other-two"
                className={`font-montserrat ${menuIconText} text-md text-center absolute second`}
              >
                The Other HAFH
              </h2>
            </div>
            <div className="h-14 w-14 bg-black rounded-full cursor-pointer menu-btn flex items-center justify-center " onClick={()=>{
            }}>

              <input
                onClick={() => {
                  setMenuAtive(!isMenuActive);
                }}
                type="checkbox"
                id="menu-check"
              />
              <div

                id="ham-container"
                className="w-2/4 h-4/5 flex flex-col justify-center items-center "
              >
                <span className="w-full h-[2px] bg-black"></span>
                <span className="w-full h-[2px] bg-black mt-1"></span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="mask-screen"
        className={`fixed w-screen h-screen top-0 left-0 menu-mask ${maskClass}`}
        onClick={() => {
          setMenuAtive(false);
        }}
      ></div>
      <div
        className={`fixed h-screen w-5/12 min-w-max right-0 z-[300] bg-black top-0 ${menuClass} flex flex-col justify-center`}
      >
        <div className="w-full h-56 flex items-center justify-center px-10">
          <input
            type="text"
            className="w-full bg-transparent border-b border-zinc-500 font-montserrat text-white placeholder:text-zinc-500 focus:border-white pb-2"
            placeholder="Search..."
          />
        </div>
        <div className="nav-container">
          <div className="nav_cont">
            <h2
              id="navlink"
              className="text-white text-[3.3rem] font-wulkanMedium nav_one"
            >
              The Edits
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              className="text-white text-[3.3rem] font-wulkanMedium nav_two"
              id="navlink"
            >
              Hotels
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              className="text-white text-[3.3rem] font-wulkanMedium nav_three"
              id="navlink"
            >
              People
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              className="text-white text-[3.3rem] font-wulkanMedium nav_four"
              id="navlink"
            >
              Shop
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              className="text-white text-[3.3rem] font-wulkanMedium nav_five"
              id="navlink"
            >
              About Us
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              id="navlink"
              className="text-white text-[3.5rem] font-wulkanMedium nav_six"
            >
              Contact Us
            </h2>
          </div>
          <div className="nav_cont">
            <h2
              id="navlink"
              className="text-white text-[3.5rem] font-wulkanMedium special-link"
            >
              The Other HAFH
            </h2>
          </div>
        </div>
        <footer className="w-full m-auto absolute bottom-0 h-16 px-10">
          <div className="w-full h-full border-t border-zinc-500 flex justify-between text-white pt-3">
            <h1 className="font-montserrat text-sm">ALL RIGHTS RESERVED</h1>
            <div className="flex">
              <h2 className="font-montserrat menu_link cursor-pointer mr-4 text-sm">INSTAGRAM</h2>
              <h2 className="font-montserrat menu_link cursor-pointer mr-4 text-sm">PINTEREST</h2>
              <h2 className="font-montserrat menu_link cursor-pointer mr-4 text-sm">SPOTIFY</h2>
              <h2 className="font-montserrat text-sm">@2023</h2>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default NavBar;
