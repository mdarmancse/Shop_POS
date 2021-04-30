import React, {Component} from 'react';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class ListTransaction extends Component {


    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            arrows:false,
            autoplaySpeed:3000,
            autoplay:false,
            slidesToShow: 6,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        infinite: true,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        const categoryList=[
            {name:'Burger'},
            {name:'Sandwitch'},
            {name:'Sharma'},
            {name:'Chicken'},
            {name:'Beef'},
            {name:'Burger'},
            {name:'Pasta'},
            {name:'Noodles'},
        ]

        const productList=[

            {
                id: 1,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 2,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 3,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 1,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 2,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 3,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 1,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 2,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 3,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },
            {
                id: 4,
                product_name:'Mobile',
                product_code:'MOB_123',
                product_category:'Gadgets',
                product_price:'5000',
                product_icon:'/navlogo.svg',
                product_remarks:'Apple',
            },



        ]


        let catView=categoryList.map((List,i)=>{
           return(
               <div>
                    <h1 className='category_name'>{List.name}</h1>

               </div>
           )

        })
        let productView=productList.map((List,i)=>{
            return(
                <div className='col-md-2 p-1 text-center col-lg-2 col-sm-3 col-3'>
                    <div className='product_card'>
                        <img className='product-img' src={List.product_icon}/>
                        <h1 className='product_name'>{List.product_name}</h1>
                        <h1 className='product_price'>{List.product_price}</h1>
                    </div>
                </div>

            )

        })

        return (
            <>
                <div className='m-4'>
                    <div className='animated zoomIn container-fluid'>


                    <Row>


                        <Col md={8} sm={12}>
                            <Card scrollable={true} clasName='scroll' style={{ width: '50rem' ,height:'30rem'}}>
                                <Card.Body>
                                    <Col md={12}>
                                    <Row>
                                        <Col md={1} className='p-1'>
                                            <button className='btn'><i className="fa fa-angle-left"/></button>
                                        </Col>
                                        <Col md={10} className='p-1'>
                                            <Slider {...settings}>
                                                {catView}
                                            </Slider>
                                        </Col>
                                        <Col md={1} className='p-1'>
                                            <button className='btn'><i className="fa fa-angle-right"/></button>
                                        </Col>

                                    </Row>
                                    </Col>
                                    <Col md={12}>
                                        <Row>
                                            {productView}
                                        </Row>



                                    </Col>



                                </Card.Body>
                            </Card>


                        </Col>
                        <Col md={4} sm={12}>
                            <Card style={{ width: '25rem' ,height:'35rem'}}>
                                <Card.Body>


                                </Card.Body>
                            </Card>


                        </Col>

                    </Row>


                    </div>

                </div>
            </>

        );
    }
}

export default ListTransaction;