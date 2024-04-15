import Followers from "./components/Followers";
import Header from "./components/Header";
import Overview from "./components/Overview";
import { followers, overview } from "./data";

const App = () => {
  return (
    <div className="dark:bg-veryDarkBlue p-3 min-h-screen md:grid place-content-center">
      <main className="max-w-[1200px] mx-auto">
        <Header />
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {followers.map((i, index) => (
            <Followers
              key={index}
              image={i.image}
              followers={i.followers}
              todayCount={i.todayCount}
              gainingFollowers={i.gainingFollowers}
            />
          ))}
        </div>
        <h1 className="text-2xl font-bold text-darkGrayishBlue mb-4 mt-8 dark:text-veryPaleBlue">
          Overview - Today
        </h1>
        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {overview.map((i, index) => (
            <Overview
              key={index}
              image={i.image}
              count={i.viewsOrLikes}
              title={i.title}
              isGrowing={i.isGrowing}
              percentage={i.percentage}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
