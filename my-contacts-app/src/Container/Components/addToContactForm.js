import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormControl } from "react-bootstrap";
import { connect } from 'react-redux';
import { CloseAddToContact } from '../Actions/action';
import {PhoneNumberValidation, EmailValidation, NameValidation, CompanyNameValidation} from '../Utility/utility';
import {AddContacts} from '../Actions/action';


class AddToContactForm extends Component {
    render() {
        const handleClick = () => {
            const fullName = document.getElementById("name-Id").value.toUpperCase();
            const emailId = document.getElementById("emailId-Id").value;
            const phoneNumber = document.getElementById("phoneNumber-Id").value;
            const companyDetails = document.getElementById("companyDetails-Id").value;
            if(PhoneNumberValidation(phoneNumber) && EmailValidation(emailId) && NameValidation(fullName) && CompanyNameValidation(companyDetails)){
               const payload = {
                id:2,
                name: fullName,
                emailId: emailId,
                phoneNumber: phoneNumber,
                companyDetails: companyDetails
               }
               console.log("in")
               this.props.AddContacts(payload);
               this.props.CloseForm()
            }else{
                
            }
        }
        return (
            <div>
                <Modal show={this.props.AddToContact} onHide={this.props.CloseForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Name</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id = "name-Id"
                                type = "text"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Email Id</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id = "emailId-Id"
                                type = "text"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Phone Number</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id = "phoneNumber-Id"
                                type = "text"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroup-sizing-default">Company Details</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                id = "companyDetails-Id"
                                type = "text"
                                aria-label="Default"
                                aria-describedby="inputGroup-sizing-default"
                            />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.CloseForm}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={() => handleClick()}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        AddToContact: state.addToContact,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CloseForm : () => dispatch(CloseAddToContact()),
        AddContacts : (payload) => dispatch(AddContacts(payload)) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToContactForm);