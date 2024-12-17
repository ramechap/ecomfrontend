import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
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
