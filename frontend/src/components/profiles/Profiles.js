import React from 'react';
import "../../css/searchprofiles.css";
import useQuery from "../../services/url-query-parameter/url-query-parameter";

function Profiles(props) {

    let query = useQuery();

    const name = query.get("search");

    console.log(name)

    return (
        <>

            <div className="search-profiles mb-5 mt-5">

                <div className="header w-100 mb-5 d-flex align-items-center">

                    <span/>

                    <h3>Profiles</h3>

                    <span/>

                </div>


                <div className="profiles">


                    <div className="user item">


                        <div className="name">

                            <h3>Aliyev Israel</h3>

                            <span>User</span>

                        </div>


                        <div className="image">

                            <img src="images/departments/Software.png" alt=""/>

                        </div>


                        <div className="info">

                            <p><span>Email:</span> space.y@inbox.ru</p>
                            <p><span>Country / City:</span>Azerbaijan / Baku</p>
                            <p><span>Adress:</span>Gakh</p>
                            <p><span>Other Address:</span>Tasmali</p>
                            <p><span>Phone:</span>+997 77 518 40 97</p>

                            <a><i className="ri-mail-send-line"></i> Send Message</a>

                        </div>


                    </div>


                    <div className="company item">


                        <div className="name">

                            <h3>Aliyev Israel</h3>
                            <span>Company</span>

                        </div>

                        <div className="image">
                            <img src="images/departments/Software.png" alt=""/>
                        </div>


                        <div className="info">
                            <p><span>Email:</span> space.y@inbox.ru</p>
                            <p><span>Country / City:</span>Azerbaijan / Baku</p>
                            <p><span>Adress:</span>Gakh</p>
                            <p><span>Other Address:</span>Tasmali</p>
                            <p><span>Phone:</span>+997 77 518 40 97</p>
                            <p><span>Business Type:</span>Electronics</p>
                            <p><span>Total Annue Revenue:</span>$35353242</p>
                            <p><span>Employess</span>$35353242</p>
                            <a><i className="ri-mail-send-line"></i> Send Message</a>

                        </div>

                        <div className="desc">

                            <p>MyMecra'nın sevilen programlarından Serdar Tuncer'in sunduğu "Biri Bir Gün" programında
                                Serdar Tuncer iki komşu ülkenin padişahlarının nasıl anlaştığını anlatan güzel bir
                                hikaye anlatıyor. </p>
                        </div>

                    </div>


                </div>


            </div>

        </>
    );
}

export default Profiles;

