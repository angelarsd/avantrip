import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header'
import Filters from './components/Filters'

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto', sans-serif;
    background-color: #EEEEED !important;
  }
  @media (min-width: 1310px) {
    .container{
      max-width: 1310px !important;
    }
  }
`
const MainTitle = styled.h1`
    font-weight:lighter;
    text-align: center;
    color: #4A494B;
    margin: 40px 0;
    font-size: 38px;
    letter-spacing: -1px;
    b{
      font-weight: 800;
    }
`

class App extends Component {
  render() {
    return (
      <div> 
        <GlobalStyles />
        <Header />
        <Filters />
        <MainTitle>Vuelos destacados en <b>todas las estadías</b></MainTitle>
      </div>
    );
  }
}

export default App;
