import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import Services from '../components/Services/Services'
import Footer from '../components/Footer/Footer'
import Contact from '../components/Contact/Contact'

class AllService extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="Our Services"/>
        <Services/>
        <Contact/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllService