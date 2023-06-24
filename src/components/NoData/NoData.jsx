import React from "react";
import "./NoData.css";
import screem from '../../assets/screem.gif'

function NoData() {
  return (
    <>
      <div className="nodata">
        <div className="main">
          <img src={screem} alt="no data" />
        </div>
        <div className="main2">
          <h1>No Data found</h1>
        </div>
      </div>
    </>
  );
}

export default NoData;
