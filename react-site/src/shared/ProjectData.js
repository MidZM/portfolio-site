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
        {
            id: "webcomics",
            name: "Comics",
            "Marked": [
                {id: "Chapter - 1", name: 'chapter1'},
                {id: "Chapter - 2", name: 'chapter2'},
                {id: "Chapter - 3", name: 'chapter3'},
                {id: "Chapter - 4", name: 'chapter4'},
                {id: "Chapter - 5", name: 'chapter5'},
                {id: "Chapter - 6", name: 'chapter6'},
                {id: "Chapter - 7", name: 'chapter7'},
                {id: "Chapter - 8", name: 'chapter8'},
                {id: "Chapter - 9", name: 'chapter9'},
                {id: "Chapter - 10", name: 'chapter10'},
                {id: "Chapter - 11", name: 'chapter11'}
            ],
            "Childish-Love": [
                {id: "Chapter - 1", name: 'chapter1'},
                {id: "Chapter - 2", name: 'chapter2'}
            ],
            "TDEC": [
                {id: "Chapter - 1", name: 'chapter1'}
            ],
            "TDECR": [
                {id: "Chapter - 1", name: 'chapter1'}
            ],
            "FightKing": [
                {id: "Chapter - 1", name: 'chapter1'}
            ]
        }
    ],
    animations: [
        {id: "SymTrailer", name: "Symbiotic Trailer"},
        {id: "ShelterMV", name: "Shelter Music Video"},
        {id: "MarkedC9Trailer", name: "Marked Chapter 9 Trailer"},
        {id: "MarkedShort", name: "Marked Short Animation"}
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
                        <li>Image Fader</li>
                    </ul>
                    <h3>3rd Party Plugins:</h3>
                    <ul class="modalThird">
                        <li>React</li>
                        <li>React Router</li>
                        <li>Bootstrap</li>
                        <li>Reactstrap</li>
                        <li>Font-Awesome</li>
                        <li>React Animejs</li>
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
                dataName: "Marked",
                chapters: {
                    chapter1: [
                        {title: "Cover", img: 'Marked-Chapter-1-Page-0.jpg', thumb: 'Marked-Chapter-1-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 1 - Page 1", img: 'Marked-Chapter-1-Page-1.jpg', thumb: 'Marked-Chapter-1-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 2", img: 'Marked-Chapter-1-Page-2.jpg', thumb: 'Marked-Chapter-1-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 3", img: 'Marked-Chapter-1-Page-3.jpg', thumb: 'Marked-Chapter-1-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 4", img: 'Marked-Chapter-1-Page-4.jpg', thumb: 'Marked-Chapter-1-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 5", img: 'Marked-Chapter-1-Page-5.jpg', thumb: 'Marked-Chapter-1-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 6", img: 'Marked-Chapter-1-Page-6.jpg', thumb: 'Marked-Chapter-1-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 7", img: 'Marked-Chapter-1-Page-7.jpg', thumb: 'Marked-Chapter-1-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 8", img: 'Marked-Chapter-1-Page-8.jpg', thumb: 'Marked-Chapter-1-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 9", img: 'Marked-Chapter-1-Page-9.jpg', thumb: 'Marked-Chapter-1-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 10", img: 'Marked-Chapter-1-Page-10.jpg', thumb: 'Marked-Chapter-1-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 11", img: 'Marked-Chapter-1-Page-11.jpg', thumb: 'Marked-Chapter-1-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 12", img: 'Marked-Chapter-1-Page-12.jpg', thumb: 'Marked-Chapter-1-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 13", img: 'Marked-Chapter-1-Page-13.jpg', thumb: 'Marked-Chapter-1-Page-13-Thumb.jpg', cover: false}
                    ],
                    chapter2: [
                        {title: "Cover", img: 'Marked-Chapter-2-Page-0.jpg', thumb: 'Marked-Chapter-2-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 2 - Page 1", img: 'Marked-Chapter-2-Page-1.jpg', thumb: 'Marked-Chapter-2-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 2", img: 'Marked-Chapter-2-Page-2.jpg', thumb: 'Marked-Chapter-2-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 3", img: 'Marked-Chapter-2-Page-3.jpg', thumb: 'Marked-Chapter-2-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 4", img: 'Marked-Chapter-2-Page-4.jpg', thumb: 'Marked-Chapter-2-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 5", img: 'Marked-Chapter-2-Page-5.jpg', thumb: 'Marked-Chapter-2-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 6", img: 'Marked-Chapter-2-Page-6.jpg', thumb: 'Marked-Chapter-2-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 7", img: 'Marked-Chapter-2-Page-7.jpg', thumb: 'Marked-Chapter-2-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 8", img: 'Marked-Chapter-2-Page-8.jpg', thumb: 'Marked-Chapter-2-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 9", img: 'Marked-Chapter-2-Page-9.jpg', thumb: 'Marked-Chapter-2-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 10", img: 'Marked-Chapter-2-Page-10.jpg', thumb: 'Marked-Chapter-2-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 11", img: 'Marked-Chapter-2-Page-11.jpg', thumb: 'Marked-Chapter-2-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 12", img: 'Marked-Chapter-2-Page-12.jpg', thumb: 'Marked-Chapter-2-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 13", img: 'Marked-Chapter-2-Page-13.jpg', thumb: 'Marked-Chapter-2-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 14", img: 'Marked-Chapter-2-Page-14.jpg', thumb: 'Marked-Chapter-2-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 15", img: 'Marked-Chapter-2-Page-15.jpg', thumb: 'Marked-Chapter-2-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 16", img: 'Marked-Chapter-2-Page-16.jpg', thumb: 'Marked-Chapter-2-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 17", img: 'Marked-Chapter-2-Page-17.jpg', thumb: 'Marked-Chapter-2-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 18", img: 'Marked-Chapter-2-Page-18.jpg', thumb: 'Marked-Chapter-2-Page-18-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 19", img: 'Marked-Chapter-2-Page-19.jpg', thumb: 'Marked-Chapter-2-Page-19-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 20", img: 'Marked-Chapter-2-Page-20.jpg', thumb: 'Marked-Chapter-2-Page-20-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 21", img: 'Marked-Chapter-2-Page-21.jpg', thumb: 'Marked-Chapter-2-Page-21-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 22", img: 'Marked-Chapter-2-Page-22.jpg', thumb: 'Marked-Chapter-2-Page-22-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 23", img: 'Marked-Chapter-2-Page-23.jpg', thumb: 'Marked-Chapter-2-Page-23-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 24", img: 'Marked-Chapter-2-Page-24.jpg', thumb: 'Marked-Chapter-2-Page-24-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 25", img: 'Marked-Chapter-2-Page-25.jpg', thumb: 'Marked-Chapter-2-Page-25-Thumb.jpg', cover: false}
                    ],
                    chapter3: [
                        {title: "Cover", img: 'Marked-Chapter-3-Page-0.jpg', thumb: 'Marked-Chapter-3-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 3 - Page 1", img: 'Marked-Chapter-3-Page-1.jpg', thumb: 'Marked-Chapter-3-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 2", img: 'Marked-Chapter-3-Page-2.jpg', thumb: 'Marked-Chapter-3-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 3", img: 'Marked-Chapter-3-Page-3.jpg', thumb: 'Marked-Chapter-3-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 4", img: 'Marked-Chapter-3-Page-4.jpg', thumb: 'Marked-Chapter-3-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 5", img: 'Marked-Chapter-3-Page-5.jpg', thumb: 'Marked-Chapter-3-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 6", img: 'Marked-Chapter-3-Page-6.jpg', thumb: 'Marked-Chapter-3-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 7", img: 'Marked-Chapter-3-Page-7.jpg', thumb: 'Marked-Chapter-3-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 8", img: 'Marked-Chapter-3-Page-8.jpg', thumb: 'Marked-Chapter-3-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 9", img: 'Marked-Chapter-3-Page-9.jpg', thumb: 'Marked-Chapter-3-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 10", img: 'Marked-Chapter-3-Page-10.jpg', thumb: 'Marked-Chapter-3-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 11", img: 'Marked-Chapter-3-Page-11.jpg', thumb: 'Marked-Chapter-3-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 12", img: 'Marked-Chapter-3-Page-12.jpg', thumb: 'Marked-Chapter-3-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 3 - Page 13", img: 'Marked-Chapter-3-Page-13.jpg', thumb: 'Marked-Chapter-3-Page-13-Thumb.jpg', cover: false}
                    ],
                    chapter4: [
                        {title: "Cover", img: 'Marked-Chapter-4-Page-0.jpg', thumb: 'Marked-Chapter-4-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 4 - Page 1", img: 'Marked-Chapter-4-Page-1.jpg', thumb: 'Marked-Chapter-4-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 2", img: 'Marked-Chapter-4-Page-2.jpg', thumb: 'Marked-Chapter-4-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 3", img: 'Marked-Chapter-4-Page-3.jpg', thumb: 'Marked-Chapter-4-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 4", img: 'Marked-Chapter-4-Page-4.jpg', thumb: 'Marked-Chapter-4-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 5", img: 'Marked-Chapter-4-Page-5.jpg', thumb: 'Marked-Chapter-4-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 6", img: 'Marked-Chapter-4-Page-6.jpg', thumb: 'Marked-Chapter-4-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 7", img: 'Marked-Chapter-4-Page-7.jpg', thumb: 'Marked-Chapter-4-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 8", img: 'Marked-Chapter-4-Page-8.jpg', thumb: 'Marked-Chapter-4-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 9", img: 'Marked-Chapter-4-Page-9.jpg', thumb: 'Marked-Chapter-4-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 10", img: 'Marked-Chapter-4-Page-10.jpg', thumb: 'Marked-Chapter-4-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 11", img: 'Marked-Chapter-4-Page-11.jpg', thumb: 'Marked-Chapter-4-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 12", img: 'Marked-Chapter-4-Page-12.jpg', thumb: 'Marked-Chapter-4-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 13", img: 'Marked-Chapter-4-Page-13.jpg', thumb: 'Marked-Chapter-4-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 14", img: 'Marked-Chapter-4-Page-14.jpg', thumb: 'Marked-Chapter-4-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 15", img: 'Marked-Chapter-4-Page-15.jpg', thumb: 'Marked-Chapter-4-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 16", img: 'Marked-Chapter-4-Page-16.jpg', thumb: 'Marked-Chapter-4-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 17", img: 'Marked-Chapter-4-Page-17.jpg', thumb: 'Marked-Chapter-4-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 4 - Page 18", img: 'Marked-Chapter-4-Page-18.jpg', thumb: 'Marked-Chapter-4-Page-18-Thumb.jpg', cover: false}
                    ],
                    chapter5: [
                        {title: "Cover", img: 'Marked-Chapter-5-Page-0.jpg', thumb: 'Marked-Chapter-5-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 5 - Page 1", img: 'Marked-Chapter-5-Page-1.jpg', thumb: 'Marked-Chapter-5-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 2", img: 'Marked-Chapter-5-Page-2.jpg', thumb: 'Marked-Chapter-5-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 3", img: 'Marked-Chapter-5-Page-3.jpg', thumb: 'Marked-Chapter-5-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 4", img: 'Marked-Chapter-5-Page-4.jpg', thumb: 'Marked-Chapter-5-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 5", img: 'Marked-Chapter-5-Page-5.jpg', thumb: 'Marked-Chapter-5-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 6", img: 'Marked-Chapter-5-Page-6.jpg', thumb: 'Marked-Chapter-5-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 7", img: 'Marked-Chapter-5-Page-7.jpg', thumb: 'Marked-Chapter-5-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 8", img: 'Marked-Chapter-5-Page-8.jpg', thumb: 'Marked-Chapter-5-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 9", img: 'Marked-Chapter-5-Page-9.jpg', thumb: 'Marked-Chapter-5-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 10", img: 'Marked-Chapter-5-Page-10.jpg', thumb: 'Marked-Chapter-5-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 11", img: 'Marked-Chapter-5-Page-11.jpg', thumb: 'Marked-Chapter-5-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 12", img: 'Marked-Chapter-5-Page-12.jpg', thumb: 'Marked-Chapter-5-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 13", img: 'Marked-Chapter-5-Page-13.jpg', thumb: 'Marked-Chapter-5-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 14", img: 'Marked-Chapter-5-Page-14.jpg', thumb: 'Marked-Chapter-5-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 15", img: 'Marked-Chapter-5-Page-15.jpg', thumb: 'Marked-Chapter-5-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 16", img: 'Marked-Chapter-5-Page-16.jpg', thumb: 'Marked-Chapter-5-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 5 - Page 17", img: 'Marked-Chapter-5-Page-17.jpg', thumb: 'Marked-Chapter-5-Page-17-Thumb.jpg', cover: false}
                    ],
                    chapter6: [
                        {title: "Cover", img: 'Marked-Chapter-6-Page-0.jpg', thumb: 'Marked-Chapter-6-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 6 - Page 1", img: 'Marked-Chapter-6-Page-1.jpg', thumb: 'Marked-Chapter-6-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 2", img: 'Marked-Chapter-6-Page-2.jpg', thumb: 'Marked-Chapter-6-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 3", img: 'Marked-Chapter-6-Page-3.jpg', thumb: 'Marked-Chapter-6-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 4", img: 'Marked-Chapter-6-Page-4.jpg', thumb: 'Marked-Chapter-6-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 5", img: 'Marked-Chapter-6-Page-5.jpg', thumb: 'Marked-Chapter-6-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 6", img: 'Marked-Chapter-6-Page-6.jpg', thumb: 'Marked-Chapter-6-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 7", img: 'Marked-Chapter-6-Page-7.jpg', thumb: 'Marked-Chapter-6-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 8", img: 'Marked-Chapter-6-Page-8.jpg', thumb: 'Marked-Chapter-6-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 9", img: 'Marked-Chapter-6-Page-9.jpg', thumb: 'Marked-Chapter-6-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 10", img: 'Marked-Chapter-6-Page-10.jpg', thumb: 'Marked-Chapter-6-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 11", img: 'Marked-Chapter-6-Page-11.jpg', thumb: 'Marked-Chapter-6-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 12", img: 'Marked-Chapter-6-Page-12.jpg', thumb: 'Marked-Chapter-6-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 13", img: 'Marked-Chapter-6-Page-13.jpg', thumb: 'Marked-Chapter-6-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 14", img: 'Marked-Chapter-6-Page-14.jpg', thumb: 'Marked-Chapter-6-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 15", img: 'Marked-Chapter-6-Page-15.jpg', thumb: 'Marked-Chapter-6-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 16", img: 'Marked-Chapter-6-Page-16.jpg', thumb: 'Marked-Chapter-6-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 17", img: 'Marked-Chapter-6-Page-17.jpg', thumb: 'Marked-Chapter-6-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 18", img: 'Marked-Chapter-6-Page-18.jpg', thumb: 'Marked-Chapter-6-Page-18-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 19", img: 'Marked-Chapter-6-Page-19.jpg', thumb: 'Marked-Chapter-6-Page-19-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 20", img: 'Marked-Chapter-6-Page-20.jpg', thumb: 'Marked-Chapter-6-Page-20-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 21", img: 'Marked-Chapter-6-Page-21.jpg', thumb: 'Marked-Chapter-6-Page-21-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 22", img: 'Marked-Chapter-6-Page-22.jpg', thumb: 'Marked-Chapter-6-Page-22-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 23", img: 'Marked-Chapter-6-Page-23.jpg', thumb: 'Marked-Chapter-6-Page-23-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 24", img: 'Marked-Chapter-6-Page-24.jpg', thumb: 'Marked-Chapter-6-Page-24-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 25", img: 'Marked-Chapter-6-Page-25.jpg', thumb: 'Marked-Chapter-6-Page-25-Thumb.jpg', cover: false},
                        {title: "Chapter 6 - Page 26", img: 'Marked-Chapter-6-Page-26.jpg', thumb: 'Marked-Chapter-6-Page-26-Thumb.jpg', cover: false}
                    ],
                    chapter7: [
                        {title: "Cover", img: 'Marked-Chapter-7-Page-0.jpg', thumb: 'Marked-Chapter-7-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 7 - Page 1", img: 'Marked-Chapter-7-Page-1.jpg', thumb: 'Marked-Chapter-7-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 2", img: 'Marked-Chapter-7-Page-2.jpg', thumb: 'Marked-Chapter-7-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 3", img: 'Marked-Chapter-7-Page-3.jpg', thumb: 'Marked-Chapter-7-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 4", img: 'Marked-Chapter-7-Page-4.jpg', thumb: 'Marked-Chapter-7-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 5", img: 'Marked-Chapter-7-Page-5.jpg', thumb: 'Marked-Chapter-7-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 6", img: 'Marked-Chapter-7-Page-6.jpg', thumb: 'Marked-Chapter-7-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 7", img: 'Marked-Chapter-7-Page-7.jpg', thumb: 'Marked-Chapter-7-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 8", img: 'Marked-Chapter-7-Page-8.jpg', thumb: 'Marked-Chapter-7-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 9", img: 'Marked-Chapter-7-Page-9.jpg', thumb: 'Marked-Chapter-7-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 10", img: 'Marked-Chapter-7-Page-10.jpg', thumb: 'Marked-Chapter-7-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 11", img: 'Marked-Chapter-7-Page-11.jpg', thumb: 'Marked-Chapter-7-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 12", img: 'Marked-Chapter-7-Page-12.jpg', thumb: 'Marked-Chapter-7-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 13", img: 'Marked-Chapter-7-Page-13.jpg', thumb: 'Marked-Chapter-7-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 14", img: 'Marked-Chapter-7-Page-14.jpg', thumb: 'Marked-Chapter-7-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 15", img: 'Marked-Chapter-7-Page-15.jpg', thumb: 'Marked-Chapter-7-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 16", img: 'Marked-Chapter-7-Page-16.jpg', thumb: 'Marked-Chapter-7-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 17", img: 'Marked-Chapter-7-Page-17.jpg', thumb: 'Marked-Chapter-7-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 18", img: 'Marked-Chapter-7-Page-18.jpg', thumb: 'Marked-Chapter-7-Page-18-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 19", img: 'Marked-Chapter-7-Page-19.jpg', thumb: 'Marked-Chapter-7-Page-19-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 20", img: 'Marked-Chapter-7-Page-20.jpg', thumb: 'Marked-Chapter-7-Page-20-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 21", img: 'Marked-Chapter-7-Page-21.jpg', thumb: 'Marked-Chapter-7-Page-21-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 22", img: 'Marked-Chapter-7-Page-22.jpg', thumb: 'Marked-Chapter-7-Page-22-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 23", img: 'Marked-Chapter-7-Page-23.jpg', thumb: 'Marked-Chapter-7-Page-23-Thumb.jpg', cover: false},
                        {title: "Chapter 7 - Page 24", img: 'Marked-Chapter-7-Page-24.jpg', thumb: 'Marked-Chapter-7-Page-24-Thumb.jpg', cover: false}
                    ],
                    chapter8: [
                        {title: "Cover", img: 'Marked-Chapter-8-Page-0.jpg', thumb: 'Marked-Chapter-8-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 8 - Page 1", img: 'Marked-Chapter-8-Page-1.jpg', thumb: 'Marked-Chapter-8-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 2", img: 'Marked-Chapter-8-Page-2.jpg', thumb: 'Marked-Chapter-8-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 3", img: 'Marked-Chapter-8-Page-3.jpg', thumb: 'Marked-Chapter-8-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 4", img: 'Marked-Chapter-8-Page-4.jpg', thumb: 'Marked-Chapter-8-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 5", img: 'Marked-Chapter-8-Page-5.jpg', thumb: 'Marked-Chapter-8-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 6", img: 'Marked-Chapter-8-Page-6.jpg', thumb: 'Marked-Chapter-8-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 7", img: 'Marked-Chapter-8-Page-7.jpg', thumb: 'Marked-Chapter-8-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 8", img: 'Marked-Chapter-8-Page-8.jpg', thumb: 'Marked-Chapter-8-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 9", img: 'Marked-Chapter-8-Page-9.jpg', thumb: 'Marked-Chapter-8-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 10", img: 'Marked-Chapter-8-Page-10.jpg', thumb: 'Marked-Chapter-8-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 11", img: 'Marked-Chapter-8-Page-11.jpg', thumb: 'Marked-Chapter-8-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 8 - Page 12", img: 'Marked-Chapter-8-Page-12.jpg', thumb: 'Marked-Chapter-8-Page-12-Thumb.jpg', cover: false}
                    ],
                    chapter9: [
                        {title: "Cover", img: 'Marked-Chapter-9-Page-0.jpg', thumb: 'Marked-Chapter-9-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 9 - Page 1", img: 'Marked-Chapter-9-Page-1.jpg', thumb: 'Marked-Chapter-9-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 2", img: 'Marked-Chapter-9-Page-2.jpg', thumb: 'Marked-Chapter-9-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 3", img: 'Marked-Chapter-9-Page-3.jpg', thumb: 'Marked-Chapter-9-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 4", img: 'Marked-Chapter-9-Page-4.jpg', thumb: 'Marked-Chapter-9-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 5", img: 'Marked-Chapter-9-Page-5.jpg', thumb: 'Marked-Chapter-9-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 6", img: 'Marked-Chapter-9-Page-6.jpg', thumb: 'Marked-Chapter-9-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 7", img: 'Marked-Chapter-9-Page-7.jpg', thumb: 'Marked-Chapter-9-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 8", img: 'Marked-Chapter-9-Page-8.jpg', thumb: 'Marked-Chapter-9-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 9", img: 'Marked-Chapter-9-Page-9.jpg', thumb: 'Marked-Chapter-9-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 10", img: 'Marked-Chapter-9-Page-10.jpg', thumb: 'Marked-Chapter-9-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 11", img: 'Marked-Chapter-9-Page-11.jpg', thumb: 'Marked-Chapter-9-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 12", img: 'Marked-Chapter-9-Page-12.jpg', thumb: 'Marked-Chapter-9-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 13", img: 'Marked-Chapter-9-Page-13.jpg', thumb: 'Marked-Chapter-9-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 14", img: 'Marked-Chapter-9-Page-14.jpg', thumb: 'Marked-Chapter-9-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 15", img: 'Marked-Chapter-9-Page-15.jpg', thumb: 'Marked-Chapter-9-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 16", img: 'Marked-Chapter-9-Page-16.jpg', thumb: 'Marked-Chapter-9-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 17", img: 'Marked-Chapter-9-Page-17.jpg', thumb: 'Marked-Chapter-9-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 18", img: 'Marked-Chapter-9-Page-18.jpg', thumb: 'Marked-Chapter-9-Page-18-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 19", img: 'Marked-Chapter-9-Page-19.jpg', thumb: 'Marked-Chapter-9-Page-19-Thumb.jpg', cover: false},
                        {title: "Chapter 9 - Page 20", img: 'Marked-Chapter-9-Page-20.jpg', thumb: 'Marked-Chapter-9-Page-20-Thumb.jpg', cover: false}
                    ],
                    chapter10: [
                        {title: "Cover", img: 'Marked-Chapter-10-Page-0.jpg', thumb: 'Marked-Chapter-10-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 10 - Page 1", img: 'Marked-Chapter-10-Page-1.jpg', thumb: 'Marked-Chapter-10-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 2", img: 'Marked-Chapter-10-Page-2.jpg', thumb: 'Marked-Chapter-10-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 3", img: 'Marked-Chapter-10-Page-3.jpg', thumb: 'Marked-Chapter-10-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 4", img: 'Marked-Chapter-10-Page-4.jpg', thumb: 'Marked-Chapter-10-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 5", img: 'Marked-Chapter-10-Page-5.jpg', thumb: 'Marked-Chapter-10-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 6", img: 'Marked-Chapter-10-Page-6.jpg', thumb: 'Marked-Chapter-10-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 7", img: 'Marked-Chapter-10-Page-7.jpg', thumb: 'Marked-Chapter-10-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 8", img: 'Marked-Chapter-10-Page-8.jpg', thumb: 'Marked-Chapter-10-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 9", img: 'Marked-Chapter-10-Page-9.jpg', thumb: 'Marked-Chapter-10-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 10", img: 'Marked-Chapter-10-Page-10.jpg', thumb: 'Marked-Chapter-10-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 11", img: 'Marked-Chapter-10-Page-11.jpg', thumb: 'Marked-Chapter-10-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 12", img: 'Marked-Chapter-10-Page-12.jpg', thumb: 'Marked-Chapter-10-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 13", img: 'Marked-Chapter-10-Page-13.jpg', thumb: 'Marked-Chapter-10-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 14", img: 'Marked-Chapter-10-Page-14.jpg', thumb: 'Marked-Chapter-10-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 15", img: 'Marked-Chapter-10-Page-15.jpg', thumb: 'Marked-Chapter-10-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 16", img: 'Marked-Chapter-10-Page-16.jpg', thumb: 'Marked-Chapter-10-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 17", img: 'Marked-Chapter-10-Page-17.jpg', thumb: 'Marked-Chapter-10-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 18", img: 'Marked-Chapter-10-Page-18.jpg', thumb: 'Marked-Chapter-10-Page-18-Thumb.jpg', cover: false},
                        {title: "Chapter 10 - Page 19", img: 'Marked-Chapter-10-Page-19.jpg', thumb: 'Marked-Chapter-10-Page-19-Thumb.jpg', cover: false}
                    ],
                    chapter11: [
                        {title: "Chapter 11 - Page 1", img: 'Marked-Chapter-11-Page-1.jpg', thumb: 'Marked-Chapter-11-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 2", img: 'Marked-Chapter-11-Page-2.jpg', thumb: 'Marked-Chapter-11-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 3", img: 'Marked-Chapter-11-Page-3.jpg', thumb: 'Marked-Chapter-11-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 4", img: 'Marked-Chapter-11-Page-4.jpg', thumb: 'Marked-Chapter-11-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 5", img: 'Marked-Chapter-11-Page-5.jpg', thumb: 'Marked-Chapter-11-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 6", img: 'Marked-Chapter-11-Page-6.jpg', thumb: 'Marked-Chapter-11-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 7", img: 'Marked-Chapter-11-Page-7.jpg', thumb: 'Marked-Chapter-11-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 8", img: 'Marked-Chapter-11-Page-8.jpg', thumb: 'Marked-Chapter-11-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 9", img: 'Marked-Chapter-11-Page-9.jpg', thumb: 'Marked-Chapter-11-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 10", img: 'Marked-Chapter-11-Page-10.jpg', thumb: 'Marked-Chapter-11-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 11", img: 'Marked-Chapter-11-Page-11.jpg', thumb: 'Marked-Chapter-11-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 12", img: 'Marked-Chapter-11-Page-12.jpg', thumb: 'Marked-Chapter-11-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 13", img: 'Marked-Chapter-11-Page-13.jpg', thumb: 'Marked-Chapter-11-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 11 - Page 14", img: 'Marked-Chapter-11-Page-14.jpg', thumb: 'Marked-Chapter-11-Page-14-Thumb.jpg', cover: false}
                    ]
                }
            },
            {
                id: 1,
                type: "webcomics",
                img: "Cover_Thumb_CL.jpg",
                dir: "Naruto",
                title: "Childish Love",
                dataName: "Childish-Love",
                isNested: "Naruto",
                chapters: {
                    chapter1: [
                        {title: "Cover", img: 'Childish-Love-Chapter-1-Page-0.jpg', thumb: 'Childish-Love-Chapter-1-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 1 - Page 1", img: 'Childish-Love-Chapter-1-Page-1.jpg', thumb: 'Childish-Love-Chapter-1-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 2", img: 'Childish-Love-Chapter-1-Page-2.jpg', thumb: 'Childish-Love-Chapter-1-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 3", img: 'Childish-Love-Chapter-1-Page-3.jpg', thumb: 'Childish-Love-Chapter-1-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 4", img: 'Childish-Love-Chapter-1-Page-4.jpg', thumb: 'Childish-Love-Chapter-1-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 5", img: 'Childish-Love-Chapter-1-Page-5.jpg', thumb: 'Childish-Love-Chapter-1-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 6", img: 'Childish-Love-Chapter-1-Page-6.jpg', thumb: 'Childish-Love-Chapter-1-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 7", img: 'Childish-Love-Chapter-1-Page-7.jpg', thumb: 'Childish-Love-Chapter-1-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 8", img: 'Childish-Love-Chapter-1-Page-8.jpg', thumb: 'Childish-Love-Chapter-1-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 9", img: 'Childish-Love-Chapter-1-Page-9.jpg', thumb: 'Childish-Love-Chapter-1-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 10", img: 'Childish-Love-Chapter-1-Page-10.jpg', thumb: 'Childish-Love-Chapter-1-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 11", img: 'Childish-Love-Chapter-1-Page-11.jpg', thumb: 'Childish-Love-Chapter-1-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 12", img: 'Childish-Love-Chapter-1-Page-12.jpg', thumb: 'Childish-Love-Chapter-1-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 13", img: 'Childish-Love-Chapter-1-Page-13.jpg', thumb: 'Childish-Love-Chapter-1-Page-13-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 14", img: 'Childish-Love-Chapter-1-Page-14.jpg', thumb: 'Childish-Love-Chapter-1-Page-14-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 15", img: 'Childish-Love-Chapter-1-Page-15.jpg', thumb: 'Childish-Love-Chapter-1-Page-15-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 16", img: 'Childish-Love-Chapter-1-Page-16.jpg', thumb: 'Childish-Love-Chapter-1-Page-16-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 17", img: 'Childish-Love-Chapter-1-Page-17.jpg', thumb: 'Childish-Love-Chapter-1-Page-17-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 18", img: 'Childish-Love-Chapter-1-Page-18.jpg', thumb: 'Childish-Love-Chapter-1-Page-18-Thumb.jpg', cover: false}
                    ],
                    chapter2: [
                        {title: "Cover", img: 'Childish-Love-Chapter-2-Page-0.jpg', thumb: 'Childish-Love-Chapter-2-Page-0-Thumb.jpg', cover: true},
                        {title: "Chapter 2 - Page 1", img: 'Childish-Love-Chapter-2-Page-1.jpg', thumb: 'Childish-Love-Chapter-2-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 2", img: 'Childish-Love-Chapter-2-Page-2.jpg', thumb: 'Childish-Love-Chapter-2-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 3", img: 'Childish-Love-Chapter-2-Page-3.jpg', thumb: 'Childish-Love-Chapter-2-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 4", img: 'Childish-Love-Chapter-2-Page-4.jpg', thumb: 'Childish-Love-Chapter-2-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 5", img: 'Childish-Love-Chapter-2-Page-5.jpg', thumb: 'Childish-Love-Chapter-2-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 6", img: 'Childish-Love-Chapter-2-Page-6.jpg', thumb: 'Childish-Love-Chapter-2-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 7", img: 'Childish-Love-Chapter-2-Page-7.jpg', thumb: 'Childish-Love-Chapter-2-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 8", img: 'Childish-Love-Chapter-2-Page-8.jpg', thumb: 'Childish-Love-Chapter-2-Page-8-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 9", img: 'Childish-Love-Chapter-2-Page-9.jpg', thumb: 'Childish-Love-Chapter-2-Page-9-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 10", img: 'Childish-Love-Chapter-2-Page-10.jpg', thumb: 'Childish-Love-Chapter-2-Page-10-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 11", img: 'Childish-Love-Chapter-2-Page-11.jpg', thumb: 'Childish-Love-Chapter-2-Page-11-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 12", img: 'Childish-Love-Chapter-2-Page-12.jpg', thumb: 'Childish-Love-Chapter-2-Page-12-Thumb.jpg', cover: false},
                        {title: "Chapter 2 - Page 13", img: 'Childish-Love-Chapter-2-Page-13.jpg', thumb: 'Childish-Love-Chapter-2-Page-13-Thumb.jpg', cover: false}
                    ]
                }
            },
            {
                id: 2,
                type: "webcomics",
                img: "CoverThumb_TDEC_Old.jpg",
                dir: "Naruto",
                title: "The Day Everything Changed",
                dataName: "TDEC",
                isNested: "Naruto",
                chapters: {
                    chapter1: [
                        {title: "Chapter 1 - Page 1", img: 'TDEC-Chapter-1-Page-1.jpg', thumb: 'TDEC-Chapter-1-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 2", img: 'TDEC-Chapter-1-Page-2.jpg', thumb: 'TDEC-Chapter-1-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 3", img: 'TDEC-Chapter-1-Page-3.jpg', thumb: 'TDEC-Chapter-1-Page-3-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 4", img: 'TDEC-Chapter-1-Page-4.jpg', thumb: 'TDEC-Chapter-1-Page-4-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 5", img: 'TDEC-Chapter-1-Page-5.jpg', thumb: 'TDEC-Chapter-1-Page-5-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 6", img: 'TDEC-Chapter-1-Page-6.jpg', thumb: 'TDEC-Chapter-1-Page-6-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 7", img: 'TDEC-Chapter-1-Page-7.jpg', thumb: 'TDEC-Chapter-1-Page-7-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 8", img: 'TDEC-Chapter-1-Page-8.jpg', thumb: 'TDEC-Chapter-1-Page-8-Thumb.jpg', cover: false}
                    ],
                }
            },
            {
                id: 3,
                type: "webcomics",
                img: "Cover_Thumb_TDEC.jpg",
                dir: "Naruto",
                title: "The Day Everything Changed: Reboot",
                dataName: "TDECR",
                isNested: "Naruto",
                chapters: {
                    chapter1: [
                        {title: "Chapter 1 - Page 1", img: 'TDECR-Chapter-1-Page-1.jpg', thumb: 'TDECR-Chapter-1-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 2", img: 'TDECR-Chapter-1-Page-2.jpg', thumb: 'TDECR-Chapter-1-Page-2-Thumb.jpg', cover: false}
                    ]
                }
            },
            {
                id: 4,
                type: "webcomics",
                img: "FightKing-Chapter-1-Page-1-Thumb.jpg",
                dir: "FightKing/comic/chapter1/thumb",
                title: "Fight King Short Comic",
                dataName: "FightKing",
                chapters: {
                    chapter1: [
                        {title: "Chapter 1 - Page 1", img: 'FightKing-Chapter-1-Page-1.jpg', thumb: 'FightKing-Chapter-1-Page-1-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 2", img: 'FightKing-Chapter-1-Page-2.jpg', thumb: 'FightKing-Chapter-1-Page-2-Thumb.jpg', cover: false},
                        {title: "Chapter 1 - Page 3", img: 'FightKing-Chapter-1-Page-3.jpg', thumb: 'FightKing-Chapter-1-Page-3-Thumb.jpg', cover: false}
                    ]
                }
            }
        ]
    },
    animations: {
        SymTrailer: {
            id: 'SymTrailer',
            type: 'SymTrailer',
            video: 'J30NDAS5P3c',
            title: 'Symbiotic Animated Trailer',
            desc: `An anime styled Visual Novel with RPG style video game elements.
                <br><br>
                Symbiotic is a Visual Novel that revolves around a kid named Zaydin and his "friends", of whom he can't stand, being the last thing standing between Earth's survival and total annihilation. With the arrival of the planet eating Symbiote planet Metamor, Earth has been forced to create it's own Symbiote creatures to save the planet from destruction. However, due to complications with these man-made Symbiote creatures, they are unable to bond with adults. When bonded with an adult it will over their mind and cause them to go on a murderous rampage, the only people who can safely bond with the Symbiotes are children under the age of 18.
                <br><br>
                Music from https://filmmusic.io<br>
                "Loss" by Kevin MacLeod (https://incompetech.com)<br>
                License: CC BY (http://creativecommons.org/licenses/b...)`
        },
        ShelterMV: {
            id: 'ShelterMV',
            type: 'ShelterMV',
            video: 'da4c9GnSi8A',
            title: 'Marked: Shelter - Porter Robinson & Madeon',
            desc: `My first real animation, this was a long and very difficult project to make. The project was created to serve two purposes, the first being a question to myself of whether or not I could animate a full length animations.  The second purpose was to try and build up a fan base for the video that would hopefully transfer over to the webcomic "Marked" that it was based on, but sadly the video never picked up traction and the comic eventually went on permanent hiatus due to burn out and a dying medium (Western comics).  The story will be re-told at some point in a different medium in the future, likely as a video game.
                <br><br>
                The pixelation/quality on some scenes is a result of the image complier I used to turn it into a video, future animations use a different image complier (Blender) for cleaner lines and quality.
                <br><br>
                The song used in this animation is Shelter by Porter Robinson & Madeon, I take no credit for it.
                <br><br>
                The characters used in this animation are a part of a Webcomic called "Marked", and were created by me.`
        },
        MarkedC9Trailer: {
            id: 'MarkedC9Trailer',
            type: 'MarkedC9Trailer',
            video: 'nJRIBmTn80w',
            title: 'Marked: Chapter 9 Trailer',
            desc: `This was a trailer created to hype up anticipation for chapter 9 of the webcomic "Marked".  Chapter 9 was meant to be the chapter that changed the entre dynamic of the story by basically wiping the slate clean and restarting back at 0, while giving the main protagonist serious trauma that would follow him the entire series.
            <br><br>
            While it did hype up select few individuals who were following the story, it did not have the impact I had hoped for by bringing attention to the webcomic from people who enjoyed the animation and wanted to know what was going on.`
        },
        MarkedShort: {
            id: 'MarkedShort',
            type: 'MarkedShort',
            video: 'yAzc2456TPw',
            title: 'Marked: You Know What Happens',
            desc: `This animation was the first animation I had ever created, because of my inexperience at the time it does look off and has grammatical errors that I missed when I edited together the video.
            <br><br>
            The animation was made in 2016 and uploaded to DeviantART, a year later it was uploaded to YouTube.  It's a short animation, and since then the character designs, among other things, have changed.  The animation comes from a webcomic that I used to work on called "Marked", development of the webcomic was halted due to burn out and a dying medium (Western comics).
            <br><br>
            Marked and it's characters were created by me.`
        }
        
    }
};

export { PROJECTDATA, PROJECTSDATA, SIDEBARDATA }