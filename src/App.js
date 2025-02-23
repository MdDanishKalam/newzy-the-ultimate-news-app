
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import { FakeNewsDetector } from './Component/FakeNewsDetector';
import { About } from './Component/About';

export default class App extends Component {
apikey="69648d2b428043c0867e28168a4f2d84"

  render() {
    return (
      <div className='body pb-5'>

        {/* <Navbar />

        <News pageSize={8} country="in" category="science" /> */}
        {/* <Router>
          <Navbar />
          <Routes>
            <Route exact path="/"><News key="general" pageSize={8} country="in" category="general" /></Route>
            <Route exact path="/business"><News key="business" pageSize={8} country="in" category="business" /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={8} country="in" category="entertainment" /></Route>
            <Route exact path="/general"><News key="general" pageSize={8} country="in" category="general" /></Route>
            <Route exact path="/health"><News key="health" pageSize={8} country="in" category="health" /></Route>
            <Route exact path="/science"><News key="science" pageSize={8} country="in" category="science" /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={8} country="in" category="sports" /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={8} country="in" category="technology" /></Route>
          </Routes>
        </Router> */}

        <Router>
          <Navbar/>
          <Routes>
            {/* <Route path='/' element={<News pageSize={8} country="in" category="science" /> } /> */}
            <Route exact  path="/"element={<News key="general" apikey={this.apikey} pageSize={8} country="in" category="general" />}/>
            <Route exact path='/Fake-News-Detector' element={<FakeNewsDetector/>} />
            <Route exact path="/business"element={<News key="business" apikey={this.apikey} pageSize={8} country="in" category="business" />}/>
            <Route exact path="/entertainment"element={<News key="entertainment" apikey={this.apikey} pageSize={8} country="in" category="entertainment" />} />
            <Route exact path="/general"element={<News key="general"apikey={this.apikey} pageSize={8} country="in" category="general" />}/>
            <Route exact path="/health"element={<News key="health" apikey={this.apikey} pageSize={8} country="in" category="health" />}/>
            <Route exact path="/science"element={<News key="science"apikey={this.apikey} pageSize={8} country="in" category="science" />}/>
            <Route exact path="/sports"element={<News  key="sports" apikey={this.apikey} pageSize={8} country="in" category="sports" />}/>
            <Route exact path="/technology"element={<News  key="technology" apikey={this.apikey} pageSize={8} country="in" category="technology" />}/>
            <Route exact path='/about' element={<About/> } />
          </Routes>
        </Router>
      </div>
    )
  }
}


