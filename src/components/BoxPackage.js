import React, {Component} from 'react';
import {Col,  Row} from 'reactstrap';
import styled from 'styled-components';

const Box = styled.div`
  background: #FFF;
  border-radius: 3px;
  -webkit-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
  -moz-box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
  box-shadow: 3px 4px 5px -2px rgba(0,0,0,0.2);
  margin-bottom: 20px;
  .content-box{
    padding: 10px;
  }
`;

class BoxPackages extends Component {
  render() {
    const {pack} = this.props;
    return (
      <Box>
        <img src={pack.img} alt="" className="img-fluid" width="100%"/>
        <div className="content-box">
          <Row>
            <Col xs={4}>{pack.scales}</Col>
            <Col xs={8} className="text-right">Precio Desde</Col>
          </Row>
          <Row>
            <Col xs={8}>{pack.description}</Col>
            <Col xs={4} className="text-right">{pack.price}</Col>
          </Row>
          <div className="text-right">
            <a className="fly-view" href={pack.link} target="_blank">Ver Vuelo</a>
          </div>
        </div>
      </Box>
    );
  }
}

export default  BoxPackages