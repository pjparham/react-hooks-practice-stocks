import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks }) {

  const stockList = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} />
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockList}
    </div>
  );
}

export default PortfolioContainer;
