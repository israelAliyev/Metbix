import React, {Component} from 'react';
import Properties from "../properties/Properties";

function About(props) {

    return (
        <>

            <div className="about mt-5 bg-white">

                <p className="title">About of This Product</p>

                <table>

                    <tbody>

                    <tr>
                        <td colSpan="2" className="detail-title"><span>Product Identifiers</span></td>
                    </tr>
                    <tr>
                        <td>Department</td>
                        <td>{props.info.productDepartment ? props.info.productDepartment.department : "No Selected"}</td>
                    </tr>

                    <tr>
                        <td>Category</td>
                        <td>{props.info.productCategory ? props.info.productCategory.categoryName : "No Selected"}</td>
                    </tr>

                    <tr>
                        <td>Brand</td>
                        <td>{props.info.productBrand ? props.info.productBrand.brandName : "No Selected"}</td>
                    </tr>
                    <tr>
                        <td>Model</td>
                        <td>{props.info.productModel ? props.info.productModel.modelName : "No Selected"}</td>
                    </tr>

                    <tr>
                        <td>Quantity</td>
                        <td>{props.info.productQuantity}</td>
                    </tr>

                    <tr>
                        <td>It was sold</td>
                        <td>{new Date(props.info.productCreateDate).toDateString()}</td>
                    </tr>


                    <tr>
                        <td colSpan="2" className="detail-title"><span>Item specifics</span></td>
                    </tr>
                    <tr>
                        <td>Condition</td>
                        <td>{props.info.productStatus ? props.info.productStatus : "No Selected"}</td>
                    </tr>
                    <tr>
                        <td>Warranty</td>
                        <td>{props.info.productWarranty ? "Yes" : !props.info.productWarranty ? "No" : "No Selected"}</td>
                    </tr>
                    <tr>
                        <td>Domestic shipment</td>
                        <td>{props.info.productDomesticShipping ? "Yes" : !props.info.productDomesticShipping ? "No" : "No Selected"}</td>
                    </tr>
                    <tr>
                        <td>International shipment</td>
                        <td>{props.info.productInternationalShipping ? "Yes" : !props.info.productInternationalShipping ? "No" : "No Selected"}</td>
                    </tr>

                    <tr>
                        <td>Weight</td>
                        <td>{props.info.productWeight ? props.info.productWeight + " kg" : "No Selected"}</td>
                    </tr>

                    <tr>
                        <td>Production Year</td>
                        <td>{props.info.productYear ? props.info.productYear : "No Selected"}</td>
                    </tr>

                    </tbody>

                </table>

                <table className="mt-3">
                    <tbody>

                    <tr>
                        <td colSpan="2" className="detail-title"><span>Product Description</span></td>
                    </tr>

                    </tbody>
                </table>

                <p className="product-description">{props.info.productLongDesc ? props.info.productLongDesc : "No Selected"}</p>
            </div>

        </>
    );
}

export default About;