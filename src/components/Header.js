import React, { Component } from 'react';
import styled from "styled-components";
import { Container } from 'reactstrap';
import logo from '../assets/img/logo-avantrip.png'

const HeaderContainer = styled(Container)`
    margin: 10px 0;
`
const Slogan = styled.span`
    color: #E1020B;
    margin-left: 12px;
    font-size: 13px;
    font-weight: bold;
`

class Header extends Component {
    render() {
      return (
        <HeaderContainer>
            <img src={logo} />
            <Slogan>Viajar es la guita mejor invertida</Slogan>
        </HeaderContainer>
      );
    }
  }
  
  export default Header;