import React, {Component} from 'react';
import '../../css/help.css'

class Help extends Component {
    render() {
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


                    <div className="service">


                    </div>


                    <div className="questions">


                    </div>



                    <div className="contact">


                    </div>

                </div>
            </>
        );
    }
}

export default Help;