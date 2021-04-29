import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import DataTable from "react-data-table-component";

class ListUser extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            showEdit:false,
            deleteID:"",
            editID:""
        }
    }


    handleClose=()=>{
        this.setState({ show:false})
    }
    handleOpen=()=>{
        this.setState({ show:true})
    }


    handleCloseEdit=()=>{
        this.setState({ showEdit:false})
    }
    handleOpenEdit=()=>{
        this.setState({ showEdit:true})
    }

    deleteIconOnClick=()=>{

    }

    editIconOnClick=(e)=>{
            let  id=e.target.getAttribute('data-id').value;
            alert(id)
            this.setState({showEdit:true})
            this.setState({editID:id});
    }


    render() {
        const data = [
            {
                id: 1,
                fullname: 'Rabbil Hasan',
                username: 'Rabbil',
                roll: 'admin',
                lastactivity: '12/12/2021',
            },
            {
                id: 2,
                fullname: 'Rabbil Hasan',
                username: 'Rabbil',
                roll: 'admin',
                lastactivity: '12/12/2021',
            },
            {
                id: 3,
                fullname: 'Rabbil Hasan',
                username: 'Rabbil',
                roll: 'admin',
                lastactivity: '12/12/2021',
            },
            {
                id: 4,
                fullname: 'Rabbil Hasan',
                username: 'Rabbil',
                roll: 'admin',
                lastactivity: '12/12/2021',
            },

        ]
        const columns = [
            {
                name: 'Full Name',
                selector: 'fullname',
                sortable: true,

            },
            {
                name: 'User Name',
                selector: 'username',
                sortable: true,
            },
            {
                name: 'Roll',
                selector: 'roll',
                sortable: true,
            },
            {
                name: 'Last Activity',
                selector: 'lastactivity',
                sortable: true,
            },
            {
                name: 'Delete',
                selector: 'id',
                sortable: true,
                cell: row => <button data-id={row.id} className="btn text-danger"><i className="fa fa-trash-alt"/></button>
            },
            {
                name: 'Edit',
                selector: 'id',
                sortable: true,
                cell: row => <button onClick={this.editIconOnClick} data-id={row.id} className="btn text-primary"><i className="fa fa-edit"/></button>
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
                                            <Col><h4 className="table-title">User List</h4></Col>
                                            <Col><button onClick={this.handleOpen} className="float-end circular-btn"><i className="fa fa-plus"/></button></Col>
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

                <Modal animation={false} className="animated zoomIn" show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header>
                        <h6>Add User</h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Full Name</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">User Name</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">Roll</label>
                        <select  className="form-control form-select">
                            <option>Admin</option>
                            <option>Worker</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <button className="btn btn-site"  onClick={this.handleClose}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

                <Modal animation={false} className="animated zoomIn" show={this.state.showEdit} onHide={this.handleCloseEdit}>
                    <Modal.Header>
                        <h6>{this.state.editID} Add User </h6>
                    </Modal.Header>
                    <Modal.Body>
                        <label className="form-label">Full Name</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">User Name</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">Password</label>
                        <input className="form-control" type="text"/>
                        <label className="form-label">Roll</label>
                        <select  className="form-control form-select">
                            <option>Admin</option>
                            <option>Worker</option>
                        </select>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseEdit}>
                            Close
                        </Button>
                        <button className="btn btn-site"  onClick={this.handleCloseEdit}>
                            Save Changes
                        </button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default ListUser;