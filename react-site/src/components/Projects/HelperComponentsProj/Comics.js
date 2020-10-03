import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectSelector } from '../../HelperComponentsMain/ProjectsInfo';
import ComicModal from './ComicModal';

function Comics({proj, projData, modal, toggle}) {
    const [site, setSite] = useState(0);
    const [chapter, setChapter] = useState('chapter1');
    const [page, setPage] = useState(0);
    const [selType] = useState("webcomics");
    const [comic, setComic] = useState("");
    const [comicNum, setComicNum] = useState(0);
    const [comicName, setComicName] = useState("Marked");

    const match = useParams();

    useEffect(() => {
        function arrowKeys(e) {
            switch(e.code) {
                case "ArrowLeft":
                    handleNext(0);
                    break;

                case "ArrowRight":
                    handleNext(1);
                    break;

                default: return;
            }
        }

        window.addEventListener('keydown', arrowKeys);
        setComic(match.dataName);

        return () => window.removeEventListener('keydown', arrowKeys);
    });

    useEffect(() => {
        setComicName(projData[proj]['webcomics'][comicNum]['title'])
    }, [comicNum]);

    function handleNext(num) {
        console.log(page, num, projData[proj]['webcomics'][comicNum]['chapters'][chapter].length-1)
        if (num === 0 && page === 0) return setPage(projData[proj]['webcomics'][comicNum]['chapters'][chapter].length-1);
        else if (num === 1 && page === projData[proj]['webcomics'][comicNum]['chapters'][chapter].length-1) return setPage(0);

        if (num === 0) setPage(page - 1);
        else if (num === 1) setPage(page + 1);
    }

    function handleActive(e) {
        let elm = e.target.parentNode.dataset.name;
        if (e.target.dataset.name) elm = e.target.dataset.name;
        setChapter(elm);
    }

    return (
        <React.Fragment>
            <ProjectSelector
                proj={`webcomics`}
                projName={comicName}
                colCount={3}
                projData={projData}
                modal={modal}
                toggle={toggle}
                selType={selType}
                setSite={setSite}
                setPage={setPage}
                HandleActive={handleActive}
                comic={comic}
                setComic={setComic}
                comicName={comicName}
                setComicName={setComicName}
                comicNum={comicNum}
                setComicNum={setComicNum}
                chapter={chapter}
                setChapter={setChapter}
            />
            
            <ComicModal
                modal={modal}
                toggle={toggle}
                proj={proj}
                projData={projData}
                site={site}
                setSite={setSite}
                selType={selType}
                page={page}
                setPage={setPage}
                comicNum={comicNum}
                setComicNum={setComicNum}
                comic={comic}
                setComic={setComic}
                chapter={chapter}
                setChapter={setChapter}
                HNS={handleNext}
            />
        </React.Fragment>
    );
}

export default Comics