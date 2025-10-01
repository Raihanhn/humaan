import React from "react";
import FallingText from "./FallingText/FallingText";

const Footer = () => {
  return (
    <div className="flex  items-center justify-center bg-white">
      {/* <div className="w-full h-[50vh] ">
        <FallingText
          text="React Bits is a library of animated and interactive React components designed to streamline UI development and simplify your workflow."
          highlightWords={[
            "React",
            "Bits",
            "animated",
            "components",
            "simplify",
          ]}
          highlightClass="highlighted"
          trigger="hover"
          backgroundColor="transparent"
          wireframes={false}
          gravity={0.56}
          fontSize="2rem"
          mouseConstraintStiffness={0.9}
        />
      </div> */}
    </div>
  );
};

export default Footer;
