function Payment({ name, label, price }) {
  return (
    <label className="payment">
      <input type="radio" value={price} name={name} />
      <div className="description">
        <h1>{label}</h1>
        <h2>{price}</h2>
      </div>
    </label>
  );
}

export default Payment;
