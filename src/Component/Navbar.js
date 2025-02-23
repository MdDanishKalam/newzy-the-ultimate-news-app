
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg bg-dark bg-body-dark
        "style={{ color: "white",padding:"20px" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{color:"white"}}>Newzy</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" style={{color:"white", background:"white"}}>
            <span className="navbar-toggler-icon" style={{color:"white"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/"style={{color:"white"}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about"style={{color:"white"}}>About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link Active" href="/Fake-News-Detector"style={{color:"lime"}} >
                  Fake-News-Detector
                </a>

              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{color:"white"}}>
                  Select Category
                </a>
                <ul className="dropdown-menu">
                  
                  
                  <li className="dropdown-item"><Link className="nav-link" to="/business">Business</Link></li>
                            <li className="dropdown-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                            <li className="dropdown-item"><Link className="nav-link" to="/general">General</Link></li>
                            <li className="dropdown-item"><Link className="nav-link" to="/health">Health</Link></li>
                            <li className="dropdown-item"><Link className="nav-link" to="/science">Science</Link></li>
                            <li className="dropdown-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                    <li className="dropdown-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                    {/* <a className="nav-link active" aria-current="page" href="/" style={{color:"white"}}>Home</a>
              <a className="nav-link" href="/fakenews" style={{color:"white"}}>Fake news Detector</a> */}
                </ul>
              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
