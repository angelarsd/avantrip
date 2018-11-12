import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Container, Row} from 'reactstrap';
import BoxPackage from './BoxPackage';

class Packages extends Component {
  render() {
    let packagesFiltered = this.props.packages;
    if (this.props.currentFilter.id !== "0"){
      packagesFiltered = packagesFiltered.filter(p => p.parentId === this.props.currentFilter.id )
    }
    return (
      <Container fluid={true}>
        <Row>
          {packagesFiltered.map((pack, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key={index} >
              <BoxPackage pack={pack} index={index} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  packages: state.packages.data,
  currentFilter: state.currentFilter.data
});

export default connect(mapStateToProps, {})(Packages)