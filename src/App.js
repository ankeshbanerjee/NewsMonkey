import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<News pageSize={9} key='general' category='general'/>} />
          <Route exact path='/business' element={<News pageSize={9} key='business'category='business'/>} />
          <Route exact path='/entertainment' element={<News pageSize={9} key='entertainment' category='entertainment'/>} />
          <Route exact path='/health' element={<News pageSize={9} key='health' category='health'/>} />
          <Route exact path='/science' element={<News pageSize={9} key='science' category='science'/>} />
          <Route exact path='/sports' element={<News pageSize={9} key='sports' category='sports'/>} />
          <Route exact path='/technology' element={<News pageSize={9} key='technology' category='technology'/>} />
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

