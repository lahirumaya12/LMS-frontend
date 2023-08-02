import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import NotFound from '../components/NotFound/NotFound'
import Footer from '../components/Footer/Footer'

class PageNotFound extends Component {
  render() {
    return (
     <Fragment>
        <TopNav/>
        <PageNav pagetit="Page Not Found"/>
        <NotFound/>
        <Footer/>
     </Fragment>
    )
  }
}

export default PageNotFound