/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg.jpg */ "./src/img/bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after{
    margin:0;
    padding:0;
    border:0;
    font-size: 100%;
    font:inherit;
    vertical-align: baseline;
    box-sizing:border-box;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
:root {
    --bg-color: #061431;
    --alt-bg-color: #162544;
    --accent-color: white;
    --text-color: #ffffff;
}
img.icon,
svg{
    height:24px;
    transition: transform 0.2s ease-in-out;
    user-select: none;
    fill:var(--accent-color);
    user-select: none;
}
body{
    line-height:1.5;
    font-family: "Raleway", sans-serif;
    color:var(--text-color);
    background-color: var(--bg-color);
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    gap:100px;
    background-image:url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-position:center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
ol,ul{
    list-style:none;
}
img.icon:hover,
svg:hover{
    transform:scale(1.5);
}
h1{
    font-family: "Dancing Script",cursive;
    font-size: 2.5rem;
    width: fit-content;
    border-bottom: 2px solid var(--accent-color);
}
/*HEADER */
header{
    max-width: 1500px;
    margin: auto;
    margin-top: 100px;
    background-color: var(--bg-color);
    display: flex;
    gap: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.h-left{
    position: relative;
}

.h-left img{
    width: 260px;
    box-shadow: rgba(0, 0, 0, 0.35) -10px 10px 15px;
    user-select: none;

    opacity: 0;
    filter: blur(5px);
    transform: scale(1) translateX(-100%);
    transition: all 1s ease-out;
}

.h-right{
    padding: 1.5rem 4rem;
    display: flex; 
    flex-direction: column;
    justify-content: space-evenly;
}
.about-text{
    margin-top: 10px;
    padding: 10px 0px;
    padding-right: 10%;
    line-height: 1.1rem;
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap:15px;
}
.h-links{
    align-self: flex-end;
    display: flex;
    gap: 10px;
}

/* Main */

main{
    display: flex;
    flex-direction: column;
    align-items:  center;
    gap: 50px;
}

.m-container{
display:grid;
grid-template: repeat(2,1fr) / repeat(4, 1fr);
gap:25px;
}

.cards{
    min-height: 230px;
    max-width: 350px;
    background-color: var(--alt-bg-color);
    border: 1px solid hsl(219, 26%, 25%);
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    user-select: none;

    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100px);
    transition: scale 0.25s ease, opacity 1s ease, filer 1s ease , transform 1s ease;
}

.cards:nth-child(2),
.cards:nth-child(6){
    transition: scale 0.25s ease, opacity 1s ease 200ms filter 1s ease 200ms , transform 1s ease 200ms;
}
.cards:nth-child(3),
.cards:nth-child(7) {
    transition: scale 0.25s ease, opacity 1s ease 400ms, filter 1s ease 400ms, transform 1s ease 400ms;
}
.cards:nth-child(4),
.cards:nth-child(8) {
    transition: scale 0.25s ease, opacity 1s ease 600ms, filter 1s ease 600ms, transform 1s ease 600ms;
}

.cards:hover{
    scale: 1.15;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0,0,0 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    z-index: 3;
}

.project-name{
    position: relative;
}

.project-name::before{
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: var(--accent-color);
    transition: width 0.25s ease;
}
.cards:hover .project-name::before{
    width:100%;
}

.cards img{
    width: 100%;
    border-radius: 25px 25px 0px 0px;
}
.cards img.icon{    
    width: 50%;
    border-radius: 5px 5px 0px 0px;
    margin-bottom:5px;
}


.text{
    padding: 1em;
    
}

.first-line{
    margin-bottom: 15px;
    display:flex;
    justify-content: space-between;
    align-items: center;
}
.first-line h3{
    font-family: "Dancing Script", cursive;
    font-size: 1.5rem;
    transition: all 0.2s ease;
}

.text p{
font-size: 0.9rem;
line-height: 1.1em;
}

/* footer */
footer{
    background-color: var(--alt-bg-color);
    padding: 2rem 4rem;
    overflow: hidden;
}

.f-container{
    display: flex;
    justify-content: center;
}

.f-left{
    display: flex;
    flex-direction: column;
    
}
.f-left p{
    padding-top: 15px;
    padding-bottom: 15px;
}

.f-right{
    user-select: none;
}

.phone,
.email{
    display: flex;
    align-items: center;
    gap: 10px;
}

.socials{
    display: flex;
    gap: 25px;
}

.img2{
    max-width: 400px;
    border-radius: 25px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    opacity: 0;
    filter: blur(5px);
    transform: translateX(100%);
    transition: all 1s ease;
    margin-left: 75px;
}

/*scroll bar*/
::-webkit-scrollbar{
    width: 10px;
}

::-webkit-scrollbar-thumb{
    background: var(--accent-color);
    border: 2px solid var(--alt-bg-color);
}

::-webkit-scrollbar-thumb:hover{
    background:var(--text-color);
}

/*media queries */

@media screen and (max-width : 1700px){
    header{
        margin: 0px 10%;
        margin-top: 100px;
    }
}

@media screen and (max-width : 1400px){
    .m-container{
        grid-template: repeat(3, 1fr) / repeat(3, 1fr);
        gap: 25px;

    }
    .cards:last-child{
        grid-column-start: 3;
    }
    .cards:nth-child(5){
        grid-column-start: 3;
    }
}

@media screen and (max-width: 1080px) {
    header {
        flex-direction: column;
    }
    .about-text {
        padding: 0;
    }
    .h-right h1 {
        align-self: center;
    }
    .h-left img {
        display: block;
        margin: auto;
        margin-bottom: 50px;
        transform: scale(1) translateY(-100%);
    }
    .h-links svg {
        height: 40px;
    }
    .m-container {
        grid-template: repeat(4, 1fr) / repeat(2, 1fr);
        gap: 50px;
    }
    .cards:last-child {
        grid-column-start: auto;
    }
    .cards:nth-child(5) {
        grid-column-start: auto;
    }
}

@media screen and (max-width: 770px) {
    body {
        background-size: 100% 50%;
    }
    .h-left img {
        width: 200px;
        margin-bottom: 0;
    }
    .about-text {
        text-align: left;
        line-height: 1.25em;
    }
    .h-right {
        padding: 2rem;
    }
    .h-links {
        margin-top: 25px;
        align-self: center;
    }
    .m-container {
        grid-template: repeat(8, 1fr) / repeat(1, 1fr);
        gap: 50px;
    }
    footer {
        padding: 2rem;
    }
    .f-container {
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        gap: 50px;
    }
    .f-left {
        gap: 15px;
    }
    .f-left h1 {
        align-self: center;
        margin-bottom: 25px;
    }
    .socials{
        align-self: center;
    }
    .socials svg {
        height: 40px;
    }
    .img2 {
        display: block;
        margin: auto;
        max-width: 100%;
        transform: translateY(90%);
    }
}

/* Utility Classes */

.show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
}
.showImg1 {
    opacity: 1 !important ;
    filter: blur(0) !important ;
    transform: scale(1.4) translateX(0) !important ;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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IACtB;IACA;QACI,cAAc;QACd,YAAY;QACZ,mBAAmB;QACnB,qCAAqC;IACzC;IACA;QACI,YAAY;IAChB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,sBAAsB;QACtB,mBAAmB;QACnB,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;IACA;QACI,cAAc;QACd,YAAY;QACZ,eAAe;QACf,0BAA0B;IAC9B;AACJ;;AAEA,oBAAoB;;AAEpB;IACI,UAAU;IACV,eAAe;IACf,wBAAwB;AAC5B;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,+CAA+C;AACnD","sourcesContent":["*,\r\n*::before,\r\n*::after{\r\n    margin:0;\r\n    padding:0;\r\n    border:0;\r\n    font-size: 100%;\r\n    font:inherit;\r\n    vertical-align: baseline;\r\n    box-sizing:border-box;\r\n}\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n:root {\r\n    --bg-color: #061431;\r\n    --alt-bg-color: #162544;\r\n    --accent-color: white;\r\n    --text-color: #ffffff;\r\n}\r\nimg.icon,\r\nsvg{\r\n    height:24px;\r\n    transition: transform 0.2s ease-in-out;\r\n    user-select: none;\r\n    fill:var(--accent-color);\r\n    user-select: none;\r\n}\r\nbody{\r\n    line-height:1.5;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color:var(--text-color);\r\n    background-color: var(--bg-color);\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: space-between;\r\n    gap:100px;\r\n    background-image:url(./img/bg.jpg);\r\n    background-position:center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\nol,ul{\r\n    list-style:none;\r\n}\r\nimg.icon:hover,\r\nsvg:hover{\r\n    transform:scale(1.5);\r\n}\r\nh1{\r\n    font-family: \"Dancing Script\",cursive;\r\n    font-size: 2.5rem;\r\n    width: fit-content;\r\n    border-bottom: 2px solid var(--accent-color);\r\n}\r\n/*HEADER */\r\nheader{\r\n    max-width: 1500px;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n    background-color: var(--bg-color);\r\n    display: flex;\r\n    gap: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n.h-left{\r\n    position: relative;\r\n}\r\n\r\n.h-left img{\r\n    width: 260px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) -10px 10px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: scale(1) translateX(-100%);\r\n    transition: all 1s ease-out;\r\n}\r\n\r\n.h-right{\r\n    padding: 1.5rem 4rem;\r\n    display: flex; \r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n.about-text{\r\n    margin-top: 10px;\r\n    padding: 10px 0px;\r\n    padding-right: 10%;\r\n    line-height: 1.1rem;\r\n    text-align: justify;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:15px;\r\n}\r\n.h-links{\r\n    align-self: flex-end;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n/* Main */\r\n\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items:  center;\r\n    gap: 50px;\r\n}\r\n\r\n.m-container{\r\ndisplay:grid;\r\ngrid-template: repeat(2,1fr) / repeat(4, 1fr);\r\ngap:25px;\r\n}\r\n\r\n.cards{\r\n    min-height: 230px;\r\n    max-width: 350px;\r\n    background-color: var(--alt-bg-color);\r\n    border: 1px solid hsl(219, 26%, 25%);\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(-100px);\r\n    transition: scale 0.25s ease, opacity 1s ease, filer 1s ease , transform 1s ease;\r\n}\r\n\r\n.cards:nth-child(2),\r\n.cards:nth-child(6){\r\n    transition: scale 0.25s ease, opacity 1s ease 200ms filter 1s ease 200ms , transform 1s ease 200ms;\r\n}\r\n.cards:nth-child(3),\r\n.cards:nth-child(7) {\r\n    transition: scale 0.25s ease, opacity 1s ease 400ms, filter 1s ease 400ms, transform 1s ease 400ms;\r\n}\r\n.cards:nth-child(4),\r\n.cards:nth-child(8) {\r\n    transition: scale 0.25s ease, opacity 1s ease 600ms, filter 1s ease 600ms, transform 1s ease 600ms;\r\n}\r\n\r\n.cards:hover{\r\n    scale: 1.15;\r\n    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0,0,0 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n    z-index: 3;\r\n}\r\n\r\n.project-name{\r\n    position: relative;\r\n}\r\n\r\n.project-name::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 0;\r\n    width: 0%;\r\n    height: 2px;\r\n    background-color: var(--accent-color);\r\n    transition: width 0.25s ease;\r\n}\r\n.cards:hover .project-name::before{\r\n    width:100%;\r\n}\r\n\r\n.cards img{\r\n    width: 100%;\r\n    border-radius: 25px 25px 0px 0px;\r\n}\r\n.cards img.icon{    \r\n    width: 50%;\r\n    border-radius: 5px 5px 0px 0px;\r\n    margin-bottom:5px;\r\n}\r\n\r\n\r\n.text{\r\n    padding: 1em;\r\n    \r\n}\r\n\r\n.first-line{\r\n    margin-bottom: 15px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.first-line h3{\r\n    font-family: \"Dancing Script\", cursive;\r\n    font-size: 1.5rem;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.text p{\r\nfont-size: 0.9rem;\r\nline-height: 1.1em;\r\n}\r\n\r\n/* footer */\r\nfooter{\r\n    background-color: var(--alt-bg-color);\r\n    padding: 2rem 4rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.f-container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.f-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n}\r\n.f-left p{\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.f-right{\r\n    user-select: none;\r\n}\r\n\r\n.phone,\r\n.email{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.socials{\r\n    display: flex;\r\n    gap: 25px;\r\n}\r\n\r\n.img2{\r\n    max-width: 400px;\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(100%);\r\n    transition: all 1s ease;\r\n    margin-left: 75px;\r\n}\r\n\r\n/*scroll bar*/\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background: var(--accent-color);\r\n    border: 2px solid var(--alt-bg-color);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover{\r\n    background:var(--text-color);\r\n}\r\n\r\n/*media queries */\r\n\r\n@media screen and (max-width : 1700px){\r\n    header{\r\n        margin: 0px 10%;\r\n        margin-top: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width : 1400px){\r\n    .m-container{\r\n        grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n        gap: 25px;\r\n\r\n    }\r\n    .cards:last-child{\r\n        grid-column-start: 3;\r\n    }\r\n    .cards:nth-child(5){\r\n        grid-column-start: 3;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    header {\r\n        flex-direction: column;\r\n    }\r\n    .about-text {\r\n        padding: 0;\r\n    }\r\n    .h-right h1 {\r\n        align-self: center;\r\n    }\r\n    .h-left img {\r\n        display: block;\r\n        margin: auto;\r\n        margin-bottom: 50px;\r\n        transform: scale(1) translateY(-100%);\r\n    }\r\n    .h-links svg {\r\n        height: 40px;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(4, 1fr) / repeat(2, 1fr);\r\n        gap: 50px;\r\n    }\r\n    .cards:last-child {\r\n        grid-column-start: auto;\r\n    }\r\n    .cards:nth-child(5) {\r\n        grid-column-start: auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n    body {\r\n        background-size: 100% 50%;\r\n    }\r\n    .h-left img {\r\n        width: 200px;\r\n        margin-bottom: 0;\r\n    }\r\n    .about-text {\r\n        text-align: left;\r\n        line-height: 1.25em;\r\n    }\r\n    .h-right {\r\n        padding: 2rem;\r\n    }\r\n    .h-links {\r\n        margin-top: 25px;\r\n        align-self: center;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(8, 1fr) / repeat(1, 1fr);\r\n        gap: 50px;\r\n    }\r\n    footer {\r\n        padding: 2rem;\r\n    }\r\n    .f-container {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n        gap: 50px;\r\n    }\r\n    .f-left {\r\n        gap: 15px;\r\n    }\r\n    .f-left h1 {\r\n        align-self: center;\r\n        margin-bottom: 25px;\r\n    }\r\n    .socials{\r\n        align-self: center;\r\n    }\r\n    .socials svg {\r\n        height: 40px;\r\n    }\r\n    .img2 {\r\n        display: block;\r\n        margin: auto;\r\n        max-width: 100%;\r\n        transform: translateY(90%);\r\n    }\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.show {\r\n    opacity: 1;\r\n    filter: blur(0);\r\n    transform: translateX(0);\r\n}\r\n.showImg1 {\r\n    opacity: 1 !important ;\r\n    filter: blur(0) !important ;\r\n    transform: scale(1.4) translateX(0) !important ;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/bg.jpg":
/*!************************!*\
  !*** ./src/img/bg.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d6553151904126dfc664.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const observer = new IntersectionObserver((entries =>{
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            if(entry.target.id === "img1")
                entry.target.classList.add('showImg1')
            else 
                entry.target.classList.add('show')
        }else{
            if(entry.target.id === 'img1')
                entry.target.classList.remove('showImg1');
            else
                entry.target.classList.remove('show');
        }
    });
}));

const cards = document.querySelectorAll('.cards');
cards.forEach((el) => observer.observe(el));
const topImg = document.getElementById('img1');
observer.observe(topImg);
const bottomImg = document.getElementById('img2');
observer.observe(bottomImg);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFHQUErQjtBQUMzRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sa0ZBQWtGLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLFdBQVcsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxZQUFZLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxX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QUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1nL2JnLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlcntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250OmluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbn1cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuOnJvb3Qge1xyXG4gICAgLS1iZy1jb2xvcjogIzA2MTQzMTtcclxuICAgIC0tYWx0LWJnLWNvbG9yOiAjMTYyNTQ0O1xyXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlO1xyXG4gICAgLS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmltZy5pY29uLFxyXG5zdmd7XHJcbiAgICBoZWlnaHQ6MjRweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBmaWxsOnZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG5ib2R5e1xyXG4gICAgbGluZS1oZWlnaHQ6MS41O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUmFsZXdheVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBnYXA6MTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbm9sLHVse1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG59XHJcbmltZy5pY29uOmhvdmVyLFxyXG5zdmc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS41KTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbn1cclxuLypIRUFERVIgKi9cclxuaGVhZGVye1xyXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxufVxyXG4uaC1sZWZ0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaC1sZWZ0IGltZ3tcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgLTEwcHggMTBweCAxNXB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmgtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAxLjVyZW0gNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG59XHJcbi5hYm91dC10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDoxNXB4O1xyXG59XHJcbi5oLWxpbmtze1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4vKiBNYWluICovXHJcblxyXG5tYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcclxuICAgIGdhcDogNTBweDtcclxufVxyXG5cclxuLm0tY29udGFpbmVye1xyXG5kaXNwbGF5OmdyaWQ7XHJcbmdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLDFmcikgLyByZXBlYXQoNCwgMWZyKTtcclxuZ2FwOjI1cHg7XHJcbn1cclxuXHJcbi5jYXJkc3tcclxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iZy1jb2xvcik7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjE5LCAyNiUsIDI1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuXHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSwgZmlsZXIgMXMgZWFzZSAsIHRyYW5zZm9ybSAxcyBlYXNlO1xyXG59XHJcblxyXG4uY2FyZHM6bnRoLWNoaWxkKDIpLFxyXG4uY2FyZHM6bnRoLWNoaWxkKDYpe1xyXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDIwMG1zIGZpbHRlciAxcyBlYXNlIDIwMG1zICwgdHJhbnNmb3JtIDFzIGVhc2UgMjAwbXM7XHJcbn1cclxuLmNhcmRzOm50aC1jaGlsZCgzKSxcclxuLmNhcmRzOm50aC1jaGlsZCg3KSB7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgNDAwbXMsIGZpbHRlciAxcyBlYXNlIDQwMG1zLCB0cmFuc2Zvcm0gMXMgZWFzZSA0MDBtcztcclxufVxyXG4uY2FyZHM6bnRoLWNoaWxkKDQpLFxyXG4uY2FyZHM6bnRoLWNoaWxkKDgpIHtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSA2MDBtcywgZmlsdGVyIDFzIGVhc2UgNjAwbXMsIHRyYW5zZm9ybSAxcyBlYXNlIDYwMG1zO1xyXG59XHJcblxyXG4uY2FyZHM6aG92ZXJ7XHJcbiAgICBzY2FsZTogMS4xNTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IC0yM3B4IDI1cHggMHB4IGluc2V0LCByZ2JhKDAsMCwwIDAuMTUpIDBweCAtMzZweCAzMHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjEpIDBweCAtNzlweCA0MHB4IDBweCBpbnNldCwgcmdiYSgwLCAwLCAwLCAwLjA2KSAwcHggMnB4IDFweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggNHB4IDJweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggOHB4IDRweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMTZweCA4cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDMycHggMTZweDtcclxuICAgIHotaW5kZXg6IDM7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWV7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWU6OmJlZm9yZXtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAtMTBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xyXG59XHJcbi5jYXJkczpob3ZlciAucHJvamVjdC1uYW1lOjpiZWZvcmV7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG59XHJcblxyXG4uY2FyZHMgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4IDI1cHggMHB4IDBweDtcclxufVxyXG4uY2FyZHMgaW1nLmljb257ICAgIFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG59XHJcblxyXG5cclxuLnRleHR7XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBcclxufVxyXG5cclxuLmZpcnN0LWxpbmV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmlyc3QtbGluZSBoM3tcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi50ZXh0IHB7XHJcbmZvbnQtc2l6ZTogMC45cmVtO1xyXG5saW5lLWhlaWdodDogMS4xZW07XHJcbn1cclxuXHJcbi8qIGZvb3RlciAqL1xyXG5mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmctY29sb3IpO1xyXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmYtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZi1sZWZ0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBcclxufVxyXG4uZi1sZWZ0IHB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZi1yaWdodHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGhvbmUsXHJcbi5lbWFpbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbi8qc2Nyb2xsIGJhciovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbHQtYmctY29sb3IpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLyptZWRpYSBxdWVyaWVzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTcwMHB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW46IDBweCAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDAwcHgpe1xyXG4gICAgLm0tY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgZ2FwOiAyNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5jYXJkczpsYXN0LWNoaWxke1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgfVxyXG4gICAgLmNhcmRzOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5oLXJpZ2h0IGgxIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaC1sZWZ0IGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxuICAgIC5oLWxpbmtzIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm0tY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGdhcDogNTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogYXV0bztcclxuICAgIH1cclxuICAgIC5jYXJkczpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIC5oLWxlZnQgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbiAgICB9XHJcbiAgICAuaC1yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuICAgIC5oLWxpbmtzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoMSwgMWZyKTtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZi1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZi1sZWZ0IHtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZi1sZWZ0IGgxIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC5zb2NpYWxze1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zb2NpYWxzIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZzIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xyXG5cclxuLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4uc2hvd0ltZzEge1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50IDtcclxuICAgIGZpbHRlcjogYmx1cigwKSAhaW1wb3J0YW50IDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KSB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQgO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFB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SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFNBQVM7SUFDYjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxZQUFZO1FBQ1osZUFBZTtRQUNmLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBLG9CQUFvQjs7QUFFcEI7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQiwrQ0FBK0M7QUFDbkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXJ7XFxyXFxuICAgIG1hcmdpbjowO1xcclxcbiAgICBwYWRkaW5nOjA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBmb250LXNpemU6IDEwMCU7XFxyXFxuICAgIGZvbnQ6aW5oZXJpdDtcXHJcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxufVxcclxcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcclxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxyXFxuXFx0ZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbjpyb290IHtcXHJcXG4gICAgLS1iZy1jb2xvcjogIzA2MTQzMTtcXHJcXG4gICAgLS1hbHQtYmctY29sb3I6ICMxNjI1NDQ7XFxyXFxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgLS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xcclxcbn1cXHJcXG5pbWcuaWNvbixcXHJcXG5zdmd7XFxyXFxuICAgIGhlaWdodDoyNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGZpbGw6dmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbmJvZHl7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJSYWxld2F5XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6dmFyKC0tdGV4dC1jb2xvcik7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOjEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguL2ltZy9iZy5qcGcpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxyXFxufVxcclxcbm9sLHVse1xcclxcbiAgICBsaXN0LXN0eWxlOm5vbmU7XFxyXFxufVxcclxcbmltZy5pY29uOmhvdmVyLFxcclxcbnN2Zzpob3ZlcntcXHJcXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuNSk7XFxyXFxufVxcclxcbmgxe1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIixjdXJzaXZlO1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG59XFxyXFxuLypIRUFERVIgKi9cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIG1heC13aWR0aDogMTUwMHB4O1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XFxyXFxufVxcclxcbi5oLWxlZnR7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmgtbGVmdCBpbWd7XFxyXFxuICAgIHdpZHRoOiAyNjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAtMTBweCAxMHB4IDE1cHg7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcblxcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKC0xMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uaC1yaWdodHtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtIDRyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG59XFxyXFxuLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDoxNXB4O1xcclxcbn1cXHJcXG4uaC1saW5rc3tcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcblxcclxcbm1haW57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLWNvbnRhaW5lcntcXHJcXG5kaXNwbGF5OmdyaWQ7XFxyXFxuZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsMWZyKSAvIHJlcGVhdCg0LCAxZnIpO1xcclxcbmdhcDoyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHN7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmctY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjE5LCAyNiUsIDI1JSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UsIGZpbGVyIDFzIGVhc2UgLCB0cmFuc2Zvcm0gMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzOm50aC1jaGlsZCgyKSxcXHJcXG4uY2FyZHM6bnRoLWNoaWxkKDYpe1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgMjAwbXMgZmlsdGVyIDFzIGVhc2UgMjAwbXMgLCB0cmFuc2Zvcm0gMXMgZWFzZSAyMDBtcztcXHJcXG59XFxyXFxuLmNhcmRzOm50aC1jaGlsZCgzKSxcXHJcXG4uY2FyZHM6bnRoLWNoaWxkKDcpIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDQwMG1zLCBmaWx0ZXIgMXMgZWFzZSA0MDBtcywgdHJhbnNmb3JtIDFzIGVhc2UgNDAwbXM7XFxyXFxufVxcclxcbi5jYXJkczpudGgtY2hpbGQoNCksXFxyXFxuLmNhcmRzOm50aC1jaGlsZCg4KSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSA2MDBtcywgZmlsdGVyIDFzIGVhc2UgNjAwbXMsIHRyYW5zZm9ybSAxcyBlYXNlIDYwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHM6aG92ZXJ7XFxyXFxuICAgIHNjYWxlOiAxLjE1O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLDAsMCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7XFxyXFxuICAgIHotaW5kZXg6IDM7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC0xMHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xcclxcbn1cXHJcXG4uY2FyZHM6aG92ZXIgLnByb2plY3QtbmFtZTo6YmVmb3Jle1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5jYXJkcyBpbWcuaWNvbnsgICAgXFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTo1cHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtbGluZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5maXJzdC1saW5lIGgze1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHB7XFxyXFxuZm9udC1zaXplOiAwLjlyZW07XFxyXFxubGluZS1oZWlnaHQ6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iZy1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmYtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmYtbGVmdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5mLWxlZnQgcHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZi1yaWdodHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5waG9uZSxcXHJcXG4uZW1haWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZzJ7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi8qc2Nyb2xsIGJhciovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsdC1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qbWVkaWEgcXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNzAwcHgpe1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAxMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQwMHB4KXtcXHJcXG4gICAgLm0tY29udGFpbmVye1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgICAgIGdhcDogMjVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHM6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpudGgtY2hpbGQoNSl7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1yaWdodCBoMSB7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtbGVmdCBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1saW5rcyBzdmcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5oLWxlZnQgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtcmlnaHQge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1saW5rcyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgMWZyKSAvIHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWxlZnQge1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWxlZnQgaDEge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc29jaWFsc3tcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuc29jaWFscyBzdmcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWcyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuLnNob3dJbWcxIHtcXHJcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50IDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDApICFpbXBvcnRhbnQgO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50IDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMgPT57XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xyXG4gICAgICAgIGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcclxuICAgICAgICAgICAgaWYoZW50cnkudGFyZ2V0LmlkID09PSBcImltZzFcIilcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93SW1nMScpXHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGVudHJ5LnRhcmdldC5pZCA9PT0gJ2ltZzEnKVxyXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dJbWcxJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuXHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzJyk7XHJcbmNhcmRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcbmNvbnN0IHRvcEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcxJyk7XHJcbm9ic2VydmVyLm9ic2VydmUodG9wSW1nKTtcclxuY29uc3QgYm90dG9tSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzInKTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShib3R0b21JbWcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==