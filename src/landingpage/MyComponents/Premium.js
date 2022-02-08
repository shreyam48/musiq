import React, { Component } from 'react'
import Modal, { ModalHeader, ModalBody, ModalFooter } from '../MyComponents/Modal';

class Premium extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ modal: !this.state.modal });
    }
    render() {
        return (
            <>
                <div className="premium text-center" id="premium" >
                    <h2 className="py-5">Get Premium for the whole family!</h2>
                    <h3 className="text-center text-light">Family members living under one roof can enjoy up to 6 Premium accounts. <br /> One-time plans from ₹199</h3>
                    <br />
                    <button type="button" className="btn2 text-center" onClick={this.toggle}>GET PREMIUM FAMILY</button>
                </div>



                <Modal isOpen={this.state.modal}>
                    <div style={{ color: '#E5E5E5', backgroundColor: '#011134', padding: '0 30px' }}>
                        <ModalHeader>
                            <div style={{ padding: '40px 0 0' }}>
                                <button
                                    type="button"
                                    className="close close-btn"
                                    aria-label="Close"
                                    onClick={this.toggle}
                                >
                                    <span aria-hidden="true" style={{ color: 'white' }}>&times;</span>
                                </button>
                                <h5 className="modal-title">Pick your Premium</h5>
                                <h6 className="modal-title-desc">Listen without limits on your phone, speaker, and other devices.</h6>

                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="body-modal">
                                <h6 font-weight-bold>MINI: </h6>
                                <p>One-time plans from ₹7 (1 account)</p>
                                <h6 font-weight-bold>INDIVIDUAL: </h6>
                                <p>One-time plans from ₹129. Auto-renew plans temporarily unavailable. (1 account)</p>
                                <h6 font-weight-bold>DUO: </h6>
                                <p>One-time plans from ₹165. Auto-renew plans temporarily unavailable. (2 accounts)</p>
                                <h6 font-weight-bold>FAMILY: </h6>
                                <p>One-time plans from ₹199. Auto-renew plans temporarily unavailable. (Up to 6 accounts)</p>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <div >
                                <button
                                    type="button"
                                    className="btn btn-secondary" style={{ borderRadius: "5px", padding: '0px 20px ' }}
                                    onClick={this.toggle}
                                >
                                    Close
                                </button>
                            </div>
                        </ModalFooter>
                    </div>
                </Modal>
            </>
        )
    }
}

export default Premium