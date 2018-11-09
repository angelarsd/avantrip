import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
    .title{
        color:#4A494B;
        font-size: 12px
    }
    .amount{
        color: #4C92E1;
        font-weight: bold;
    }
`;

class BoxFilter extends Component {
  render() {
    const {title, amount, selected} = this.props
    return (
      <Box className={selected ? 'selected' : ''}>
        <div className='title'>{title}</div>
        <div className='amount'>desde ${amount}</div>
      </Box>
    );
  }
}

BoxFilter.propTypes = {
  title: PropTypes.string
};

export default BoxFilter;