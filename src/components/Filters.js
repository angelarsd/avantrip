import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import background from '../assets/img/background.png';
import {Col, Container, Row} from 'reactstrap';
import BoxFilter from './BoxFilter';
import ModalFilters from './ModalFilters';
import {changeFilter} from '../actions/filters';
import {Animated} from "react-animated-css";

const FilterContainers = styled.div`
    background: url(${background}) no-repeat center center; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height:125px;
    margin-bottom: 10px;
    padding-top: 25px;
`;
const PreTitle = styled.h2`
    font-weight: 100;
    text-align: center;
    color: #FFF;  
    font-size: 24px;
    margin-bottom:25px;
    margin-top:0px;
    b{
        font-weight: 900;
    }
    @media (max-width: 680px) {
     font-size: 18px;
     line-height: 18px;
    }
`;

class Filters extends Component {

  constructor(props) {
    super(props);
    this.state = {modal: false};
  }

  editFilter = (event) => {
    this.setState({modal: !this.state.modal});
    event.stopPropagation();
  };

  handleFilter = (filter) =>{
    this.props.changeFilter(filter);
    this.setState({modal: false});
  };

  render() {

    return (
      <FilterContainers>
        <Container fluid={true}>
          <PreTitle>Los vuelos más baratos para tu estadía en <b>Miami</b></PreTitle>
          <Row>
            {this.props.filters.map((filter, index) => (
              <Col lg={index === 0 ? {size: 2, offset: 1} : {size: 2}} key={index}
                   className={this.props.currentFilter.id === filter.id ? 'd-block' : 'd-none d-lg-block'}>
                  <Animated animationIn="bounceInLeft" isVisible={true} animationInDelay={index*300}>
                    <BoxFilter filter={filter} editFilter={this.editFilter} handleFilter={this.handleFilter}
                               selected={this.props.currentFilter.id === filter.id}/>
                  </Animated>
              </Col>
            ))}
          </Row>
          <ModalFilters filters={this.props.filters} modal={this.state.modal} editFilter={this.editFilter}
                        handleFilter={this.handleFilter} currentFilter={this.props.currentFilter}/>
        </Container>
      </FilterContainers>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters.data,
  currentFilter: state.currentFilter.data
});

export default connect(mapStateToProps, {changeFilter})(Filters)