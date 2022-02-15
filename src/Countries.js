import React from "react";

export default function Countries() {
  let countries = [
    {
      name: "France",
      capital: "Paris"
    },
    {
      name: "USA",
      capital: "Washington D.C."
    },
    {
      name: "Australia",
      capital: "Canberra"
    }
  ];
  return (
    <div className="Countries">
      <div>
        {countries.map(function (country, index) {
          return (
            <div key={index}>
              The Capital city of {country.name} is {country.capital}.
            </div>
          );
        })}
      </div>
    </div>
  );
}
