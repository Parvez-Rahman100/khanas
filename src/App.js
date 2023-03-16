import "./App.css";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className=" px-2 lg:px-12">
      <Navbar />
      <Hero />
      <Cards />
      <Food />
    </div>
  );
};

export default App;
