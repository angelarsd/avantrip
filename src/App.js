import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loadFilters} from './actions/filters';
import {loadPackages} from './actions/packages';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import Filters from './components/Filters';
import Packages from './components/Packages';

import Loading from "react-loading-bar";

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
`;
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
`;

class App extends Component {

  componentWillMount() {
    this.props.loadFilters();
    this.props.loadPackages();
  }

  render() {
    return (
      <div>
        <GlobalStyles />
        <Loading show={this.props.loading} color="red" showSpinner={false} />
        <Header />
        <Filters />
        <MainTitle>Vuelos destacados en <b>todas las estadías</b></MainTitle>
        <Packages />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loading: state.filters.loading || state.packages.loading
});

export default connect(mapStateToProps, {loadFilters, loadPackages})(App)