import React from "react";

// Using a local useState variable to store prop couter data would not work because it would not be 
// updated when a new counter value comes in from the parent component, because local useState would only be initialized once.
// Therefore, we use the props directly in addition to local useState for this components own buttons to display the current order counts.

// But for the button counter in this component, we can use useState to manage the local state of the button counters.
// Because set method would update the local state of the button counters.
// This allows us to increment or decrement the counters independently of the parent component's state.

const UserOrder = ({
    parentBurgerCounter, 
    parentPizzaCounter, 
    parentFriesCounter, 
    burgerPrice, 
    pizzaPrice, 
    friesPrice,
    backgroundColor,
    textAndBtnColor}) => {

    // Handles local changes to the burger, pizza, and fries counters
    const [localBurgerCounter, setLocalBurgerCounter] = React.useState(0);
    const [localPizzaCounter, setLocalPizzaCounter] = React.useState(0);
    const [localFriesCounter, setLocalFriesCounter] = React.useState(0);

    // Calculate the total counts and prices based on both local and parent counters
    const totalBurgerCount = parentBurgerCounter + localBurgerCounter;
    const totalPizzaCount = parentPizzaCounter + localPizzaCounter;
    const totalFriesCount = parentFriesCounter + localFriesCounter;

    const burgerTotalPrice = totalBurgerCount * burgerPrice;
    const pizzaTotalPrice = totalPizzaCount * pizzaPrice;
    const friesTotalPrice = totalFriesCount * friesPrice;

    const totalPrice = burgerTotalPrice + pizzaTotalPrice + friesTotalPrice;

    // total count of local and parent counter should not be less than 0
    // This is to prevent the user from decrementing the counter below 0
    const handleLocalBurgerCounterChange = (amount) => {
        if ((localBurgerCounter + parentBurgerCounter + amount) > -1)  {
            setLocalBurgerCounter(localBurgerCounter + amount);
        }
    };
    const handleLocalPizzaCounterChange = (amount) => {
        if ((localPizzaCounter + parentPizzaCounter + amount) > -1)  {
            setLocalPizzaCounter(localPizzaCounter + amount);
        }
    };
    const handleLocalFriesCounterChange = (amount) => {
        if ((localFriesCounter + parentFriesCounter + amount) > -1)  {
            setLocalFriesCounter(localFriesCounter + amount);
        }
    };



    // This component displays the user's order
    // mt-2: margin-top: 2rem
    // mb-4: margin-bottom: 4rem
    return (
        <div className="container-fluid mt-2">
            <h2 className="mb-4">Your Order</h2>
            <div className={`card bg-${backgroundColor} text-${textAndBtnColor}`}>
                <div className="col-md-12">
                    <div className="card-body">
                        <div className="row">
                            {/* Placeholders for order summary */}
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="card-text">Cheeseburger</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className={`btn btn-${textAndBtnColor}`} onClick={() => {
                                            handleLocalBurgerCounterChange(1);
                                        }
                                    }>+</button>
                                    <p className="card-text ms-2 me-2">{totalBurgerCount}</p>
                                    <button className={`btn btn-${textAndBtnColor}`}onClick={() => {
                                            handleLocalBurgerCounterChange(-1);
                                        }
                                     }>-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">${burgerTotalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4">
                                    <p className="card-text">Pizza</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className={`btn btn-${textAndBtnColor}`} onClick={() => {
                                            handleLocalPizzaCounterChange(1);
                                        }
                                    }>+</button>
                                    <p className="card-text ms-2 me-2">{totalPizzaCount}</p>
                                    <button className={`btn btn-${textAndBtnColor}`} onClick={() => {
                                            handleLocalPizzaCounterChange(-1);
                                        }
                                    }>-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">${pizzaTotalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-md-4 ">
                                    <p className="card-text">French Fries</p>
                                </div>
                                <div className="col-md-4 d-flex">
                                    <button className={`btn btn-${textAndBtnColor}`} onClick={() => {
                                            handleLocalFriesCounterChange(1);
                                        }
                                    }>+</button>
                                    <p className="card-text ms-2 me-2">{totalFriesCount}</p>
                                    <button className={`btn btn-${textAndBtnColor}`} onClick={() => {
                                            handleLocalFriesCounterChange(-1);
                                        }
                                    }>-</button>
                                </div>
                                <div className="col-md-4 text-end">
                                    <p className="card-text">${friesTotalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                            <p className="card-text">Total: ${totalPrice.toFixed(2)}</p>
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