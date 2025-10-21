import React from "react";

const SectionHeading = ({ title, subTitle }) => {
  return (
    <div className="space-y-3 my-3 text-center">
      <h1 className="font-semibold md:text-xl lg:text-3xl underline underline-offset-8 decoration-yellow-500 uppercase">{title}</h1>

      <p className="w-11/12 mx-auto">{subTitle}</p>
    </div>
  );
};

export default SectionHeading;
