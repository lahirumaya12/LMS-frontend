import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

class NotFound extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col className='text-center'>
                <h1 className='myservice'>Page is Not Found</h1>
                <h1 className='notfound'>404</h1>
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NotFound