import React, { useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks, addToPortfolio }) {

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then ((r => r.json()))
    .then((stockData) => setStocks(stockData))
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stockList = stocks.map((stock) => {
    return <Stock onStockClick={addToPortfolio} key={stock.id} stock={stock} />
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;

