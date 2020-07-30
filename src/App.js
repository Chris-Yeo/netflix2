import React from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import './App.css';
import Nav from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import ListJobs from './pages/listjobs';
import DetailBlog from './pages/detailblog';



function App() {
  return (
    <>
      <Nav home={Home} listjobs={ListJobs} detailblog={DetailBlog} />
      <Footer />
    </>
  );
}



export default App;
