
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import Home from './components/Home';
import Entertainment from './components/Entertainment';
import Booking from './components/Booking';
import Payment from './components/Payment';
import PaymentConfirm from './components/PaymentConfirm';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/entertainment">
            <Entertainment />
          </Route>
          <Route path="/booking">
            <Booking />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/payment-confirm">
            <PaymentConfirm />
          </Route>
          <Route path="/about-us">
            <About />
          </Route>
          <Route path="/contact-us">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
