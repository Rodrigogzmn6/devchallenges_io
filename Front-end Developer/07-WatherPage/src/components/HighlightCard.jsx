import React from "react";

export const HighlightCard = ({ title, data, unit, children }) => {
  return (
    <div className="hc-container rounded shadow-xl flex flex-col gap-4 items-center py-4 bg-background-3">
      <h4 className="hc-title text-3xl">{title}</h4>
      <div className="hc-data flex gap-1 items-center">
        <h2 className="text-2xl">{data}</h2>
        <h3 className="text-xl">{unit}</h3>
      </div>
      {children}
    </div>
  );
};
