import React, {useState} from "react";
import FastFoodCard from "./FastFoodCard.jsx";
import UserOrder from "./UserOrder.jsx";

const FastFoodMenu = () => {
    const foodItems = [
        { id: 1, title: "Burger", description: "A delicious buger with all the fixings.", price: 5.99, image: "https://placehold.co/150"},
        { id: 2, title: "Pizza", description: "Classic pizza with your favorite toppings.", price: 7.99, image: "https://placehold.co/150"},
        { id: 3, title: "Fries", description: "Crispy golden fries served hot and fresh.", price: 2.99, image: "https://placehold.co/150"}
    ];
    // Used to change between dark and light mode
    // backgroundColor: Used to change the background color of the menu
    // textAndBtnColor: Used to change the text and button color of the menu
    const [backgroundColor, setBackgroundColor] = useState("light");
    const [textAndBtnColor, setTextAndBtnColor] = useState("dark");

    const [burgerCount, setBurgerCount] = useState(0);
    const [pizzaCount, setPizzaCount] = useState(0);
    const [friesCount, setFriesCount] = useState(0);

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

    const changeDarkMode = () => {
        setBackgroundColor(backgroundColor === "light" ? "dark" : "light");
        setTextAndBtnColor(textAndBtnColor === "dark" ? "light" : "dark");
    };

    // The most outer div is the container for the entire menu so the background color and text color are applied here.
    // Only the FastFoodCard needs background color and text color props to apply the styles to each card.
    return (
        <div className={`bg-${backgroundColor} text-${textAndBtnColor} p-3`}>
            <header className={`p-3`}>
                <button className={`btn btn-${textAndBtnColor}`} onClick={() => changeDarkMode()}>Dark</button>
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
                            backgroundColor={backgroundColor}
                            textAndBtnColor={textAndBtnColor}
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
                backgroundColor={backgroundColor}
                textAndBtnColor={textAndBtnColor}
             />
        </div>
    );
}

export default FastFoodMenu;  