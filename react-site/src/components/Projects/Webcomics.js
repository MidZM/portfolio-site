import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { ProjectSelector } from '../HelperComponentsMain/ProjectsInfo';
import Comics from './HelperComponentsProj/Comics';

function Webcomics({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [page, setPage] = useState(0);
    const [selType, setSelType] = useState("webcomics");
    const [comic, setComic] = useState("Marked");

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
        console.log(site, num, projData[proj][selType].length-1)
        if (num === 0 && site === 0) return setSite(projData[proj][selType].length-1);
        else if (num === 1 && site === projData[proj][selType].length-1) return setSite(0);

        if (num === 0) setSite(site - 1);
        else if (num === 1) setSite(site + 1);
    }

    function handleActive(e) {
        const elm = e.target.parentNode.dataset.name;
        switch(elm) {
            case "webcomics":
                setSelType("webcomics");
                break;
            default: 
                setSelType("webcomics");
                console.log('The item you clicked is not does not have a gallery attached to it.');
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
            
            <Route path="/projects/webcomics/:dataName" render={() => <Comics
                comic={comic}
                page={page}
                setPage={setPage}
                toggle={toggle}
                modal={modal}
                projData={projData}
            />} />
        </React.Fragment>
    );
}

export default Webcomics