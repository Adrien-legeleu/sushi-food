import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
export const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
  }, []);
  let prevScroll = 0;
  const scrollHeader = () => {
    let recentScroll = window.scrollY;
    console.log("recent", recentScroll, "prev", prevScroll);

    if (recentScroll - prevScroll > 0) {
      setIsVisibleMenu(false);
    } else {
      setIsVisibleMenu(true);
    }
    prevScroll = recentScroll;
  };

  return (
    <div
      className={`fixed h-20 w-full max-w-[1400px] top-0 left-1/2 -translate-x-1/2 flex justify-between items-center pl-2 md:pl-12 md:pr-12 z-10 duration-300 ${
        isVisibleMenu ? "translate-y-0 visible" : "-translate-y-full invisible"
      }`}
    >
      <Link to="/">
        <h2 className="font-title text-4xl text-whiteTitle">Sushi Food</h2>
      </Link>
      {window.innerWidth > 800 ? (
        <ul className="flex items-center gap-5 justify-between text-whiteText text-xl">
          <Link to="/#about">
            <li className="cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
              About
            </li>
          </Link>
          <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
            <li className="cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
              Menus
            </li>
          </Link>
          <Link to="/#contact">
            <li className="cursor-pointer  duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
              Reservation
            </li>
          </Link>
        </ul>
      ) : (
        <div className="h-full  pr-5 flex items-center justify-center">
          <div
            className={`fixed top-0 left-0 h-screen w-full ${
              isOpenMenu ? "block" : "hidden"
            }`}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          ></div>
          <div
            className="w-8 h-8 relative"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <div
              className={`absolute top-1/2 left-1/2 w-1 h-full rounded-full -translate-x-1/2  -translate-y-1/2 bg-redBG duration-200 ${
                isOpenMenu ? "-rotate-90 " : "rotate-0"
              }`}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-full rotate-90 rounded-full -translate-x-1/2 -translate-y-1/2 bg-redBG"></div>
          </div>
          <ul
            className={`duration-300 absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[95%] flex items-center gap-5 justify-between p-2 bg-greenBlack rounded-full text-whiteText text-xl ${
              isOpenMenu ? "opacity-100 visited:" : "opacity-0 invisible"
            }`}
          >
            <Link to="/#about">
              <li className="cursor-pointer text-sm duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
                About
              </li>
            </Link>
            <Link to="/menu" onClick={() => window.scrollTo(0, 0)}>
              <li className="cursor-pointer text-sm duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
                About
              </li>
            </Link>
            <Link to="/#contact">
              <li className="cursor-pointer text-sm duration-200 hover:bg-red rounded-full p-6 pt-2 pb-2">
                Reservation
              </li>
            </Link>
          </ul>
        </div>
      )}
      <ul className="lg:flex items-center justify-between gap-5  text-whiteTitle hidden">
        <li className="cursor-pointer  duration-300 hover:scale-125">
          <InstagramIcon />
        </li>
        <li className="cursor-pointer  duration-300 hover:scale-125">
          {" "}
          <FacebookIcon />
        </li>
        <li className="cursor-pointer  duration-300 hover:scale-125">
          <PinterestIcon />
        </li>
      </ul>
    </div>
  );
};
