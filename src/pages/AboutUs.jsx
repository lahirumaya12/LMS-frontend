import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import AboutDes from '../components/AboutDes/AboutDes'
import Footer from '../components/Footer/Footer'
import Abouts from '../components/About/About'

class AboutUs extends Component {

componentDidMount(){
  window.scroll(0,0)
}
  render() {
    return (
     <Fragment>
        <TopNav/>
        <PageNav pagetit="About Us"/>
        <Abouts/>
        <AboutDes/>
        <Footer/>
     </Fragment>
    )
  }
}

export default AboutUs