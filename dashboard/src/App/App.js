import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home'
import Book from '../Books/Book';
import Categories from '../Categories/Categories';
import Blog from '../Blog/Blog';
import SignInProvider from '../Context/SignInProvider';
import SignIn from '../component/SignIn/SignIn'
import CreateAccount from '../component/CreateAccount/CreateAccount';
import Cart from '../Cart/Cart';

export const App = () => {


  return (
    <SignInProvider>
      <Router>
        <div>
          <SignIn />
          <CreateAccount />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Book />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </SignInProvider>
  );
};

export default App;
