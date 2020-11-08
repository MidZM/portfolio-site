import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function SiteGameModal({modal, toggle, proj, projData, site, selType, HNS}) {
    return (
    <Modal id="infoModal" centered size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-dark-cus modal-white-text pl-6">{projData[proj][selType][site].title}</ModalHeader>
        <ModalBody className="bg-dark-cus text-white-cus">
            <div className="container-fluid">
                <div className="row">
                    <div className="media align-items-center">
                        <div id="img-holder" className="col-12 col-lg-8 text-center border-lg-right-2">
                            <button type="button" className="btn btn-secondary mr-3" style={{height: "100px"}} onClick={() => HNS(0)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                            <img id="modalImg" className="img-fluid w-75 img-fluid-cus mb-3 mb-lg-0" src={`/images/${projData[proj][selType][site].dir ? `${projData[proj][selType][site].dir}/` : ""}${projData[proj][selType][site].img}`} alt="" />
                            <button type="button" className="btn btn-secondary ml-3" style={{height: "100px"}} onClick={() => HNS(1)}><FontAwesomeIcon icon={faAngleRight} /></button>
                        </div>

                        <div id="img-holder-full" className="img-holder row col-12 align-items-center justify-content-center text-center" style={{display: 'none'}}>
                            <button type="button" className="btn btn-secondary mr-3 btn-full-left-cus"><FontAwesomeIcon icon={faAngleLeft} /></button>
                            <span className="panel_gallery helper"></span>
                            <img id="modalImgFull" className="panel_gallery img-fluid p-3 img-fluid-cus" src={`/images/${projData[proj][selType][site].dir ? `${projData[proj][selType][site].dir}/` : ""}${projData[proj][selType][site].img}`} alt="" />
                            <button type="button" className="btn btn-secondary ml-3 btn-full-right-cus"><FontAwesomeIcon icon={faAngleRight} /></button>
                        </div>

                        <div className="d-none d-lg-block col-12 col-lg-4 text-center">
                            <p className="modalDesc" dangerouslySetInnerHTML={ {__html: projData[proj][selType][site].desc} } />
                        </div>
                    </div>
                </div>

                <div className="row d-block d-lg-none pt-3 border-top">
                    <div className="col-12 col-lg-6 align-self-center text-center">
                        <p className="modalDesc"  dangerouslySetInnerHTML={ {__html: projData[proj][selType][site].desc} } />
                    </div>
                </div>
            </div>
        </ModalBody>
    </Modal>
    );
}

export default SiteGameModal;