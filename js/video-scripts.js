
let vid = document.querySelector('#modalVid');
let cont = document.querySelector('.cont');
let card = document.querySelector('.card');
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

let animDelay = 50;
console.log(card)
vid.setAttribute('src', `https://www.youtube-nocookie.com/embed/${modalArr[0].src}`);
card.children[0].innerHTML = modalArr[0].title;
card.children[1].innerHTML = modalArr[0].desc;
anime({
    targets: cont,
    duration: 750,
    delay: animDelay,
    opacity: 1,
    easing: 'easeInOutSine'
});

function replaceItems(e, num) {
    const prevActive = document.querySelector('.nav-link.text-a-cus.active');
    const thisActive = e;
    $(cont).remove();

    $('#infoNames').collapse('hide');
    
    prevActive.classList.remove('active');
    thisActive.classList.add('active');

    let node = $(`
        <div class="cont">
            <div class="videoWrapper mb-3">
                <iframe id="modalVid" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="card bg-dark-cus border text-light">
                <div class="card-header font-size border-bottom h2"></div>
                <div class="card-body"><p class="card-text"></p></div>
            </div>
        </div>
    `);
    $('#videoList').append(node);

    vid = document.querySelector('#modalVid');
    cont = document.querySelector('.cont');
    card = document.querySelector('.card');

    animDelay = 50;
    vid.setAttribute('src', `https://www.youtube-nocookie.com/embed/${modalArr[num].src}`);
    card.children[0].innerHTML = modalArr[num].title;
    card.children[1].innerHTML = modalArr[num].desc;
    anime({
        targets: cont,
        duration: 750,
        delay: animDelay,
        opacity: 1,
        easing: 'easeInOutSine'
    });
}