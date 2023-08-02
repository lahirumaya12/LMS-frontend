import React, { Component, Fragment } from 'react'
import { Col, Container, Modal, Row, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons'
import 'video-react/dist/video-react.css'
import { Player } from 'video-react'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';
import Loading from '../Loading/Loading';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';

class Video extends Component {

    constructor(){
        super();
        this.state={
            show:false,
            videourl:"",
            videoDes:"",
            loading:true
        }
    }
    

    componentDidMount(){

      RestClient.GetRequest(AppUrl.HomeVideo).then(result=>{
        this.setState({
          videourl:result[0]["video_url"],
          videoDes:result[0]["video_description"],
          loading:false
          
        
        });
      })
    }

    modalClose=()=>this.setState({show:false})
    modalOpen=()=>this.setState({show:true})
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    return (
      <Fragment>
        <Container className='text-center'>
        <h1 className='myservice text-center'>Videos</h1>
            <div className='bottom'></div>
            <Row>
                <Col lg={6} md={6} sm={12} className='videoText'>
                <Fade>
                    <p className='ptag'>{ ReactHtmlParser(this.state.videoDes) }</p>
                    </Fade>
                </Col>
                
                <Col lg={6} md={6} sm={12} className='videoCard'>
                <Swing>
                <FontAwesomeIcon onClick={this.modalOpen} className='iconp' icon={faVideoSlash}/>
                </Swing>
                </Col>
            </Row>
        </Container>
        
        <Modal size='lg' show={this.state.show} onHide={this.modalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Player
      poster="/assets/poster.png"
      src={this.state.videourl}
    />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.modalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      
      </Fragment>
    )
     }//end else
  }
}

export default Video