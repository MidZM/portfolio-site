import React, { Component } from 'react';
import Anime from 'react-anime';
import { Card, CardBody, CardHeader, CardText, Collapse, Dropdown, NavbarToggler } from 'reactstrap' 
import { Link, useHistory } from 'react-router-dom';
import { PROJECTSDATA, SIDEBARDATA } from '../../shared/ProjectData';

class AllProjectsInfo extends Component {
    shouldComponentUpdate() {
        if (window.location.pathname === '/projects') return false;
        else return true;
    }

    render() {
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
}

function ProjectInfo({proj, projData, toggle, selType, setSite, setPage, colCount, comic, comicNum, chapter}) {
    const history = useHistory();
    
    let galInfo
    if (!comic) {
        galInfo = projData[proj][selType].filter(elm => elm.type === selType).map((elm, index) => (
            <div key={index} data-num={index} data-name={elm.type} onClick={() => {elm.type === "webcomics" ? history.push(`/projects/webcomics/${elm.dataName}`) : toggle(); setSite(index);}}>
                <img className="img-fluid img-thumbnail image" src={`/${process.env.PUBLIC_URL}images/${elm.dir ? `${elm.dir}/` : ""}${elm.img}`} alt={elm.title} />
                <div className="middle">
                    <div className="text">{elm.title}</div>
                </div>
            </div>
        ));
    } else {
        let dir = projData[proj]['webcomics'][comicNum]['isNested'];
        galInfo = projData[proj]['webcomics'][comicNum]['chapters'][chapter].map((elm, index) => (
            <div key={index} data-num={index} data-name={elm.type} onClick={() => {toggle(); setPage(index);}}>
                <img className="img-fluid img-thumbnail image" src={`/${process.env.PUBLIC_URL}images/${dir ? `${dir}/` : ""}${dir ? `comic/${comic}` : comic}/${dir ? "" : 'comic/'}${chapter}/thumb/${elm.thumb}`} alt={elm.title} />
                <div className="middle">
                    <div className="text">{elm.title}</div>
                </div>
            </div>
        ));
    }
    
    return (
        <div id="imageList" className={`column-${colCount || 2}`}>
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

function VideoInfo({proj, projData, colCount, video}) {
    const project = projData[proj][video]
    
    return (
        <div className={`column-${colCount || 2}`}>
            <div id="videoList" className="column-1">
                <Anime  className="cont "
                        duration={750}
                        opacity={[0, 1]}
                        easing='easeInOutSine'>
                    <div class="videoWrapper mb-3">
                        <iframe title="video" id="modalVid" src={`https://www.youtube-nocookie.com/embed/${project.video}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <Card className="bg-dark-cus border text-light">
                        <CardHeader className="font-size border-bottom h2">{project.title}</CardHeader>
                        <CardBody><CardText dangerouslySetInnerHTML={{__html: project.desc}} /></CardBody>
                    </Card>
                </Anime>
            </div>
        </div>
    );
}

function SideBarInfo({proj, HandleActive, Active, ActiveData, comic, initialChapter, toggleSideBar}) {
    let projects;
    if (!comic && comic !== 0) {
        projects = SIDEBARDATA[proj].map((elm, index) => (
            <button key={index} id={elm.id} onClick={(e) => {HandleActive(e); ActiveData(e); window.innerWidth <= 575 ? toggleSideBar(true) : toggleSideBar();}} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${Active[elm.id] ? "active" : ""}`} data-name={elm.id}><h4>{elm.name}</h4></button>
        ));
    } else {
        projects = SIDEBARDATA[proj][0][comic].map((elm, index) => (
            <button key={index} id={elm.name} onClick={(e) => {HandleActive(e); ActiveData(e); window.innerWidth <= 575 ? toggleSideBar(true) : toggleSideBar();}} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${Active[elm.name] ? "active" : Active.webcomics ? initialChapter() : ""}`} data-name={elm.name}><h4>{elm.id}</h4></button>
        ));
    }

    return (
        <React.Fragment>
            {projects}
        </React.Fragment>
    );
}

class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            isSideBarOpen: false
        }

    }

    toggleSideBar = (check) => {if (check) this.setState(prevState => { return { isSideBarOpen:!prevState.isSideBarOpen } })};

    render() {
        return (
            <Dropdown className="row h-sm-100 m-0 position-absolute w-100">
                <NavbarToggler onClick={this.toggleSideBar} className="mt-2 mb-2 ml-2" style={{zIndex: 6}} />
                <Collapse id="infoNames" className="navbar-collapse" isOpen={this.state.isSideBarOpen}>
                    <div className="col-sm-3 p-0 bg-dark-cus text-center border-sm-right-2" style={{zIndex: 6}}>
                        <div className="container">
                            <div className="row">
                                {
                                    this.props.comic ?
                                    <SideBarInfo
                                        proj={this.props.proj}
                                        HandleActive={this.props.HandleActive}
                                        Active={this.props.Active}
                                        ActiveData={this.props.activeData}
                                        selType={this.props.selType}
                                        comic={this.props.comic}
                                        initialChapter={this.props.initialChapter}
                                        toggleSideBar={this.toggleSideBar}
                                    /> :
                                    <SideBarInfo
                                        proj={this.props.proj}
                                        HandleActive={this.props.HandleActive}
                                        Active={this.props.Active}
                                        ActiveData={this.props.activeData}
                                        selType={this.props.selType}
                                        toggleSideBar={this.toggleSideBar}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </Collapse>
            </Dropdown>
        );
    }
}

class ProjectSelector extends Component {
    constructor() {
        super()
        this.state = {
            Active: {},
            isComic: false
        }
    }

    activeData = (e) => {
        let arr = [[e.target.parentNode.dataset.name, true]];
        if (e.target.dataset.name) arr = [[e.target.dataset.name, true]];
        const obj = Object.fromEntries(arr);
        this.setState({
            Active: obj
        });
    }

    componentDidMount() {
        let arr = [];
        for (let i = 0; i < SIDEBARDATA[this.props.proj].length; i++) {
            if (i === 0) arr.push([SIDEBARDATA[this.props.proj][i].id, true]);
            else arr.push([SIDEBARDATA[this.props.proj][i].id, false]);
        }
        const obj = Object.fromEntries(arr);
        this.setState({
            Active: obj
        });
    }

    componentDidUpdate() {
        if (this.props.comic) this.setState({isComic: true});
        else this.setState({isComic: false});
        
        if (this.props.comic === "Marked") this.props.setComicNum(0);
        if (this.props.comic === "Childish-Love") this.props.setComicNum(1);
        if (this.props.comic === "TDEC") this.props.setComicNum(2);
        if (this.props.comic === "TDECR") this.props.setComicNum(3);
        if (this.props.comic === "FightKing") this.props.setComicNum(4);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.Active === nextState.Active && this.props.comicNum === nextProps.comicNum && this.props.comicName === nextProps.comicName) return false;
        else return true;
    }

    initialChapter = () => {
        this.setState({Active: {chapter1: true}});
    }

    toggleSideBar = () => this.setState(prevState => { return { isSideBarOpen:!prevState.isSideBarOpen } });

    render() {
        return (
            <div className="container m-0 p-0 h-sm-100 navbar-expand-sm navbar-dark">

                <div className="row h-sm-100 d-none d-sm-block m-0-cus collapse navbar-collapse position-absolute w-100">
                    <div className="col-sm-3 h-100 p-0 bg-dark-cus text-center border-sm-right-2"></div>
                </div>

                <SideBar
                    proj={this.props.proj}
                    HandleActive={this.props.HandleActive}
                    Active={this.state.Active}
                    activeData={this.activeData}
                    selType={this.props.selType}
                    comic={this.props.comic}
                    initialChapter={this.initialChapter}
                />

                <div className="row m-0 position-absolute w-100 scrollDiv galleryDiv">
                    <div className="d-none d-sm-block col-sm-3"></div>
                    <div className="col col-sm-9">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-12 text-light text-center mb-3">
                                    <h1>{this.props.projName}</h1>
                                </div>
                            </div>
                            <div className="column-1">
                                {
                                    this.props.comic ?
                                    <ProjectInfo
                                        projData={this.props.projData}
                                        proj={this.props.proj}
                                        modal={this.props.modal}
                                        toggle={this.props.toggle}
                                        selType={this.props.selType}
                                        setSite={this.props.setSite}
                                        colCount={this.props.colCount}
                                        comic={this.props.comic}
                                        comicNum={this.props.comicNum}
                                        chapter={this.props.chapter}
                                        setPage={this.props.setPage}
                                    /> :
                                    this.props.video ?
                                        <VideoInfo
                                        projData={this.props.projData}
                                        proj={this.props.proj}
                                        modal={this.props.modal}
                                        toggle={this.props.toggle}
                                        selType={this.props.selType}
                                        setSite={this.props.setSite}
                                        colCount={this.props.colCount}
                                        video={this.props.video}
                                    /> :
                                    <ProjectInfo
                                        projData={this.props.projData}
                                        proj={this.props.proj}
                                        modal={this.props.modal}
                                        toggle={this.props.toggle}
                                        selType={this.props.selType}
                                        setSite={this.props.setSite}
                                        colCount={this.props.colCount}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { AllProjectsInfo, ProjectSelector };