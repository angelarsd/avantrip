import React, {Component} from 'react';
import {Modal, ModalBody} from 'reactstrap'
import styled from 'styled-components';

const Title = styled.div`
  color:#4A494B;
  font-size: 12px
`;
const Amount = styled.div`
  color: #4C92E1;
  font-weight: bold;
`;
const Li = styled.li`
  &:hover, &.selected{
    cursor: pointer;
    background:#F2F9FD;
    border-color: #4C92E1;
  }
`;
const Close = styled.div`
  padding-left:10px;
  span{
    font-size: 32px;
  }
`;

class ModalFilters extends Component {
  render() {
    return (
      <Modal isOpen={this.props.modal} toggle={this.toggle}>
        <ModalBody>
          <Close className="close text-right" aria-label="Close" onClick={this.props.editFilter}>
            <span aria-hidden="true">×</span>
          </Close>
          <ul className="list-group">
            {this.props.filters.map((filter, index) => (
              <Li className={this.props.currentFilter.id === filter.id ? "list-group-item selected": "list-group-item"}
                  onClick={()=>this.props.handleFilter(filter)} key={index}>
                <Title>{filter.name}</Title>
                <Amount>desde ${filter.bestPrice}</Amount>
              </Li>
            ))}
          </ul>
        </ModalBody>
      </Modal>
    )
  }
}

export default ModalFilters