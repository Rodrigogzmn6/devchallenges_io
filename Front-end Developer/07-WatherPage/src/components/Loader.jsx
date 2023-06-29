import React from "react";
import "./Loader.css";

export const Loader = () => {
  return (
    <div id="panel-loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
