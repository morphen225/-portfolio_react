import React, { Component } from 'react';
import {personalInfo, iconsData} from '../data/miscData';

import { Link } from 'react-router-dom';

export function Header (){
   return (
         <nav className="navbar navbar-fixed-top navbar-inner header">

           <div className="container">
             <div className="navbar-brand">
                 <Link to="/">
                 {personalInfo.name}
                 </Link>
             </div>
             <ul className="nav navbar-nav pull-right">
               <li>
                 {/*<a href={personalInfo.resume} download style={{ lineHeight: 'normal' }}>
                   <span>Resume</span>
                 </a>*/}
                   <Link to="/resume">
                   About
                   </Link>


               </li>
               <li>
                 <a href={personalInfo.email} className="nav-link">
                   <i className="fa fa-envelope icon"></i>
                 </a>
               </li>
               <li>
                 <a href={personalInfo.github} className="nav-link" target="_blank" rel="noopener noreferrer">
                   <i className="fa fa-github icon"></i>
                 </a>
               </li>
               <li>
                 <a href={personalInfo.linkedIn} className="nav-link" target="_blank" rel="noopener noreferrer">
                   <i className="fa fa-linkedin-square icon"></i>
                 </a>
               </li>
               </ul>
           </div>
           </nav>
   );
}


export function Footer () {
   return (
     <footer className="footer">
       <span>
       Built by Girish Murali Boddu
       </span>
     </footer>
   );
}

function TechStackItem (props){
 const tech = props.tech;
   if (iconsData[tech]) {
     return (
       <div>
         {tech}
         <img className="tech-icon" src={iconsData[tech]} alt={tech}/>
       </div>
     );
   } else {
     return (
       <div>
         {tech}
         <img className="tech-icon" alt={tech} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Transparent_square.svg/2000px-Transparent_square.svg.png" />
       </div>
     );
   }
}

function Project (props) {
 const projectData = props.projectData;
 const techStackItems = projectData.tech_stack.map((tech, index) => {
 return <TechStackItem key={index} tech={tech}/>;
   });
 return (
     <div className="project-container">
       <div className="project-info">
         <a href={projectData.project_url} target="_blank" rel="noopener noreferrer">
           <h2>{projectData.title}</h2>
         </a>
         <a href={projectData.github_url} target="_blank" rel="noopener noreferrer">
           {projectData.github_url !== '' ? 'Github' : null}
         </a>
         <div>{projectData.date}</div>
         <h3>Background</h3>
         <div>{projectData.background}</div>
         <h3>Role</h3>
         <div>{projectData.role}</div>
         <h3>Tech Stack</h3>
         <div className="tech-icon-container">{techStackItems}</div>
       </div>
     </div>
   );
}

export class Projects extends Component{
 render(props){
   return(<div>
     {this.props.projectsData.map((projectItem,index)=> (<Project key={index} projectData={projectItem} />))}
       </div>
     );
 }
}
