import React, { Component } from 'react';
import axios from 'axios';

class QuoteDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: []
    };
  }

  componentDidMount() {
    axios.get(`https://talaikis.com/api/quotes/random/`)
      .then(res => {
        const quote = res.data;
        this.setState({ quote })
      })};

  reLoad = () => {
    axios.get(`https://talaikis.com/api/quotes/random/`)
      .then(res => {
        const quote = res.data;
        this.setState({ quote })
      });  
  }

  render() {
    let url = '';
    return (
      <div>
        <h1>{this.state.quote.quote}</h1>
        <h2>{this.state.quote.author}</h2>
        <br/>
        <button onClick={this.reLoad}>New Quote, please!</button>
        <br/>
        <div>
        </div>
      </div>
    );
  }
}

export default QuoteDisplay;

//quote display
    //should display "quote of the day" by default 
    // GET http://quotes.rest/qod.json

//quote generation
    //should generate new random quote
    //GET http://quotes.rest/quote/random.json
