import React, { Component } from 'react';
import { TiContacts } from "react-icons/ti";
import { AiOutlineSearch } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import {connect} from 'react-redux';
import {AddToContactClicked} from "../Actions/action";

class ContactAdd extends Component {

    render() {
        return (
            <div className="search-box-contact">
                <div className="row-padding">
                    <div className="row-contacts">
                        <Row className="justify-content-md-center">
                            <Col>
                                <TiContacts /> Contacts
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="row-padding">
                    <div className="search-box-contacts">
                        <Row>
                            <Col xs={5}>
                                <InputGroup className="mb-3" border-radius="20px">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1"><AiOutlineSearch /></InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl
                                        placeholder="Search"
                                        aria-label="Search"
                                    />
                                </InputGroup>                                                                
                            </Col>
                            <Col><button className="add-contacts-button" onClick={() => this.props.AddToContacts()}><IoIosAddCircleOutline size={30}/> Add Contacts</button></Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return{

    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        AddToContacts: () => dispatch(AddToContactClicked()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactAdd);