import React, { Component, Fragment } from 'react'
import { Col, Container, Row , Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faClockFour } from '@fortawesome/free-solid-svg-icons'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faTag } from '@fortawesome/free-solid-svg-icons'
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons'
import { Player } from 'video-react'
import 'video-react/dist/video-react.css'
import ReactHtmlParser from 'react-html-parser';


class CourseDetails extends Component {

  constructor(props){
    super();

  }
  render() {
    let Long_title = "";
    let Long_description = "";
    let Total_duration = "";
    let Total_lecture = "";
    let Total_students = "";
    let Skill_all = "";
    let Video_url = "";
    let Small_img = "";

    let CourseDeArray = this.props.courseall;

    if(CourseDeArray.length == 1){
      Long_title = CourseDeArray[0]['long_title'];
      Long_description = CourseDeArray[0]['long_description'];
      Total_duration = CourseDeArray[0]['total_duration'];
      Total_lecture = CourseDeArray[0]['total_lecture'];
      Total_students = CourseDeArray[0]['total_students'];
      Skill_all = CourseDeArray[0]['skill_all'];
      Video_url = CourseDeArray[0]['video_url'];
      Small_img = CourseDeArray[0]['small_img'];
     

    }
   


    return (
      <Fragment>
        <Container className='mt-5'>
            <Row>
                <Col lg={8} md={6} sm={12}>
                <h1 className='courseDetailsHead'>{Long_title}</h1>
                <img className='imgCourseDetails' src={Small_img}/>
                <br></br><br></br>
                <p className='CourseAlldes'>{ ReactHtmlParser(Long_description) }</p>
                </Col>

                <Col lg={4} md={6} sm={12}>
                <div className="widget_feature">
                            <h4 class="widget-title text-center">Course Features</h4>
                            <hr></hr>                                 
                            <ul>
                                <li><FontAwesomeIcon  icon={faEarthAsia}/><span> Enrolled :</span> {Total_students}</li>
                                <li><FontAwesomeIcon  icon={faClockFour}/><span> Duration :</span> {Total_duration}</li>
                                <li><FontAwesomeIcon  icon={faNoteSticky}/><span> Lectures :</span> {Total_lecture}</li>
                                <li><FontAwesomeIcon  icon={faLayerGroup}/><span> Categories:</span> Technology</li>
                                <li><FontAwesomeIcon  icon={faTag}/><span> Tags:</span> Android, JavaScript</li>
                                <li><FontAwesomeIcon  icon={faPersonChalkboard}/><span> Instructor:</span> Ethan Dean</li>
                            </ul>
                            <div class="price-wrap text-center">
                                <h5>Price:<span><b> $54.00</b></span></h5>
                                
                                <Button variant="warning">ENROLL COURSE</Button>
                            </div>
                        </div>
                </Col>
            </Row>
        </Container>
        <br></br><br></br>
        <Container>
            <Row>
                <Col lg={6} md={6} sm={12} className='mt-3'>
                    <div className='widget_feature'>
                    <h1 className='courseDetailsHead m-3'>Skill You Need</h1>
                    <hr/>
                    <ul>
                        <li><FontAwesomeIcon  icon={faEarthAsia}/> {Skill_all}</li>
                        
                    </ul>
                    </div>
                </Col>
                <Col lg={6} md={6} sm={12} className='mt-3'>
                <Player
      poster="/assets/poster.png"
      src={Video_url}
    />
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default CourseDetails