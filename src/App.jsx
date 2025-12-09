import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import About from './pages/About/About';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import Product from './pages/Product/Product';
import Solution from './pages/Solution/Solution';  

function App() {
  return (
    <div className="app">
      <ScrollToHash /> 
      <Navbar />

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/*" element={<Product />} />
          <Route path="/solutions" element={<Solution />} />
          {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
        </Routes>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default App;
