import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { GrCheckbox } from "react-icons/gr";
import { connect } from 'react-redux';
import Contact from './contact';
import ContactDetail from "./contactDetails";



class ContactList extends Component {

    render() {
        return (
            <div>
                <div className="row-padding">
                    <div className="table-header-padding">
                        <div className="table-header">
                            <Row>
                                <Col> <GrCheckbox /> </Col>
                                <Col> Basic Info </Col>
                                <Col> Company Name </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                {this.props.contactList.map((contacts)=>{
                    return(
                        <Contact key={contacts.id} contacts={contacts} />
                    );
                })}
                {this.props.selectedItem.length > 0 ? this.props.selectedItem.map((item) => { return(<ContactDetail key={item.id} item={item}/>)}) : null }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        contactList: state.contactDeatils,
        selectedItem: state.selectedItem
    }
}


export default connect(mapStateToProps, null)(ContactList);