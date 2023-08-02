import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import designIcon from '../../asset/image/graphic-design.png'
import ecomIcon from '../../asset/image/ecommerce.png'
import webIcon from '../../asset/image/web-development.png'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';


class Services extends Component {

  constructor(){
    super();
    this.state={
      myData:[],
      loading:true
    }
  }

    componentDidMount(){

      RestClient.GetRequest(AppUrl.Services).then(result=>{
        this.setState({myData:result,loading:false});
      })
  }

  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    const List = this.state.myData;
    const MyView =  List.map(List=>{
      return <Col lg={4} md={6} sm={12}>
        <Zoom left>
      <div className='serviceCard text-center'>
       <img className="ecomIcon" src={List.service_logo}/>
       <h2 className='serviceN'>{List.service_name}</h2>
       <p className='serviceD'>{List.service_description}</p>
      </div>
      </Zoom>
      </Col>
    })


    return (
      <Fragment>
        <Container className='text-center'>
        <Flip left>
            <h1 className='myservice'>MY SERVICES</h1>
            <div className='bottom'></div>
            </Flip>
            <Row>
              {MyView}
               
              
            </Row>
        </Container>
      </Fragment>
    )
     }//end else
  }
}

export default Services