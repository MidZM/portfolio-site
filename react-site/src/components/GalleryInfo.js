import React, { Component } from 'react';
import Anime from 'react-anime';

function GalleryInfo(props) {
    let galName = props.name;
    const galInfo = props.galleryData[galName].map((elm, index) => (
        <div key={index} data-num={index} data-name={elm.name} onClick={(e) => {
                props.toggle();
                props.setImg(e);
            }}>
            <img className="img-fluid img-thumbnail image" src={`/${process.env.PUBLIC_URL}images/${galName}/thumb/${elm.img}`} alt={elm.title} />
            <div className="middle">
                <div className="text">{elm.title}</div>
            </div>
        </div>
    ));
    
    return (
        <div id="imageList" className="column-4">
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

function GalleryModalInfo(props) {

}

class GallerySelector extends Component {
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
                            <div className="row">
                                    <button id="Marked" onClick={(e) => this.props.HandleActive(e)} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${this.props.Active.Marked ? "active" : ""}`} data-name="Marked"><h4>Marked</h4></button>
                                    <button id="Symbiotic" onClick={(e) => this.props.HandleActive(e)} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${this.props.Active.Symbiotic ? "active" : ""}`} data-name="Symbiotic"><h4>Symbiotic</h4></button>
                                    <button id="FightKing" onClick={(e) => this.props.HandleActive(e)} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${this.props.Active.FightKing ? "active" : ""}`} data-name="FightKing"><h4>Fight King (Concept)</h4></button>
                                    <button id="Naruto" onClick={(e) => this.props.HandleActive(e)} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${this.props.Active.Naruto ? "active" : ""}`} data-name="Naruto"><h4>Naruto</h4></button>
                                    <button id="Mascot" onClick={(e) => this.props.HandleActive(e)} className={`btn btn-noLine col-sm-12 nav-link text-a-cus font-2 rounded-0 ${this.props.Active.Mascot ? "active" : ""}`} data-name="Mascot"><h4>Mascot</h4></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-0 position-absolute w-100 scrollDiv galleryDiv">
                    <div className="d-none d-sm-block col-sm-3"></div>
                    <div className="col col-sm-9">
                        <div className="container p-3">
                            <div className="row">
                                <div className="col-12 text-light text-center mb-3">
                                    <h1>Gallery</h1>
                                </div>
                            </div>
                            <div className="column-1">
                                <GalleryInfo
                                    galleryData={this.props.GalData}
                                    name={this.props.GalName}
                                    toggle={this.props.Toggle}
                                    setImg={this.props.SetModalImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { GalleryInfo, GalleryModalInfo, GallerySelector };