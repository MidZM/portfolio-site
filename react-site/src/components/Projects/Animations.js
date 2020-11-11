import React, { useEffect, useState } from 'react';
import { ProjectSelector } from '../HelperComponentsMain/ProjectsInfo';

function Animations({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [selType] = useState("animations");
    const [video, setVideo] = useState('SymTrailer');

    useEffect(() => {
        function arrowKeys(e) {
            switch(e.code) {
                case "ArrowLeft":
                    handleNext(1);
                    break;

                case "ArrowRight":
                    handleNext(0);
                    break;

                default: return;
            }
        }

        window.addEventListener('keydown', arrowKeys);

        return () => window.removeEventListener('keydown', arrowKeys);
    });

    function handleNext(num) {
        if (num === 0 && site === 0) return setSite(projData[proj][selType].length-1);
        else if (num === 1 && site === projData[proj][selType].length-1) return setSite(0);

        if (num === 0) setSite(site - 1);
        else if (num === 1) setSite(site + 1);
    }

    function handleActive(e) {
        let elm = e.target.parentNode.dataset.name;
        if (e.target.dataset.name) elm = e.target.dataset.name;
        switch(elm) {
            case "SymTrailer":
                setVideo("SymTrailer");
                break;
            case "ShelterMV":
                setVideo("ShelterMV");
                break;
            case "MarkedC9Trailer":
                setVideo("MarkedC9Trailer");
                break;
            case "MarkedShort":
                setVideo("MarkedShort");
                break;
            default: 
                setVideo("SymTrailer");
                console.log('The item you clicked is not does not have an animation attached to it.');
        }
    }

    return (
        <React.Fragment>
            <ProjectSelector
                proj={"animations"}
                projName={"Animations"}
                video={video}
                projData={projData}
                modal={modal}
                toggle={toggle}
                selType={selType}
                setSite={setSite}
                colCount={1}
                HandleActive={handleActive}
            />
        </React.Fragment>
    );
}

export default Animations