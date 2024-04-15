import { useState } from "react";
import profilePic from "../images/image-jeremy.png";

const Profile = ({ setValue }) => {
  const [buttonIndex, setButtonIndex] = useState(2);
  const buttons = ["daily", "weekly", "monthly"];

  return (
    <div className="bg-darkBlue rounded-2xl overflow-hidden lg:row-span-2 max-w-[350px] w-full mx-auto">
      <div className="bg-blue rounded-b-2xl flex lg:block items-center gap-3 p-4 text-white">
        <img
          className="h-[60px] w-[60px] lg:mb-4"
          src={profilePic}
          alt="profile"
        />
        <div>
          <p className="text-paleBlue">Report for</p>
          <h1 className="text-xl text-gray-200 lg:text-4xl lg:pr-8 lg:mb-4">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <ul className="flex justify-around text-gray-400 lg:flex-col p-4 lg:p-5 lg:gap-1">
        {buttons.map((b, index) => (
          <li key={index} className={buttonIndex === index ? "active" : ""}>
            <button
              onClick={() => {
                setButtonIndex(index);
                setValue(b);
              }}
            >
              {b}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
