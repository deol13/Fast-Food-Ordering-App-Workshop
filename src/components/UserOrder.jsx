import React from "react";

const UserOrder = () => {
    // This component displays the user's order
    // mt-2: margin-top: 2rem
    // mb-4: margin-bottom: 4rem
    return (
        <div className="container-fluid mt-2">
            <h2 className="mb-4">Your Order</h2>
            <div className="card">
                <div className="col-md-12">
                    <div className="card-body">
                        <div className="row">
                            {/* Placeholders for order summary */}
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="card-text">Cheeseburger</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className="btn btn-primary">+</button>
                                    <p className="card-text ms-2 me-2">1</p>
                                    <button className="btn btn-primary">-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">$0.00</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="card-text">Pizza</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className="btn btn-primary">+</button>
                                    <p className="card-text ms-2 me-2">1</p>
                                    <button className="btn btn-primary">-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">$0.00</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-4 ">
                                    <p className="card-text">French Fries</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className="btn btn-primary">+</button>
                                    <p className="card-text ms-2 me-2">1</p>
                                    <button className="btn btn-primary">-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">$0.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                            <p className="card-text">Total: $0.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
/*
<div className="col-md-4">
                                <h5 className="card-title">Order details</h5>
                                <p className="card-text">Cheeseburger</p>
                                <p className="card-text">Pizza</p>
                                <p className="card-text">French Fries</p>
                            </div>
                            <div className="col-md-4">
                                <hr/>
                                <button className="btn btn-primary">+</button>
                                <button className="btn btn-primary">+</button>
                                <button className="btn btn-primary">+</button>
                            </div>
                            <div className="col-md-4 text-end">
                                <h5 className="card-title">Total</h5>
                                <p className="card-text">$0.00</p>
                            </div>
*/

export default UserOrder;