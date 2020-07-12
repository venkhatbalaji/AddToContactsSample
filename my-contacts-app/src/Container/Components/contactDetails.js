import React from "react";
import { connect } from "react-redux";
import { Card, ListGroup } from "react-bootstrap";


class ContactDetail extends React.Component {
    render() {
        return (
            <div className="contact-details">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{this.props.item.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{this.props.item.emailId}</ListGroup.Item>
                        <ListGroup.Item>{this.props.item.phoneNumber}</ListGroup.Item>
                        <ListGroup.Item>{this.props.item.companyDetails}</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Details: state.selectedItem,
    }
}

export default connect(mapStateToProps, null)(ContactDetail);