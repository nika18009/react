import './App.css';
import Product from './components/Product';

function App() {
  return (
    <div >
      <Product srcLeft={"https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2019/01/09094322/RS_QUATTRO-crop-500x707.jpg"} title={"Motorsport Artwork Short Graphic Story: Peugeot 205 T16 "} srcRight={"https://d39a3h63xew422.cloudfront.net/wp-content/uploads/2019/01/09093743/RS_205-crop-500x703.jpg"} price={10} description={<p>Unique designs <br /><br /> All pieces are printed on heavyweight 200 gsm art paper <br /><br /> Limited to 50 pieces</p>} availability={"10"} category={"Posters"} />
    </div>
  );
}

export default App;
