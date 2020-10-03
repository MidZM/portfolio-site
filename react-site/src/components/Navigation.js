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
    BrowserRouter,
    Switch,
    Redirect
} from 'react-router-dom';
import { PROJECTDATA } from '../shared/ProjectData';
import { Collapse, Dropdown, DropdownMenu, DropdownToggle, Nav, NavbarToggler, NavItem } from 'reactstrap';
import Comics from './Projects/HelperComponentsProj/Comics';

class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            isNavOpen: false,
            isDropDown: false,
            projData: PROJECTDATA,
            modal: false
        };
    }

    onMouseEnter = () => this.setState({ isDropOpen: true });

    onMouseLeave = () => this.setState({ isDropOpen: false });

    toggleNav = () => this.setState( prevState => {return { isNavOpen: !prevState.isNavOpen }} );

    toggle = () => this.setState({modal: !this.state.modal});

    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark-cus sticky-top">
                    <NavLink to="/" exact className="navbar-brand"><img src={`/${process.env.PUBLIC_URL}images/MascotAvatar-Flipped.png`} alt="Logo" width="65" height="65" /></NavLink>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse id="navbarTop" isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/" exact activeClassName="active" className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/gallery" activeClassName="active" className="nav-link" href="gallery.html">Gallery</NavLink>
                            </NavItem>
                            <Dropdown isOpen={this.state.isDropOpen} onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} className="nav-item d-none d-sm-block">
                                <DropdownToggle tag="div" data-toggle="dropdown">
                                    <NavLink to="/projects" activeClassName="active" className="dropbtn nav-link dropdown-toggle" href="projects.html">Projects</NavLink>
                                </DropdownToggle>
                                <DropdownMenu className="p-0 m-0 bg-dark-cus border position-absolute">
                                    <NavLink to="/projects/websites" className="text-center dropdown-item text-white-cus border-bottom" href="projects/websites.html">Websites</NavLink>
                                    <NavLink to="/projects/games" className="text-center dropdown-item text-white-cus border-bottom" href="projects/games.html">Games</NavLink>
                                    <NavLink to="/projects/webcomics" className="text-center dropdown-item text-white-cus border-bottom" href="projects/webcomics.html">Webcomics</NavLink>
                                    <NavLink to="/projects/animations" className="text-center dropdown-item text-white-cus" href="projects/animations.html">Animations</NavLink>
                                </DropdownMenu>
                            </Dropdown>
                            <NavItem className="d-block d-sm-none">
                                <NavLink to="/projects" activeClassName="active" className="nav-link">Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/about" activeClassName="active" className="nav-link">About</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </nav>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/about" component={About} />
                    
                    <Route path="/projects/websites" render={() => <Websites
                        proj={"websites"}
                        projData={this.state.projData}
                        modal={this.state.modal}
                        toggle={this.toggle}
                    />} />
                    <Route path="/projects/games" render={() => <Games
                        proj={"games"}
                        projData={this.state.projData}
                        modal={this.state.modal}
                        toggle={this.toggle}
                    />} />
                    <Route exact path="/projects/webcomics" render={() => <Webcomics
                        proj={"webcomics"}
                        projData={this.state.projData}
                        modal={this.state.modal}
                        toggle={this.toggle}
                    />} />

                        <Route path="/projects/webcomics/:dataName" render={() => <Comics
                            proj={"webcomics"}
                            projData={this.state.projData}
                            modal={this.state.modal}
                            toggle={this.toggle}
                        />} />

                    <Route path="/projects/animations" render={() => <Animations
                        proj={"animations"}
                        projData={this.state.projData}
                        modal={this.state.modal}
                        toggle={this.toggle}
                    />} />

                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Navigation