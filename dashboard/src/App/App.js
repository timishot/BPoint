import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from '../Home/Home'
import Book from '../Books/Book';
import Categories from '../Categories/Categories';
import Blog from '../Blog/Blog';
import SignInProvider from '../Context/SignInProvider';
import ModalProvider from '../Context/ModalProvider';
import SignIn from '../component/SignIn/SignIn'
import CreateAccount from '../component/CreateAccount/CreateAccount';
import Cart from '../Cart/Cart';
import AboutUs from '../AboutUs/AboutUs';
import Contact from '../Contact/Contact';
import NewRelease from '../NewRelease/NewRelease';
import Ebook from '../Ebook/Ebook';

export const App = () => {


  return (
    <ModalProvider>
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
              <Route path='/about-us' element={<AboutUs/>} />
              <Route path='/about-us' element={<AboutUs/>} />
              <Route  path='/contact-us' element={<Contact/>}/>
              <Route  path='/new-releases' element={<NewRelease />}/>
              <Route  path='/ebooks' element={<Ebook />}/>
            </Routes>
          </div>
        </Router>
      </SignInProvider>
    </ModalProvider>
  )
};

export default App;
