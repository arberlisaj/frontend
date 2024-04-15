import Card from "./components/Card";
import Header from "./components/Header";
import "./Styles/styles.css";

const App = () => {
  return (
    <div id="card">
      <main>
        <Header balance={921.48} />
        <Card
          mon={73}
          tue={120}
          wed={190}
          thur={115}
          fri={90}
          sat={146.2}
          sun={100}
        />
      </main>
    </div>
  );
};

export default App;
