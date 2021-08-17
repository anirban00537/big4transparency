import React from "react";
import "./cover.css";
const Cover = () => {
  return (
    <div className=" myCover">
      <div className="container myDescrp">
        <h1 className="customTitle">Earnings transparency is finally here!</h1>
        <p>
          Open any online accounting community and what do you see? Endless
          threads asking how much everyone is making in a certain city for a
          certain level. And why is this?
        </p>
        <p>
          Because information is power in private industry. If you want to make
          sure you're choosing the right employer, and being paid what you're
          worth in your compensation meetings, then you need data from your
          peers.
        </p>
        <div className="buttonSec">
          <div>
            <a href="#mid">Form</a>
          </div>
          <div>
            <a href="#down">View Data</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
