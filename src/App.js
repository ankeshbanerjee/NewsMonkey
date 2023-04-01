import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setprogress] = useState(10);
  const setProgress = (progress)=>{
    setprogress(progress);
  }

    return (
      <BrowserRouter>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
        <Routes>
          <Route exact path='/' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='general' category='general'/>} />
          <Route exact path='/business' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='business'category='business'/>} />
          <Route exact path='/entertainment' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='entertainment' category='entertainment'/>} />
          <Route exact path='/health' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='health' category='health'/>} />
          <Route exact path='/science' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='science' category='science'/>} />
          <Route exact path='/sports' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='sports' category='sports'/>} />
          <Route exact path='/technology' element={<News setProgress = {setProgress} apiKey = {apiKey} pageSize={pageSize} key='technology' category='technology'/>} />
        </Routes>
      </BrowserRouter>
      // here key prop is passed to the News component, so that react router remounts the News component
      // with the changed value of the 'category' prop.
      // key is a prop that has to be any unique entity for each time
      // for details, see code with harry react tutorial video #31
    )
}

export default App;

