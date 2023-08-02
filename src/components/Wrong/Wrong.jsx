import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Error from '../../asset/image/error.png'

class Wrong extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center'>
            <Row>
                <Col>
                <img className='error' src={Error}/>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Wrong