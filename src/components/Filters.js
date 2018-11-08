import React from 'react';
import styled from 'styled-components';
import background from '../assets/img/background.png';

const FilterContainers = styled.div`
    background: url(${background}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:125px;
    margin-bottom: 10px;
`

const Pretitle = styled.h2`
    font-weight:lighter;
    text-align: center;
    color: #FFF;
    font-size: 24px;
    b{
        font-weight: 700;
    }
`

const Filters = props => {
    return (
        <FilterContainers>
            <Pretitle>Los vuelos más baratos para tu estadía en <b>Miami</b></Pretitle>
        </FilterContainers>
    );
};

export default Filters;