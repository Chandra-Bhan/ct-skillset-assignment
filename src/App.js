import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/body/carousel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;
