interface Props {
  mon?: string;
  tue?: string;
  wed?: string;
  thur?: string;
  fri?: string;
  sat?: string;
  sun?: string;
  percentage?: number;
}

const Card = ({
  mon = 50,
  tue = 50,
  wed = 50,
  thur = 50,
  fri = 50,
  sat = 50,
  sun = 50,
  percentage = 2.4,
}: Props) => {
  let monthPrice = mon + tue + wed + thur + fri + sat + sun;
  return (
    <section>
      <h1 id="spending">Spending - Last 7 Days</h1>
      <article>
        <div className="mon ">
          <div style={{ height: mon + "px" }} className="candle">
            <div className="hover">${mon}</div>
          </div>
          <p>Mon</p>
        </div>
        <div className="tue">
          <div style={{ height: tue + "px" }} className="candle">
            <div className="hover">${tue}</div>{" "}
          </div>
          <p>tue</p>
        </div>
        <div className="wed">
          <div style={{ height: wed + "px" }} className="candle">
            <div className="hover">${wed}</div>{" "}
          </div>
          <p>wed</p>
        </div>
        <div className="thur">
          <div style={{ height: thur + "px" }} className="candle">
            <div className="hover">${thur}</div>
          </div>
          <p>thu</p>
        </div>
        <div className="fri">
          <div style={{ height: fri + "px" }} className="candle">
            <div className="hover">${fri}</div>{" "}
          </div>
          <p>fri</p>
        </div>
        <div className="sat">
          <div style={{ height: sat + "px" }} className="candle">
            <div className="hover">${sat}</div>{" "}
          </div>
          <p>sat</p>
        </div>
        <div className="sun">
          <div style={{ height: sun + "px" }} className="candle">
            <div className="hover">${sun}</div>{" "}
          </div>
          <p>sun</p>
        </div>
      </article>
      <hr />
      <footer>
        <div className="monthly">
          <span>Total this month</span>
          <h1>${monthPrice.toFixed(2)}</h1>
        </div>
        <div className="lastMonth">
          <span>from last month</span>
          <p>+{percentage}%</p>
        </div>
      </footer>
    </section>
  );
};

export default Card;
