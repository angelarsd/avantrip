import React, {Component} from 'react';
import {connect} from 'react-redux';
import LoadingBar from 'react-redux-loading-bar';
import styled, {createGlobalStyle} from 'styled-components'
import {loadFilters} from './actions/filters';
import {loadPackages} from './actions/packages';
import Header from './components/Header';
import Filters from './components/Filters';
import Packages from './components/Packages';

const GlobalStyles = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,400,900');
    font-family: 'Roboto', sans-serif !important;
    background-color: #EEEEED !important;
  }
  @media (min-width: 1310px) {
    .container{
      max-width: 1310px !important;
    }
  }
`;
const MainTitle = styled.h1`
    font-weight:100;
    text-align: center;
    color: #4A494B;
    margin: 40px 0;
    font-size: 38px;
    letter-spacing: -1px;
    b{
      font-weight: 900;
    }
`;
const Loading = styled(LoadingBar)`
  z-index: 99999;
  position:fixed;
  background-color: #E1020B;
  height: 2px;
  top: 0;
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
        <Loading progressIncrease={20}/>
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