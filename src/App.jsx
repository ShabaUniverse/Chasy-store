import "../src/App.scss";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Recommended from "./pages/Recommended";
import Featured from "./pages/Featured";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/recommended" element={<Recommended />}/>
        <Route path="/featured" element={<Featured />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
