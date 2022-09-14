import React, { useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [priceCheck, setPriceCheck] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function handleCategoryChange(category){
    setSelectedCategory(category)
  }

  function addToPortfolio(stock){
    //this is so we can't add the same stock to portfolio more than once
    if (portfolio.indexOf(stock) !== -1){
      setPortfolio(portfolio)
    }
    else{
      const newPortfolio = [...portfolio, stock]
      setPortfolio(newPortfolio)
    }
  }
  
  function removeStock(stock){
    const newPortfolio = portfolio.filter((asset) => asset !== stock)
    setPortfolio(newPortfolio)
  }

  const stocksFiltered = stocks
    .sort((stock1, stock2) => {
      if(priceCheck === false){
        return stock1.name.localeCompare(stock2.name)
      }
      else{return stock2.price-stock1.price}
    })
    .filter((stock) => {
      if (selectedCategory === "All") return true;
      return stock.type === selectedCategory
    })

    const portfolioFiltered = portfolio
    .sort((stock1, stock2) => {
      if(priceCheck === false){
        return stock1.name.localeCompare(stock2.name)
      }
      else{return stock2.price-stock1.price}
    })
    .filter((stock) => {
      if (selectedCategory === "All") return true;
      return stock.type === selectedCategory
    })
    

  return (
    <div>
      <SearchBar 
        selectedCategory={selectedCategory}
        handleCategoryChange={handleCategoryChange}
        priceCheck={priceCheck} 
        setPriceCheck={setPriceCheck}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer addToPortfolio={addToPortfolio} stocks={stocksFiltered} setStocks={setStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} stocks={portfolioFiltered} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
