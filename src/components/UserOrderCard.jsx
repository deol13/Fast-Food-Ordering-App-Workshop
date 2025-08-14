import React, {useState} from "react";

const UserOrderCard = ({title, price, count, backgroundColor, textAndBtnColor, updateParentCart }) => {
    const [localCounter, setLocalCounter] = useState(0);



    const totalCount = count + localCounter;
    const totalPrice = totalCount * price;

    

    const handleAdd = () => {
        setLocalCounter(localCounter + 1);
        updateParentCart(totalCount + 1);
    };
    const handleRemove = () => {
        if ((localCounter + count) > 0) {
            setLocalCounter(localCounter - 1);
            updateParentCart(totalCount - 1);
        } 
    }; 
    
    return (
        <div>
            <div className={`bg-${backgroundColor} text-${textAndBtnColor} card`}>
                <div className="card-body d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <button className={`btn btn-${textAndBtnColor}`} onClick={handleAdd}>Add</button>
                    <button className={`btn btn-${textAndBtnColor}`} onClick={handleRemove}>Remove</button>
                    <p className="card-text">Count: {totalCount}</p>
                    <p className="card-text">${totalPrice.toFixed(2)}</p>
                </div>
            </div>
        </div>
    );
}

export default UserOrderCard;