import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import ScrollRestoration from "./utility/ScrollRestoration";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollRestoration />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
