import React, {useState} from "react";
import CartCard from "./CartCard";

const Cart = ({items, backgroundColor, textAndBtnColor, updateCartAction}) => {
    // Issue: The cart state is initialized with the items prop, but it does not update when the parent component's state changes.

    const updateCart = (id, count) => {
        updateCartAction(id, count);
    }
        

    // (item.count > 0) && Means that the item will only be displayed if the count is greater than 0
    // This prevents displaying items that have not been added to the order
    return (
        <div className="container-fluid mt-2">
            <h2 className="mb-4">Your Order</h2>
            <div className={`card bg-${backgroundColor} text-${textAndBtnColor}`}>
                 {items && items.map(item => (item.count > 0) && (
                    <CartCard 
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    count={item.count}
                    backgroundColor={backgroundColor}
                    textAndBtnColor={textAndBtnColor}
                    updateParentCart={(count) => updateCart(item.id, count)}
                    />
                ))}
            </div>
            <div className="text-end mt-3">
                <p className="mb-0 fw-bold fs-5">Total: ${items.reduce((total, item) => total + (item.price * item.count), 0).toFixed(2)}</p>
                <button className={`btn btn-${textAndBtnColor}`} onClick={() => alert("Order placed!")}>Place Order</button>
                <button className={`btn btn-${textAndBtnColor} ms-2`} onClick={() => alert("Order cancelled!")}>Cancel Order</button>
            </div>
        </div>
    );
}

export default Cart;