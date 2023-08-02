import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'

class PageNav extends Component {
  render() {
    return (
        <Fragment>
        <Container fluid={true} className='topFixed p-0'>
            <div className='topFixedOverlay'>
                <Container className='topcontentPage'>
                    <Row>
                        <Col className='text-center'>
                        
                        <h4 className='topPageTit'>{this.props.pagetit}</h4>
                        
                        </Col>

                    </Row>
                </Container>
                
            </div>


        </Container>
  </Fragment>
    )
  }
}

export default PageNav