import React from 'react';
import { AllProjectsInfo } from './ProjectsInfo';

function Projects() {
    return (
        <div id="projects">
            <div className="container-fluid p-0 h-100">
                <h1 className="text-white mb-4 mt-3 text-center mb-n-5">Projects</h1>
                <div className="row align-items-center h-80 m-0 scrollDiv">
                    <AllProjectsInfo />
                </div>
            </div>
        </div>
    )
}

export default Projects;