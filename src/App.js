import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks'

class App extends Component {

    state = {
        stocks: []
    }

    componentDidMount () {
        this.renderStocks()
    }

    fetchStocks = () => {
        return fetch(API).then(res => res.json())
    }

    renderStocks = () => {
        this.fetchStocks().then((stockData) => {
            let addedStockData = stockData.map((stock) => ({ ...stock, inPortfolio: false }))
            this.setState({ stocks: addedStockData}, () => console.log(this.state.stocks))
        })
    }

    render() {
        return (
            <div>
                <Header/>
                <MainContainer stocks={this.state.stocks}/>
            </div>
        );
    }
}

export default App;
