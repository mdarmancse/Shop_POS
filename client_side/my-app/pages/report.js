import ListProduct from "../components/listProduct";

export async function getStaticProps() {
    const data = [
        {
            id: 1,
            invoice_no:'INV123456',
            invoice_date:'22/4/2021',
            product_name:'Mobile',
            quantity:'2',
            unit_price:'5000',
            total_price:'10000',
            seller_name:'Md Arman',

        },
        {
            id: 2,
            invoice_no:'INV123456',
            invoice_date:'22/4/2021',
            product_name:'Mobile',
            quantity:'2',
            unit_price:'5000',
            total_price:'10000',
            seller_name:'Md Arman',
        },
        {
            id: 3,
            invoice_no:'INV123456',
            invoice_date:'22/4/2021',
            product_name:'Mobile',
            quantity:'2',
            unit_price:'5000',
            total_price:'10000',
            seller_name:'Md Arman',
        },
        {
            id: 4,
            invoice_no:'INV123456',
            invoice_date:'22/4/2021',
            product_name:'Mobile',
            quantity:'2',
            unit_price:'5000',
            total_price:'10000',
            seller_name:'Md Arman',
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
import ListReport from "../components/listReport";

class Report extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListReport
                    datatabledata={this.props.data}
                />
            </div>
        );
    }
}

export default Report;