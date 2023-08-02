import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import face from '../../asset/image/faccce.png';
import { init } from 'ityped'
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';

class About extends Component {
    componentDidMount(){
        const myEle = document.querySelector('#myEle')
        init(myEle, { showCursor: true, strings: ['Developer!', 'Online Instructor!' ],cursorChar: "|" })
      }
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
        <Flip top>
        <h1 className='myservice text-center'>About Us</h1>
            <div className='bottom'></div>
            </Flip>
            <Row>
                <Col lg={6} md={6} sm={12}>
                <Flip top>
                    <div className='about'>
                    <Zoom top>
                <img className='aboutimg' src={face}/>
                </Zoom>
                </div>
              </Flip>
                </Col>

                <Col lg={6} md={6} sm={12}>
                    <div className='aboutMeB'>
                        <h2 className='aboutDes'>Hi There, I'm</h2>
                        <h2 className='abouttit'>Lahiru Chathuranga</h2>
                        <h3 className='aboutDes'>Work as <span id="myEle"></span></h3>
                    </div>
                </Col>
            </Row>
        </Container>
      </Fragment>
    
    )
  }
}

export default About