const SIDEBARDATA = {
    websites: [
        {id: "HTML", name: "HTML/Non-Specific"},
        {id: "React", name: "React"},
        {id: "Wix", name: "Wix"},
    ],
    games: [
        {id: "VN", name: "Visual Novels"}
    ],
    webcomics: [
        {id: "webcomics", name: "Comics"}
    ],
    animations: [
        
    ]
}

const PROJECTSDATA = [
    {
        id: 0,
        title: "Websites",
        project: "websites"
    },
    {
        id: 1,
        title: "Games",
        project: "games"
    },
    {
        id: 2,
        title: "Webcomics",
        project: "webcomics"
    },
    {
        id: 3,
        title: "Animations",
        project: "animations"
    }
];

const PROJECTDATA = {
    websites: {
        HTML: [
            {
                id: 0,
                type: "HTML",
                img: "website_af.png",
                title: "Angel Fluff Diapers",
                dataName: "AFDiapers",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        Angel Fluff Diapers was the first website I made as a paid job, the design was a joint effort between me and the owner of the company.
                    </p>
                    <h3>Technologies Used:</h3>
                    <ul class="modalTech">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                    <h3>Custom Plugins:</h3>
                    <ul class="modalFirst">
                        <li>Search Bar &amp; Search Filter</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>Dansie Shopping Cart</li>
                        <li>jQuery Fade Slider (webpixstudio, image carousel - website no longer online)</li>
                    </ul>
                `
            },
            {
                id: 1,
                type: "HTML",
                img: "website_pp.png",
                title: "Mountain View Plastic Pants",
                dataName: "MVPants",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        This site went through 2 full redesigns before landing on its current design, the first redesign wasn't clicking with the current customer base and another redesign was put into the works, this time using a template from Bootstrapious.
                    </p>
                    <h3>Technologies Used:</h3>
                    <ul class="modalTech">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>ReactJS</li>
                    </ul>
                    <h3>Custom Plugins:</h3>
                    <ul class="modalFirst">
                        <li>Search Bar &amp; Search Filter</li>
                        <li>Product Page Information Generator</li>
                        <li>Product Page Price Adder</li>
                        <li>React Based Navigation Bar</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>Website Template (Bootstrapious)</li>
                        <li>Dansie Shopping Cart</li>
                        <li>Image Slider (Packaged with Template)</li>
                        <li>Image Flipper (Packaged with Template)</li>
                        <li>Primary Color Changer (Packaged with Template)</li>
                    </ul>
                `
            },
            {
                id: 2,
                type: "HTML",
                img: "website_ww.png",
                title: "Workwear Headquarters",
                dataName: "WWHQ",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        Workwear Headquarters was the largest of the websites I made for Mountain View Products and took the longest amount of time to finish. The website's overall design was made from a template on Colorlib with various changes to make it fit the website's aesthetic.
                    </p>
                    <h3>Technologies Used:</h3>
                    <ul class="modalTech">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                    </ul>
                    <h3>Custom Plugins:</h3>
                    <ul class="modalFirst">
                        <li>Search Bar &amp; Search Filter</li>
                        <li>Product Page Information Generator</li>
                        <li>Product Page Price Adder</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>Website Template (Colorlib)</li>
                        <li>Dansie Shopping Cart</li>
                        <li>ScrollToPlugin (Greensock, packaged with template)</li>
                        <li>Isotope - Category Column Fitting (Metafizzy, packaged with template)</li>
                        <li>Owl Carousel Version 2.1.6 (David Deutsch, packaged with template)</li>
                        <li>parallax.js (pixelcog, packaged with template)</li>
                        <li>ScrollMagic (Janpaepke, packaged with template)</li>
                    </ul>
                `
            },
            {
                id: 3,
                type: "HTML",
                img: "website_cn.png",
                title: "CloudNovel",
                dataName: "CloudNovel",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        I started working with CloudNovel LLC in 2020 helping to develop their online Visual Novel game engine, joining the CloudNovel team and working on the engine has helped greatly improved my JavaScript abilities.
                    </p>
                    <h3>Technologies Used:</h3>
                    <p class="modalTech">
                        N/A
                    </p>
                    <h3>Custom Plugins:</h3>
                    <p class="modalFirst">
                        N/A
                    </p>
                    <h3>3rd Party Plugins:</h3>
                    <p class="modalThird">
                        N/A
                    </p>
                `
            }
        ],
        React: [
            {
                id: 0,
                type: "React",
                img: "website_po.png",
                title: "Weston Meade Designs",
                dataName: "WMDesigns",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        My portfolio website was made as a complete React App. This site was originally made when I was in college as an HTML and CSS website using small bits of JavaScript to do things like changing images or going fullscreen. After learning ReactJS I remade the entire portfolio website as a single page React App.
                    </p>
                    <h3>Technologies Used:</h3>
                    <ul class="modalTech">
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>JavaScript ES6</li>
                        <li>ReactJS</li>
                    </ul>
                    <h3>Custom Plugins:</h3>
                    <ul class="modalFirst">
                        <li>Webcomic Page &amp; Chapter Changer</li>
                        <li>Gallery Image Changer</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>React</li>
                        <li>React Router</li>
                        <li>React Anchor Smooth Scroll</li>
                        <li>Modified - Implamenting fadeIn() and fadeOut() without jQuery. (gabrieleromanato, the initial script has been heavily modified to work in ReactJS but keeps the initial core elements of fading)</li>
                        <li>Fullscreen Prefixer (SitePoint)</li>
                    </ul>
                `
            }
        ],
        Wix: [
            {
                id: 0,
                type: "Wix",
                img: "website_zm.png",
                title: "Z-Archives",
                dataName: "ZArchives",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        The Z-Archives (Zone Archives) were created a long time ago to archive my webcomics, art, and projects. The site was abandoned in favor of using this site as my portfolio instead.
                    </p>
                    <h3>Technologies Used:</h3>
                    <ul class="modalTech">
                        <li>Wix WYSIWYG Editor</li>
                    </ul>
                    <h3>Custom Plugins:</h3>
                    <ul class="modalFirst">
                        <li>N/A</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>N/A</li>
                    </ul>
                `
            }
        ]
    },
    games: {
        VN: [
            {
                id: 0,
                type: "VN",
                img: "Cover_Thumb.jpg",
                title: "Symbiotic",
                dataName: "Symbiotic",
                desc: `
                    <h3>About:</h3>
                    <p class="modalDesc">
                        Symbiotic is a Visual Novel game that was created as a way to tell my story in a way that didn't require thousands upon thousands of different drawings, but still impactful and enjoyable.  It also contains various RPG elements such as leveling, battling, stats, etc.
                    </p>
                    <h3>Engine Used:</h3>
                    <ul class="modalTech">
                        <li>CloudNovel</li>
                        <li>Monogatari</li>
                    </ul>
                `
            }
        ],
    },
    webcomics: {
        webcomics: [
            {
                id: 0,
                type: "webcomics",
                img: "Cover_Thumb.jpg",
                dir: "Marked",
                title: "Marked",
                dataName: "Marked"
            },
            {
                id: 1,
                type: "webcomics",
                img: "Cover_Thumb_CL.jpg",
                dir: "Naruto",
                title: "Childish Love",
                dataName: "ChildishLove"
            },
            {
                id: 2,
                type: "webcomics",
                img: "CoverThumb_TDEC_Old.jpg",
                dir: "Naruto",
                title: "The Day Everything Changed",
                dataName: "TDEC"
            },
            {
                id: 3,
                type: "webcomics",
                img: "Cover_Thumb_TDEC.jpg",
                dir: "Naruto",
                title: "The Day Everything Changed: Reboot",
                dataName: "TDECR"
            },
            {
                id: 4,
                type: "webcomics",
                img: "FightKing-Chapter-1-Page-1-Thumb.jpg",
                dir: "FightKing/comic/chapter1/thumb",
                title: "Fight King Short Comic",
                dataName: "FightKing"
            }
        ]
    },
    animations: [
        {

        }
    ]
};

export { PROJECTDATA, PROJECTSDATA, SIDEBARDATA }