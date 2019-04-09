import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Stock from '../components/Stock'

class MainContainer extends Component {

    mapStocks = () => {
        return this.props.stocks.map((stock) => {
            return <Stock key={stock.id} stock={stock} />
        })
    }

    mapPortfolioStocks = () => {
        return this.props.stocks.map((stock) => {(stock.inPortfolio) ? <Stock key={stock.id} stock={stock} /> : null})
    }

    render() {
        return (
            <div>
                <SearchBar/>

                <div className="row">
                    <div className="col-8">

                        <StockContainer mapStocks={this.mapStocks}/>

                    </div>
                    <div className="col-4">

                        <PortfolioContainer mapPortfolioStocks={this.mapPortfolioStocks}/>

                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
