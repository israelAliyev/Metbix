import React, {Component, useState} from 'react';
import '../../css/help.css'
import {help_service_data as DataService} from "./HelpSerivceData";
import {help_questions_data as DataHelp} from "./HelpQuestionsData";

function Help() {

    const [menuItemClicked, setMenuItemClicked] = useState(0);
    const [menuItemTitle, setMenuItemTitle] = useState("Top Questions");
    const [menuContentItemClicked, setMenuContentItemClicked] = useState(0);


    console.log(menuItemClicked);

    return (
        <>
            <div className="help">

                <div className="search d-flex justify-content-between align-items-center">
                    <h1>Help</h1>

                    <div>
                        <input type="text" placeholder="For Example: How i register?"/>
                        <i className="fas fa-search"></i>
                    </div>

                </div>


                <div className="service mt-4 mb-4">

                    <p className="title">What can we assist you with today?</p>

                    <div className="w-100 d-flex justify-content-between flex-wrap">

                        {DataService.map((item) => {
                            return (

                                <a href="" className="item d-flex">
                                    <img src={item.icon} alt=""/>

                                    <div className="texts d-flex flex-column ms-2">
                                        <h5>{item.title}</h5>
                                        <p>{item.subtitle}</p>
                                    </div>
                                </a>
                            );
                        })}

                    </div>

                </div>

                <hr/>

                <div className="questions d-flex justify-content-between mt-4 mb-5 flex-wrap">

                    <div className="menu d-flex flex-column">

                        {DataHelp.map((item, index) => {
                            return (
                                <div>
                                    <label style={menuItemClicked === index ? {color: "#ff9900"} : null}
                                           onClick={() => {
                                               setMenuItemClicked(index)
                                               setMenuItemTitle(item.menu_title)
                                               setMenuContentItemClicked(0)
                                           }}>{item.menu_title}</label>
                                    <hr/>
                                </div>

                            )
                        })}
                    </div>

                    <div className="wrapper">

                        <div className="content">

                            <h4 className="title">{menuItemTitle}</h4>

                            {DataHelp[menuItemClicked].questions.map((item, index) => {

                                return (

                                    <div className="item">
                                        <div onClick={() => {
                                            setMenuContentItemClicked(index)
                                        }} className="question d-flex justify-content-between align-items-center"
                                             style={menuContentItemClicked === index ? {border: "1px solid #e6e6e6"} : null}>

                                            <p style={menuContentItemClicked === index ? {color: "#ff9900"} : null}>{item.question_title}</p>
                                            <i className={menuContentItemClicked === index ? "ri-arrow-down-s-line" : "ri-arrow-right-s-line"}/>

                                        </div>

                                        <div className={menuContentItemClicked === index ? "answer" : "answer d-none"}>

                                            {item.question_content.map((item) => {
                                                return (
                                                    <p>{item.answer}</p>
                                                )
                                            })}

                                        </div>
                                    </div>

                                );
                            })}

                        </div>
                    </div>

                </div>

                <hr/>

                <div className="contact mt-5 d-flex flex-column align-items-center">

                    <img src="/images/help/icons8-customer-support-96.png" alt=""/>

                    <h4>Contact Us</h4>

                    <p>We are with you 24 hours</p>

                    <p>You can reach us from here, send a message directly to our e-mail or number and read about
                        us.</p>
                </div>

            </div>
        </>
    );
}

export default Help;