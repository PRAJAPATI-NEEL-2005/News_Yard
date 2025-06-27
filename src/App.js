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
export default class App extends Component {
  pagesize=8;
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
  <Route exact path="/business" element={<News setprogress={this.setprogress} key="business" category="business" pagesize={this.pagesize} />} />
  <Route exact path="/" element={<News setprogress={this.setprogress} key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/entertainment" element={<News setprogress={this.setprogress} key="entertainment" category="entertainment" pagesize={this.pagesize} />} />
  <Route exact path="/general" element={<News setprogress={this.setprogress} key="general" category="general" pagesize={this.pagesize} />} />
  <Route exact path="/health" element={<News setprogress={this.setprogress} key="health" category="health" pagesize={this.pagesize} />} />
  <Route exact path="/science" element={<News setprogress={this.setprogress} key="science" category="science" pagesize={this.pagesize} />} />
  <Route exact path="/sports" element={<News setprogress={this.setprogress} key="sports" category="sports" pagesize={this.pagesize} />} />
  <Route exact path="/technology" element={<News setprogress={this.setprogress} key="technology" category="technology" pagesize={this.pagesize} />} />
</Routes>

        
</Router>
      </div>
    )
  }
}


