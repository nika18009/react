import './App.css';
import ClassButton from './components/ClassButton';
import ClassDiv from './components/ClassDiv';
import FuncButton from './components/FuncButton';
import FuncDiv from './components/FuncDiv';
import Greeting from './components/Greeting';
import Card from './components/Card';
import Avatar from './components/Avatar';

function App() {
  const text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus cum, eius animi a natus quisquam?"
  const getText = () => {
    return 'How was your day?';
  };
  return (
    <div>
      {/* <div>
        <h1>Hey!</h1>
        <h2>{getText()}</h2>
        <FuncButton title="Mygtuko tekstas1" />
        <FuncDiv />
      </div>
      <div>
        <ClassButton />
        <ClassDiv />
      </div> */}
      {/* <Greeting name="Veronika" /> */}
      <Card src ="https://www.nps.gov/colm/learn/nature/images/IMG_8708_1.JPG?maxwidth=650&autorotate=false" title="Lizard" description = {text}/>
      <Card src ="https://images.pexels.com/photos/7862/pexels-photo.jpg?cs=srgb&dl=pexels-life-of-pix-7862.jpg&fm=jpg" title="Surfing" description = {text}/>
      <Avatar name = "Veronika Tarasova" />
      <Avatar name = "Lizard Green" />
    </div>
  );
}

export default App;
