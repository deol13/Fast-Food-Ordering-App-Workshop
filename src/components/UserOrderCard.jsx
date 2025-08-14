import React, {useState} from "react";

const UserOrderCard = ({title, price, count, backgroundColor, textAndBtnColor, updateParentCart }) => {

    const totalPrice = count * price;

   const handleAdd = () => {
        updateParentCart(1);
    };
    const handleRemove = () => {
        if ((count) > 0) {
            updateParentCart(-1);
        } 
    }; 
    
    return (
        <div>
            <div className={`bg-${backgroundColor} text-${textAndBtnColor} card`}>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <button className={`btn btn-${textAndBtnColor}`} onClick={handleAdd}>Add</button>
                    <button className={`btn btn-${textAndBtnColor}`} onClick={handleRemove}>Remove</button>
                    <p className="card-text">Count: {count}</p>
                    <p className="card-text">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default UserOrderCard;