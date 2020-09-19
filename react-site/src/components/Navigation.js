import React, { Component } from 'react';
import Main from './Main';
import Gallery from './Gallery';
import Projects from './Projects';
import About from './About';
import Websites from './Projects/Websites';
import Games from './Projects/Games';
import Webcomics from './Projects/Webcomics';
import Animations from './Projects/Animations';
import {
    Route,
    NavLink,
    BrowserRouter
} from 'react-router-dom';
import { PROJECTDATA } from './Projects/ProjectData';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            projData: PROJECTDATA,
            modal: false
        };
    }

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark-cus sticky-top">
                    <NavLink to="/" exact className="navbar-brand"><img src={`/${process.env.PUBLIC_URL}images/MascotAvatar-Flipped.png`} alt="Logo" width="65" height="65" /></NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTop" aria-controls="navbarTop" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTop">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gallery" activeClassName="active" className="nav-link" href="gallery.html">Gallery</NavLink>
                            </li>
                            <li className="nav-item dropdown d-none d-sm-block">
                                <NavLink to="/projects" activeClassName="active" className="dropbtn nav-link dropdown-toggle" href="projects.html">Projects</NavLink>
                                <div className="p-0 m-0 dropdown-menu bg-dark-cus border" aria-labelledby="navbarDropdownMenuLink">
                                    <NavLink to="/projects/websites" className="text-center dropdown-item text-white-cus border-bottom" href="projects/websites.html">Websites</NavLink>
                                    <NavLink to="/projects/games" className="text-center dropdown-item text-white-cus border-bottom" href="projects/games.html">Games</NavLink>
                                    <NavLink to="/projects/webcomics" className="text-center dropdown-item text-white-cus border-bottom" href="projects/webcomics.html">Webcomics</NavLink>
                                    <NavLink to="/projects/animations" className="text-center dropdown-item text-white-cus" href="projects/animations.html">Animations</NavLink>
                                </div>
                            </li>
                            <li className="nav-item d-block d-sm-none">
                                <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Route exact path="/" component={Main} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/about" component={About} />
                
                <Route path={`/projects/websites`} render={() => <Websites
                    proj={"websites"}
                    projData={this.state.projData}
                    modal={this.state.modal}
                    toggle={this.toggle}
                />} />
                <Route path={`/projects/games`} render={() => <Games
                    proj={"games"}
                    projData={this.state.projData}
                    modal={this.state.modal}
                    toggle={this.toggle}
                />} />
                <Route path={`/projects/webcomics`} render={() => <Webcomics
                    proj={"webcomics"}
                    projData={this.state.projData}
                    modal={this.state.modal}
                    toggle={this.toggle}
                />} />
                <Route path={`/projects/animations`} render={() => <Animations
                    proj={"animations"}
                    projData={this.state.projData}
                    modal={this.state.modal}
                    toggle={this.toggle}
                />} />
            </BrowserRouter>
        );
    }
}

export default Navigation