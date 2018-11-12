import React, {Component} from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';
import Logo from '../components/Logo'
import Icon from "./Icons";
import {Animated} from "react-animated-css";

const HeaderContainer = styled.div`
  background: white;
   @media (max-width: 680px) {
    background: #E1020B;
    height: 50px;
   }
`;
const Cell = styled(Col)`
  padding-top: 10px;
  padding-bottom: 10px;
  @media (max-width: 680px) {
    padding: 5px !important;  
    svg.logo{
      width: 40px;
      height: 40px;
    }
  }
  path{
    fill: #E1020B !important;
    @media (max-width: 680px) {
      fill: #FFF !important;
    }
  }
`;
const Slogan = styled.span`
    color: #E1020B;
    margin-left: 12px;
    font-size: 13px;
    font-weight: bold;
    @media (max-width: 680px) {
      display: none;
    }
`;
const IconContainer = styled.div`
  float: right;
  display: none;
  padding: 5px;
  cursor:pointer;
  @media (max-width: 680px) {
    display: inline-block;
  }
`;

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Container fluid={true}>
          <Row><Cell lg={12}>
            <Animated animationIn="fadeInDown" isVisible={true} >
              <Logo /> <Slogan>Viajar es la guita mejor invertida</Slogan>
            </Animated>
            <IconContainer>
              <Icon icon="iconmenu" width={24} height={24} color="#FFF" />
            </IconContainer>
          </Cell></Row>
        </Container>
      </HeaderContainer>
    );
  }
}

export default Header;