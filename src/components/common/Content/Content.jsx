import React from "react";
import "./Content.css";
const ContentHome = () => {
  return (
    <div className="content-all">
      <div className="content-text">
        <h1>Find your adventure</h1>
        <p>
          Starbucks® Summer Game is here! Play for your chance to win—more than
          10 million prizes are up for grabs!*
        </p>
        <button>Play now</button>
      </div>
      <div className="img-bgadventure">
        <img src={process.env.PUBLIC_URL + "/images/bgadventure.jpg"} alt="" />
      </div>
    </div>
  );
};

export default ContentHome;
