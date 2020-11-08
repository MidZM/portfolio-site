import React from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function ComicModal({modal, toggle, proj, projData, site, HNS, page, comic, comicNum, chapter}) {
    let dir = projData[proj]['webcomics'][comicNum]['isNested'];
    return (
    <Modal id="infoModal" centered className="modal-dialog-cus" isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} className="bg-dark-cus modal-white-text pl-6">{projData[proj]['webcomics'][site].title}</ModalHeader>
        <ModalBody className="bg-dark-cus p-0">
            <div className="container-fluid">
                <div className="row m-auto">
                    <div className="media align-items-center m-auto">
                        <div id="img-holder" className="col-12 text-center">
                            <button type="button" className="btn btn-secondary" style={{height: "100px"}} onClick={() => HNS(0)}><FontAwesomeIcon icon={faAngleLeft} /></button>
                            {console.log(`/${process.env.PUBLIC_URL}images/${dir ? `${dir}/` : ""}${dir ? `comic/${comic}` : comic}/${dir ? "" : 'comic/'}${chapter}/${projData[proj]['webcomics'][comicNum]['chapters'][chapter][page].img}`, projData[proj]['webcomics'][comicNum]['chapters'][chapter][page].img)}
                            <img id="modalImg" className="img-fluid w-90 p-3 img-fluid-cus" src={`/${process.env.PUBLIC_URL}images/${dir ? `${dir}/` : ""}${dir ? `comic/${comic}` : comic}/${dir ? "" : 'comic/'}${chapter}/${projData[proj]['webcomics'][comicNum]['chapters'][chapter][page].img}`} alt="" />
                            <button type="button" className="btn btn-secondary" style={{height: "100px"}} onClick={() => HNS(1)}><FontAwesomeIcon icon={faAngleRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalBody>
    </Modal>
    );
}

export default ComicModal;