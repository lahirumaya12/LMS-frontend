import React, { Component, Fragment } from 'react'
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Services";
import TopNav from "../components/TopNav/TopNav";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientReview from "../components/ClientReview/ClientReview";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Welcome from '../components/Welcome/Welcome';

class Home extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
      <TopBanner/>
      <Welcome/>
      <Services/>
      <Analysis/>
      <Summary/>
      <RecentProject/>
      <ClientReview/>
      <Courses/>
      <Video/>
      <About/>
      <Footer/>
      </Fragment>
    )
  }
}

export default Home