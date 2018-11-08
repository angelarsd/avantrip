import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header'
import Filters from './components/Filters'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
  }
  @media (min-width: 1310px) {
    .container{
      max-width: 1310px !important;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div> 
        <GlobalStyles />
        <Header />
        <Filters />        
      </div>
    );
  }
}

export default App;
