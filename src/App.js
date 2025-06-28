import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Footer from './components/Footer';
export default class App extends Component {
  pagesize=8;
  apiKey=process.env.REACT_APP_NEWS_API;
  state={
      progress: 0,
      
    }
  setprogress =(progress)=>{
          this.setState({
        progress:progress,
      })
  }
      
  render() {
    return (
      <div>
      
        <Router>
            <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />
       <Navbar/>
       
<Routes>
  <Route exact path="/business" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="business" category="business" pagesize={this.pagesize} />} />
  <Route exact path="/" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/entertainment" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="entertainment" category="entertainment" pagesize={this.pagesize} />} />
  <Route exact path="/general" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/health" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="health" category="health" pagesize={this.pagesize} />} />
  <Route exact path="/science" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="science" category="science" pagesize={this.pagesize} />} />
  <Route exact path="/sports" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="sports" category="sports" pagesize={this.pagesize} />} />
  <Route exact path="/technology" element={<News setprogress={this.setprogress}  apiKey={this.apiKey} key="technology" category="technology" pagesize={this.pagesize} />} />
</Routes>
<Footer/>
        
</Router>
      </div>
    )
  }
}


