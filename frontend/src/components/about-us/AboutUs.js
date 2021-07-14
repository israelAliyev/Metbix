import React from 'react';
import '../../css/aboutus.css'

function AboutUs(props) {
    return (
        <>

            <div className="about-us d-flex justify-content-between">


                <div className="side d-flex flex-column">

                    <div className="item d-flex">
                        <i className="bi bi-geo-alt-fill"></i>
                        <div className="texts">
                            <p>City / Country</p>
                            <p>Gakh / Azerbaijan</p>
                        </div>
                    </div>

                    <div className="item d-flex">
                        <i className="bi bi-telephone-fill"></i>
                        <div className="texts">
                            <p>Phone</p>
                            <p>+994 77 518 40 97</p>
                        </div>
                    </div>

                    <div className="item d-flex">
                        <i className="fas fa-at"></i>
                        <div className="texts">
                            <p>Email</p>
                            <p>Space.y@inbox.ru</p>
                        </div>
                    </div>

                    <div className="social-media d-flex mt-4">

                        <i className='bx bxl-facebook facebook'></i>
                        <i className='bx bxl-github github'></i>
                        <i className='bx bxl-google google'></i>
                        <i className='bx bxl-instagram instagram'></i>
                        <i className='bx bxl-linkedin linkedin'></i>
                        <i className='bx bxl-twitter twitter'></i>

                    </div>

                </div>


                <div className="contact d-flex flex-column">

                    <h3>Contact Us</h3>


                    <div className="form d-flex flex-column">

                        <label>Name</label>
                        <input type="text"/>
                        <label>Email</label>
                        <input type="text"/>
                        <label>Message</label>
                        <textarea name="" id="" cols="30" rows="10"/>


                        <button>Send</button>

                    </div>

                </div>


                <div className="about">

                    <h3>About Us</h3>


                    <p> Metbix.com was founded in April 2021 by software developer Israel Aliyev in the city of Gakh,
                        Azerbaijan. Metbix is an e-commerce site. The main purpose of Metbix is to enable people to shop
                        easily. You can operate as a user or a company on Metbix.com. The product can be sold or bought
                        safely. You can talk to the seller or the company by chat or video chat. Metbix is at your
                        service 24 hours a day.</p>


                    <h4>Developer : <span>Aliyev Israel</span></h4>

                </div>



            </div>

        </>
    );
}

export default AboutUs;