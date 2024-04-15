import { useEffect, useState } from "react";
import Profile from "./components/Profile";
import Task from "./components/Task";
import data from "./data.json";

const App = () => {
  const [timeFrame, setTimeframe] = useState("weekly");

  useEffect(() => {
    console.log(timeFrame);
  }, [timeFrame]);

  return (
    <main className="max-w-[1200px] m-auto lg:grid lg:place-content-center lg:min-h-screen py-4 p-2 lg:p-0">
      <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
        <Profile setValue={(value) => setTimeframe(value)} />
        {data.map((t, index) => (
          <Task
            key={index}
            status={t.title}
            current={t.timeframes[timeFrame].current}
            previous={t.timeframes[timeFrame].previous}
            banner={t.banner}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
