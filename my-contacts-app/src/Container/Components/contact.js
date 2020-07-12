import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { GrCheckbox } from "react-icons/gr";
import { connect } from "react-redux";
import { GetContacts } from "../Actions/action";


class Contact extends React.Component {
    render() {
        console.log(this.props.contacts)
        return (
            <div key={this.props.contacts.id} className="table-header-padding">
                <div className="table-content">
                    <Row onClick={() => this.props.GetContact(this.props.contacts.id)}>
                        <Col> <GrCheckbox /> </Col>
                        <Col>{this.props.contacts.name}</Col>
                        <Col>{this.props.contacts.companyDetails} </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetContact: (id) => dispatch(GetContacts(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);