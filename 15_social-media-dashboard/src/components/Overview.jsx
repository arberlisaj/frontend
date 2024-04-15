import React from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import formatThousands from "../formatThousands";

const Overview = ({ title, image, count, percentage, isGrowing }) => {
  const color = isGrowing ? "" : "text-red-500";
  return (
    <div className="border dark:border-gray-600 p-4 py-6 bg-lightGrayishBlue rounded-md w-full max-w-[294px] dark:bg-darkDesaturatedBlue shadow hover:opacity-75 cursor-pointer">
      <header className="flex justify-between gap-2 items-center mb-4">
        <p className="font-bold text-darkGrayishBlue">{title}</p>
        <img className="scale-125" src={image} alt="social media" />
      </header>
      <div className="flex justify-between items-center pt-2">
        <h1 className="font-bold text-4xl text-darkDesaturatedBlue dark:text-veryPaleBlue">
          {formatThousands(count)}
        </h1>

        <p
          className={
            "text-lightGreen font-bold flex items-center gap-1 justify-center " +
            color
          }
        >
          {isGrowing ? <AiFillCaretUp /> : <AiFillCaretDown />}
          {percentage}%
        </p>
      </div>
    </div>
  );
};

export default Overview;
