import React, {Component} from 'react';

class Message extends Component {
    render() {
        return (
            <>

                <div className="message">

                    <p className="title">Send your message to this supplier</p>

                    <div className="main mt-3">


                        <div className="supplier d-flex">
                            <p>To: <span>Israel</span></p>
                        </div>

                        <div className="text d-flex mt-3 mb-2">

                            <p>Message:</p>

                            <textarea
                                placeholder="Enter your inquiry details such as product name, color, size, MOQ, FOB, etc."
                                cols="75" rows="6"/>

                                <h1 className="balloon">
                                    For better quotations, include:
                                   <p>- A self introduction</p>
                                    <p>- Special requests, if any</p>
                                    </h1>

                        </div>
                        <p>Your message must be between 20-8000 characters</p>


                        <button>Send</button>
                    </div>


                </div>

            </>
        );
    }
}

export default Message;