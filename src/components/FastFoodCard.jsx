import React from "react";

const FastFoodCard = ({
    title,
    description,
    price,
    image,
    buttonAction,
    backgroundColor,
    textAndBtnColor
}) => {
    // This component renders a single fast food item card
    // It receives props for id, title, description, price, image, and buttonAction

    // The toFixed() method of Number values returns a string representing this number using fixed-point notation with the specified number of decimal places.

    // col-md-4: Bootstrap class for medium-sized columns, takes up 4 out of 12 columns
    // mb-3: Bootstrap class for margin-bottom of 3 units
    // card: Bootstrap class for card component
    // card-img-top: Bootstrap class for the top image of the card
    // card-body: Bootstrap class for the body of the card
    // card-title: Bootstrap class for the title of the card
    // card-text: Bootstrap class for the text of the card

    // border border-${textAndBtnColor}
    return (
        <div className="col-md-4 mb-3">
            <div className={`bg-${backgroundColor} text-${textAndBtnColor} card `}>
                <img src={image} alt={title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">${price.toFixed(2)}</p>
                    <button className={`btn btn-${textAndBtnColor}`} onClick={buttonAction}>Add to corder</button>
                </div>
            </div>
        </div>
    )
}

export default FastFoodCard;