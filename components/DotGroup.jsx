import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-secondary-300 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-secondary-300 before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[40%] right-10">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-500"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-500"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#design"
        className={`${
          selectedPage === "design" ? selectedStyles : "bg-gray-500"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("design")}
      />

      <AnchorLink
        href="#experience"
        className={`${
          selectedPage === "experience" ? selectedStyles : "bg-gray-500"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("experience")}
      />

      <AnchorLink
        href="#about"
        className={`${
          selectedPage === "about" ? selectedStyles : "bg-gray-500"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("about")}
      />
    </div>
  );
};

export default DotGroup;
