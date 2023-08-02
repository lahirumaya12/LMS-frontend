import React, { Component, Fragment } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';

class Contact extends Component {

  constructor(){
    super();
    this.state = {
      address:"...",
      email:"...",
      phone:"...",
      loading:true
    }
}

componentDidMount(){

  RestClient.GetRequest(AppUrl.FooterData).then(result=>{
    this.setState({
      address:result[0]["address"],
      email:result[0]["email"],
      termsD:result[0]["terms"],
      phone:result[0]["phone"],
      loading:false
    
    });
  })
}
sendContact(){
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let jsonOb ={name:name,email:email,message:message}
  RestClient.PostRequest(AppUrl.Contactsend,JSON.stringify(jsonOb)
  ).then(result=>{
    alert(result);
}).catch(error=>{
  alert("Error");
})
}
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <Flip top>
                    <h1 className='serviceN'>Quick Connect</h1>

                                        <Form>
                    <Form.Group>
                        <br></br>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" id='name' />
                    </Form.Group>
                    <Form.Group>
                    <br></br>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Email" id='email'/>
                    </Form.Group>
                    <Form.Group>
                    <br></br>
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} id='message' />
                    </Form.Group>
                    <br></br>
                    
                    <Button variant="primary" onClick={this.sendContact}>
                        Submit
                    </Button>
                    </Form>
                    </Flip>
                </Col>

                <Col lg={6} md={6} sm={12}>
                <Fade top>
                <h1 className='serviceN'>Discuss Now</h1>
                <p className='serviceD'>{this.state.address}</p>
                <p className='serviceD'><FontAwesomeIcon icon={faEnvelope} size='1x'/> {this.state.email}</p>
                    <p className='serviceD'><FontAwesomeIcon icon={faPhone} size='1x'/> {this.state.phone}</p>
                    </Fade>
                </Col>

            </Row>
        </Container>
      </Fragment>
    )
    }//end else
  }
}

export default Contact