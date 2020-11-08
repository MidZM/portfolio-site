import React, { Component } from 'react';
import { GallerySelector } from './HelperComponentsMain/GalleryInfo';
import { GALLERYDATA } from '../shared/GalleryData';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faAngleLeft, faAngleRight, faSpinner } from '@fortawesome/free-solid-svg-icons';

class Gallery extends Component {
    constructor() {
        super();
        this.state = {
            canProceed: true,
            galName: "Marked",
            galData: GALLERYDATA,
            modal: false,
            imgIsFull: false,
            nextNum: 0,
            imageInfo: {
                img: '',
                desc: '',
                title: ''
            },
            active: {
                Marked: true
            },
            animate: false,
            fadeTimer: 3,
            isLoading: false
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.setNextImage = this.setNextImage.bind(this);
        this.fullScreenPrefixer = this.fullScreenPrefixer.bind(this);
        this.setModalImg = this.setModalImg.bind(this);
        this.handleActive = this.handleActive.bind(this);
    }

    componentDidMount() {

        this.setState({
            imageInfo: {
                img: this.state.galData[this.state.galName][0].img,
                desc: this.state.galData[this.state.galName][0].desc,
                title: this.state.galData[this.state.galName][0].title
            }
        });
        
        const arrowKeys = e => {
            switch(e.code) {
                case "ArrowLeft":
                    this.setState(prevState => ({nextNum: prevState.nextNum - 1}), () => this.setNextImage());
                    break;

                case "ArrowRight":
                    this.setState(prevState => ({nextNum: prevState.nextNum + 1}), () => this.setNextImage());
                    break;

                default: return;
            }
        }

        window.addEventListener('keydown', arrowKeys);

        return () => window.removeEventListener('keydown', arrowKeys);
    }

    imgExists = () => {
        const img = document.querySelector('#modalImg');
        const imgIsLoaded = img.complete && img.naturalHeight !== 0;

        if (imgIsLoaded) {
            this.setState({
                animate: false,
                canProceed: true,
                isLoading: false
            });
        }
    }

    imgIsLoaded = () => {
        const img = document.querySelector('#modalImg');
        img.addEventListener("load", this.imgExists);
    }

    imgIsRemoved = () => {
        const img = document.querySelector('#modalImg');
        img.removeEventListener("load", this.imgExists);
    }

    setNextImage() {
        const { canProceed, galName, galData, nextNum, fadeTimer } = this.state;
        const fadeMili = fadeTimer*100;

        if (canProceed) {
            this.setState({
                canProceed: false
            }, () => {
                if (nextNum >= galData[galName].length) {
                    this.setState({
                        animate: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                nextNum: 0,
                                imageInfo: {
                                    img: galData[galName][0].img,
                                    desc: galData[galName][0].desc,
                                    title: galData[galName][0].title
                                },
                                isLoading: true
                            });
                        }, fadeMili);
                    });
                } else if (nextNum < 0) {
                    this.setState({
                        animate: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                nextNum: galData[galName].length-1,
                                imageInfo: {
                                    img: galData[galName][galData[galName].length-1].img,
                                    desc: galData[galName][galData[galName].length-1].desc,
                                    title: galData[galName][galData[galName].length-1].title
                                },
                                isLoading: true
                            });
                        }, fadeMili);
                    });
                } else {
                    this.setState({
                        animate: true
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                imageInfo: {
                                    img: galData[galName][nextNum].img,
                                    desc: galData[galName][nextNum].desc,
                                    title: galData[galName][nextNum].title
                                },
                                isLoading: true
                            });
                        }, fadeMili);
                    })
                }
            });
        }
    }

    fullScreenPrefixer() {
        let pfx = ["webkit", "moz", "ms", "o", ""];

        function RunPrefixMethod(obj, method) {
            let p = 0, m, t;
            while (p < pfx.length && !obj[m]) {
                m = method;
                if (pfx[p] === "") {
                    m = m.substr(0, 1).toLowerCase() + m.substr(1);
                }
                m = pfx[p] + m;
                t = typeof obj[m];
                if (t !== "undefined") {
                    pfx = [pfx[p]];
                    return (t === "function" ? obj[m]() : obj[m]);
                }
                p++;
            }
        }

        const imgHolder = document.querySelector('#img-holder-full');

        const exitHandler = () => {
            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                this.setState({imgIsFull: false});
                // canPress = false;
                document.removeEventListener('fullscreenchange', exitHandler);
                document.removeEventListener('webkitfullscreenchange', exitHandler);
                document.removeEventListener('mozfullscreenchange', exitHandler);
                document.removeEventListener('MSFullscreenChange', exitHandler);
            }
        }

        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener('webkitfullscreenchange', exitHandler);
        document.addEventListener('mozfullscreenchange', exitHandler);
        document.addEventListener('MSFullscreenChange', exitHandler);
        
        if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { /* Firefox */
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { /* IE/Edge */
                document.msExitFullscreen();
            }
        }
        else {
            this.setState({imgIsFull: true});
            RunPrefixMethod(imgHolder, "RequestFullScreen");
        }
    }

    toggle = () => this.setState(prevState => ({modal: !prevState.modal}));

    setModalImg(e) {
        const { galName, galData } = this.state;
        
        this.setState({
            imageInfo: {
                img: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].img,
                desc: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].desc,
                title: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].title
            },
            nextNum: parseInt(e.target.closest('[data-num]').dataset.num)
        });
    }

    handleActive(e) {
        const elm = e.target.textContent;
        switch(elm) {
            case "Marked":
                this.setState({
                    galName: "Marked",
                    active: {
                        Marked: true
                    }
                });
                break;
            case "Symbiotic":
                this.setState({
                    galName: "Symbiotic",
                    active: {
                        Symbiotic: true
                    }
                });
                break;
            case "Fight King (Concept)":
                this.setState({
                    galName: "FightKing",
                    active: {
                        FightKing: true
                    }
                });
                break;
            case "Naruto":
                this.setState({
                    galName: "Naruto",
                    active: {
                        Naruto: true
                    }
                });
                break;
            case "Mascot":
                this.setState({
                    galName: "Mascot",
                    active: {
                        Mascot: true
                    }
                });
                break;
            default: 
                this.setState({
                    galName: "Marked",
                    active: {
                        Marked: true
                    }
                });
                console.log('The item you clicked is not does not have a gallery attached to it.');
        }
    }
    
    render() {
        const { galName, galData, modal, imgIsFull, imageInfo, active, fadeTimer, isLoading } = this.state;
        const fade = {
            transition: `opacity 0.${fadeTimer}s`
        }

        return (
            <div id="gallery">
                <GallerySelector
                    HandleActive={this.handleActive}
                    Active={active}
                    GalData={galData}
                    GalName={galName}
                    Toggle={this.toggle}
                    SetModalImg={this.setModalImg}
                />

                <Modal
                    id="infoModal"
                    centered
                    size="xl"
                    isOpen={modal}
                    toggle={this.toggle}
                    onOpened={this.imgIsLoaded}
                    onClosed={this.imgIsRemoved}
                >
                    <button type="button" className="d-block btn btn-outline-light position-absolute" style={{left: "0.8rem", top: "0.8rem"}} onClick={this.fullScreenPrefixer}><FontAwesomeIcon icon={faExpand} /></button>
                    <ModalHeader toggle={this.toggle} className="bg-dark-cus modal-white-text pl-6">{imageInfo.title}</ModalHeader>
                    <ModalBody className="bg-dark-cus text-white-cus">
                        <div className="container-fluid">
                            <div className="row h-100">
                                <div className="media align-items-center h-100">
                                    <div id="img-holder" className="col-12 col-lg-8 text-center border-lg-right-2 h-100" style={!imgIsFull ? {display: "block"} : {display: "none"}}>
                                        <button type="button" className="btn btn-secondary mr-3" style={{height: "100px"}} onClick={() => this.setState(prevState => ({nextNum: prevState.nextNum - 1}), () => this.setNextImage())}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                        { isLoading ? <FontAwesomeIcon className="position-absolute text-center w-75 my-auto" style={{top: 0, bottom: 0}} icon={faSpinner} size="3x" pulse /> : <span /> }
                                        <img id="modalImg" style={fade} className={`img-fluid w-75 img-fluid-cus mb-3 mb-lg-0 ${this.state.animate ? 'fadeOut' : 'fadeIn'}`} src={`/images/${galName}/${imageInfo.img}`} alt="" />
                                        <button type="button" className="btn btn-secondary ml-3" style={{height: "100px"}} onClick={() => this.setState(prevState => ({nextNum: prevState.nextNum + 1}), () => this.setNextImage())}><FontAwesomeIcon icon={faAngleRight} /></button>
                                    </div>

                                    <div id="img-holder-full" className="img-holder row col-12 align-items-center justify-content-center text-center" style={imgIsFull ? {display: "flex"} : {display: "none"}}>
                                        <button type="button" className="d-block btn btn-outline-light position-absolute" style={{left: "1rem", top: "1rem", zIndex: 10}} onClick={this.fullScreenPrefixer}><FontAwesomeIcon icon={faExpand} size="3x" /></button>
                                        <button type="button" className="btn btn-secondary mr-3 btn-full-left-cus" onClick={() => this.setState(prevState => ({nextNum: prevState.nextNum - 1}), () => this.setNextImage())}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                        <span className="panel_gallery helper"></span>
                                        <img id="modalImgFull" style={fade} className={`panel_gallery img-fluid p-3 img-fluid-cus ${this.state.animate ? 'fadeOut' : 'fadeIn'}`} src={`/images/${galName}/${imageInfo.img}`} alt="" />
                                        { isLoading ? <FontAwesomeIcon className="position-absolute text-center w-75 my-auto" style={{top: 0, bottom: 0}} icon={faSpinner} size="3x" pulse /> : <span /> }
                                        <button type="button" className="btn btn-secondary ml-3 btn-full-right-cus" onClick={() => this.setState(prevState => ({nextNum: prevState.nextNum + 1}), () => this.setNextImage())}><FontAwesomeIcon icon={faAngleRight} /></button>
                                    </div>

                                    <div className="d-none d-lg-block col-12 col-lg-4 text-center">
                                        <p className="modalDesc">{imageInfo.desc}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="row d-block d-lg-none pt-3 border-top">
                                <div className="col-12 col-lg-6 align-self-center text-center">
                                    <p className="modalDesc">{imageInfo.desc}</p>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default Gallery;