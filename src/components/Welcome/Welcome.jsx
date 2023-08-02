import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import one from '../../asset/image/4.png'
import two from '../../asset/image/5.png'
import three from '../../asset/image/6.png'
import four from '../../asset/image/19.png'
import five from '../../asset/image/20.png'
import six from '../../asset/image/21.png'
import Jump from 'react-reveal/Jump';
import Flip from 'react-reveal/Flip';
import Jello from 'react-reveal/Jello';

class Welcome extends Component {
  render() {
    return (
      <Fragment>
        <div className='welcometop'>
        <Container>
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className='section-title text-center'>
                        <div className='intro-area-inner'>
                            <h6 className='sub-title double-line'> Welcome</h6>
                            <Jump>
                            <h2 className='main'>An Exemplary<br></br>
Learning Community</h2>
</Jump>


                        <Container className='text-center mt-5'>
                            <Row>
                                <Col lg={4} md={6} sm={12}>
                                <Flip left>
                                    <img src={one}/>
                                    </Flip>
                                    <Jello>
                                    <h1 className='serviceN'>Easy As it Get</h1>
                                    <p className='serviceD'>Lorem ipsum dolor</p>
                                    </Jello>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                <Flip left>
                                <img src={two}/>
                                </Flip>
                                <Jello>
                                <h1 className='serviceN'>Teach The way you want</h1>
                                <p className='serviceD'>Lorem ipsum dolor</p>
                                </Jello>
                                </Col>

                                <Col lg={4} md={6} sm={12}>
                                <Flip left>
                                <img src={three}/>
                                </Flip>
                                <Jello>
                                <h1 className='serviceN'>The small matter</h1>
                                <p className='serviceD'>Lorem ipsum dolor</p>
                                </Jello>
                                </Col>

                            </Row>
                            {/* welcome footer */}
                            <Row className='intro-footer bg-base mt-5'>
                            <Col lg={4} md={6} sm={12}>
                                <Row>
                                
                                    <Col lg={6} md={6} sm={12}>
                                    
                                        <img src={four} className='sideImg'/>
                                       
                                    </Col>
                                    
                                    <Col lg={6} md={6} sm={12}>
                                    <h5 className='homeIn'>Development</h5>
                                    <p className='serD'>Lorem ipsum dolor</p>
                                    </Col>
                                </Row>


                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                    
                                        <img src={five} className='sideImg'/>
                                        
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <h5 className='homeIn'>Web Design</h5>
                                    <p className='serD'>Lorem ipsum dolor</p>
                                    </Col>
                                </Row>


                            </Col>


                            <Col lg={4} md={6} sm={12}>
                                <Row>
                                    <Col lg={6} md={6} sm={12}>
                                   
                                        <img src={six} className='sideImg'/>
                                        
                                    </Col>
                                    <Col lg={6} md={6} sm={12}>
                                    <h5 className='homeIn'>Ecommerce</h5>
                                    <p className='serD'>Lorem ipsum dolor</p>
                                    </Col>
                                </Row>


                            </Col>
                        </Row>
                        </Container>

                        

                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
      </Fragment>
    )
  }
}

export default Welcome