import React, { useEffect, useState } from 'react';
import { ProjectSelector } from '../HelperComponentsMain/ProjectsInfo';
import SiteGameModal from './HelperComponentsProj/SiteGameModal';

function Games({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [selType, setSelType] = useState("VN");

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
        setSite(0)
        let elm = e.target.parentNode.dataset.name;
        if (e.target.dataset.name) elm = e.target.dataset.name;
        switch(elm) {
            case "VN":
                setSelType("VN");
                break;
            default: 
                setSelType("VN");
                console.log('The item you clicked does not have a game type attached to it.');
        }
    }

    return (
        <React.Fragment>
            <ProjectSelector
                proj={"games"}
                projName={"Games"}
                projData={projData}
                modal={modal}
                toggle={toggle}
                selType={selType}
                setSite={setSite}
                HandleActive={handleActive}
            />
            <SiteGameModal
                modal={modal}
                toggle={toggle}
                proj={proj}
                projData={projData}
                site={site}
                setSite={setSite}
                selType={selType}
                HNS={handleNext}
            />
        </React.Fragment>
    );
}

export default Games