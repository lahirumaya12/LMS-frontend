import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import AllCourses from '../components/AllCourses/AllCourses'
import Footer from '../components/Footer/Footer'
import PageNav from '../components/PageNav/PageNav'

class AllcoursePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="All Courses"/>
        <AllCourses/>
        <Footer/>
      </Fragment>
    )
  }
}

export default AllcoursePage