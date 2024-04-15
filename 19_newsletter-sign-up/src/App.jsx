import { useRef, useState } from "react";
import desktopIllustration from "./images/desktop-illustration.svg";
import mobileIllustration from "./images/mobile-illustration.svg";
import checkIcon from "./images/check.svg";

const App = () => {
  const inputRef = useRef(null);
  const [isSubmitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState(false);
  return (
    <>
      {!isSubmitted ? (
        <main>
          <picture>
            <source media="(min-width:750px)" srcSet={desktopIllustration} />
            <img
              className="mobileIllustration"
              src={mobileIllustration}
              alt="random illustration"
            />
          </picture>
          <section className="form">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={checkIcon} alt="checkicon" />
                <span>Product discovery and building what matters</span>
              </li>
              <li>
                <img src={checkIcon} alt="checkicon" />
                <span>Measuring to ensure updates are a success</span>
              </li>
              <li>
                <img src={checkIcon} alt="checkicon" />
                <span>And much more</span>
              </li>
            </ul>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setEmail(inputRef.current.value);
                setSubmitted(true);
              }}
            >
              <label htmlFor="inputel">
                <span>Email address</span>
                <span>Valid email required</span>
              </label>
              <input
                ref={inputRef}
                id="inputel"
                required
                placeholder="email@company.com"
                type="email"
              />
              <button type="submit">Subscribe to monthly newsletter</button>
            </form>
          </section>
        </main>
      ) : (
        <section className="confirmation">
          <div>
            <img src={checkIcon} alt="checkicon" />
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to <strong>{email}</strong>
              .Please open it and click the button inside to confirm your
              subscribtion
            </p>
          </div>
          <button onClick={() => setSubmitted(false)}>Dissmiss Message</button>
        </section>
      )}
    </>
  );
};

export default App;
