import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Footer from '../components/Footer/Footer'
import ReactHtmlParser from 'react-html-parser';
import RestClient from '../RestApi/RestClient'
import AppUrl from '../RestApi/AppUrl'

class Course extends Component {
  constructor({match}){
    super();
    this.state={
      CoursePassedID:match.params.courseId,
      CoursePassedName:match.params.courseName,
      CourseData:[]
    }
  }
    componentDidMount(){
        window.scroll(0,0)
        
        RestClient.GetRequest(AppUrl.Coursedetails+this.state.CoursePassedID).then(result=>{
          this.setState({
            CourseData:result
            
            
          });
        })
      }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit={this.state.CoursePassedName}/>
        <CourseDetails courseall={this.state.CourseData}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default Course