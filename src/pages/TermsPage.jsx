import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import Terms from '../components/Terms/Terms'
import Footer from '../components/Footer/Footer'

class TermsPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit="Terms And Conditions"/>
        <Terms/>
        <Footer/>
      </Fragment>
    )
  }
}

export default TermsPage