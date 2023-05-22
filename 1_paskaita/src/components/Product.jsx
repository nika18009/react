import PropTypes from 'prop-types';
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

const cardStyle = {
width: "200px",
margin: "50px"

}
const categoryStyle = {
    color: "grey",
    margin: 0
}
const nameStyle = {
    margin: "5px 0 5px 0"
}

const priceStyle = {
    margin: 0
}

const Product = ({category, name,priceFrom, priceTo}) => {
  const [rate, setRate] = useState(0);
  
  return (
      <div style={cardStyle}>
        <h4 style={categoryStyle}>{category}</h4>
        <h3 style={nameStyle}>{name.toUpperCase()}</h3>
        <div>
        {rate >= 1 ? (<FaStar onClick={() => setRate((previousRate) => (previousRate === 1 ? 0 : 1))}/>) : (<FaRegStar onClick={() => setRate(1)} />)}
{rate >= 2 ? (<FaStar onClick={() => setRate((previousRate) => (previousRate === 2 ? 0 : 2))}/>) : (<FaRegStar onClick={() => setRate(2)} />)}
{rate >= 3 ? (<FaStar onClick={() => setRate((previousRate) => (previousRate === 3 ? 0 : 3))}/>) : (<FaRegStar onClick={() => setRate(3)} />)}
{rate >= 4 ? (<FaStar onClick={() =>setRate((previousRate) => (previousRate === 4 ? 0 : 4))}/>) : (<FaRegStar onClick={() => setRate(4)} />)}
{rate >= 5 ? (<FaStar onClick={() =>setRate((previousRate) => (previousRate === 5 ? 0 : 5))}/>) : (<FaRegStar onClick={() => setRate(5)} />)}
          
         {/* <FaRegStar onClick={()=> setRate(1)}/>
        <FaRegStar onClick={()=> setRate(2)} />
        <FaRegStar onClick={()=> setRate(3)}/>
        <FaRegStar onClick={()=> setRate(4)}/>
        <FaRegStar onClick={()=> setRate(5)}/>  */}
        </div>
        
        <h4 style={priceStyle}>
          {priceFrom}$ - {priceTo}$
        </h4>
    </div>
  );
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priceFrom: PropTypes.number.isRequired,
  priceTo: PropTypes.number.isRequired,
};

Product.defaultProps = {
  category: '',
  name: '',
  price: '',
};
export default Product;





