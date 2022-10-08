import React from 'react';
import Profile from '../components/resumeComponents/Profile';
import About from '../components/resumeComponents/About';
import Work from '../components/resumeComponents/Work';
import Skills from '../components/resumeComponents/Skills';
import Education from '../components/resumeComponents/Education';
import {Header,Footer} from '../components/components';
const jsonObj = require('../data/resume.json');

const Resume = () => {
  const profileData = jsonObj.basics;
  const aboutData = profileData.summary;
  const workData = jsonObj.work;
  const skillsData = jsonObj.skills;
  const educationData = jsonObj.education;
  // console.log(profileData)
  return (
          <div className="main-app-container container-fluid">
          <Header/>
          <div className="container">
            <div className="row">
              <aside className="col-md-4">
                <div className="inner">
                  <Profile profileData={profileData} />
                </div>
              </aside>
              <main className="col-md-8">
                <div className="inner">
                  <About aboutData={aboutData} />
                  <Skills skillsData={skillsData} />
                  <Work workData={workData} />
                  <Education educationData={educationData} />
                </div>
              </main>
            </div>
          </div>
          <Footer/>
          </div>
    )
};

export default Resume;
