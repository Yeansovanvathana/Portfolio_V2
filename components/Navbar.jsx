import React from "react";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-secondary-200 font-bold" : ""
      } hover:text-secondary-200 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const navbarBackground = isTopOfPage
    ? ""
    : "bg-primary-100 opacity-95 border-b-[1px] border-gray-400 border-opacity-30";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-5 `}>
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl px-4 md:px-10 ">
        <h4
          className="font-playfair uppercase text-xl font-bold cursor-pointer"
          onClick={() => (window.location.href = "")}
        >
          VATHANA
        </h4>

        {isDesktop ? (
          <div className="flex justify-between gap-16 text-sm font-semibold text-gray-600">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="relative">
              <button
                type="button"
                className={`${
                  selectedPage === "design" || selectedPage === "experience"
                    ? "text-secondary-200 font-bold"
                    : ""
                } flex items-center focus:outline-none`}
                onClick={() =>
                  setSelectedPage(selectedPage === "Design" ? "" : "Design")
                }
              >
                Projects
                <svg
                  className={` ml-2 h-5 w-5 transition duration-500`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {selectedPage === "Design" && (
                <div className="absolute left-[-20px] mt-2 py-2 w-40 bg-primary-200 rounded-md shadow-lg">
                  <div className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-100">
                    <Link
                      page="Design"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-600 hover:bg-primary-100">
                    <Link
                      page="experience"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                </div>
              )}
            </div>

            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <div>
            <button
              className={`text-gray-600 transition duration-500 ${
                isMenuToggled ? "rotate-90" : ""
              }`}
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? <FaTimes size={30} /> : <FaBars size={30} />}
            </button>
          </div>
        )}
        <div
          className={`absolute top-[75px] right-0 w-full bg-primary-100 m-0 overflow-hidden transition-height duration-500 ease-in-out ${
            !isDesktop && isMenuToggled
              ? "h-screen w-screen overflow-auto border-t-[1px] border-gray-400 border-opacity-30"
              : "h-0"
          }`}
        >
          <div
            className="flex flex-col justify-center h-screen items-center gap-10 text-2xl -mt-20"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Design"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>

        {/* MOBILE MENU POPUP */}
      </div>
    </nav>
  );
};
