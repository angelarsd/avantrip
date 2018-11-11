import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Container, Row} from 'reactstrap';
import BoxPackage from './BoxPackage';

class Packages extends Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.packages.map((pack, index) => (
            <Col lg={3} md={4} sm={6} xs={12} key = {index} >
              <BoxPackage pack={pack} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  packages: state.packages.data
});

export default connect(mapStateToProps, {})(Packages)