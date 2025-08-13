import React from "react";
import FastFoodCard from "./FastFoodCard.jsx";
import UserOrder from "./UserOrder.jsx";

const FastFoodMenu = () => {
    const foodItems = [
        { id: 1, title: "Burger", description: "A delicious buger with all the fixings.", price: 5.99, image: "https://placehold.co/150"},
        { id: 2, title: "Pizza", description: "Classic pizza with your favorite toppings.", price: 7.99, image: "https://placehold.co/150"},
        { id: 3, title: "Fries", description: "Crispy golden fries served hot and fresh.", price: 2.99, image: "https://placehold.co/150"}
    ];

    const [burgerCount, setBurgerCount] = React.useState(0);
    const [pizzaCount, setPizzaCount] = React.useState(0);
    const [friesCount, setFriesCount] = React.useState(0);

    const handleAddToCart = (id) => {
        const item = foodItems.find(item => item.id === id);

        if (item.title === "Burger") {
            setBurgerCount(burgerCount + 1);
        } else if (item.title === "Pizza") {
            setPizzaCount(pizzaCount + 1);
        } else if (item.title === "Fries") {
            setFriesCount(friesCount + 1);
        }
    };

    return (
        <>
            <header className="bg-primary text-white p-3">
                <h1 className="text-center">Fast Food Menu</h1>
                <div className="container">
                    <div className="row">
                        {foodItems && foodItems.map(item => (
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
            <UserOrder
                parentBurgerCounter={burgerCount}
                parentPizzaCounter={pizzaCount}
                parentFriesCounter={friesCount}
                burgerPrice={foodItems.find(item => item.title === "Burger")?.price || 0}
                pizzaPrice={foodItems.find(item => item.title === "Pizza")?.price || 0}
                friesPrice={foodItems.find(item => item.title === "Fries")?.price || 0}
             />
        </>
    );
}

export default FastFoodMenu;  