import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons'
import { faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import { faUserCheck } from '@fortawesome/free-solid-svg-icons'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import Zoom from 'react-reveal/Zoom';


class Summary extends Component {
  render() {
    return (
      
        <Fragment>
            
            <Container fluid={true} className='summaryBanner p-0'>
                <div className='summBannerOverlay'>

                    <Container className='text-center'>
                        <Row>
                            <Col lg={8} md={6} sm={12}>
                                <Row className="countSec">
                                    <Col>
                                    <Zoom top>
                                    <FontAwesomeIcon className='iconp' icon={faEarthAsia}/>
                                    <h1 className='countNum'>

                                    <CountUp start={0} end={45000}>
                                        {({ countUpRef, start }) => (
                                           <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                           
                                        )}
                                        </CountUp>
                                    </h1>
                                    </Zoom>

                                    <h4 className='countTitle'>Student Worldwide</h4>
                                    
                                    </Col>
                                    <Col>
                                    <Zoom top>
                                    <FontAwesomeIcon className='iconp' icon={faLaptopFile}/>
                                    <h1 className='countNum'><CountUp start={0} end={45}>
                                        {({ countUpRef, start }) => (
                                           <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                           
                                        )}
                                        </CountUp></h1></Zoom>
                                    <h4 className='countTitle'>Course Published</h4>
                                    </Col>
                                    <Col>
                                    <Zoom top>
                                    <FontAwesomeIcon className='iconp' icon={faUserCheck}/>
                                    <h1 className='countNum'><CountUp start={0} end={6200}>
                                        {({ countUpRef, start }) => (
                                           <VisibilitySensor onChange={start} delayedCall>
                                            <span ref={countUpRef} />
                                            </VisibilitySensor>
                                           
                                        )}
                                        </CountUp></h1>
                                        </Zoom>
                                    <h4 className='countTitle'>Student Reviews</h4>
                                    </Col>
                                </Row>
                            </Col>


                            <Col lg={4} md={6} sm={12}>
                                
                            <Card className='workCard'>
                            
                            <Card.Body>
                                <Card.Title className='cardTitle'>What I Have Achieved</Card.Title><br></br>
                                <Card.Text>
                                <p className='cardSub'><FontAwesomeIcon className='iconBull' icon={faCheckToSlot}/> Requirment Gathering</p>
                                <p className='cardSub'><FontAwesomeIcon className='iconBull' icon={faCheckToSlot}/> System Analysis</p>
                                <p className='cardSub'><FontAwesomeIcon className='iconBull' icon={faCheckToSlot}/> Coding Testing</p>
                                <p className='cardSub'><FontAwesomeIcon className='iconBull' icon={faCheckToSlot}/> Implementation</p>
                                </Card.Text>
                            
                            </Card.Body>
                            </Card>
                            </Col>
                        </Row>
                    </Container>
                    
                    
                </div>


            </Container>
      
      </Fragment>
    )
  }
}

export default Summary