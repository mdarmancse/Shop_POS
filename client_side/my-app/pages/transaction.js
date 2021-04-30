import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListTransaction from "../components/listTransaction";


class Transaction extends Component {
    render() {
        return (
            <div>
                <NavMenuDesktop/>
                <ListTransaction/>
            </div>
        );
    }
}

export default Transaction;