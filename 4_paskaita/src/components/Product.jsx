import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import {FaArrowLeft, FaArrowRight}  from "react-icons/fa";

const Product = ({srcLeft, srcRight, title,price,description,availability, category}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseNumber = () =>{
    setQuantity(quantity+1)
}

const decreaseNumber = () =>{
    setQuantity(quantity-1)
}


  return (
    <div className="card flex">
        <div className="pictures">
        <img src={srcLeft} alt={title} />
        <img src={srcRight} alt={title} />
        </div>
        <div className="information">
            <div className="flex">
            <h3>{title}</h3>
            <div className="flex">
            <FaArrowLeft className="arrow"/>
            <FaArrowRight className="arrow"/> 
            </div>
           
            </div>
            <h4>{price}.00$</h4>
            <p>{description}</p>
            <h4>Availability:<span> {availability} in stock</span></h4>
            <div className="flex buttons">
                <div className="flex smallButtons">
                    <button onClick = {decreaseNumber}>-</button>
                    <h5>{quantity}</h5>
                    <button onClick = {increaseNumber}>+</button>
                </div>
                <div>
                    <Button />
                </div>
            </div>
             <h4 className="category">Category: {category}</h4>
        </div>
      
    </div>
  );
};

Product.propTypes = {
    srcRight: PropTypes.string,
    srcLeft: PropTypes.string,
   title:PropTypes.string,
   price:PropTypes.number,
   description:PropTypes.string,
   availability:PropTypes.number,
   category:PropTypes.string,
  };
  
export default Product;