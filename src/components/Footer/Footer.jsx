import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Wrong from '../Wrong/Wrong';


class Footer extends Component {

  constructor(){
    super();
    this.state = {
      address:"...",
      email:"...",
      phone:"...",
      facebook:"...",
      youtube:"...",
      linkdin:"...",
      footer_credit:"...",
      error:false
        
    }
}

componentDidMount(){

  RestClient.GetRequest(AppUrl.FooterData).then(result=>{
    if(result == null){
      this.setState({error:true})
  }else{
    this.setState({
      address:result[0]["address"],
      email:result[0]["email"],
      termsD:result[0]["terms"],
      phone:result[0]["phone"],
      facebook:result[0]["facebook"],
      youtube:result[0]["youtube"],
      linkdin:result[0]["linkdin"],
      footer_credit:result[0]["footer_credit"]
    
    });
  }
  }).catch(error=>{
    this.setState({error:true})
})
}
  render() {
    if(this.state.error == false){
     
    return (
      <Fragment>
        <Container fluid={true} className='footer'>
            <Row>
                <Col lg={3} md={6} sm={12} className='p-5 text-center'>
                    <h2 className='footertit text-center'>Follow Us</h2>
                    <div className='social'>
                    <a className='facebook social' href={this.state.facebook}>
                        <FontAwesomeIcon icon={faFacebook} size='2x'/>
                    </a>
                    <a href={this.state.youtube} className='youtube social'>
                    <FontAwesomeIcon icon={faYoutube} size='2x'/>
                    </a>
                    <a href={this.state.linkdin} className='linkdin social'>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                    </a>
                    </div>
                </Col>

                <Col lg={3} md={6} sm={12} className='p-5 text-justify'>
                <h2 className='footertit'>Address</h2>
                <p className='footeradd'>{this.state.address}</p>
                </Col>

                <Col lg={3} md={6} sm={12} className='p-5'>
                <h2 className='footertit'>Infomation</h2>
                
                    <p className='footeradd'><FontAwesomeIcon icon={faEnvelope} size='1x'/>{this.state.email}</p>
                    <p className='footeradd'><FontAwesomeIcon icon={faPhone} size='1x'/> {this.state.phone}</p>
                
                </Col>

                <Col lg={3} md={6} sm={12} className='p-5'>
                <h2 className='footertit'>Policy & Pages</h2>
                <a href='/about' className='footerlink'>About Us</a><br></br>
                <a href='/contact' className='footerlink'>Contact Us</a><br></br>
                <a href='/courses' className='footerlink'>Courses</a><br></br>
                <a href='/privacy' className='footerlink'>Privacy Policy</a><br></br>
                <a href='/refund' className='footerlink'>Refund Policy</a><br></br>
                <a href='/terms' className='footerlink'>Terms And Conditions</a>
                </Col>
            </Row>
        </Container>
        <Container fluid={true} className='text-center copyright'>
            <a href='#' className='footerCopy'>{this.state.footer_credit}</a>

        </Container>
      </Fragment>
    )
    }//end else
    else if(this.state.error == true){
      return <Wrong/>

    } //enf if error
    
  }
}

export default Footer