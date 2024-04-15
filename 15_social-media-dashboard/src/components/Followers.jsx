import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import formatThousands from "../formatThousands";

const Followers = ({ image, followers, todayCount, gainingFollowers }) => {
  const color = gainingFollowers ? "" : "text-red-500";
  return (
    <div className="border dark:border-gray-600 dark:border-t-facebook bg-lightGrayishBlue p-3 py-8 rounded-md border-t-4 border-t-facebook text-center w-full max-w-[294px] dark:bg-darkDesaturatedBlue shadow hover:opacity-75 cursor-pointer">
      <header className="flex items-center gap-2 m-auto max-w-fit">
        <img className="h-7 w-7" src={image} alt="social media" />
        <p className="text-darkGrayishBlue">@nathanf</p>
      </header>
      <div>
        <h1 className="text-5xl font-bold py-3 text-darkDesaturatedBlue dark:text-veryPaleBlue">
          {formatThousands(followers)}
        </h1>
        <p className="tracking-widest text-darkGrayishBlue mb-2">FOLLOWERS</p>
      </div>
      <p
        className={
          "text-lightGreen font-bold flex items-center gap-1 justify-center pr-4 " +
          color
        }
      >
        {gainingFollowers ? <AiFillCaretUp /> : <AiFillCaretDown />}
        {todayCount} Today
      </p>
    </div>
  );
};

export default Followers;
