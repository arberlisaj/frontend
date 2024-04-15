import PhoneComponent from "./components/PhoneComponent";

function App() {
  return (
    <main>
      <div className="main-container">
        {/* <div className="absolute-figure"></div> */}
        <PhoneComponent />
        <section>
          <h1>Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </section>
      </div>
    </main>
  );
}

export default App;
