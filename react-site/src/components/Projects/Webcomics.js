import React, { useEffect, useState } from 'react';
import { ProjectSelector } from '../HelperComponentsMain/ProjectsInfo';

function Webcomics({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [selType, setSelType] = useState("webcomics");

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
            case "webcomics":
                setSelType("webcomics");
                break;
            default: 
                setSelType("webcomics");
        }
    }

    return (
        <React.Fragment>
            <ProjectSelector
                proj={"webcomics"}
                projName={"Webcomics"}
                colCount={3}
                projData={projData}
                modal={modal}
                toggle={toggle}
                selType={selType}
                setSite={setSite}
                HandleActive={handleActive}
            />
        </React.Fragment>
    );
}

export default Webcomics