import React, { useEffect, useState } from 'react';
import { fadeOut, fadeIn } from '../shared/FXFading'

function Main() {
    const [bg, setBg] = useState();

    useEffect(() => {
        let x = 0;
        const bg = document.getElementById('bg')
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
            
            fadeOut(bg, {
                duration: 1000,
                complete: function() {
                    if (x === imgList.length - 1) {
                        x = 0;
                    } else {
                        x = x + 1;
                    }
                    // console.log('debug')
                    setBg(imgList[x]);
                    fadeIn(bg, {duration: 1000});
                }
            })
            return false;
        }, 5000);

        return () => {
            clearInterval(setInt);
        }
    }, []);

    const bgStyles = {
        backgroundImage: `url('${bg}')`
    }

    return (
        <div id="home">
            <div id="bg" className="bg" style={bgStyles}></div>
            <img rel="preload" src="images/Marked/Im-Sorry.jpg" as="image" alt="" style={{display: 'none'}} />
            <img rel="preload" src="images/Symbiotic/main-menu-background.jpg" as="image" alt="" style={{display: 'none'}} />
            <img rel="preload" src="images/Marked/BannerK.jpg" as="image" alt="" style={{display: 'none'}} />
            <img rel="preload" src="images/Marked/Group-Banner.jpg" as="image" alt="" style={{display: 'none'}} />
            <img rel="preload" src="images/Marked/Thanks-For-Subscribing-img.jpg" as="image" alt="" style={{display: 'none'}} />
            <img rel="preload" src="images/Marked/Wallpaper.jpg" as="image" alt="" style={{display: 'none'}} />
        </div>
    )
}

export default Main;