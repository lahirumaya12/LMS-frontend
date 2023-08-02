import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Wrong from '../Wrong/Wrong';
import Zoom from 'react-reveal/Zoom';

class AllCourses extends Component {

    constructor(){
        super();
        this.state={
          myData:[],
          loading:true,
          error:false
        }
      }
    
        componentDidMount(){
    
          RestClient.GetRequest(AppUrl.CourseAll).then(result=>{
            if(result == null){
              this.setState({error:true,loading:false})
          }else{
            this.setState({myData:result,loading:false});
          }
          }).catch(error=>{
            this.setState({error:true})
        })
      }
  render() {

    if(this.state.loading == true){
      return <Loading/>
    }else if(this.state.loading == false){

    
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
          <h5 className='serviceN' style={{textAlign:'left'}}>{List.long_title}</h5>
          <p className='serviceD' style={{textAlign:'left'}}>{List.long_description}</p>
          </Zoom>
          <Link to={'/coursedetails/'+List.id+"/"+List.long_title} style={{float:'left'}} className='view'>View Details</Link>
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
   else if(this.state.error == true){
    return <Wrong/>

  } //enf if error
  }
}

export default AllCourses