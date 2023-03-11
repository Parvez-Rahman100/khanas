import "./App.css";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-12">
      <Navbar />
      <Hero />
      <Cards />
    </div>
  );
};

export default App;
