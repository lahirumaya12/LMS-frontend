import React, { Component, Fragment } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import ReactHtmlParser from 'react-html-parser';

class ProjectDetails extends Component {

  constructor(props){
    super();
    this.state={
      MyProjectID:props.project,
      imgtwo:"...",
      projectname:"...",
      project_description:"...",
      project_features:"...",
      live_preview:"...",
    }
    
    
  }
  

  componentDidMount(){

    RestClient.GetRequest(AppUrl.ProjectDetails+this.state.MyProjectID).then(result=>{
      this.setState({
        imgtwo:result[0]["img_two"],
        projectname:result[0]["project_name"],
        project_description:result[0]["project_description"],
        project_features:result[0]["project_features"],
        live_preview:result[0]["live_preview"],
        
        
      });
    })
  }
  render() {
    return (
      <Fragment>
        
        <Container className='mt-5'>
            <Row>
                <Col lg={6} md={6} sm={12}>
                  <div className='about-thumb-wrap after-shape'>
                <img src={this.state.imgtwo} />
                </div>
                </Col>

                <Col lg={6} md={6} sm={12} className='mt-5'>
                  <div className='project-details'>
                    <h1 className='projectDetailstxt'>{this.state.projectname}</h1>
                    <p className='projectDeatilsDes'> { ReactHtmlParser(this.state.project_description) }</p>
                  
                    <p className='cardSub'><FontAwesomeIcon className='iconBull' icon={faCheckToSlot}/> { ReactHtmlParser(this.state.project_features) }</p>
                    <Button variant='info' href={this.state.live_preview}>Live Preview</Button>
                    
                  </div>
                
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default ProjectDetails