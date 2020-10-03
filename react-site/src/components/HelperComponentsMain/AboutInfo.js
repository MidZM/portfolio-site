import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function AboutBody({first, second, third, fourth}) {
    return (
        <div className="media-body">
            <h1 className="mt-3">About</h1>
            <h4 className="ml-auto mr-auto mt-4 mb-5 w-75">{first}</h4>
            <p className="text-left" style={{textIndent: '50px'}}>{second}</p>
            <p className="text-left" style={{textIndent: '50px'}}>{third}</p>
            <p className="text-left" style={{textIndent: '50px'}}>{fourth}</p>
        </div>
    );
}

function AboutLinks({data}) {
    let links = data.links.map((elm, index) => <a key={index} href={elm.link} className="m-2 text-a-cus"><FontAwesomeIcon icon={[elm.prefix, elm.icon]} size="3x" /></a>)
    return (
        <div className="d-inline w-md-100">
            <img className="img-fluid m-auto" src="images/Mascot/MascotAvatar-Flipped.png" alt="Mascot" />
            <br />
            {links}
        </div>
    );
}

export { AboutBody, AboutLinks }