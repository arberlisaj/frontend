import Illustration from "./images/illustration-hero.svg";
import Music from "./images/icon-music.svg";
import "./styles.css";

function App() {
  return (
    <main className="bg-blue-100 min-h-screen md:flex items-center w-screen p-2">
      <div className="h-fit w-full max-w-[330px] bg-white rounded-2xl overflow-hidden mx-auto">
        <img src={Illustration} alt="illustration" />
        <div className="px-5">
          <h1 className="font-bold text-2xl text-center pt-3 pb-2">
            Order Summary
          </h1>
          <p className="text-center text-gray-600">
            You can now listen to millions of songs, audiobooks, podcasts on any
            device anywhere you like!
          </p>

          <div className="flex flex-wrap m-auto py-2 px-3 rounded-sm bg-[#7e97c43c] justify-between items-center my-3">
            <img src={Music} alt="music icon" />
            <div>
              <h1 className="font-bold">Annual Plan</h1>
              <p className="text-gray-700">$59.99/year</p>
            </div>
            <a className="underline text-blue-800 font-bold" href="#">
              change
            </a>
          </div>
          <button
            type="button"
            className="w-[100%] bg-blue-700 text-white block p-3 rounded-lg font-bold hover:opacity-80"
          >
            Proceed to Payment
          </button>
          <button className="block m-auto mt-4 mb-6 font-bold">
            Cancel Order
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
