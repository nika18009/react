import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Product = ({image,title,price,description,availability, category}) => {
  const [quantity, setQuantity] = useState(0);

  const increaseNumber = () =>{
    setQuantity(quantity+1)
}

const decreaseNumber = () =>{
    setQuantity(quantity-1)
}


  return (
    <div>
        <div>
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            <h4>{price}$</h4>
            <p>{description}</p>
            <h4>{availability} in stock</h4>
            <div>
                <div>
                    <button onClick = {decreaseNumber}>-</button>
                    <h5>{quantity}</h5>
                    <button onClick = {increaseNumber}>+</button>
                </div>
                <div>
                    <Button/>
                </div>
            </div>
             <p>Category {category}</p>
        </div>
      
    </div>
  );
};

Product.propTypes = {
//    image: PropTypes.string, //???
   title:PropTypes.string,
   price:PropTypes.number,
   dexcription:PropTypes.string,
   availability:PropTypes.number,
   category:PropTypes.string,
  };
  
export default Product;