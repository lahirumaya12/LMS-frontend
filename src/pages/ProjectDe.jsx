import React, { Component, Fragment } from 'react'
import TopNav from '../components/TopNav/TopNav'
import PageNav from '../components/PageNav/PageNav'
import Footer from '../components/Footer/Footer'
import ProjectDet from '../components/ProjectDetails/ProjectDetails'
import {useParams} from 'react-router-dom'

class ProjectDe extends Component {


  constructor({match}){
    super();
    this.state={
      ProjectPassedID:match.params.projectID,
      ProjectPassedName:match.params.projectName
    }
  }
  componentDidMount(){
    window.scroll(0,0)
    
  }
  render() {
    return (
      <Fragment>
        <TopNav/>
        <PageNav pagetit={this.state.ProjectPassedName}/>
        <ProjectDet project={this.state.ProjectPassedID}/>
        <Footer/>
      </Fragment>
    )
  }
}

export default ProjectDe