import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import Biosphere from "./components/Banner/biosphere/Biosphere";
import Aboutus from "./components/Banner/aboutus/Aboutus";
import AboutCoffee from "./components/Banner/aboutus/AboutCoffee";
import NaturalBridgeAndForest from "./components/Banner/aboutus/NaturalBridgeAndForest";
import WaterFalls from "./components/Banner/aboutus/WaterFalls";
import Gallery from "./components/Banner/aboutus/Gallery";
import Contact from "./components/Banner/aboutus/Contact";
import KaffaKingdoms from "./components/Banner/aboutus/KaffaKingdoms";
import KaffaSpiritualPlaces from "./components/Banner/aboutus/KaffaSpiritualPlaces";
import WhenToVisit from "./components/Banner/visit/WhenToVisit";
import Healthcare from "./components/Banner/visit/Healthcare";
import Howtogethere from "./components/Banner/visit/Howtogethere";
import LocalTours from "./components/Banner/visit/LocalTours";
import Accommodation from "./components/Banner/visit/Accommodation";
import TravelPreparations from "./components/Banner/visit/TravelPreparations";
import Whattobring from "./components/Banner/visit/Whattobring";
import MoneyTo from "./components/Banner/visit/MoneyTo";
import SafetyTo from "./components/Banner/visit/SafetyTo";
import DiningKaffa from "./components/Banner/visit/DiningKaffa";
import TraditionalFood from "./components/Banner/visit/TraditionalFood";
import TraditionalBeverages from "./components/Banner/visit/TraditionalBeverages";
import LocalProduct from "./components/Banner/visit/LocalProduct";
import PlaceToEat from "./components/Banner/visit/PlaceToEat";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biosphere" element={<Biosphere />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/about-coffee" element={<AboutCoffee />} />
        <Route
          path="/natural-bridge-and-forest"
          element={<NaturalBridgeAndForest />}
        />
        <Route path="/WaterFalls" element={<WaterFalls />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/KaffaKingdoms" element={<KaffaKingdoms />} />
        <Route
          path="/KaffaSpiritualPlaces"
          element={<KaffaSpiritualPlaces />}
        />
        <Route path="/WhenToVisit" element={<WhenToVisit />} />        <Route path="/Healthcare" element={<Healthcare />} />
        <Route path="/Howtogethere" element={<Howtogethere />} />
        <Route path="/LocalTours" element={<LocalTours />} />
        <Route path="/Accommodation" element={<Accommodation />} />
        <Route path="/TravelPreparations" element={<TravelPreparations />} />
        <Route path="/Whattobring" element={<Whattobring />} />
        <Route path="/MoneyTo" element={<MoneyTo />} />
        <Route path="/SafetyTo" element={<SafetyTo />} />
        <Route path="/DiningKaffa" element={<DiningKaffa />} />
        <Route path="/TraditionalFood" element={<TraditionalFood />} />
        <Route
          path="/TraditionalBeverages"
          element={<TraditionalBeverages />}
        />
        <Route path="/ LocalProduct" element={<LocalProduct />} />
        <Route path="/ PlaceToEat" element={<PlaceToEat />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
