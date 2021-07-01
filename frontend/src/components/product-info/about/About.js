import React, {Component} from 'react';

class About extends Component {
    render() {
        return (
            <>

                <div className="about mt-5 bg-white">

                    <p className="title">About of This Product</p>

                    <table>

                        <tbody>

                        <tr>
                            <td colSpan="2" className="detail-title"><span>Item specifics</span></td>
                        </tr>
                        <tr>
                            <td>Condition</td>
                            <td>Fresh</td>
                        </tr>
                        <tr>
                            <td>Warranty</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>International shipment</td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>Domestic shipment</td>
                            <td>Yes</td>
                        </tr>


                        <tr>
                            <td colSpan="2" className="detail-title"><span>Product Identifiers</span></td>
                        </tr>
                        <tr>
                            <td>Brand</td>
                            <td>Apple</td>
                        </tr>
                        <tr>
                            <td>Condition</td>
                            <td>Fresh</td>
                        </tr>


                        <tr>
                            <td colSpan="2" className="detail-title"><span>Product Key Futures</span></td>
                        </tr>
                        <tr>
                            <td>Condition</td>
                            <td>Fresh</td>
                        </tr>

                        </tbody>

                    </table>

                </div>

            </>
        );
    }
}

export default About;