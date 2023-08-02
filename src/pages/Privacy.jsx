import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import PrivacyDes from '../components/PrivacyDes/PrivacyDes'
import Footer from '../components/Footer/Footer'

class Privacy extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="Privacy Policy"/>
        <PrivacyDes/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Privacy