import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";

class ListReport extends Component {









    printOnClick=(id)=>{

        alert(id);

    }


    render() {


        const data=this.props.datatabledata;
        const columns = [
            {
                name: 'Invoice No',
                selector: 'invoice_no',
                sortable: true,


            },
            {
                name: 'Invoice Date',
                selector: 'invoice_date',
                sortable: true,


            },
            {
                name: 'Product Name',
                selector: 'product_name',
                sortable: true,
            },


            {
                name: 'Quantity',
                selector: 'quantity',
                sortable: true,
            },
            {
                name: 'Unit Price',
                selector: 'unit_price',
                sortable: true,
            },
            {
                name: 'Total Price',
                selector: 'total_price',
                sortable: true,
            },

            {
                name: 'Seller Name',
                selector: 'seller_name',
                sortable: true,

            },
            {
                name: 'Print',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={this.printOnClick.bind(this,row.id)}  className="btn text-info"><i className="fa fa-print"/></button>
            },
        ];

        return (
            <Fragment>
                <Container className="animated zoomIn">

                    <Row className="mt-2">
                        <Col sm={12} xs={12} md={12} lg={12}>
                            <Card>
                                <Card.Body>
                                    <Container fluid={true}>
                                        <Row>


                                            <Col md={6}>
                                                <h4 className="table-title">Report</h4>
                                                <div className='input-group'>

                                                    <input type='date' className='form-control'/>

                                                    <input type='date' className='form-control mx-2'/>
                                                    <button className='btn btn-danger mx-2'>Search</button>


                                                </div>


                                            </Col>

                                        </Row>
                                    </Container>
                                    <hr className="bg-secondary"/>
                                    <Container fluid={true}>
                                        <Row>
                                            <Col sm={12} xs={12} md={12} lg={12}>
                                                <DataTable noHeader={true} paginationPerPage={5} pagination={true} columns={columns} data={data}/>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>


            </Fragment>
        );
    }
}

export default ListReport;