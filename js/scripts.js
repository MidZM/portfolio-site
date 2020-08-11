let cont = document.querySelectorAll('.cont');
const img = document.querySelector('#modalImg');
const imgFull = document.querySelector('#modalImgFull');
const title = document.querySelector('#modalTitle');
const desc = document.querySelectorAll('.modalDesc');
let imgPath;

function checkPaths() {
    const pathLen = window.location.pathname.split('/').length - 2;
    let backPath = '';

    if (pathLen > 0) {
        for (let i = 0; i < pathLen; i++) {
            backPath += '../';
        }
        return backPath;
    } else {
        return '';
    }
}

imgPath = `${checkPaths()}images`;

let tech;
let first;
let third;
let eng;
if (checkPaths() !== "") {
    tech = document.querySelectorAll('.modalTech');
    first = document.querySelectorAll('.modalFirst');
    third = document.querySelectorAll('.modalThird');
    eng = document.querySelectorAll('.modalEng');
}

function clickImg() {
    name = $(this).data('name');
    nameArr = modalArr[name];
    currentNum = parseInt($(this).data('num'));
    canPress = true;
    if (checkPaths() !== "") {
        if (nameArr[$(this).data('num')].about) webDesc = nameArr[$(this).data('num')].about;
        if (nameArr[$(this).data('num')].tech) webTech = nameArr[$(this).data('num')].tech;
        if (nameArr[$(this).data('num')].first) webFirst = nameArr[$(this).data('num')].first;
        if (nameArr[$(this).data('num')].third) webThird = nameArr[$(this).data('num')].third;
        if (nameArr[$(this).data('num')].eng) webEng = nameArr[$(this).data('num')].eng;

        $('.modalTech').empty();
        $('.modalFirst').empty();
        $('.modalThird').empty();
        $('.modalEng').empty();
    }

    $('#modalTitle').html(nameArr[$(this).data('num')].title);
    if (checkPaths() !== "") {
        $('#modalImg').attr('src', `${imgPath}/${nameArr[$(this).data('num')].img}`);
        $('#modalImgFull').attr('src', `${imgPath}/${nameArr[$(this).data('num')].img}`);
        $('.modalDesc').html(webDesc);
        if (nameArr[$(this).data('num')].tech) $(webTech).each((i) => $('.modalTech').append(`<ul class="m-0"><li>${webTech[i]}</li></ul>`));
        if (nameArr[$(this).data('num')].first) $(webFirst).each((i) => $('.modalFirst').append(`<ul class="m-0"><li>${webFirst[i]}</li></ul>`));
        if (nameArr[$(this).data('num')].third) $(webThird).each((i) => $('.modalThird').append(`<ul class="m-0"><li>${webThird[i]}</li></ul>`));
        $('.modalEng').html(webEng);
    } else {
        $('#modalImg').attr('src', `${imgPath}/${name}/${nameArr[$(this).data('num')].img}`);
        $('#modalImgFull').attr('src', `${imgPath}/${name}/${nameArr[$(this).data('num')].img}`);
        $('.modalDesc').html(nameArr[$(this).data('num')].desc);
    }

    $('#infoModal').modal("show");
}

let animDelay = 0;
for (let i = 0; i < cont.length; i++) {
    cont[i].addEventListener('click', clickImg);
    animDelay = animDelay + 50;
    anime({
        targets: cont[i],
        duration: 750,
        delay: animDelay,
        opacity: 1,
        scale: [1, 1.2, 1],
        easing: 'easeInOutSine'
    });
}

function replaceItems(e) {
    const prevActive = document.querySelector('.nav-link.text-a-cus.active');
    const thisActive = e;
    for (let i = 0; i < cont.length; i++) {
        cont[i].removeEventListener('click', clickImg);
        $(cont[i]).remove();
    }

    $('#infoNames').collapse('hide');
    
    prevActive.classList.remove('active');
    thisActive.classList.add('active');

    nameArr = modalArr[e.dataset.name];
    for (let x = 0; x < nameArr.length; x++) {
        let node;
        if (checkPaths() === "") {
            node = $(`
                <div class="cont" data-num="${x}" data-name="${e.dataset.name}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${e.dataset.name}/thumb/${nameArr[x].img}">
                    <div class="middle">
                        <div class="text">${nameArr[x].title}</div>
                    </div>
                </div>
            `);
        } else {
            node = $(`
                <div class="cont" data-num="${x}" data-name="${e.dataset.name}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${nameArr[x].img}">
                    <div class="middle">
                        <div class="text">${nameArr[x].title}</div>
                    </div>
                </div>
            `);
        }
        $(imgCont).append(node);
    }
    cont = document.querySelectorAll('.cont');

    animDelay = 0;
    for (let i = 0; i < cont.length; i++) {
        cont[i].addEventListener('click', clickImg);
        animDelay = animDelay + 50;
        anime({
            targets: cont[i],
            duration: 750,
            delay: animDelay,
            opacity: 1,
            scale: [1, 1.2, 1],
            easing: 'easeInOutSine'
        });
    }
}

function prevImg() {
    if (canPress) {
        if (currentNum === 0) {
            currentNum = nameArr.length-1;
        } else {
            --currentNum;
        }
        canPress = false;
        if (checkPaths() !== "") {
            if (nameArr[currentNum].about) webDesc = nameArr[currentNum].about;
            if (nameArr[currentNum].tech) webTech = nameArr[currentNum].tech;
            if (nameArr[currentNum].first) webFirst = nameArr[currentNum].first;
            if (nameArr[currentNum].third) webThird = nameArr[currentNum].third;
            if (nameArr[currentNum].eng) webEng = nameArr[currentNum].eng;
        }
        
        FX.fadeOut(img, {
            duration: 500,
            complete: function() {
                $('#modalTitle').html(nameArr[currentNum].title);
                if (checkPaths !== "") {
                    $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum].img}`);
                    $('.modalDesc').html(webDesc);
                    if (nameArr[currentNum].tech) $('.modalTech').empty();
                    if (nameArr[currentNum].first) $('.modalFirst').empty();
                    if (nameArr[currentNum].third) $('.modalThird').empty();
                    if (nameArr[currentNum].tech) $(webTech).each((i) => $('.modalTech').append(`<ul class="m-0"><li>${webTech[i]}</li></ul>`));
                    if (nameArr[currentNum].first) $(webFirst).each((i) => $('.modalFirst').append(`<ul class="m-0"><li>${webFirst[i]}</li></ul>`));
                    if (nameArr[currentNum].third) $(webThird).each((i) => $('.modalThird').append(`<ul class="m-0"><li>${webThird[i]}</li></ul>`));
                    $('.modalEng').html(webEng);
                } else {
                    $('#modalImg').attr('src', `${imgPath}/${name}/${nameArr[currentNum].img}`);
                    $('.modalDesc').html(nameArr[currentNum].desc);
                }
                
                FX.fadeIn(img, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
        FX.fadeOut(title, { duration: 500, complete: function() {FX.fadeIn(title, { duration: 500 })} });
        for (let i = 0; i < desc.length; i++) FX.fadeOut(desc[i], { duration: 500, complete: function() {FX.fadeIn(desc[i], { duration: 500 })} });
        if (checkPaths() !== "") {
            if (nameArr[currentNum].tech) for (let i = 0; i < tech.length; i++) FX.fadeOut(tech[i], { duration: 500, complete: function() {FX.fadeIn(tech[i], { duration: 500 })} });
            if (nameArr[currentNum].first) for (let i = 0; i < first.length; i++) FX.fadeOut(first[i], { duration: 500, complete: function() {FX.fadeIn(first[i], { duration: 500 })} });
            if (nameArr[currentNum].third) for (let i = 0; i < third.length; i++) FX.fadeOut(third[i], { duration: 500, complete: function() {FX.fadeIn(third[i], { duration: 500 })} });
            if (nameArr[currentNum].eng) for (let i = 0; i < eng.length; i++) FX.fadeOut(eng[i], { duration: 500, complete: function() {FX.fadeIn(eng[i], { duration: 500 })} });
        }
        
        FX.fadeOut(imgFull, {
            duration: 500,
            complete: function() {
                if (checkPaths() !== "") {
                    $('#modalImgFull').attr('src', `${imgPath}/${nameArr[currentNum].img}`);
                } else {
                    $('#modalImgFull').attr('src', `${imgPath}/${name}/${nameArr[currentNum].img}`);
                }
                
                FX.fadeIn(imgFull, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
    }
}

function nextImg() {
    if (canPress) {
        if (currentNum === nameArr.length-1) {
            currentNum = 0;
        } else {
            currentNum++;
        }
        canPress = false;
        if (checkPaths() !== "") {
            if (nameArr[currentNum].about) webDesc = nameArr[currentNum].about;
            if (nameArr[currentNum].tech) webTech = nameArr[currentNum].tech;
            if (nameArr[currentNum].first) webFirst = nameArr[currentNum].first;
            if (nameArr[currentNum].third) webThird = nameArr[currentNum].third;
            if (nameArr[currentNum].eng) webEng = nameArr[currentNum].eng;
        }

        FX.fadeOut(img, {
            duration: 500,
            complete: function() {
                $('#modalTitle').html(nameArr[currentNum].title);
                if (checkPaths !== "") {
                    $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum].img}`);
                    $('.modalDesc').html(webDesc);
                    if (nameArr[currentNum].tech) $('.modalTech').empty();
                    if (nameArr[currentNum].first) $('.modalFirst').empty();
                    if (nameArr[currentNum].third) $('.modalThird').empty();
                    if (nameArr[currentNum].tech) $(webTech).each((i) => $('.modalTech').append(`<ul class="m-0"><li>${webTech[i]}</li></ul>`));
                    if (nameArr[currentNum].first) $(webFirst).each((i) => $('.modalFirst').append(`<ul class="m-0"><li>${webFirst[i]}</li></ul>`));
                    if (nameArr[currentNum].third) $(webThird).each((i) => $('.modalThird').append(`<ul class="m-0"><li>${webThird[i]}</li></ul>`));
                    $('.modalEng').html(webEng);
                } else {
                    $('#modalImg').attr('src', `${imgPath}/${name}/${nameArr[currentNum].img}`);
                    $('.modalDesc').html(nameArr[currentNum].desc);
                }

                FX.fadeIn(img, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
        FX.fadeOut(title, { duration: 500, complete: function() {FX.fadeIn(title, { duration: 500 })} });
        for (let i = 0; i < desc.length; i++) FX.fadeOut(desc[i], { duration: 500, complete: function() {FX.fadeIn(desc[i], { duration: 500 })} });
        if (checkPaths() !== "") {
            if (nameArr[currentNum].tech) for (let i = 0; i < tech.length; i++) FX.fadeOut(tech[i], { duration: 500, complete: function() {FX.fadeIn(tech[i], { duration: 500 })} });
            if (nameArr[currentNum].first) for (let i = 0; i < first.length; i++) FX.fadeOut(first[i], { duration: 500, complete: function() {FX.fadeIn(first[i], { duration: 500 })} });
            if (nameArr[currentNum].third) for (let i = 0; i < third.length; i++) FX.fadeOut(third[i], { duration: 500, complete: function() {FX.fadeIn(third[i], { duration: 500 })} });
            if (nameArr[currentNum].eng) for (let i = 0; i < eng.length; i++) FX.fadeOut(eng[i], { duration: 500, complete: function() {FX.fadeIn(eng[i], { duration: 500 })} });
        }

        FX.fadeOut(imgFull, {
            duration: 500,
            complete: function() {
                if (checkPaths() !== "") {
                    $('#modalImgFull').attr('src', `${imgPath}/${nameArr[currentNum].img}`);
                } else {
                    $('#modalImgFull').attr('src', `${imgPath}/${name}/${nameArr[currentNum].img}`);
                }

                FX.fadeIn(imgFull, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
    }
}

function fullscreen() {
    'use strict';
    let pfx = ["webkit", "moz", "ms", "o", ""];

    function RunPrefixMethod(obj, method) {
        let p = 0, m, t;
        while (p < pfx.length && !obj[m]) {
            m = method;
            if (pfx[p] === "") {
                m = m.substr(0, 1).toLowerCase() + m.substr(1);
            }
            m = pfx[p] + m;
            t = typeof obj[m];
            if (t !== "undefined") {
                pfx = [pfx[p]];
                return (t === "function" ? obj[m]() : obj[m]);
            }
            p++;
        }
    }

    document.addEventListener('fullscreenchange', exitHandler);
    document.addEventListener('webkitfullscreenchange', exitHandler);
    document.addEventListener('mozfullscreenchange', exitHandler);
    document.addEventListener('MSFullscreenChange', exitHandler);

    function exitHandler() {
        if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
            imgHolder.style.display = "none";
            imgHolderB.style.display = "block";
            canPress = false;
            document.removeEventListener('fullscreenchange', exitHandler);
            document.removeEventListener('webkitfullscreenchange', exitHandler);
            document.removeEventListener('mozfullscreenchange', exitHandler);
            document.removeEventListener('MSFullscreenChange', exitHandler);
        }
    }

    const e = document.getElementById("imageModalImg");
    const imgHolder = document.getElementById("img-holder-full");
    const imgHolderB = document.getElementById('img-holder');
    
    if (RunPrefixMethod(imgHolder, "fullScreenElement") == null) {
    }
    
    if (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
    }
    else {
        imgHolder.style.display = "flex";
        imgHolderB.style.display = "none";
        RunPrefixMethod(imgHolder, "RequestFullScreen");
    }
}

document.addEventListener('keydown', function(e) {
    if (canPress) {
        switch(e.keyCode) {
            case 37:
                prevImg();
                break;
            case 39:
                nextImg();
                break;
            default:
                break;
        }
    }
});