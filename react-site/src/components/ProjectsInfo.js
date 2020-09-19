import React, { Component, useState } from 'react';
import Anime from 'react-anime';
import { Link } from 'react-router-dom';
import { PROJECTSDATA } from './ProjectsData';
import { SIDEBARDATA } from './Projects/ProjectData'

function AllProjectsInfo() {
    let delay = 0;
    const projects = PROJECTSDATA.map(proj => {
        delay += 200
        return (
            <div key={proj.id} className="col-12 col-md-6 text-center p-0">
                <Anime
                        className={`img-hover-zoom w-100 cont`}
                        duration={750}
                        delay={delay}
                        opacity={[0, 1]}
                        scale={[1, 1.2, 1]}
                        easing='easeInOutSine'
                >
                    <Link to={`/projects/${proj.project}`}><img className="img-fluid image w-100" src={`/images/${proj.title}.jpg`} alt={proj.title} />
                        <div className="middle">
                            <div className="text"><h2>{proj.title}</h2></div>
                        </div>
                    </Link>
                </Anime>
            </div>
        );
    });

    return (
        <div className="row m-auto p-0">
            {projects}
        </div>
    );
}

function ProjectInfo({proj, projData, toggle, selType}) {
    const galInfo = projData[proj].filter(elm => elm.type === selType).map((elm, index) => (
        <div key={index} data-num={index} data-name={elm.type} onClick={toggle}>
            <img className="img-fluid img-thumbnail image" src={`/${process.env.PUBLIC_URL}images/${elm.dir ? `${elm.dir}/` : ""}${elm.img}`} alt={elm.title} />
            <div className="middle">
                <div className="text">{elm.title}</div>
            </div>
        </div>
    ));
    
    return (
        <div id="imageList" className="column-2">
            <Anime  className="cont "
                    duration={750}
                    delay={(el, i) => i * 50}
                    opacity={[0, 1]}
                    scale={[1, 1.2, 1]}
                    easing='easeInOutSine'>
            {galInfo}
            </Anime>
        </div>
    );
}

function SideBarInfo({proj, HandleActive, ActiveData, Active, selType}) {
    const projects = SIDEBARDATA[proj].map((elm, index) => (
        <button key={index} id={elm.id} onClick={(e) => {HandleActive(e); ActiveData(e);}} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${Active[elm.id] ? "active" : ""}`} data-name={elm.id}><h4>{elm.name}</h4></button>
    ));

    return (
        <div className="row">
            {projects}
        </div>
    );
}

class ProjectSelector extends Component {
    constructor() {
        super()
        this.state = {
            Active: {}
        }
    }

    activeData = (e) => {
        console.log(e.target.parentNode)
        const arr = [[e.target.parentNode.dataset.name, true]];
        const obj = Object.fromEntries(arr)
        this.setState(obj);
    }

    componentDidMount() {
        let arr = [];
        for (let i = 0; i < SIDEBARDATA[this.props.proj].length; i++) {
            if (i === 0) arr.push([SIDEBARDATA[this.props.proj][i].id, true]);
            else arr.push([SIDEBARDATA[this.props.proj][i].id, false]);
        }
        let obj = Object.fromEntries(arr);
        this.setState({
            Active: obj
        });
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.Active === nextProps.Active) return false
        else return true
    }

    render() {
        return (
            <div className="container m-0 p-0 h-sm-100 navbar-expand-sm navbar-dark">
                <button className="navbar-toggler mt-2 mb-2 ml-2" type="button" data-toggle="collapse" data-target="#infoNames" aria-controls="infoNames" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="row h-sm-100 d-none d-sm-block m-0-cus collapse navbar-collapse position-absolute w-100">
                    <div className="col-sm-3 h-100 p-0 bg-dark-cus text-center border-sm-right-2"></div>
                </div>

                <div id="infoNames" className="row h-sm-100 m-0 collapse navbar-collapse position-absolute w-100">
                    <div className="col-sm-3 p-0 bg-dark-cus text-center border-sm-right-2" style={{zIndex: 6}}>
                        <div className="container">
                            <SideBarInfo
                                proj={this.props.proj}
                                HandleActive={this.props.HandleActive}
                                ActiveData={this.activeData}
                                Active={this.state.Active}
                                selType={this.props.selType}
                            />
                        </div>
                    </div>
                </div>

                <div className="row m-0 position-absolute w-100 scrollDiv galleryDiv">
                    <div className="d-none d-sm-block col-sm-3"></div>
                    <div className="col col-sm-9">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-12 text-light text-center mb-3">
                                    <h1>Websites</h1>
                                </div>
                            </div>
                            <div className="column-1">
                                <ProjectInfo
                                    projData={this.props.projData}
                                    proj={this.props.proj}
                                    modal={this.props.modal}
                                    toggle={this.props.Toggle}
                                    selType={this.props.selType}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { AllProjectsInfo, ProjectSelector };