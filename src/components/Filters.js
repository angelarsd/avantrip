import React, {Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import background from '../assets/img/background.png';
import {Col, Container, Row} from 'reactstrap';
import BoxFilter from './BoxFilter';
import ModalFilters from './ModalFilters';

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

  render() {
    return (
      <FilterContainers>
        <Container fluid={true}>
          <PreTitle>Los vuelos más baratos para tu estadía en <b>Miami</b></PreTitle>
          <Row>
            {this.props.filters.map((filter, index) => (
              <Col lg={index === 0 ? {size: 2, offset: 1} : {size: 2}} key={index}
                   className={index === 0 ? 'd-block' : 'd-none d-lg-block'}>
                <BoxFilter filter={filter} selected={false} editFilter={this.editFilter}/>
              </Col>
            ))}
          </Row>
          <ModalFilters filters={this.props.filters} modal={this.state.modal} editFilter={this.editFilter}/>
        </Container>
      </FilterContainers>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  filters: state.filters.data
});

export default connect(mapStateToProps, {})(Filters)