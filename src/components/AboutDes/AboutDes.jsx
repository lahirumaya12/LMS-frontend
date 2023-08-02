import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Wrong from '../Wrong/Wrong';
import Fade from 'react-reveal/Fade';

class AboutDes extends Component {

  constructor(){
    super();
    this.state = {
        aboutD:"...",
        loading:true,
        error:false
    }
}

componentDidMount(){

  RestClient.GetRequest(AppUrl.Info).then(result=>{
    if(result == null){
        this.setState({error:true,loading:false})
    }else{
      this.setState({aboutD:result[0]['about'],loading:false});
    }
    
  }).catch(error=>{
      this.setState({error:true})
  })
}
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else if(this.state.loading == false){
    return (
     <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={12} sm={12} md={12}>
                <Fade>
                  { ReactHtmlParser(this.state.aboutD) }
                  </Fade>
                    
                </Col>
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

export default AboutDes