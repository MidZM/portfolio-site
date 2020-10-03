import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faDeviantart, faYoutubeSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { ABOUTDATA } from '../shared/AboutData';
import { AboutBody, AboutLinks } from './HelperComponentsMain/AboutInfo';

library.add(
    faPalette,
    faDeviantart,
    faYoutubeSquare,
    faTwitterSquare
)

function About() {
    return (
        <div id="about">
            <div className="container-fluid h-100">
                <div className="row overflow-auto" style={{height: '90%'}}>
                    <div className="m-auto media">
                        <div className="container">
                            <div className="row text-center text-white-cus">
                                <AboutLinks data={ABOUTDATA} />
                                <AboutBody
                                    first={ABOUTDATA.text.first}
                                    second={ABOUTDATA.text.second}
                                    third={ABOUTDATA.text.third}
                                    fourth={ABOUTDATA.text.fourth}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;