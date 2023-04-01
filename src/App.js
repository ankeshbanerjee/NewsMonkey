import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

export class App extends Component {
  pageSize = 9;

  state = {progress : 10}
  setProgress = (progress)=>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='general' category='general'/>} />
          <Route exact path='/business' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='business'category='business'/>} />
          <Route exact path='/entertainment' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='entertainment' category='entertainment'/>} />
          <Route exact path='/health' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='health' category='health'/>} />
          <Route exact path='/science' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='science' category='science'/>} />
          <Route exact path='/sports' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='sports' category='sports'/>} />
          <Route exact path='/technology' element={<News setProgress = {this.setProgress} pageSize={this.pageSize} key='technology' category='technology'/>} />
        </Routes>
      </BrowserRouter>
      // here key prop is passed to the News component, so that react router remounts the News component
      // with the changed value of the 'category' prop.
      // key is a prop that has to be any unique entity for each time
      // for details, see code with harry react tutorial video #31
    )
  }
}

export default App

