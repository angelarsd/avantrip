import React, { Component } from 'react';
import styled from "styled-components";
import { Container } from 'reactstrap';
import logo from '../assets/img/logo-avantrip.png'

const HeaderContainer = styled.div`
  background: white;
  .container{
      padding: 10px 0;
  }
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
          <Container>
              <img src={logo} alt=""/>
              <Slogan>Viajar es la guita mejor invertida</Slogan>
            </Container>
        </HeaderContainer>
      );
    }
  }
  
  export default Header;