const PricingComponent = ({ plan, price, details }) => {
  return (
    <div className="pricingComponent">
      <p>{plan}</p>
      <h1>${price}</h1>
      <ul>
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button>Learn More</button>
    </div>
  );
};

export default PricingComponent;
