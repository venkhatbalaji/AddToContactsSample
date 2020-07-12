import React, { Component } from 'react';
import ContactList from "./contactList";
import ContactAdd from "./contactAdd";
import { Container } from "react-bootstrap";
import AddToContactForm from "./addToContactForm";

class ContactPage extends Component {

    render() {
        return (
            <Container>
                <ContactAdd />
                <ContactList />
                <AddToContactForm /> 
            </Container>
        );
    }

};

export default ContactPage;