import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

class ContactPage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
     <Fragment>
        <TopNav/>
        <PageNav pagetit="Contact Us"/>
        <Contact/>
        <Footer/>
     </Fragment>
    )
  }
}

export default ContactPage