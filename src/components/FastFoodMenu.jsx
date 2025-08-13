import React from "react";
import FastFoodCard from "./FastFoodCard.jsx";
import UserOrder from "./UserOrder.jsx";

const FastFoodMenu = () => {
    const foodItems = [
        { id: 1, title: "Burger", description: "A delicious buger with all the fixings.", price: 5.99, image: "https://placehold.co/150"},
        { id: 2, title: "Pizza", description: "Classic pizza with your favorite toppings.", price: 7.99, image: "https://placehold.co/150"},
        { id: 3, title: "Fries", description: "Crispy golden fries served hot and fresh.", price: 2.99, image: "https://placehold.co/150"}
    ];

    const handleAddToCart = (id) => {
        const item = foodItems.find(item => item.id === id);
        console.log(`Added ${item.title} to cart`);
    };

    return (
        <>
            <header className="bg-primary text-white p-3">
                <h1 className="text-center">Fast Food Menu</h1>
                <div className="container">
                    <div className="row">
                        {foodItems.map(item => (
                            <FastFoodCard 
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                            buttonAction={() => handleAddToCart(item.id)}
                            />
                        ))}
                    </div>
                </div>
            </header>
            <UserOrder />
        </>
    );
}

export default FastFoodMenu;  