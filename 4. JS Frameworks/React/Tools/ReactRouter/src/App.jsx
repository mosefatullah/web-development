import React from "react";

/*
 * @NOTE:
 * Reach Router v2 and React Router v6 are the same, so I will avoid using Reach Router.
 */

import { Routes, Route, NavLink } from "react-router-dom";

// Components
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import Contact from "./components/Contact";

function App() {
 return (
  <>
   <nav className="header">
    <ul className="menu">
     <li>
      <NavLink to="/" activeClassName="active">
       Home
      </NavLink>
     </li>
     <li>
      <NavLink to="/posts" activeClassName="active">
       Posts
      </NavLink>
     </li>
     <li>
      <NavLink to="/contact" activeClassName="active">
       Contact
      </NavLink>
     </li>
    </ul>
   </nav>

   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/posts" element={<Posts />} />
    <Route path="/posts/:id" element={<Post />} />
    <Route path="/contact" element={<Contact />} />
   </Routes>
  </>
 );
}

export default App;
