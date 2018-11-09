import React, { Component } from 'react';
import styled from 'styled-components';
import background from '../assets/img/background.png';
import { Container, Row, Col } from 'reactstrap';
import BoxFilter from './BoxFilter'

const FilterContainers = styled.div`
    background: url(${background}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:125px;
    margin-bottom: 10px;
    padding-top: 25px;
`

const PreTitle = styled.h2`
    font-weight:lighter;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    margin-bottom:25px;
    margin-top:0px;
    b{
        font-weight: 700;
    }
`

class Filters extends Component {
    render() {
        return (
            <FilterContainers>
                <Container fluid={true}>
                    <PreTitle>Los vuelos más baratos para tu estadía en <b>Miami</b></PreTitle>
                    <Row>
                        <Col lg={{ size: 2, offset: 1 }}>
                            <BoxFilter title="Todas las estadías" amount="26.119" selected={true} />
                        </Col>
                        <Col lg={2}>
                            <BoxFilter title="Todas las estadías" amount="26.119" />
                        </Col>
                        <Col lg={2}>
                            <BoxFilter title="Todas las estadías" amount="26.119" />
                        </Col>
                        <Col lg={2}>
                            <BoxFilter title="Todas las estadías" amount="26.119" />
                        </Col>
                        <Col lg={2}>
                            <BoxFilter title="Todas las estadías" amount="26.119" />
                        </Col>
                    </Row>
                </Container>
            </FilterContainers>
        );
    }
};

export default Filters;