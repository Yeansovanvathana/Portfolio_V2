import React from "react";
import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";
import { useTheme } from "next-themes";
import Button from "@/components/Button";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? "text-secondary-200 dark:text-gray-500 font-bold"
          : ""
      } hover:text-secondary-200 hover:dark:text-gray-500 transition duration-500`}
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

  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Button
          className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme("light")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 dark:text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button
          className="bg-gray-200 border border-gray-300 hover:border-white"
          onClick={() => setTheme("dark")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </Button>
      );
    }
  };

  return (
    <nav
      className={`z-40 w-full fixed top-0 py-5 ${
        isTopOfPage
          ? ""
          : "bg-primary-100 dark:bg-gray-800 opacity-95 border-b-[1px] border-gray-400 dark:border-opacity-30"
      }`}
    >
      <div className="flex items-center justify-between mx-auto max-w-screen-xl px-4 md:px-10">
        <h4
          className="font-playfair uppercase text-xl font-bold cursor-pointer lg:text-2xl"
          onClick={() => (window.location.href = "")}
        >
          VATHANA
        </h4>

        {isDesktop ? (
          <div className="flex justify-between items-center gap-16 text-sm font-semibold text-gray-600 dark:text-gray-300">
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
                    ? "text-secondary-200 dark:text-gray-500   font-bold"
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
                <div className="absolute left-[-20px] mt-2 py-2 w-40 bg-primary-200 dark:bg-gray-600  rounded-md shadow-lg">
                  <div className="block px-4 py-2 text-sm text-gray-600 dark:text-white hover:bg-primary-100 dark:hover:bg-gray-800">
                    <Link
                      page="Design"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                  <div className="block px-4 py-2 text-sm text-gray-600 dark:text-white hover:bg-primary-100 dark:hover:bg-gray-800">
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
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div>{renderThemeChanger()}</div>
          </div>
        ) : (
          <div className="flex items-center space-x-4">
            {renderThemeChanger()}
            <button
              className={`text-gray-600 transition duration-500 dark:text-gray-200 ${
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
            className="flex flex-col justify-center h-screen items-center gap-10 text-2xl -mt-20 dark:text-gray-300 dark:bg-gray-800"
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
              page="About"
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
