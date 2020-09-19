import React, { useState, useEffect } from 'react';
import { GallerySelector } from './GalleryInfo';
import { GALLERYDATA } from '../shared/GalleryData';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExpand, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Gallery() {
    const [galName, setGalName] = useState("Marked");
    const [galData] = useState(GALLERYDATA);
    const [modal, setModal] = useState(false);
    const [imgIsFull, setImgIsFull] = useState(false);
    const [nextNum, setNextNum] = useState(0);
    const [imageInfo, setImageInfo] = useState({
        img: galData[galName][0].img,
        desc: galData[galName][0].desc,
        title: galData[galName][0].title
    });
    const [active, setActive] = useState({Marked: true});

    useEffect(() => {
        function arrowKeys(e) {
            switch(e.code) {
                case "ArrowLeft":
                    setNextNum(nextNum - 1);
                    break;

                case "ArrowRight":
                    setNextNum(nextNum + 1);
                    break;

                default: return;
            }
        }

        window.addEventListener('keydown', arrowKeys);

        return () => window.removeEventListener('keydown', arrowKeys);
    });

    useEffect(() => {
        setNextImage();
    }, [nextNum]);

    function setNextImage() {
        if (nextNum >= galData[galName].length) {
            setNextNum(0);
            setImageInfo({
                img: galData[galName][0].img,
                desc: galData[galName][0].desc,
                title: galData[galName][0].title
            });
        } else if (nextNum < 0) {
            setNextNum(galData[galName].length-1);
            setImageInfo({
                img: galData[galName][galData[galName].length-1].img,
                desc: galData[galName][galData[galName].length-1].desc,
                title: galData[galName][galData[galName].length-1].title
            });
        } else {
            setImageInfo({
                img: galData[galName][nextNum].img,
                desc: galData[galName][nextNum].desc,
                title: galData[galName][nextNum].title
            });
        }
    }

    function fullScreenPrefixer() {
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

        document.addEventListener('fullscreenchange', exitHandler);
        document.addEventListener('webkitfullscreenchange', exitHandler);
        document.addEventListener('mozfullscreenchange', exitHandler);
        document.addEventListener('MSFullscreenChange', exitHandler);

        const imgHolder = document.querySelector('#img-holder-full');

        function exitHandler() {
            if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
                setImgIsFull(false);
                // canPress = false;
                document.removeEventListener('fullscreenchange', exitHandler);
                document.removeEventListener('webkitfullscreenchange', exitHandler);
                document.removeEventListener('mozfullscreenchange', exitHandler);
                document.removeEventListener('MSFullscreenChange', exitHandler);
            }
        }
        
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
            setImgIsFull(true);
            RunPrefixMethod(imgHolder, "RequestFullScreen");
        }
    }

    const toggle = () => setModal(!modal);

    function setModalImg(e) {
        setImageInfo({
            img: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].img,
            desc: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].desc,
            title: galData[galName][parseInt(e.target.closest('[data-num]').dataset.num)].title
        });
        setNextNum(parseInt(e.target.closest('[data-num]').dataset.num));
    }

    function handleActive(e) {
        const elm = e.target.textContent;
        switch(elm) {
            case "Marked":
                setGalName("Marked");
                setActive({Marked: true});
                break;
            case "Symbiotic":
                setGalName("Symbiotic");
                setActive({Symbiotic: true});
                break;
            case "Fight King (Concept)":
                setGalName("FightKing");
                setActive({FightKing: true});
                break;
            case "Naruto":
                setGalName("Naruto");
                setActive({Naruto: true});
                break;
            case "Mascot":
                setGalName("Mascot");
                setActive({Mascot: true});
                break;
            default: 
                setGalName("Marked");
                setActive({Marked: true});
                console.log('The item you clicked is not does not have a gallery attached to it.');
        }
    }
    
    return (
        <div id="gallery">
            <GallerySelector
                HandleActive={handleActive}
                Active={active}
                GalData={galData}
                GalName={galName}
                Toggle={toggle}
                SetModalImg={setModalImg}
            />

            <Modal id="infoModal" centered size="xl" isOpen={modal} toggle={toggle}>
                <button type="button" className="d-none d-lg-block btn btn-outline-light position-absolute" style={{left: "0.8rem", top: "0.8rem"}} onClick={fullScreenPrefixer}><FontAwesomeIcon icon={faExpand} /></button>
                <ModalHeader toggle={toggle} className="bg-dark-cus modal-white-text pl-6">{imageInfo.title}</ModalHeader>
                <ModalBody className="bg-dark-cus text-white-cus">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="media align-items-center">
                                <div id="img-holder" className="col-12 col-lg-8 text-center border-lg-right-2" style={!imgIsFull ? {display: "block"} : {display: "none"}}>
                                    <button type="button" className="d-block d-lg-none btn btn-outline-light position-absolute" style={{left: "1rem", top: "1rem"}} onClick={fullScreenPrefixer}><FontAwesomeIcon icon={faExpand} size="2x" /></button>
                                    <button type="button" className="btn btn-secondary mr-3" style={{height: "100px"}} onClick={() => setNextNum(nextNum - 1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <img id="modalImg" className="img-fluid w-75 img-fluid-cus" src={`/images/${galName}/${imageInfo.img}`} alt="" />
                                    <button type="button" className="btn btn-secondary ml-3" style={{height: "100px"}} onClick={() => setNextNum(nextNum + 1)}><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>

                                <div id="img-holder-full" className="img-holder row col-12 align-items-center justify-content-center text-center" style={imgIsFull ? {display: "flex"} : {display: "none"}}>
                                    <button type="button" className="d-block btn btn-outline-light position-absolute" style={{left: "1rem", top: "1rem", zIndex: 10}} onClick={fullScreenPrefixer}><FontAwesomeIcon icon={faExpand} size="3x" /></button>
                                    <button type="button" className="btn btn-secondary mr-3 btn-full-left-cus" onClick={() => setNextNum(nextNum - 1)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <span className="panel_gallery helper"></span>
                                    <img id="modalImgFull" className="panel_gallery img-fluid p-3 img-fluid-cus" src={`/images/${galName}/${imageInfo.img}`} alt="" />
                                    <button type="button" className="btn btn-secondary ml-3 btn-full-right-cus" onClick={() => setNextNum(nextNum + 1)}><FontAwesomeIcon icon={faAngleRight} /></button>
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

export default Gallery;