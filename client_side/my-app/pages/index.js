export async function getStaticProps() {
    const data=[
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        },
        {
            id:'1',
            receipt_no:'111',
            receipt_date:'11/1/2021',
            qty:'11',
            total:'1100',

        }

    ]
    const columns=[
        {
            name:'Receipt',
            selector:'receipt_no',
            sortable:true,

        },
        {
            name:'Date',
            selector:'receipt_date',
            sortable:true,

        },
        {
            name:'Qty',
            selector:'qty',
            sortable:true,

        },
        {
            name:'Total',
            selector:'total',
            sortable:true,

        }

    ]
    const dataChart=[

        {
            t_date:'22/11/2021',
            income:2000,


        },
        {
            t_date:'22/11/2021',
            income:5000,

        },
        {
            t_date:'22/11/2021',
            income:3000,

        },
        {
            t_date:'22/11/2021',
            income:1000,

        },
        {
            t_date:'22/11/2021',
            income:3000,

        },
        {
            t_date:'22/11/2021',
            income:1000,

        },
        {
            t_date:'22/11/2021',
            income:6000,

        },



    ]

    return {




        props:{
            TotalTransaction:'100',
            TotalIncome:'100',
            TotalCategory:'100',
            TotalProduct:'100',
            dataChart:dataChart,
            data:data,
            columns:columns,
        }
    }

}



import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListDashboard from "../components/listDashboard";

class Index extends Component {
    render() {
        return (
            <div>
              <NavMenuDesktop/>
              <ListDashboard
                  TotalTransaction={this.props.TotalTransaction}
                TotalIncome={this.props.TotalIncome}
                TotalCategory={this.props.TotalCategory}
                TotalProduct={this.props.TotalProduct}
                  dataChart={this.props.dataChart}
                  datatabledata={this.props.data}
                  dataTablecolumns={this.props.columns}

              />
            </div>
        );
    }
}

export default Index;