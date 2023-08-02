import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import AllProjects from '../components/AllProjects/AllProjects'
import Footer from '../components/Footer/Footer'

class Portfolio extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="Our Projects"/>
        <AllProjects/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Portfolio