import React from 'react';

function Notification(props) {
    return (
        <>
            {/*notification with animation and count of messages*/}
            <li onClick={() => {window.location.href = "/chat"}} className="nav-item  navbar-notification">
                <div className="wrapper">
                    <div className="bell">
                        <div
                            className="anchor material-icons layer-1"
                            style={{
                                // animation: "animation-layer-1 infinite 5000ms" ,
                                fontSize: "2.5rem",
                            }}
                        >
                            notifications_active
                        </div>
                        <div
                            className="anchor material-icons layer-2"
                            style={{
                                // animation: "animation-layer-2 infinite 5000ms" ,
                                fontSize: "2.5rem",
                            }}
                        >
                            notifications
                        </div>
                        <div
                            className="anchor material-icons layer-3"
                            style={{
                                // animation: "animation-layer-3 infinite 5000ms" ,
                                fontSize: "2.5rem",
                            }}
                        >
                            notifications
                        </div>
                        <span>-</span>
                    </div>
                </div>
            </li>
        </>
    );
}

export default Notification;