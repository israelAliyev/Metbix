import React, {Component} from 'react';
import Overview from "./Overview";
import ProductOverview from "./ProductOverview";
import '../../css/profileuser.css'

class User extends Component {
    render() {
        return (
            <>

                <div className="profile-user p-5">

                    <header>

                        {/*profile photo and background photo*/}
                        <div className="pp-bp">

                            <img src="images/isi.jpg" alt=""/>

                            <img src="/images/isi2.jpg" alt=""/>

                        </div>

                        <div>

                            <div className="texts d-flex">

                                <div className="info d-flex flex-column">
                                    <h1>israel Aliyev</h1>
                                    <h6>Information Technology Support Specialist at 166 Yükdaşıma və Logistika</h6>
                                    <p className="d-flex">Bakü, Baki, Azerbaycan <span>Contact</span></p>
                                    <p>500+ <span>follower</span></p>
                                </div>


                                <div className="business-type d-flex flex-column">

                                    <div className="item d-flex">

                                        <img src="/images/pp10.jpeg" alt=""/>
                                        <a>Electronics</a>
                                    </div>

                                </div>

                            </div>


                            <div className="actions d-flex justify-content-between mt-3">

                                <div className="buttons d-flex">
                                    <button className="follow">Follow This Supplier</button>
                                    <button className="message"><i className="bi bi-envelope me-2"/>Send Message
                                    </button>
                                    <button className="site">Visit Comapny Site <i
                                        className="bi bi-box-arrow-up-right ms-2"/></button>
                                    <button className="share"><i className="bi bi-share-fill me-2"/> Share</button>
                                </div>

                                <div className="review d-flex">

                                    <button className="like me-3 d-flex align-items-center"><i
                                        className="ri-thumb-up-fill me-1"/> 567
                                    </button>
                                    <button className="dislike d-flex align-items-center"><i
                                        className="ri-thumb-down-fill me-1"/> 567
                                    </button>

                                </div>

                            </div>

                        </div>

                    </header>


                    <div className="body">

                        <div className="description mt-5">


                            <h3 className="title">Description</h3>

                            <p>Starting its operations as wholesale supplier since 1994, Veyseloglu Trade and Distribution
                                Company was engaged in the import of food products from the Republic of Turkey in the early
                                years of establishment. Correct targets, right choices, right decisions and joint work have
                                been leading this Company from success to success. The friendly collective and responsible
                                approach has facilitated hitting the targets.
                            </p>

                            <table>

                                <tbody>

                                <tr>
                                    <td>Website</td>
                                    <td><a href="">www.metbix.com</a></td>
                                </tr>
                                <tr>
                                    <td>Phone</td>
                                    <td><a href="">+994125143030</a></td>
                                </tr>
                                <tr>
                                    <td>Industry</td>
                                    <td>Consumer Goods</td>
                                </tr>
                                <tr>
                                    <td>Company size</td>
                                    <td>10,001+ employees</td>
                                </tr>
                                <tr>
                                    <td>Type</td>
                                    <td>Privately Held</td>
                                </tr>
                                <tr>
                                    <td>Founded</td>
                                    <td>2021</td>
                                </tr>

                                </tbody>
                            </table>

                        </div>


                        <ProductOverview/>

                    </div>


                </div>

            </>
        );
    }
}

export default User;