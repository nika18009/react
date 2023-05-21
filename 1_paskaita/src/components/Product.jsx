import PropTypes from 'prop-types';

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
   
  return (
      <div style={cardStyle}>
        <h4 style={categoryStyle}>{category}</h4>
        <h3 style={nameStyle}>{name.toUpperCase()}</h3>
        
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
