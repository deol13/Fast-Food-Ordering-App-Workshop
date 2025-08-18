import React, {useState} from "react";
import FastFoodCard from "./FastFoodCard.jsx";
import Cart from "./Cart.jsx";

const FastFoodMenu = () => {
    const foodItems = [
        { id: 1, title: "Burger", description: "A delicious buger with all the fixings.", price: 5.99, image: "https://placehold.co/150", catergories: ["All", "Main"] },
        { id: 2, title: "Pizza", description: "Classic pizza with your favorite toppings.", price: 7.99, image: "https://placehold.co/150", catergories: ["All","Main"]},
        { id: 3, title: "Fries", description: "Crispy golden fries served hot and fresh.", price: 2.99, image: "https://placehold.co/150", catergories: ["All", "Secondary"] }
    ];
    const cartItems = [
        { id: 1, title: "Burger", count: 0, price: 5.99 },
        { id: 2, title: "Pizza", count: 0, price: 7.99},
        { id: 3, title: "Fries", count: 0, price: 2.99}
    ];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const foodCategories = ["All", "Main", "Secondary"];
    const [cart, setCart] = useState(cartItems);

    // Used to change between dark and light mode
    // backgroundColor: Used to change the background color of the menu
    // textAndBtnColor: Used to change the text and button color of the menu
    const [backgroundColor, setBackgroundColor] = useState("light");
    const [textAndBtnColor, setTextAndBtnColor] = useState("dark");

    const [burgerCount, setBurgerCount] = useState(0);
    const [pizzaCount, setPizzaCount] = useState(0);
    const [friesCount, setFriesCount] = useState(0);

    // This function handles adding items to the cart from the FastFoodCard component
    // It receives the id of the item to be added and updates the cart state accordingly
    const handleAddToCart = (id) => {
        const item = foodItems.find(item => item.id === id);

        if (item.title === "Burger") {
            setBurgerCount(burgerCount + 1);
        } else if (item.title === "Pizza") {
            setPizzaCount(pizzaCount + 1);
        } else if (item.title === "Fries") {
            setFriesCount(friesCount + 1);
        }

        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    };

    // This function handles updating the cart when items are added or removed from the UserOrder component
    // It receives the id of the item and the count to be updated
    // It updates the cart state accordingly
    const handleAddToCart2 = (id, count) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, count: item.count + count }
                    : item
            )
        );
    };
    

    const changeDarkMode = () => {
        setBackgroundColor(backgroundColor === "light" ? "dark" : "light");
        setTextAndBtnColor(textAndBtnColor === "dark" ? "light" : "dark");
    };

    const changeFilter = (category) => {
        setSelectedCategory(category);
    };


    // The most outer div is the container for the entire menu so the background color and text color are applied here.
    // Only the FastFoodCard needs background color and text color props to apply the styles to each card.
    // min-vh-100: This class ensures that the container takes at least the full height of the viewport, which is useful for centering content vertically.
    return (
        <div className={`bg-${backgroundColor} text-${textAndBtnColor} p-3 min-vh-100`}>
            <header className={`p-3`}>
                <button className={`btn btn-${textAndBtnColor}`} onClick={() => changeDarkMode()}>Dark</button>
                {foodCategories.map(category => (
                    <button className={`btn btn-${textAndBtnColor} ms-2 `} onClick={() => changeFilter(category)}>{category}</button>
                ))};
                
                <h1 className="text-center">Fast Food Menu</h1>

                
            </header>
            <div className="container">
                    <div className="row">
                        {foodItems && foodItems.map(item => (item.catergories.find(category => category === selectedCategory) === selectedCategory) && (
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

            <Cart
                items={cart}
                backgroundColor={backgroundColor}
                textAndBtnColor={textAndBtnColor}
                updateCartAction={(id, count) => handleAddToCart2(id, count)}
             />
        </div>
    );
}

export default FastFoodMenu;  