import React from "react";
import { SocialIcon } from "react-social-icons";

export const Header = () => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl-items-center">
      <div className="flex flex-row items-center">
        <SocialIcon type="gitlab" bgColor="transparent" fgColor="gray" />
        <SocialIcon type="gitlab" bgColor="transparent" fgColor="gray" />
        <SocialIcon type="gitlab" bgColor="transparent" fgColor="gray" />
        {/* Header Where My body */}
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-poniter">
        <SocialIcon type="gitlab" bgColor="transparent" fgColor="gray" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Vathana
        </p>
      </div>
    </header>
  );
};
