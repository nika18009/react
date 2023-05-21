import Product from './Product';

const sectionStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
    }

const Products = () => {
  return (
    <div>
      <h1>BEST SELERS</h1>
      <div style={sectionStyle}>
      <Product
        category="Canvases"
        name="off-white air jordan 1 canvas"
        priceFrom="32"
        priceTo="120"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      <Product
        category="Posters"
        name="yeezy boost 350 v2 frozen"
        priceFrom="16"
        priceTo="32"
      />
      </div>
      
    </div>
  );
};


export default Products;