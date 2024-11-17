import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { NavBar } from './components/NavBar';
import { OrderSummary } from './components/OrderSummary';
import { NoMatch } from './components/NoMatch';
import { Product } from './components/Product';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import { User } from './components/User';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="product" element={<Product />}>
            <Route path="featured" element={<FeaturedProducts />} /> 
            <Route path="new" element={<NewProducts />} />  
          </Route>
          <Route path='user' element={<User/>}>
              <Route path=':userID' element={<UserDetails />}/>
              <Route path='admin' element={<Admin />}/>
          </Route>
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
