import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
export default class App extends Component {
   pagesize=8;
  render() {
    return (
      <div>
        <Router>
       <Navbar/>
       
<Routes>
  <Route exact path="/business" element={<News key="business" category="business" pagesize={this.pagesize} />} />
  <Route exact path="/" element={<News key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" pagesize={this.pagesize} />} />
  <Route exact path="/general" element={<News key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/health" element={<News key="health" category="health" pagesize={this.pagesize} />} />
  <Route exact path="/science" element={<News key="science" category="science" pagesize={this.pagesize} />} />
  <Route exact path="/sports" element={<News key="sports" category="sports" pagesize={this.pagesize} />} />
  <Route exact path="/technology" element={<News key="technology" category="technology" pagesize={this.pagesize} />} />
</Routes>

        
</Router>
      </div>
    )
  }
}


