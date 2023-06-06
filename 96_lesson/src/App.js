import { Routes, Route } from "react-router-dom";
import MainPage from "./components/Header/MainPage";
import AboutUs from "./components/Header/AboutUs";
import News from "./components/Header/News";
import Services from "./components/Header/Services";
import Destinations from "./components/Header/Destinations";
import ContactForm from "./components/Header/ContactForm";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage heroPhoto="https://ithhostels.com/wp-content/uploads/2019/01/AdobeStock_74188369.jpeg" />
        }
      />
      <Route
        path="/aboutus"
        element={
          <AboutUs src="https://photos.tpn.to/kt/ot/ei/lp/1600x900.jpg" />
        }
      />
      <Route path="/news" element={<News />} />
      <Route path="/services" element={<Services />} />
      <Route path="/destinations" element={<Destinations />} />
      <Route path="/contactus" element={<ContactForm />} />
    </Routes>
  );
};

export default App;
