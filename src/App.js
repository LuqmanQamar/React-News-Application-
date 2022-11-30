import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import About from './Components/About'
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 10
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='general' />} />
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='business' />} />
          </Routes>
          <Routes>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='entertainment' />} />
          </Routes>
          <Routes>
            <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='general' />} />
          </Routes>
          <Routes>
            <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='health' />} />
          </Routes>
          <Routes>
            <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='science' />} />
          </Routes>
          <Routes>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='sports' />} />
          </Routes>
          <Routes>
            <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={6} apiKey={this.apiKey} country="us" category='technology' />} />
          </Routes>
        </Router>
      </>

    )
  }
}

export default App

