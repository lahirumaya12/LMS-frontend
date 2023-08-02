import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade';

class RecentProject extends Component {

  constructor(){
    super();
    this.state={
      myData:[],
      loading:true
    }
  }

    componentDidMount(){

      RestClient.GetRequest(AppUrl.ProjectHome).then(result=>{
        this.setState({myData:result,loading:false});
      })
  }
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{


    const List = this.state.myData;
    const MyView =  List.map(List=>{
      return <Col lg={4} md={2} sl={12}>
        <Fade>
      <Card className='cardStyle' >
          <Card.Img variant="top" src={List.img_one} />
          <Card.Body>
              <Card.Title className='serviceN'>{List.project_name}</Card.Title>
              <Card.Text className='serviceD'>
              {List.project_description}
              </Card.Text>
              <Button variant="primary"><Link to={"/projectdetails/" +List.id+"/"+List.project_name} className='linkstyle'>Visit</Link></Button>
          </Card.Body>
          </Card>
          </Fade>
      </Col>
    })
    return (
      <Fragment>
        <Container className='text-center'>
        <h1 className='myservice'>Recent Projects</h1>
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

export default RecentProject