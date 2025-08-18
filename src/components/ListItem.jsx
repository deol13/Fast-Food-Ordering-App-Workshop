import React, {useState} from "react";

const ListItem = ({title, price, count, backgroundColor, textAndBtnColor, updateParentList }) => {

    const totalPrice = count * price;

   const handleAdd = () => {
        updateParentList(1);
    };
    const handleRemove = () => {
        if ((count) > 0) {
            updateParentList(-1);
        } 
    }; 
    
    return (
        <div className="mb-3">
            <div className={`bg-${backgroundColor} text-${textAndBtnColor} card rounded shadow`}>
                <div className="card-body d-flex justify-content-between align-items-center gap-3">
                    <h5 className="card-title mb-0">{title}</h5>
                    <div className="btn-group" role="group">
                        <button className={`btn btn-${textAndBtnColor}`} onClick={handleAdd}>+</button>
                        <button className={`btn btn-${textAndBtnColor}`} onClick={handleRemove}>-</button>
                    </div>
                    <p className="card-text mb-0 fw-bold fs-5">Count: {count}</p>
                    <p className="card-text mb-0 fw-bold fs-5">Kr {totalPrice}</p>
                </div>
            </div>
        </div>
    );
}

export default ListItem;