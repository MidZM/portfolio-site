import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ComicModal({modal, toggle, proj, projData, site, selType, HNS}) {
    return (
    <Modal id="infoModal" centered size="xl" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-dark-cus modal-white-text pl-6">{projData[proj][selType][site].title}</ModalHeader>
        <ModalBody className="p-0 m-auto">
            <div className="container-fluid">
                <div className="row">
                    <div className="media align-items-center">
                        <div id="img-holder" className="col-12 col-lg-8 text-center border-lg-right-2">
                            <button type="button" className="btn btn-secondary mr-3" style={{height: "100px"}} onClick={() => HNS(0)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                            <img id="modalImg" className="img-fluid w-75 img-fluid-cus" src={`/images/${projData[proj][selType][site].dir ? `${projData[proj][selType][site].dir}/` : ""}${projData[proj][selType][site].img}`} alt="" />
                            <button type="button" className="btn btn-secondary ml-3" style={{height: "100px"}} onClick={() => HNS(1)}><FontAwesomeIcon icon={faAngleRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalBody>
    </Modal>
    );
}

export default ComicModal;