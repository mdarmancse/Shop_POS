import React, {Component,Fragment} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Link from "next/link";


class NavMenuDesktop extends Component {
    render() {
        return (
            <Fragment>
                <Navbar className='nav-bar sticky-top' bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img className='nav-logo' src='/navlogo.svg' alt='Nav Logo'/>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link className='text-center'>

                                <Link href='/' activeclassName='d-none'>
                                    <div className='nav-item-div' >
                                        <i className='fa fa-home mx-1'/>Dashboard


                                    </div>


                                </Link>

                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/users">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-user-alt"/>Users
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/category">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-list-ul"/>Category
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/product">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-shopping-bag"/>Product
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/transaction">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-money-bill"/>Transaction
                                    </div>
                                </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                                <Link href="/report">
                                    <div className="nav-item-div">
                                        <i className="fa mx-1 fa-file-invoice"/>Report
                                    </div>
                                </Link>
                            </Nav.Link>


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavMenuDesktop;