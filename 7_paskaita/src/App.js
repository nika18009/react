// // importuojam useRef hooksa
// import { useRef, useState } from "react";
// import InputExample from "./InputExample";
// import Converter from "./components/Converter/Converter";

// import BackgroundChanger from "./components/BackgroundChanger/BackgroundChages";

// const App = () => {
//   // sukuriam ref kintąmąjį
//   let ref = useRef(0); // useRef(pradinė reiškmė)
//   const inputRef = useRef(null); // input arba tiem kurie neturi pradinės reikšmės, naudojam null
//   const todoInputRef = useRef(null);
//   const [todoInput, setTodoInput] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleClick = () => {
//     // ref.current yra pagrindinė reikšmė
//     ref.current = ref.current + 1; // mutuojamas ref.current objektas
//     alert(`You clicked ${ref.current} times!`);
//   };

//   const focusInput = () => {
//     // ref pavyzdys kai sufokusuojamas input elementas
//     inputRef.current.focus();
//   };

//   const handleAddTodo = () => {
//     setTodos((prevTodos) => [...prevTodos, todoInput]);
//     todoInputRef.current.focus();
//   };

//   return (
//     <div>
//       {/* <button onClick={handleClick}>Clicke me!</button>
//       {ref.current}
//       <br />
//       <br />
//       <button onClick={focusInput}>Focus on the input</button> */}
//       {/* pavyzdys kaip priskirti elementam ref atributą */}
//       {/* <input ref={inputRef} />
//       <br />
//       <h2>Todos</h2>
//       <input
//         ref={todoInputRef}
//         value={todoInput}
//         onChange={(e) => setTodoInput(e.target.value)}
//       />
//       <button onClick={handleAddTodo}>Add Todo</button>
//       <div>{todos.join(", ")}</div>
//       <br /> */}
//       <Converter />
//     </div>
//   );
// };

// export default App;

import { useEffect, useState } from "react";
import NumbersList from "./components/MapExample/NumbersList";
import Button from "./components/MapExample/Button";
import Post from "./components/MapExample/Post";

const App = () => {
  const [posts, setPosts] = useState([]);

  const numbers = [1, 2, 3, 4, 5];
  const buttonText = ["Hello", "Goodbye", "How are you?", "Where are you?"];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((response) => {
        setPosts(response);
      })
      .catch((error) => console.error(error));
  }, []);

  const showAlert = (text) => {
    alert(text);
  };

  return (
    <div>
      <NumbersList numbers={numbers} />
      <br />
      <NumbersList numbers={[0, 9, 10]} />
      <br />
      <Button onClick={() => showAlert("Hello")}>Hello</Button>
      <Button>Goodbye</Button>
      <Button onClick={() => showAlert("How are you?")}>How are you?</Button>
      <Button>Where are you</Button>
      <br />
      {buttonText.map((text, index) => (
        <Button key={`${text}_${index}`} onClick={() => showAlert(text)}>
          {text}
        </Button>
      ))}
      <br />
      <Post
        title="Hello word"
        description="Testing cases"
        date={new Date().toLocaleDateString()}
      />
      <br />
      {posts.length > 0 && (
        <Post
          title={posts[0].title}
          description={posts[0].body}
          date={new Date().toLocaleDateString()}
        />
      )}
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          description={post.body}
          date={new Date().toLocaleDateString()}
        />
      ))}
    </div>
  );
};

export default App;