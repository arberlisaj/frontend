import menu from "../images/icon-ellipsis.svg";

const Task = ({ status, current, previous, banner }) => {
  const formatHours = (hour) => {
    if (hour === 1) {
      return `${hour} hour`;
    } else return `${hour} hours`;
  };

  return (
    <div
      className="task rounded-2xl w-full max-w-[350px] h-full flex flex-col pt-[50px] mx-auto"
      style={{
        backgroundColor: banner,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top right",
      }}
    >
      <div className="p-4 bg-darkBlue rounded-2xl mt-auto">
        <header className="flex text-white items-center justify-between md:pb-2">
          <h1 className="text-xl font-bold pt-1">{status}</h1>
          <img className="cursor-pointer" src={menu} alt="menu" />
        </header>
        <div className="flex md:block text-white items-center justify-between py-2 md:py-0">
          <h1 className="text-4xl md:pb-2">{formatHours(current)}</h1>
          <p className="text-paleBlue text-sm">
            Last Week {formatHours(previous)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Task;
