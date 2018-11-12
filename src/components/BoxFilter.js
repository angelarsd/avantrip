import React, {Component} from 'react';
import styled from 'styled-components';
import {numberFormatting} from '../utils'

const Box = styled.div`
    background: #FFF;
    height: 64px;
    border-radius: 3px;
    padding: 10px;
    border: 1px solid #FFF;
    -webkit-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
    -moz-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
    box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
    &:hover, &.selected{
        cursor: pointer;
        background:#F2F9FD;
        border-color: #4C92E1;
    }
`;
const Title = styled.div`
  color:#4A494B;
  font-size: 12px
`;
const Amount = styled.div`
  color: #4C92E1;
  font-weight: bold;
`;
const Edit = styled.div`
  float: right;
  padding: 10px 0;
  color: #61B5E7;
`;

class BoxFilter extends Component {
  render() {
    const {filter, selected} = this.props;
    return (
      <Box className={selected ? 'selected' : ''} onClick={() => this.props.handleFilter(filter)}>
        <Edit className='d-lg-none' onClick={(event) => this.props.editFilter(event)}>Editar</Edit>
        <Title>{filter.name}</Title>
        <Amount>desde ${numberFormatting(filter.bestPrice)}</Amount>
      </Box>
    );
  }
}

export default BoxFilter;