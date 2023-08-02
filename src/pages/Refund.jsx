import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import RefundDes from '../components/RefundDes/RefundDes'
import Footer from '../components/Footer/Footer'

class Refund extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="Refund Policy"/>
        <RefundDes/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Refund