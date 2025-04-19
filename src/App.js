import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

ReactGA.initialize("G-3L6S7LZH0H");

function App() {
  // Send pageview with a custom path
useEffect(() => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "My PAge view" });

}, [])
  return (
    <div className='AppContainer'>
      <Navbar />
      <ToastContainer limit={3}/>
      <div className='AppContent'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
