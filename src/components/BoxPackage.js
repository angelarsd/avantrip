import React, {Component} from 'react';
import {Col, Row} from 'reactstrap';
import styled from 'styled-components';
import Icon from './Icons';
import {numberFormatting} from '../utils'
import { UncontrolledTooltip } from 'reactstrap';

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
const Scales = styled.span`
  font-size: 12px;
  margin-left: 5px;
`;
const PriceTitle = styled.div`
  font-size: 12px;
  text-align: right;
`;
const Description = styled.div`
  font-size: 20px;
  font-weight: 900;
  color: #E1020B;
  height: 30px;
  overflow:hidden;
  white-space:nowrap;
  text-overflow: ellipsis;
  margin-right: -10px;
  cursor: default;
`;
const PriceAmount = styled.div`
  font-size: 22px;
  font-weight: 900;
  color: #E1020B;
  text-align: right;
  margin-left: -10px;
`;
const ColCustom = styled(Col)`
  height: 14px;
`;
const FlyView = styled.div`
  padding-top: 10px;
  a{
    color: #61B5E7;
    text-transform: uppercase;
    font-size: 14px;
  }
`;
const Tooltip = styled(UncontrolledTooltip)`
  font-size: 12px !important;
`;

class BoxPackages extends Component {
  render() {
    const {pack, index} = this.props;
    return (
      <Box>
        <img src={pack.img} alt="" className="img-fluid" width="100%"/>
        <div className="content-box">
          <Row>
            <ColCustom xs={5}>
              <Icon icon="airplane" width={14} height={14} />
              <Scales>{pack.scales}</Scales>
            </ColCustom>
            <Col xs={7}><PriceTitle>Precio Desde</PriceTitle></Col>
          </Row>
          <Row>
            <Col xs={7}>
              <Description id={'Tooltip-'+index}>{pack.description}</Description>
              <Tooltip placement="bottom" target={'Tooltip-'+index}>
                {pack.description}
              </Tooltip>
            </Col>
            <Col xs={5}><PriceAmount>${numberFormatting(pack.price)}</PriceAmount></Col>
          </Row>
          <FlyView className="text-right">
            <a href={pack.link} target="_blank" rel="noopener noreferrer" >Ver Vuelo</a>
          </FlyView>
        </div>
      </Box>
    );
  }
}

export default  BoxPackages