import ListCategory from "../components/listCategory";

export async function getStaticProps() {
    const data = [
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

    ]


    return {
        props:{
            data:data,

        }
    }

}

import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListProduct from "../components/listProduct";

class Product extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListProduct
                    datatabledata={this.props.data}
                />
            </div>
        );
    }
}

export default Product;