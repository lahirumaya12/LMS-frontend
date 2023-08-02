import React, { Component, Fragment } from 'react'
import Home from '../pages/Home';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AboutUs from '../pages/AboutUs';
import AllCourses from '../pages/AllcoursePage';
import AllService from '../pages/AllService';
import ContactPage from '../pages/ContactPage';
import Portfolio from '../pages/Portfolio';
import Refund from '../pages/Refund';
import TermsPage from '../pages/TermsPage';
import Privacy from '../pages/Privacy';
import ProjectDetails from '../pages/ProjectDe';
import Course from '../pages/Course';
import PageNotFound from '../pages/PageNotFound';



class AppRouter extends Component {
 
  render() {
    
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={AboutUs}></Route>
          <Route exact path="/allcourses" component={AllCourses}></Route>
          <Route exact path="/services" component={AllService}></Route>
          <Route exact path="/contact" component={ContactPage}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/refund" component={Refund}></Route>
          <Route exact path="/terms" component={TermsPage}></Route>
          <Route exact path="/privacy" component={Privacy}></Route>
          <Route exact path="/projectdetails/:projectID/:projectName" component={ProjectDetails}></Route>
          <Route exact path="/coursedetails/:courseId/:courseName" component={Course}></Route>
          <Route component={PageNotFound}></Route>

          
          
        </Switch>

      </Fragment>
    )
  }
}

export default AppRouter