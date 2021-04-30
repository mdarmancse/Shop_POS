import ListUser from "../components/listUser";

export async function getStaticProps() {
    const data = [
        {
            id: 1,
            cat_name:'Gadgets',
            cat_code:'Gadgets',
            cat_icon:'/navlogo.svg',
        },
        {
            id: 2,
            cat_name:'Gadgets',
            cat_code:'Gadgets',
            cat_icon:'/navlogo.svg',
        },
        {
            id: 3,
            cat_name:'Gadgets',
            cat_code:'Gadgets',
            cat_icon:'/navlogo.svg',
        },
        {
            id: 4,
            cat_name:'Gadgets',
            cat_code:'Gadgets',
            cat_icon:'/navlogo.svg',
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
import ListCategory from "../components/listCategory";

class Category extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListCategory
                    datatabledata={this.props.data}
                />
            </div>
        );
    }
}

export default Category;