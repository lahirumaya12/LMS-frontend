import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import RestClient from '../../RestApi/RestClient';
import AppUrl from '../../RestApi/AppUrl';
import Loading from '../Loading/Loading';
import Zoom from 'react-reveal/Zoom';

class ClientReview extends Component {

  constructor(){
    super();
    this.state={
      myData:[],
      loading:true
    }
  }

    componentDidMount(){

      RestClient.GetRequest(AppUrl.Review).then(result=>{
        this.setState({myData:result,loading:false});
      })
  }
  render() {
    if(this.state.loading == true){
      return <Loading/>
    }else{
    const List = this.state.myData;
    const MyView =  List.map(List=>{
      return <div>
           
      <Row className='text-center justify-content-center'>
          <Col lg={6} md={6} sm={12}>
          <Zoom>
              <img className='circle' src={List.client_img}/>
              <h2 className='reviewN'>{List.client_name}</h2>
          <p className='reviewD'>{List.client_description}</p>
          </Zoom>
         
          </Col>
      </Row>
      </div>
    })
    var settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        vertical:true,
        arrows:false,
        verticalSwiping:true,
        autoplay: true,
        autoPlaySpeed:2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <Fragment>
        <Container fluid={true} className='siderB'>
        <h1 className='reviewMain text-center p-5'>Testimoial</h1>
        
        <Slider {...settings}>
        {MyView}
            </Slider>

        </Container>
      </Fragment>
    )
     }//end else
  }
}

export default ClientReview