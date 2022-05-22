import React, {useState , useEffect} from 'react';
import '../../css/chat.css'

function Chat(props) {

    const [showMiddle, setShowMiddle] = useState(false);
    const [showRightNavbar, setShowRightNavbar] = useState(false);
    const [showAnswerMessage, setShowAnswerMessage] = useState(false);

    const prevPage = () => {
        showRightNavbar === true ? setShowRightNavbar(false) : showMiddle === true ? setShowMiddle(false) : window.location.href = "http://localhost:3000/";
    }



    return (

        <>

            <div className="chat-component d-flex flex-column">

                <div className="head-navbar d-flex align-items-center">


                    <i onClick={prevPage} className="fas fa-chevron-left"/>


                    <div className="logo d-flex align-items-center ">
                        <img src="images/chat/chat.svg" alt="" className="me-2"/>
                        <div className="texts d-flex align-items-center">
                            <img src="images/chat/metbix.png" alt=""/>
                            <img src="images/chat/messenger.png" alt="" className="mt-1"/>
                        </div>
                    </div>

                    <i className="fas fa-home"></i>
                </div>

                <div className="body d-flex overflow-hidden">

                    <div className={`left-navbar ${showMiddle === true ? `hide-left-navbar` : null}`}>

                        <div className="header d-flex align-items-center justify-content-between flex-wrap">

                            <div className="profile d-flex align-items-center">
                                <img src="/images/isi.jpg" alt=""/>
                                <h1>Chats</h1>
                            </div>

                            <div className="operations d-flex align-items-center">
                                <i  className="bi bi-archive-fill"/>
                                <svg viewBox="0 0 36 36" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4" height="24"
                                     width="24">
                                    <path d="M22.278 25.778a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z"/>
                                    <path
                                        d="M28.734 20.414c-.071.32-.435.463-.735.331A5.5 5.5 0 0020.745 28c.133.3-.011.664-.33.735-.778.174-1.586.266-2.415.266-6.075 0-11-4.925-11-11S11.925 7 18 7s11 4.925 11 11c0 .83-.092 1.637-.266 2.414z"/>
                                </svg>

                                <svg viewBox="0 0 36 36" className="a8c37x1j ms05siws hwsy1cff b7h9ocf4" height="28"
                                     width="28">
                                    <path
                                        d="M17.305 16.57a1.998 1.998 0 00-.347.467l-1.546 2.87a.5.5 0 00.678.677l2.87-1.545c.171-.093.328-.21.466-.347l8.631-8.631a1.5 1.5 0 10-2.121-2.122l-8.631 8.632z"/>
                                    <path
                                        d="M18 10.5a1 1 0 001-1V9a1 1 0 00-1-1h-6a4 4 0 00-4 4v12a4 4 0 004 4h12a4 4 0 004-4v-6a1 1 0 00-1-1h-.5a1 1 0 00-1 1v6a1.5 1.5 0 01-1.5 1.5H12a1.5 1.5 0 01-1.5-1.5V12a1.5 1.5 0 011.5-1.5h6z"/>
                                </svg>
                            </div>

                            <div className="search">
                                <i className="bi bi-search"></i>
                                <input placeholder="Search Messenger" type="text"/>

                            </div>

                        </div>


                        <div className="messengers d-flex flex-column">

                            <div className="person d-flex align-items-center cursor-pointer justify-content-between">

                                <div onClick={() => {
                                    setShowMiddle(true)
                                }} className="profile d-flex align-items-center">
                                    <div className="profile-image">
                                        <img src="/images/isi.jpg" alt=""/>
                                        <img src="/images/chat/active.svg" alt=""/>
                                    </div>

                                    <div className="texts d-flex flex-column">
                                        <h5>Facebook User</h5>

                                        <p>You: Salam Aleykum <span>40m</span></p>
                                    </div>
                                </div>

                                <i className="bi bi-three-dots options"/>

                                <i className="bi bi-circle-fill new-message info-message"/>
                                {/*<i className="bi bi-check2-circle"></i>*/}
                                {/*<i className="bi bi-eye"></i>*/}
                                {/*<i className="bi bi-eye-slash"></i>*/}

                            </div>


                        </div>

                    </div>


                    <div
                        className={`middle d-flex flex-column justify-content-between ${showMiddle === true && showRightNavbar === false ? `show-middle` : null} `}>

                        <div className="profile-call d-flex align-items-center justify-content-between">

                            <div onClick={() => {
                                setShowRightNavbar(true)
                            }} className="profile d-flex align-items-center">
                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                    <img src="/images/chat/active.svg" alt=""/>
                                </div>

                                <div className="texts d-flex flex-column">
                                    <h5>Facebook User</h5>

                                    <p>Active 8h ago</p>
                                </div>
                            </div>


                            <div className="call d-flex align-items-center">
                                <i className="fas fa-phone-alt"/>
                                <i className="fas fa-video"/>
                                <i className="fas fa-ellipsis-h"/>
                            </div>

                        </div>


                        <div className="messages-body w-100 d-flex flex-column">

                            <div className="profile w-100 d-flex flex-column align-items-center mb-5">
                                <img src="/images/isi.jpg" alt=""/>

                                <p>Metbix</p>
                                <p>You are following</p>
                                <p>Lives in Imisli, Imişli, Azerbaijan</p>
                            </div>


                            <div className="date w-100 d-flex align-items-center justify-content-center">
                                <p>1/8/18, 5:28 PM</p>
                            </div>

                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="texts">

                                    <div className="item d-flex">
                                        <p>dsggdgsdgdsd sggdgsd gdsdsggdg sdgdsds ggdgsdgds dsggdgsdgdsd sggdgsd
                                            gdsdsggdg sdgdsds ggdgsdgds dsggdgsdgdsd sggdgsd gdsdsggdg sdgdsds ggdgsdgds
                                            sdf sdf</p>

                                        {/*answer and delete */}
                                        <div className="answer-delete align-self-center ">
                                            <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                            <i className="fas fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="item d-flex">
                                        <p>dsggdgsdgdsd sggdgsd gdsdsggdg sdgdsds ggdgsdgds</p>
                                        {/*answer and delete */}
                                        <div className="answer-delete align-self-center">
                                            <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                            <i className="fas fa-trash"></i>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">

                                    <div className="video-chat d-flex align-items-center">

                                        {/*<i className="ri-video-download-line missed-video-chat"/>*/}
                                        <i className="ri-video-download-line"/>

                                        <div className="texts d-flex flex-column">
                                            <h6>Video chat</h6>
                                            <p>8 mins</p>
                                        </div>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">
                                    <div className="video-chat d-flex align-items-center missed-video-chat">

                                        <i className="ri-video-download-line "/>

                                        <div className="texts d-flex flex-column">
                                            <h6>Missed Video chat</h6>
                                            <p>8 mins</p>
                                        </div>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">

                                    <div className="like">
                                        <i className="ri-thumb-up-fill"></i>
                                    </div>


                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">
                                    <div className="image">
                                        <img src="/images/departments/Software.png" alt=""/>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="item d-flex">

                                    <div className="video">
                                        <video autoPlay={true} controls={true} loop={true} src="/images/car.mp4"
                                               alt=""/>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="item d-flex">

                                    <div className="audio">
                                        <audio controls>
                                            <source src="/sounds/ertugrul.mp3" type="audio/mp3"/>
                                        </audio>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="date w-100 d-flex align-items-center justify-content-center">
                                <p>Fri, 5:28 PM</p>
                            </div>


                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="texts">

                                    <div className="item d-flex">
                                        <p>dsggdgsdgdsd sggdgsd gdsdsggdg sdgdsds ggdgsdgds dsggdgsdgdsd sggdgsd
                                            gdsdsggdg sdgdsds ggdgsdgds dsggdgsdgdsd sggdgsd gdsdsggdg sdgdsds ggdgsdgds
                                            sdf sdf</p>
                                        {/*answer and delete */}
                                        <div className="answer-delete align-self-center ">
                                            <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                            <i className="fas fa-trash"></i>
                                        </div>
                                    </div>
                                    <div className="item d-flex">
                                        <p>Azerbaycan netersen?</p>
                                        {/*answer and delete */}
                                        <div className="answer-delete align-self-center">
                                            <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                            <i className="fas fa-trash"></i>
                                        </div>
                                    </div>

                                </div>


                            </div>


                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">

                                    <div className="video-chat d-flex align-items-center">

                                        {/*<i className="ri-video-download-line missed-video-chat"/>*/}
                                        <i className="ri-video-upload-line"/>

                                        <div className="texts d-flex flex-column">
                                            <h6>Video chat</h6>
                                            <p>8 mins</p>
                                        </div>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">
                                    <div className="video-chat d-flex align-items-center missed-video-chat">

                                        <i className="ri-video-upload-line "/>

                                        <div className="texts d-flex flex-column">
                                            <h6>Missed Video chat</h6>
                                            <p>8 mins</p>
                                        </div>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">

                                    <div className="like">
                                        <i className="ri-thumb-up-fill"></i>
                                    </div>


                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>


                                <div className="item d-flex">
                                    <div className="image">
                                        <img src="/images/departments/Software.png" alt=""/>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>
                                </div>
                            </div>


                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="item d-flex">

                                    <div className="video">
                                        <video autoPlay={true} controls={true} loop={true} src="/images/car.mp4"
                                               alt=""/>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>

                            <div className="my-messages-group messages-group d-flex w-100 mb-4">

                                <div className="profile-image">
                                    <img src="/images/isi.jpg" alt=""/>
                                </div>

                                <div className="item d-flex">

                                    <div className="audio">
                                        <audio controls>
                                            <source src="/sounds/ertugrul.mp3" type="audio/mp3"/>
                                        </audio>
                                    </div>

                                    {/*answer and delete */}
                                    <div className="answer-delete align-self-center">
                                        <i onClick={()=> {setShowAnswerMessage(true)}} className="fas fa-reply"></i>
                                        <i className="fas fa-trash"></i>
                                    </div>

                                </div>
                            </div>


                        </div>


                        <div className={`answer-message ${showAnswerMessage === true ? `d-flex` : `d-none`} justify-content-between flex-wrap`}>

                            <span>Replying to <span>Elchin</span> </span>
                            <i className="bi bi-x-lg cursor-pointer" onClick={()=> {setShowAnswerMessage(false)}}/>
                            <p>Üzürlü say o gün insatgramda da yazmısan gördüm, cavab vermək yaddan çıx…</p>

                        </div>

                        <div className="send-message d-flex align-items-center">
                            <i className="bi bi-image"></i>
                            <i className="ri-file-3-fill"></i>

                            <div className="message d-flex align-items-center">
                                <input type="text" placeholder="Aa"/>
                                <i className="ri-thumb-up-fill"></i>
                            </div>

                            <i className="bi bi-mic-fill"></i>
                            {/*<i className='bx bxs-send'></i>*/}
                        </div>

                    </div>


                    <div className={`right-navbar  ${showRightNavbar === true ? `show-right-navbar` : null} `}>


                        <div className="profile d-flex flex-column align-items-center w-100">
                            <div className="profile-image">
                                <img src="/images/isi.jpg" alt=""/>
                                <img src="/images/chat/active.svg" alt=""/>
                            </div>

                            <div className="texts d-flex flex-column align-items-center">
                                <h5>Facebook User</h5>

                                <p>Active 8h ago</p>
                            </div>
                        </div>


                        <div className="messenger-operations w-100">


                            <div className="operation">

                                <div className="title">
                                    <h6>Information</h6>
                                    <i className="fas fa-chevron-down"></i>
                                </div>


                                <div className="item">
                                    <i className="bi bi-envelope-fill"></i>
                                    <p>space.y@inbox.ru</p>
                                </div>
                                <div className="item">
                                    <i className="bi bi-telephone-fill"></i>
                                    <p>+994 77 518 40 97</p>
                                </div>

                                <div className="item">
                                    <i className="bi bi-geo-fill"></i>
                                    <p>Azerbaijan Gakh</p>
                                </div>

                            </div>

                            <div className="operation">

                                <div className="title">
                                    <h6>Privacy & Support</h6>
                                    <i className="fas fa-chevron-down"></i>
                                </div>

                                <div className="item cursor-pointer">
                                    <i className="bi bi-bell-slash-fill"></i>
                                    <p>Mute Conversation</p>
                                </div>

                            </div>

                            <div className="operation w-100">

                                <div className="title">
                                    <h6>Shared Media</h6>
                                    <i className="fas fa-chevron-down"></i>
                                </div>


                                <div className="medias w-100 d-flex justify-content-between flex-wrap">

                                    <div className="media-item">
                                        <img src="/images/departments/Software.png" alt=""/>
                                    </div>
                                    <div className="media-item">
                                        <img src="/images/departments/Software.png" alt=""/>
                                    </div>
                                    <div className="media-item">
                                        <video controls={true} src="/images/car.mp4" autoPlay={true} loop={true}/>
                                    </div>


                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </>
    );
}

export default Chat;