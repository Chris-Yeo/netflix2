import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Nav from './layout/header';
import Footer from './layout/footer';
import Home from './pages/home';
import ListJobs from './pages/listjobs';
import DetailBlog from './pages/detailblog';



function App() {
  return (
    <Router>
     <Nav/>
      <Switch>
        <Route exact path="/">
          <Home />  
        </Route>
        <Route path="/listjobs">
          <ListJobs />  
        </Route>
        <Route path="/detailblog/:id">
          <DetailBlog />  
        </Route>
      </Switch>


     <Footer/>
    </Router>
  );
}



export default App;
