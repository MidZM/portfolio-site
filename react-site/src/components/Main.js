import React, { useEffect, useState } from 'react';

function Main() {
    const [bg, setBg] = useState();
    const [animate, setAnimate] = useState(false);
    const [fadeTimer] = useState(5);

    const fadeMili = fadeTimer*1000;
    

    const imgExists = () => {
        setAnimate(false);
    }

    useEffect(() => {
        const img = document.getElementById('bgImg');
        
        let x = 0;
        
        const imgList = [
            "/images/Symbiotic/Cover.jpg",
            "/images/Marked/Im-Sorry.jpg",
            "/images/Symbiotic/main-menu-background.jpg",
            "/images/Marked/BannerK.jpg",
            "/images/Marked/Group-Banner.jpg",
            "/images/Marked/Thanks-For-Subscribing-img.jpg",
            "/images/Marked/Wallpaper.jpg"
        ];

        setBg(imgList[0]);
        const setInt = setInterval(function() {
            setAnimate(true);

            if (x === imgList.length - 1) {
                x = 0;
            } else {
                x = x + 1;
            }

            return setTimeout(() => {
                setBg(imgList[x]);
            }, fadeTimer*100);
        }, fadeMili);

        img.addEventListener("load", imgExists)

        return () => {
            clearInterval(setInt);
            img.removeEventListener("load", imgExists);
        }
    }, [fadeMili, fadeTimer]);

    const bgStyles = {
        backgroundImage: `url('${bg}')`,
        transition: `opacity 0.${fadeTimer}s`
    };

    return (
        <div id="home">
            <div id="bg" className={`bg ${animate ? 'fadeOut' : 'fadeIn'}`} style={bgStyles}></div>
            <img id="bgImg" rel="preload" src={bg} as="image" alt="" style={{display: 'none'}} />
        </div>
    )
}

export default Main;