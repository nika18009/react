import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserCards from "./components/UserCards";
import User from "./components/User";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage heroPhoto="https://ithhostels.com/wp-content/uploads/2019/01/AdobeStock_74188369.jpeg" />
          }
        />
        <Route path="/users" element={<UserCards />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
