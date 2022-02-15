import React from "react";

export default function Countries() {
  let countries = ["France", "USA", "Australia", "Japan"];

  return (
    <div className="Countries">
      <div>
        {countries.map(function (country, index) {
          return <div key={index}>{country}</div>;
        })}
      </div>
    </div>
  );
}
