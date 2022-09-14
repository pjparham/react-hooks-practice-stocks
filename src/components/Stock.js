import React from "react";

function Stock({ stock, addToPortfolio }) {
  const {ticker, name, type, price} = stock

  return (
    <div onClick={(stock) => addToPortfolio(stock)}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
