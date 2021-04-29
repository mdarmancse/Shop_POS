import React, {Component} from 'react';
import NavMenuDesktop from "../components/NavMenuDesktop";
import ListDashboard from "../components/listDashboard";

class Index extends Component {
    render() {
        return (
            <div>
              <NavMenuDesktop/>
              <ListDashboard/>
            </div>
        );
    }
}

export default Index;