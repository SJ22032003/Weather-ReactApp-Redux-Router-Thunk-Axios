import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Favourite from "./Components/Pages/Favourite";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
