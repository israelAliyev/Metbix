import React, {Component} from 'react';

class Questions extends Component {
    render() {
        return (
            <>
                <div className="questions">

                    <p className="title">Buyer Questions & Answers (43)</p>

                    <div>

                        <ul>

                            <li className="ask-item">

                                <div className="d-flex align-items-center">
                                    <img width="20" height="19" src="/images/question.png" alt=""/>
                                    <p className="ask-content fw-bold">Hello. Set how many walkie-talkies come in?</p>
                                </div>

                                <ul className="answer-box mb-1">
                                    <li className="answer-item">
                                        <div className="d-flex align-items-center">
                                            <img width="20" height="18" src="/images/answer.png" alt=""/>
                                            <p className="answer-content">2 (2 walkie-talkies) included. Often, judging
                                                by the reviews, the seller as a gift puts a disk with software and
                                                cable.</p>
                                        </div>
                                    </li>
                                </ul>

                                <hr/>
                            </li>

                        </ul>
                    </div>

                </div>
            </>
        );
    }
}

export default Questions;