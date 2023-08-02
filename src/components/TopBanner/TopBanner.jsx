import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import axios from 'axios';
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade';


class TopBanner extends Component {

  constructor(){
    super();
    this.state={
      title:"",
      subtitle:"",
      loaderClass:"text-center",
      mainDiv:"d-none"
    }
  }


  componentDidMount(){

    RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
      this.setState({title:result[0]['home_title'],subtitle:result[0]['home_subtitile'],loaderClass:"d-none",mainDiv:"text-center"});
    }).catch(error=>{
      this.setState({title:"....", subtitle:"..."})
  });
    


  }
  render() {
    return (
      <Fragment>
            <Container fluid={true} className='topBanner p-0'>
                <div className='topBannerOverlay'>
                    <Container className='topcontent'>
                        <Row>
                          <Col className={this.state.loaderClass}>
                          <Loading/>
                          </Col>
                            <Col className={this.state.mainDiv}>
                            <Fade top>
                            <h1 className='toptitle'>{this.state.title}</h1>
                            <h4 className='topsub'>{this.state.subtitle}</h4>
                            </Fade>
                            <Button variant="primary">Learn More</Button>
                            </Col>

                        </Row>
                    </Container>
                    
                </div>


            </Container>
      </Fragment>
    )
  }
}

export default TopBanner 