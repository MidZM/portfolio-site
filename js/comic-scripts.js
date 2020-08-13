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

function setImgArr(dir, chaps, nums, folder) {
    let e = 0;
    if (dir === 'Marked' || dir === 'Childish-Love') e = 1;
    chapAmnt = chaps;

    for (let x = 1; x < chaps+1; x++) {
        modalArr[`chapter${x}`] = [];

        if (Array.isArray(nums)) {
            const num = nums[x-1];
            if (num === undefined) {
                console.error('You did not input the same amount of pages in: Arugment 3 as you did chapters in: Argument 2');
                break;
            }
            
            for (let y = 0; y < num + e; y++) {
                if (folder) modalArr[`chapter${x}`].push(`${dir}/comic/${folder}/chapter${x}/${folder}-Chapter-${x}-Page-${y}.jpg`);
                else modalArr[`chapter${x}`].push(`${dir}/comic/chapter${x}/${dir}-Chapter-${x}-Page-${y}.jpg`);
            }
        } else if (!isNaN(nums)) {
            for (let i = 1; i < nums + 1; i++) {
                if (folder) modalArr[`chapter${x}`].push(`${dir}/comic/${folder}/chapter${x}/${folder}-Chapter-${x}-Page-${i}.jpg`);
                else modalArr[`chapter${x}`].push(`${dir}/comic/chapter${x}/${dir}-Chapter-${x}-Page-${i}.jpg`);
            }
        } else {
            console.error('Please input a number or an array of numbers matching the number of chapters from Argument 2 in: Argument 3');
        }
    }
}

const e = path.substr(9);
switch(e) {
    case '/comics/marked.html':
        setImgArr('Marked', 9, [13, 25, 13, 18, 17, 26, 24, 12, 20]);
        comic = 'Marked';
        break;
    case '/comics/childishlove.html':
        setImgArr('Naruto', 2, [18, 13], 'Childish-Love');
        comic = 'Childish Love';
        break;
    case '/comics/tdec.html':
        setImgArr('Naruto', 1, 8, 'TDEC');
        comic = 'The Day Everything Changed';
        break;
    case '/comics/tdecr.html':
        setImgArr('Naruto', 1, 2, 'TDECR');
        comic = 'The Day Everything Changed: Reboot';
        break;
    case '/comics/fightking.html':
        setImgArr('FightKing', 1, 3);
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
        if (path.includes('marked') || path.includes('childishlove')) currentNum = parseInt($(this).data('num'));
        else currentNum = parseInt($(this).data('num')) - 1;
        canPress = true;

        if (path.includes('marked') || path.includes('childishlove')) $('#modalTitle').html(`${comic} - ${$(this).data('cover') ? 'Cover' : `Page ${currentNum}`}`);
        else $('#modalTitle').html(`${comic} - ${$(this).data('cover') ? 'Cover' : `Page ${currentNum+1}`}`);
        $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum]}`);
        $('#modalImgFull').attr('src', `${imgPath}/${nameArr[currentNum]}`);

        $('#infoModal').modal("show");
    }
}

function replaceItems(e) {
    if (checkPaths() === '../../') {
        $('#modalList').find('.row').empty()
        let nodePage = '';
        for (let i = 0; i < modalArr[$(e).data('name')].length; i++) {
            const page = modalArr[$(e).data('name')];
            if (path.includes('marked') || path.includes('childishlove')) {
                nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter${$(e).data('name').substr(7)}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i]}">
                    <div class="middle">
                        <div class="text">${i === 0 ? 'Cover' : 'Page ' + i}</div>
                    </div>
                </div>`;
            } else {
                nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter${$(e).data('name').substr(7)}">
                    <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i]}">
                    <div class="middle">
                        <div class="text">${i === 0 ? 'Cover' : 'Page ' + i}</div>
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
        if (path.includes('marked') || path.includes('childishlove')) {
            nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i}" data-name="chapter1" ${i === 0 ? 'data-cover="true"' : ''}>
                <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i]}">
                <div class="middle">
                    <div class="text">${i === 0 ? 'Cover' : 'Page ' + i}</div>
                </div>
            </div>`;
        } else {
            nodePage += `<div class="cont col-6 col-md-4 col-lg-3 mb-4" data-num="${i+1}" data-name="chapter1">
                <img class="img-fluid img-thumbnail image" src="${imgPath}/${page[i]}">
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
                if (path.includes('marked') || path.includes('childishlove')) $('#modalTitle').html(`${comic} - ${currentNum === 0 ? 'Cover' : `Page ${currentNum}`}`);
                else $('#modalTitle').html(`${comic} - Page ${currentNum+1}`);
                $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum]}`);

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
                if (path.includes('marked') || path.includes('childishlove')) $('#modalTitle').html(`${comic} - ${currentNum === 0 ? 'Cover' : `Page ${currentNum}`}`);
                else $('#modalTitle').html(`${comic} - Page ${currentNum+1}`);
                $('#modalImg').attr('src', `${imgPath}/${nameArr[currentNum]}`);

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