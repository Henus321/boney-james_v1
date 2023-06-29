import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Loader from './components/loader/Loader';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./routes/home/Home'));
const About = lazy(() => import('./routes/about/About'));
const Collection = lazy(() => import('./routes/collection/Collection'));
const Item = lazy(() => import('./routes/item/Item'));
const Bookmarks = lazy(() => import('./routes/bookmarks/Bookmarks'));
const Checkout = lazy(() => import('./routes/checkout/Checkout'));

const App = () => {
  return (
    <div className="container">
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection/:year/:season" element={<Collection />} />
          <Route
            path="/collection/:year/:season/item/:coatId"
            element={<Item />}
          />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
        <ToastContainer position="bottom-right" closeOnClick autoClose={1500} />
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
