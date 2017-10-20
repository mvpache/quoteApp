import React, { Component } from 'react';

class QuoteDisplay extends Component {
  render() {
    return (
      <div>
        API Request here
      </div>
    )
  }
};

export default QuoteDisplay;

//quote display
    //should display "quote of the day" by default 
    // GET http://quotes.rest/qod.json

//quote generation
    //should generate new random quote
    //GET http://quotes.rest/quote/random.json
