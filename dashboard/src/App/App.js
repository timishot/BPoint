import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Home/Home'
import Book from '../Books/Book';
import Categories from '../Categories/Categories';
import SignInProvider from '../Context/SignInProvider';
import SignIn from '../component/SignIn/SignIn'
import CreateAccount from '../component/CreateAccount/CreateAccount';


export default class App extends Component {
  render() {
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
            </Routes>
          </div>
        </Router>
      </SignInProvider>
    )
  }
}



// import React, { Component } from 'react'
// import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from '../Home/Home'
// import Book from '../Books/Book';
// import Categories from '../Categories/Categories';
// import SignInProvider from '../Context/SignInProvider';
// import SignIn from '../component/SignIn/SignIn'


// export default class App extends Component {
//   render() {
//     return (
//       <>
//       <SignInProvider>
//       <Router>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/books" element={<Book />} />
//         <Route path="/categories" element={<Categories />}/>
//         </Routes>
//         <SignIn />
//       </Router>
//       </SignInProvider>
//       </>
//     )
//   }
// }
