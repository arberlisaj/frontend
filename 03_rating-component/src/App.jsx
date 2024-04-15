import { AiFillStar } from "react-icons/ai";
import { useState } from "react";
import illustration from "./assets/illustration.svg";
import "./index.css";

const App = () => {
  const [selectedRating, setSelectedRating] = useState();
  const [selectedIndex, setSelectedIndex] = useState();
  const [submitted, setSubmitted] = useState(false);
  const liStyles =
    "h-[50px] w-[50px] rounded-full grid place-content-center hover:bg-orange-400 hover:text-white cursor-pointer transition-all";
  return (
    <main className="w-screen h-screen md:flex items-center bg-black p-2">
      <div className=" mx-auto bg-gray-800 p-[25px] rounded-2xl max-w-[360px] relative  overflow-hidden">
        <div className="bg-gray-700 p-[20px] h-[40px] w-[40px] rounded-full grid place-content-center">
          <AiFillStar color="orange" size="20px" />
        </div>
        <h1 className="text-white font-bold text-3xl pt-[15px] pb-[5px]">
          How did we do?
        </h1>
        <p className="text-gray-400 text-[16px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="flex flex-wrap gap-2 justify-start sm:justify-between mt-[15px]">
          {[1, 2, 3, 4, 5].map((rating, index) => (
            <li
              onClick={() => {
                setSelectedRating(rating);
                setSelectedIndex(index);
              }}
              className={
                index === selectedIndex
                  ? "bg-gray-400 " + liStyles
                  : "bg-gray-700 text-white " + liStyles
              }
              key={index}
            >
              <span>{rating}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="w-full text-white bg-orange-500 p-2 text-base rounded-full mt-[20px] capitalize hover:text-gray-500 hover:bg-white transition-all cursor-pointer"
          disabled={!selectedRating}
          onClick={() => setSubmitted(!submitted)}
        >
          submit
        </button>
        <div
          className={
            submitted
              ? "transition-all w-[360px] absolute top-0 left-0 bg-gray-800  h-[100%] p-3"
              : "hidden"
          }
        >
          <img
            className="m-auto mt-6 pr-2"
            src={illustration}
            alt="thank you illustration"
          />
          <p className="text-center bg-gray-700  text-orange-500 rounded-full py-[2px] w-fit m-auto  px-4 mt-5 mb-2 ">
            You selected {selectedRating} out of 5
          </p>
          <h1 className="text-center text-gray-200 font-bold text-[25px]">
            Thank you!
          </h1>
          <p className="text-center text-gray-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
