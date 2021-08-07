import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Routes from './routes';
import Navbar from './components/core/nav-bar';
import Footer from './components/core/footer';
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <Fragment>
      <ToastContainer position='bottom-right' />
      <Navbar />
      <Routes />
      <Footer />
    </Fragment>
  );
};

export default App;
