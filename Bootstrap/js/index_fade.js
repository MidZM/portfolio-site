const imgArr = [
    "../images/Marked/Im-Sorry.jpg",
    "../images/Symbiotic/main-menu-background.jpg",
    "../images/Marked/BannerK.jpg",
    "../images/Marked/Group-Banner.jpg",
    "../images/Marked/Thanks-For-Subscribing-img.jpg",
    "../images/Marked/Wallpaper.jpg",
    "../images/Symbiotic/Cover.jpg"
];
let imgNum = 0;
const interval = setInterval(function() {
    if (imgNum === imgArr.length - 1) {
        imgNum = 0;
    } else {
        ++imgNum;
    }
    setImage(imgNum);
}, 5000);

function setImage(img) {
    const bg = document.getElementById('bg');

    FX.fadeOut(bg, {
        duration: 1000,
        complete: function() {
            bg.style.backgroundImage = `url('${imgArr[img]}')`;

            FX.fadeIn(bg, {
                duration: 1000
            });
        }
    });
}