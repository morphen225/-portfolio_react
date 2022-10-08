import React, { Component } from 'react';
//import logo from './logo.svg';
import '.././styles/App.css';
import {projectsData} from '../data/projectsData';


import {Header,Footer, Projects} from '../components/components';

class App extends Component {
  render() {

    return (
      <div className="main-app-container container-fluid">
          <Header />
        <div className="introduction row">
        <div className="col-md-8">
        
           <h2>Hi, I am Girish Boddu</h2>
          <h3>I am an enthusiastic and passionate software developer. I love learning new technologies and harnessing them to create new and exciting things. Currently, i am actively looking for a fulltime position in an organization. Please click on "About" tab for my profile.</h3> <br/>
           </div>
           <div className="col-md-4">
           <img src="Girish.jpg" alt="Girish" className="profile-pic"></img>
           </div>
        </div>
        <div className="main-app-nav">Some of my selected projects:</div>
          <Projects projectsData={projectsData}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
