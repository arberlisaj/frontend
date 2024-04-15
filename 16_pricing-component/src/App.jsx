import { useState } from "react";
import PricingComponent from "./components/PricingComponent";
import ToggleButton from "./components/ToggleButton";

const pricing = [
  {
    id: 0,
    plan: "Basic",
    monthly: "19.99",
    annually: "199.99",
    details: ["500GB Storage", "2 Users Allowed", "Send up to 3GB"],
  },
  {
    id: 1,
    plan: "Professional",
    monthly: "24.99",
    annually: "249.99",
    details: ["1TB Storage", "5 Users Allowed", "Send up to 10GB"],
  },
  {
    id: 2,
    plan: "Master",
    monthly: "39.99",
    annually: "399.99",
    details: ["2TB Storage", "10 Users Allowed", "Send up to 20GB"],
  },
];

const App = () => {
  const [checked, setChecked] = useState(false);
  return (
    <main>
      <h1>Our Pricing</h1>
      <div className="switchContainer">
        <b>Annually</b>
        <ToggleButton
          checked={checked}
          setChecked={() => setChecked(!checked)}
        />
        <b>Monthly</b>
      </div>
      <div className="pricingContainer">
        {pricing.map((p) => (
          <PricingComponent
            key={p.id}
            plan={p.plan}
            price={checked ? p.monthly : p.annually}
            details={p.details}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
