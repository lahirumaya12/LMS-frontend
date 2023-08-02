import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

class Courses extends Component {

    constructor(){
        super();
        this.state={
          myData:[],
          loading:true
        }
      }
    
        componentDidMount(){
    
          RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
            this.setState({myData:result,loading:false});
          })
      }
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    const List = this.state.myData;
    const MyView =  List.map(List=>{
      return <Col lg={6} md={12} sm={12}>
      <Row>
          <Col lg={6} ms={6} sm={12} className='p-4'>
          <Zoom top>
              <img className='coursepic' src={List.small_img}/>
              </Zoom>
          </Col>

          <Col lg={6} ms={6} sm={12}  className='p-4'>
          <Zoom top>
          <h5 className='serviceN' style={{textAlign:'left'}}>{List.short_title}</h5>
          <p className='serviceD' style={{textAlign:'left'}}>{List.short_description}</p>
          <Link to={'/coursedetails/'+List.id+"/"+List.long_title} style={{float:'left'}} className='view'>View Details</Link>
          </Zoom>
          </Col>

      </Row>
   
  </Col>
    })
    return (
        
      <Fragment>
        <Container className='text-center'>
        <h1 className='myservice'>Courses</h1>
            <div className='bottom'></div>
            <Row>
                
            {MyView}
                
            </Row>
        </Container>
      </Fragment>
    )
     }//end else
  }
}

export default Courses