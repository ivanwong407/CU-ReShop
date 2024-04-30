import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'; // You need to have a Home component
import ShopContextProvider from './Context/ShopContext';
import Browse from './pages/Browse';

const App = () => {
  return (
    <ShopContextProvider> 
      <Router>
        <Routes>
          <Route path="/browse" element={<Browse />} />
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  );
};


export default App;