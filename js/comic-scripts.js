const img = document.querySelector('#modalImg');
const imgFull = document.querySelector('#modalImgFull');
const title = document.querySelector('#modalTitle');
const desc = document.querySelectorAll('.modalDesc');
const path = window.location.pathname;
let imgPath;
let modalArr = {};
let chapAmnt = 0
let comic = '';
let canPress = false;
let cover = false;

function setImgArr(dir, cov, chaps, nums, folder, override) {
    let e = 0;
    chapAmnt = chaps;
    cover = false;

    if (!override) {
        for (let x = 1; x < chaps+1; x++) {
            modalArr[`chapter${x}`] = [];
            if (cov) {
                e = 1;
                cover = true;
            }

            if (Array.isArray(nums)) {
                const num = nums[x-1];
                if (num === undefined) {
                    console.error('You did not input the same amount of pages in: Arugment 3 as you did chapters in: Argument 2');
                    return;
                }
                
                for (let y = 0; y < num + e; y++) {
                    if (folder) {
                        modalArr[`chapter${x}`].push({
                            img: `${dir}/comic/${folder}/chapter${x}/${folder}-Chapter-${x}-Page-${y}.jpg`,
                            thumb: `${dir}/comic/${folder}/chapter${x}/thumb/${folder}-Chapter-${x}-Page-${y}-Thumb.jpg`,
                            cover: cover
                        });
                    } else {
                        modalArr[`chapter${x}`].push({
                            img: `${dir}/comic/chapter${x}/${dir}-Chapter-${x}-Page-${y}.jpg`,
                            thumb: `${dir}/comic/chapter${x}/thumb/${dir}-Chapter-${x}-Page-${y}-Thumb.jpg`,
                            cover: cover
                        });
                    }
                }
            } else if (!isNaN(nums)) {
                if (chaps > 1) {
                    console.error('More than one chapter requires an array of numbers.');
                    return;
                }
                for (let i = 1; i < nums + 1; i++) {
                    if (folder) {
                        modalArr[`chapter${x}`].push({
                            img: `${dir}/comic/${folder}/chapter${x}/${folder}-Chapter-${x}-Page-${i}.jpg`,
                            thumb: `${dir}/comic/${folder}/chapter${x}/thumb/${folder}-Chapter-${x}-Page-${i}-Thumb.jpg`,
                            cover: cover
                        });
                    } else {
                        modalArr[`chapter${x}`].push({
                            img: `${dir}/comic/chapter${x}/${dir}-Chapter-${x}-Page-${i}.jpg`,
                            thumb: `${dir}/comic/chapter${x}/thumb/${dir}-Chapter-${x}-Page-${i}-Thumb.jpg`,
                            cover: cover
                        });
                    }
                }
            } else {
                console.error('Please input a number, or an array of numbers matching the number of chapters from Argument 2, in: Argument 3');
            }
        }
    } else {
        modalArr[`chapter${chaps}`] = [];
        
        if (Array.isArray(nums)) {
            const num = nums[chaps-1];
            if (num === undefined) {
                console.error('You did not input the same amount of pages in: Arugment 3 as you did chapters in: Argument 2');
                return;
            }
            
            for (let y = 0; y < num + e; y++) {
                if (folder) {
                    modalArr[`chapter${chaps}`].push({
                        img: `${dir}/comic/${folder}/chapter${chaps}/${folder}-Chapter-${chaps}-Page-${y}.jpg`,
                        thumb: `${dir}/comic/${folder}/chapter${chaps}/thumb/${folder}-Chapter-${chaps}-Page-${y}-Thumb.jpg`,
                        cover: cover
                    });
                } else {
                    modalArr[`chapter${chaps}`].push({
                        img: `${dir}/comic/chapter${chaps}/${dir}-Chapter-${chaps}-Page-${y}.jpg`,
                        thumb: `${dir}/comic/chapter${chaps}/thumb/${dir}-Chapter-${chaps}-Page-${y}-Thumb.jpg`,
                        cover: cover
                    });
                }
            }
        } else if (!isNaN(nums)) {
            for (let i = 1; i < nums + 1; i++) {
                if (folder) {
                    modalArr[`chapter${chaps}`].push({
                        img: `${dir}/comic/${folder}/chapter${chaps}/${folder}-Chapter-${chaps}-Page-${i}.jpg`,
                        thumb: `${dir}/comic/${folder}/chapter${chaps}/thumb/${folder}-Chapter-${chaps}-Page-${i}-Thumb.jpg`,
                        cover: cover
                    });
                } else {
                    modalArr[`chapter${chaps}`].push({
                        img: `${dir}/comic/chapter${chaps}/${dir}-Chapter-${chaps}-Page-${i}.jpg`,
                        thumb: `${dir}/comic/chapter${chaps}/thumb/${dir}-Chapter-${chaps}-Page-${i}-Thumb.jpg`,
                        cover: cover
                    });
                }
            }
        } else {
            console.error('Please input a number, or an array of numbers matching the number of chapters from Argument 2, in: Argument 3');
        }
    }
}

const e = path.substr(9);
switch(e) {
    case '/comics/marked.html':
        setImgArr('Marked', true, 10, [13, 25, 13, 18, 17, 26, 24, 12, 20, 19]);
        setImgArr('Marked', false, 11, 14, false, true)
        comic = 'Marked';
        break;
    case '/comics/childishlove.html':
        setImgArr('Naruto', true, 2, [18, 13], 'Childish-Love');
        comic = 'Childish Love';
        break;
    case '/comics/tdec.html':
        setImgArr('Naruto', false, 1, 8, 'TDEC');
        comic = 'The Day Everything Changed';
        break;
    case '/comics/tdecr.html':
        setImgArr('Naruto', false, 1, 2, 'TDECR');
        comic = 'The Day Everything Changed: Reboot';
        break;
    case '/comics/fightking.html':
        setImgArr('FightKing', false, 1, 3);
        comic = 'Fight King';
        break;
    default:
        console.log('Not viewing a comic page, or not a valid comic page');
}

function checkPaths() {
    const pathLen = path.split('/').length - 2;
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

function clickImg() {
    if (checkPaths() === '../../') {
        name = $(this).data('name');
        nameArr = modalArr[name];
        currentNum = parseInt($(this).data('num'));
        canPress = true;

        if (nameArr[currentNum].cover) $('#modalTitle').html(`${comic} - ${$(this).data('cover') ? 'Cover' : `Page ${currentNum}`}`);
        else $('#modalTitle').html(`${comic} - ${$(this).data('cover') ? 'Cover' : `Page ${currentNum+1}`}`);
        $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum].img}`);
        $('#modalImgFull').attr('src', `${imgPath}/${nameArr[currentNum].img}`);

        $('#infoModal').modal("show");
    }
}

function replaceItems(e) {
    if (checkPaths() === '../../') {
        $('#modalList').find('.row').empty()
        let nodePage = '';
        for (let i = 0; i < modalArr[$(e).data('name')].length; i++) {
            const page = modalArr[$(e).data('name')];
            if (page[i].cover) {
                nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter${$(e).data('name').substr(7)}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i].thumb}">
                    <div class="middle">
                        <div class="text">${i === 0 ? 'Cover' : 'Page ' + i}</div>
                    </div>
                </div>`;
            } else {
                nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter${$(e).data('name').substr(7)}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i].thumb}">
                    <div class="middle">
                        <div class="text">Page ${i+1}</div>
                    </div>
                </div>`;
            }
            $('#infoNames').find('.row').children().removeClass('active');
            $('#infoNames').find('.row').children()[$(e).data('name').substr(7)-1].classList.add('active');
        }
        $('#modalList').find('.row').append(nodePage);
        let cont = document.querySelectorAll('.cont');
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
    }
}

if (checkPaths() === '../../') {
    let nodeChapter = '';
    for (let i = 0; i < chapAmnt; i++) {
        nodeChapter += `<a href="#" onclick="replaceItems(this)" class="col-sm-12 nav-link text-a-cus font-2" data-name="chapter${i+1}">
            <h4>Chapter ${i+1}</h4>
        </a>`;
    }
    $('#infoNames').find('.row').append(nodeChapter);

    let nodePage = '';
    for (let i = 0; i < modalArr['chapter1'].length; i++) {
        const page = modalArr['chapter1'];
        if (page[i].cover) {
            nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter1" ${i === 0 ? 'data-cover="true"' : ''}>
                <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i].thumb}">
                <div class="middle">
                    <div class="text">${i === 0 ? 'Cover' : 'Page ' + i}</div>
                </div>
            </div>`;
        } else {
            nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i+1}" data-name="chapter1">
                <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i].thumb}">
                <div class="middle">
                    <div class="text">Page ${i+1}</div>
                </div>
            </div>`;
        }
    }
    $('#modalList').find('.row').append(nodePage);
    $('#infoNames').find('.row').children()[0].classList.add('active');

    
    let element = document.getElementById('modalImg');
    element.addEventListener('click', clickPage);
    function clickPage(e) {
        let PosX = 0;
        let ImgPos;

        function FindPos (oElement) {
            let posX;
            if(typeof( oElement.offsetParent ) != "undefined") {
                for(posX = 0; oElement; oElement = oElement.offsetParent) { posX += oElement.offsetLeft; }
                return [ posX ];
            } else { return [ oElement.x ]; }
        }

        ImgPos = FindPos(element);
        if (!e) e = window.event;
        if (e.pageX) PosX = e.pageX;
        else if (e.clientX) PosX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        PosX = PosX - ImgPos[0];

        if (PosX >= (element.offsetWidth / 2)) nextImg();
        else prevImg();
    }
}
let cont = document.querySelectorAll('.cont');
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

function prevImg() {
    if (canPress) {
        if (currentNum === 0) {
            return;
        } else {
            --currentNum;
        }
        canPress = false;
        $('.modal.show').animate({ scrollTop: 0 });
        
        FX.fadeOut(img, {
            duration: 500,
            complete: function() {
                if (nameArr[currentNum].cover) $('#modalTitle').html(`${comic} - ${currentNum === 0 ? 'Cover' : `Page ${currentNum}`}`);
                else $('#modalTitle').html(`${comic} - Page ${currentNum+1}`);
                $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum].img}`);

                FX.fadeIn(img, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
        FX.fadeOut(title, { duration: 500, complete: function() {FX.fadeIn(title, { duration: 500 })} });
    }
}

function nextImg() {
    if (canPress) {
        if (currentNum === nameArr.length-1) {
            return;
        } else {
            currentNum++;
        }
        canPress = false;
        $('.modal.show').animate({ scrollTop: 0 });

        FX.fadeOut(img, {
            duration: 500,
            complete: function() {
                if (nameArr[currentNum].cover) $('#modalTitle').html(`${comic} - ${currentNum === 0 ? 'Cover' : `Page ${currentNum}`}`);
                else $('#modalTitle').html(`${comic} - Page ${currentNum+1}`);
                $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum].img}`);

                FX.fadeIn(img, {
                    duration: 500,
                    complete: function(){
                        canPress = true;
                    }
                })
            }
        });
        FX.fadeOut(title, { duration: 500, complete: function() {FX.fadeIn(title, { duration: 500 })} });
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