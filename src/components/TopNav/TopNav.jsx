import React, { Component, Fragment } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import logo from '../../asset/image/logo-no-background.png'
import logo2 from '../../asset/image/logo-no-background (1).png'
import '../../asset/css/custom.css';
import '../../asset/css/responsive.css';
import '../../asset/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

class TopNav extends Component {

    constructor(){
        super();
        this.state={
            navBarTitle:"navTitle",
            navbarLogo:[logo],
            navBack:"navBackground",
            navItem:"navItem",
           
        }

    }

    onScroll=()=>{
        if(window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll',navbarLogo:[logo2],navBack:'navBackgroundScroll', navItem:'navItemScroll'})

        }else if(window.scrollY<100){
            this.setState({navBarTitle:'navTitle', navbarLogo:[logo],navBack:'navBackground', navItem:'navItem'})
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.onScroll)
    }
   
  render() {
    return (
      <Fragment>
      
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed='top' className={this.state.navBack}>
  <Navbar.Brand className={this.state.navBarTitle} ><NavLink to="/"><img src={this.state.navbarLogo} className='logo' alt='jshcghjsgj'/></NavLink></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
      
     <Nav.Link><NavLink className={this.state.navItem} to="/" activeStyle={{color:'#e8f814'}} exact>Home</NavLink></Nav.Link>
     <Nav.Link><NavLink className={this.state.navItem} to="/about" activeStyle={{color:'#e8f814'}} exact>About</NavLink></Nav.Link>
     <Nav.Link><NavLink className={this.state.navItem} to="/services" activeStyle={{color:'#e8f814'}} exact>Service</NavLink></Nav.Link>
     <Nav.Link><NavLink className={this.state.navItem} to="/allcourses" activeStyle={{color:'#e8f814'}} exact>Course</NavLink></Nav.Link>
     <Nav.Link><NavLink className={this.state.navItem} to="/portfolio" activeStyle={{color:'#e8f814'}} exact>Portfolio</NavLink></Nav.Link>
     <Nav.Link><NavLink className={this.state.navItem} to="/contact" activeStyle={{color:'#e8f814'}} exact>Contact Us</NavLink></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

      </Fragment>
    )
  }
}

export default TopNav