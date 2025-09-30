import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Layout from "./components/Layouts.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Shop from "./pages/Shop.jsx";
import Subscription from "./pages/Subscription.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Consultation from "./pages/Consultation.jsx";
import Cart from "./pages/Cart.jsx";
import Journal from "./pages/Journal.jsx";
import Waitlist from "./pages/Waitlist.jsx";
import NotFound from "./pages/NotFound.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="shop" element={<Shop />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="consultation" element={<Consultation />} />
        <Route path="cart" element={<Cart />} />
        <Route path="journal" element={<Journal />} />
        <Route path="waitlist" element={<Waitlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
