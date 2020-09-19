import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { ProjectSelector } from '../ProjectsInfo';

function Websites({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [selType, setSelType] = useState("HTML");

    function handleActive(e) {
        const elm = e.target.parentNode.dataset.name;
        switch(elm) {
            case "HTML":
                setSelType("HTML");
                break;
            case "React":
                setSelType("React");
                break;
            case "Wix":
                setSelType("Wix");
                break;
            default: 
                setSelType("HTML");
                console.log('The item you clicked is not does not have a gallery attached to it.');
        }
    }

    return (
        <React.Fragment>
            <ProjectSelector
                proj={"websites"}
                projData={projData}
                modal={modal}
                toggle={toggle}
                selType={selType}
                HandleActive={handleActive}
            />

            <Modal id="infoModal" centered size="xl" isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle} className="bg-dark-cus modal-white-text pl-6">{projData[proj][site].title}</ModalHeader>
                <ModalBody className="bg-dark-cus text-white-cus">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="media align-items-center">
                                <div id="img-holder" className="col-12 col-lg-8 text-center border-lg-right-2">
                                    <button type="button" className="btn btn-secondary mr-3" style={{height: "100px"}}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <img id="modalImg" className="img-fluid w-75 img-fluid-cus" src={`/images/${projData[proj].dir ? `${projData[proj].dir}/` : ""}${projData[proj].img}`} alt="" />
                                    <button type="button" className="btn btn-secondary ml-3" style={{height: "100px"}}><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>

                                <div id="img-holder-full" className="img-holder row col-12 align-items-center justify-content-center text-center">
                                    <button type="button" className="btn btn-secondary mr-3 btn-full-left-cus"><FontAwesomeIcon icon={faAngleLeft} /></button>
                                    <span className="panel_gallery helper"></span>
                                    <img id="modalImgFull" className="panel_gallery img-fluid p-3 img-fluid-cus" src={`/images/${projData[proj].dir ? `${projData[proj].dir}/` : ""}${projData[proj].img}`} alt="" />
                                    <button type="button" className="btn btn-secondary ml-3 btn-full-right-cus"><FontAwesomeIcon icon={faAngleRight} /></button>
                                </div>

                                <div className="d-none d-lg-block col-12 col-lg-4 text-center">
                                    <p className="modalDesc">{projData[proj].desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="row d-block d-lg-none pt-3 border-top">
                            <div className="col-12 col-lg-6 align-self-center text-center">
                                <p className="modalDesc">{projData[proj].desc}</p>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}

export default Websites