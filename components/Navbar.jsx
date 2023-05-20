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
      } hover:text-yellow-500 transition duration-500`}
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
  const navbarBackground = isTopOfPage ? "" : "bg-primary-200";

  return (
    <nav
      className={`${navbarBackground} lg:bg-primary-100 z-40 w-full fixed lg:sticky top-0 py-5 `}
    >
      <div className="flex items-center justify-between mx-auto max-w-screen-2xl px-4 md:px-10">
        <h4 className="font-playfair uppercase text-xl font-bold cursor-pointer">
          VATHANA
        </h4>

        {isDesktop ? (
          <div className="flex justify-between gap-16 text-sm font-semibold">
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
              page="Projects"
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
        ) : (
          <button
            className="text-gray-600"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {/* <img alt="menu-icon" src="../assets/menu-icon.svg" /> */}
            <FaBars size={30} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-50 h-full w-full bg-primary-200">
            {/* CLOSE ICON */}
            <div className="flex justify-between p-10">
              <h4 className="font-playfair text-xl font-bold text-gray-700">
                VATHANA
              </h4>
              <button
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="text-gray-600"
              >
                <FaTimes size={40} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div
              className="flex flex-col justify-center items-center mt-[12%] gap-10 text-2xl"
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
                page="Projects"
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
        )}
      </div>
    </nav>
  );
};
