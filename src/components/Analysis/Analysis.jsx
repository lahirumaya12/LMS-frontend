import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Loading from '../Loading/Loading';
import Flip from 'react-reveal/Flip';
import Shake from 'react-reveal/Shake';


class Analysis extends Component {
  

    constructor(){
        super();
        this.state = {
            data:[],
            techD:"...",
            loading:true
        }
    }

    componentDidMount(){

      RestClient.GetRequest(AppUrl.ChartData).then(result=>{
        this.setState({data:result,loading:false});
      })

      RestClient.GetRequest(AppUrl.HomeTech).then(result=>{
        this.setState({techD:result[0]['tech_description']});
      })
  }
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    var blue ="#04083E"
    return (
      <Fragment>
        <Container className='text-center'>
        <Flip left>
        <h1 className='myservice'>Technolgy Used</h1>
            <div className='bottom'></div>
            </Flip>
            <Row>
                <Col lg={6} md={12} sm={12}>
                <ResponsiveContainer width="100%" height="100%">
                <BarChart width={100} height={300} data={this.state.data}>
                    <XAxis dataKey="Technology"/>
                    <Tooltip/>
                    <Bar dataKey="Projects" fill={blue}/>
                </BarChart>
                </ResponsiveContainer>
                </Col>
                <Col  lg={6} md={12} sm={12}>
                <Shake><p className='ptag'>{ ReactHtmlParser(this.state.techD) }</p></Shake>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
     }//end else
  }
}

export default Analysis