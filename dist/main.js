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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,QAAQ;IACR,SAAS;IACT,QAAQ;IACR,eAAe;IACf,YAAY;IACZ,wBAAwB;IACxB,qBAAqB;AACzB;AACA;;CAEC,cAAc;AACf;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;AACzB;AACA;;IAEI,WAAW;IACX,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;IACxB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,kCAAkC;IAClC,uBAAuB;IACvB,iCAAiC;IACjC,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,SAAS;IACT,wDAAkC;IAClC,0BAA0B;IAC1B,4BAA4B;IAC5B,0BAA0B;AAC9B;AACA;IACI,eAAe;AACnB;AACA;;IAEI,oBAAoB;AACxB;AACA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,kBAAkB;IAClB,4CAA4C;AAChD;AACA,UAAU;AACV;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,SAAS;IACT,4CAA4C;AAChD;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,+CAA+C;IAC/C,iBAAiB;;IAEjB,UAAU;IACV,iBAAiB;IACjB,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,SAAS;AACb;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;AACb;;AAEA;AACA,YAAY;AACZ,6CAA6C;AAC7C,QAAQ;AACR;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;IACrC,oCAAoC;IACpC,mBAAmB;IACnB,4CAA4C;IAC5C,iBAAiB;;IAEjB,UAAU;IACV,iBAAiB;IACjB,6BAA6B;IAC7B,gFAAgF;AACpF;;AAEA;;IAEI,kGAAkG;AACtG;AACA;;IAEI,kGAAkG;AACtG;AACA;;IAEI,kGAAkG;AACtG;;AAEA;IACI,WAAW;IACX,wTAAwT;IACxT,UAAU;AACd;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,OAAO;IACP,SAAS;IACT,WAAW;IACX,qCAAqC;IACrC,4BAA4B;AAChC;AACA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,gCAAgC;AACpC;AACA;IACI,UAAU;IACV,8BAA8B;AAClC;;;AAGA;IACI,YAAY;;AAEhB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,sCAAsC;IACtC,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;AACA,iBAAiB;AACjB,kBAAkB;AAClB;;AAEA,WAAW;AACX;IACI,qCAAqC;IACrC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;IACV,iBAAiB;IACjB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA,aAAa;AACb;IACI,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;AACzC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,iBAAiB;;AAEjB;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,8CAA8C;QAC9C,SAAS;;IAEb;IACA;QACI,oBAAoB;IACxB;IACA;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;IACA;QACI,cAAc;QACd,YAAY;QACZ,mBAAmB;QACnB,qCAAqC;IACzC;IACA;QACI,YAAY;IAChB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,sBAAsB;QACtB,mBAAmB;QACnB,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;IACA;QACI,cAAc;QACd,YAAY;QACZ,eAAe;QACf,0BAA0B;IAC9B;AACJ;;AAEA,oBAAoB;;AAEpB;IACI,UAAU;IACV,eAAe;IACf,wBAAwB;AAC5B;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,+CAA+C;AACnD","sourcesContent":["*,\r\n*::before,\r\n*::after{\r\n    margin:0;\r\n    padding:0;\r\n    border:0;\r\n    font-size: 100%;\r\n    font:inherit;\r\n    vertical-align: baseline;\r\n    box-sizing:border-box;\r\n}\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n:root {\r\n    --bg-color: #061431;\r\n    --alt-bg-color: #162544;\r\n    --accent-color: white;\r\n    --text-color: #ffffff;\r\n}\r\nimg.icon,\r\nsvg{\r\n    height:24px;\r\n    transition: transform 0.2s ease-in-out;\r\n    user-select: none;\r\n    fill:var(--accent-color);\r\n    user-select: none;\r\n}\r\nbody{\r\n    line-height:1.5;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color:var(--text-color);\r\n    background-color: var(--bg-color);\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: space-between;\r\n    gap:100px;\r\n    background-image:url(./img/bg.jpg);\r\n    background-position:center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\nol,ul{\r\n    list-style:none;\r\n}\r\nimg.icon:hover,\r\nsvg:hover{\r\n    transform:scale(1.5);\r\n}\r\nh1{\r\n    font-family: \"Dancing Script\",cursive;\r\n    font-size: 2.5rem;\r\n    width: fit-content;\r\n    border-bottom: 2px solid var(--accent-color);\r\n}\r\n/*HEADER */\r\nheader{\r\n    max-width: 1500px;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n    background-color: var(--bg-color);\r\n    display: flex;\r\n    gap: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n}\r\n.h-left{\r\n    position: relative;\r\n}\r\n\r\n.h-left img{\r\n    width: 260px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) -10px 10px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: scale(1) translateX(-100%);\r\n    transition: all 1s ease-out;\r\n}\r\n\r\n.h-right{\r\n    padding: 1.5rem 4rem;\r\n    display: flex; \r\n    flex-direction: column;\r\n    justify-content: space-evenly;\r\n}\r\n.about-text{\r\n    margin-top: 10px;\r\n    padding: 10px 0px;\r\n    padding-right: 10%;\r\n    line-height: 1.1rem;\r\n    text-align: justify;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:15px;\r\n}\r\n.h-links{\r\n    align-self: flex-end;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n/* Main */\r\n\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items:  center;\r\n    gap: 50px;\r\n}\r\n\r\n.m-container{\r\ndisplay:grid;\r\ngrid-template: repeat(2,1fr) / repeat(4, 1fr);\r\ngap:25px;\r\n}\r\n\r\n.cards{\r\n    min-height: 230px;\r\n    max-width: 350px;\r\n    background-color: var(--alt-bg-color);\r\n    border: 1px solid hsl(219, 26%, 25%);\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(-100px);\r\n    transition: scale 0.25s ease, opacity 1s ease, filer 1s ease , transform 1s ease;\r\n}\r\n\r\n.cards:nth-child(2),\r\n.cards:nth-child(6){\r\n    transition: scale 0.25s ease, opacity 1s ease 200ms filter 1s ease 200ms , transform 1s ease 200ms;\r\n}\r\n.cards:nth-child(3),\r\n.cards:nth-child(7) {\r\n    transition: scale 0.25s ease, opacity 1s ease 400ms, filter 1s ease 400ms, transform 1s ease 400ms;\r\n}\r\n.cards:nth-child(4),\r\n.cards:nth-child(8) {\r\n    transition: scale 0.25s ease, opacity 1s ease 600ms, filter 1s ease 600ms, transform 1s ease 600ms;\r\n}\r\n\r\n.cards:hover{\r\n    scale: 1.15;\r\n    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0,0,0 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n    z-index: 3;\r\n}\r\n\r\n.project-name{\r\n    position: relative;\r\n}\r\n\r\n.project-name::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 0;\r\n    width: 0%;\r\n    height: 2px;\r\n    background-color: var(--accent-color);\r\n    transition: width 0.25s ease;\r\n}\r\n.cards:hover .project-name::before{\r\n    width:100%;\r\n}\r\n\r\n.cards img{\r\n    width: 100%;\r\n    border-radius: 25px 25px 0px 0px;\r\n}\r\n.cards img.icon{    \r\n    width: 50%;\r\n    border-radius: 5px 5px 0px 0px;\r\n}\r\n\r\n\r\n.text{\r\n    padding: 1em;\r\n    \r\n}\r\n\r\n.first-line{\r\n    margin-bottom: 15px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.first-line h3{\r\n    font-family: \"Dancing Script\", cursive;\r\n    font-size: 1.5rem;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.text p{\r\nfont-size: 0.9rem;\r\nline-height: 1.1em;\r\n}\r\n\r\n/* footer */\r\nfooter{\r\n    background-color: var(--alt-bg-color);\r\n    padding: 2rem 4rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.f-container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.f-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    \r\n}\r\n.f-left p{\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\n\r\n.f-right{\r\n    user-select: none;\r\n}\r\n\r\n.phone,\r\n.email{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.socials{\r\n    display: flex;\r\n    gap: 25px;\r\n}\r\n\r\n.img2{\r\n    max-width: 400px;\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(100%);\r\n    transition: all 1s ease;\r\n    margin-left: 75px;\r\n}\r\n\r\n/*scroll bar*/\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background: var(--accent-color);\r\n    border: 2px solid var(--alt-bg-color);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover{\r\n    background:var(--text-color);\r\n}\r\n\r\n/*media queries */\r\n\r\n@media screen and (max-width : 1700px){\r\n    header{\r\n        margin: 0px 10%;\r\n        margin-top: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width : 1400px){\r\n    .m-container{\r\n        grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n        gap: 25px;\r\n\r\n    }\r\n    .cards:last-child{\r\n        grid-column-start: 3;\r\n    }\r\n    .cards:nth-child(5){\r\n        grid-column-start: 3;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    header {\r\n        flex-direction: column;\r\n    }\r\n    .about-text {\r\n        padding: 0;\r\n    }\r\n    .h-right h1 {\r\n        align-self: center;\r\n    }\r\n    .h-left img {\r\n        display: block;\r\n        margin: auto;\r\n        margin-bottom: 50px;\r\n        transform: scale(1) translateY(-100%);\r\n    }\r\n    .h-links svg {\r\n        height: 40px;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(4, 1fr) / repeat(2, 1fr);\r\n        gap: 50px;\r\n    }\r\n    .cards:last-child {\r\n        grid-column-start: auto;\r\n    }\r\n    .cards:nth-child(5) {\r\n        grid-column-start: auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n    body {\r\n        background-size: 100% 50%;\r\n    }\r\n    .h-left img {\r\n        width: 200px;\r\n        margin-bottom: 0;\r\n    }\r\n    .about-text {\r\n        text-align: left;\r\n        line-height: 1.25em;\r\n    }\r\n    .h-right {\r\n        padding: 2rem;\r\n    }\r\n    .h-links {\r\n        margin-top: 25px;\r\n        align-self: center;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(8, 1fr) / repeat(1, 1fr);\r\n        gap: 50px;\r\n    }\r\n    footer {\r\n        padding: 2rem;\r\n    }\r\n    .f-container {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n        gap: 50px;\r\n    }\r\n    .f-left {\r\n        gap: 15px;\r\n    }\r\n    .f-left h1 {\r\n        align-self: center;\r\n        margin-bottom: 25px;\r\n    }\r\n    .socials{\r\n        align-self: center;\r\n    }\r\n    .socials svg {\r\n        height: 40px;\r\n    }\r\n    .img2 {\r\n        display: block;\r\n        margin: auto;\r\n        max-width: 100%;\r\n        transform: translateY(90%);\r\n    }\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.show {\r\n    opacity: 1;\r\n    filter: blur(0);\r\n    transform: translateX(0);\r\n}\r\n.showImg1 {\r\n    opacity: 1 !important ;\r\n    filter: blur(0) !important ;\r\n    transform: scale(1.4) translateX(0) !important ;\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHFHQUErQjtBQUMzRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxL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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QiIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9iZy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXJ7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGJvcmRlcjowO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZm9udDppbmhlcml0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG59XHJcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbjpyb290IHtcclxuICAgIC0tYmctY29sb3I6ICMwNjE0MzE7XHJcbiAgICAtLWFsdC1iZy1jb2xvcjogIzE2MjU0NDtcclxuICAgIC0tYWNjZW50LWNvbG9yOiB3aGl0ZTtcclxuICAgIC0tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pbWcuaWNvbixcclxuc3Zne1xyXG4gICAgaGVpZ2h0OjI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgZmlsbDp2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuYm9keXtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxufVxyXG5vbCx1bHtcclxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcclxufVxyXG5pbWcuaWNvbjpob3Zlcixcclxuc3ZnOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuNSk7XHJcbn1cclxuaDF7XHJcbiAgICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG59XHJcbi8qSEVBREVSICovXHJcbmhlYWRlcntcclxuICAgIG1heC13aWR0aDogMTUwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyNXB4O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjM1KSAwcHggNXB4IDE1cHg7XHJcbn1cclxuLmgtbGVmdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmgtbGVmdCBpbWd7XHJcbiAgICB3aWR0aDogMjYwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIC0xMHB4IDEwcHggMTVweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5oLXJpZ2h0e1xyXG4gICAgcGFkZGluZzogMS41cmVtIDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG4uYWJvdXQtdGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6MTVweDtcclxufVxyXG4uaC1saW5rc3tcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMTBweDtcclxufVxyXG5cclxuLyogTWFpbiAqL1xyXG5cclxubWFpbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XHJcbiAgICBnYXA6IDUwcHg7XHJcbn1cclxuXHJcbi5tLWNvbnRhaW5lcntcclxuZGlzcGxheTpncmlkO1xyXG5ncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwxZnIpIC8gcmVwZWF0KDQsIDFmcik7XHJcbmdhcDoyNXB4O1xyXG59XHJcblxyXG4uY2FyZHN7XHJcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmctY29sb3IpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIxOSwgMjYlLCAyNSUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UsIGZpbGVyIDFzIGVhc2UgLCB0cmFuc2Zvcm0gMXMgZWFzZTtcclxufVxyXG5cclxuLmNhcmRzOm50aC1jaGlsZCgyKSxcclxuLmNhcmRzOm50aC1jaGlsZCg2KXtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSAyMDBtcyBmaWx0ZXIgMXMgZWFzZSAyMDBtcyAsIHRyYW5zZm9ybSAxcyBlYXNlIDIwMG1zO1xyXG59XHJcbi5jYXJkczpudGgtY2hpbGQoMyksXHJcbi5jYXJkczpudGgtY2hpbGQoNykge1xyXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDQwMG1zLCBmaWx0ZXIgMXMgZWFzZSA0MDBtcywgdHJhbnNmb3JtIDFzIGVhc2UgNDAwbXM7XHJcbn1cclxuLmNhcmRzOm50aC1jaGlsZCg0KSxcclxuLmNhcmRzOm50aC1jaGlsZCg4KSB7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgNjAwbXMsIGZpbHRlciAxcyBlYXNlIDYwMG1zLCB0cmFuc2Zvcm0gMXMgZWFzZSA2MDBtcztcclxufVxyXG5cclxuLmNhcmRzOmhvdmVye1xyXG4gICAgc2NhbGU6IDEuMTU7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLDAsMCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZTtcclxufVxyXG4uY2FyZHM6aG92ZXIgLnByb2plY3QtbmFtZTo6YmVmb3Jle1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNhcmRzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbn1cclxuLmNhcmRzIGltZy5pY29ueyAgICBcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcblxyXG4udGV4dHtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxuICAgIFxyXG59XHJcblxyXG4uZmlyc3QtbGluZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maXJzdC1saW5lIGgze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnRleHQgcHtcclxuZm9udC1zaXplOiAwLjlyZW07XHJcbmxpbmUtaGVpZ2h0OiAxLjFlbTtcclxufVxyXG5cclxuLyogZm9vdGVyICovXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iZy1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mLWxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIFxyXG59XHJcbi5mLWxlZnQgcHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5mLXJpZ2h0e1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5waG9uZSxcclxuLmVtYWlse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWxze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjVweDtcclxufVxyXG5cclxuLmltZzJ7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcclxufVxyXG5cclxuLypzY3JvbGwgYmFyKi9cclxuOjotd2Via2l0LXNjcm9sbGJhcntcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWNvbG9yKTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsdC1iZy1jb2xvcik7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO1xyXG59XHJcblxyXG4vKm1lZGlhIHF1ZXJpZXMgKi9cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNzAwcHgpe1xyXG4gICAgaGVhZGVye1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDEwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0MDBweCl7XHJcbiAgICAubS1jb250YWluZXJ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcclxuICAgICAgICBnYXA6IDI1cHg7XHJcblxyXG4gICAgfVxyXG4gICAgLmNhcmRzOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XHJcbiAgICB9XHJcbiAgICAuY2FyZHM6bnRoLWNoaWxkKDUpe1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgLmgtcmlnaHQgaDEge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5oLWxlZnQgaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTEwMCUpO1xyXG4gICAgfVxyXG4gICAgLmgtbGlua3Mgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubS1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCg0LCAxZnIpIC8gcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgZ2FwOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmNhcmRzOm50aC1jaGlsZCg1KSB7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XHJcbiAgICBib2R5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xyXG4gICAgfVxyXG4gICAgLmgtbGVmdCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgLmFib3V0LXRleHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcclxuICAgIH1cclxuICAgIC5oLXJpZ2h0IHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLmgtbGlua3Mge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLm0tY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgMWZyKSAvIHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgICAgIGdhcDogNTBweDtcclxuICAgIH1cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuICAgIC5mLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgIGdhcDogNTBweDtcclxuICAgIH1cclxuICAgIC5mLWxlZnQge1xyXG4gICAgICAgIGdhcDogMTVweDtcclxuICAgIH1cclxuICAgIC5mLWxlZnQgaDEge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbHN7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnNvY2lhbHMgc3ZnIHtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAuaW1nMiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoOTAlKTtcclxuICAgIH1cclxufVxyXG5cclxuLyogVXRpbGl0eSBDbGFzc2VzICovXHJcblxyXG4uc2hvdyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG59XHJcbi5zaG93SW1nMSB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQgO1xyXG4gICAgZmlsdGVyOiBibHVyKDApICFpbXBvcnRhbnQgO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpIHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudCA7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztJQUdJLFFBQVE7SUFDUixTQUFTO0lBQ1QsUUFBUTtJQUNSLGVBQWU7SUFDZixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6QjtBQUNBOztDQUVD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LDZCQUE2QjtRQUM3QixTQUFTO0lBQ2I7SUFDQTtRQUNJLFNBQVM7SUFDYjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsWUFBWTtRQUNaLGVBQWU7UUFDZiwwQkFBMEI7SUFDOUI7QUFDSjs7QUFFQSxvQkFBb0I7O0FBRXBCO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsK0NBQStDO0FBQ25EXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVye1xcclxcbiAgICBtYXJnaW46MDtcXHJcXG4gICAgcGFkZGluZzowO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcclxcbiAgICBmb250OmluaGVyaXQ7XFxyXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gICAgYm94LXNpemluZzpib3JkZXItYm94O1xcclxcbn1cXHJcXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXHJcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcclxcblxcdGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG46cm9vdCB7XFxyXFxuICAgIC0tYmctY29sb3I6ICMwNjE0MzE7XFxyXFxuICAgIC0tYWx0LWJnLWNvbG9yOiAjMTYyNTQ0O1xcclxcbiAgICAtLWFjY2VudC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIC0tdGV4dC1jb2xvcjogI2ZmZmZmZjtcXHJcXG59XFxyXFxuaW1nLmljb24sXFxyXFxuc3Zne1xcclxcbiAgICBoZWlnaHQ6MjRweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBmaWxsOnZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBsaW5lLWhlaWdodDoxLjU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICAgIGRpc3BsYXk6ZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDoxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoLi9pbWcvYmcuanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcclxcbn1cXHJcXG5vbCx1bHtcXHJcXG4gICAgbGlzdC1zdHlsZTpub25lO1xcclxcbn1cXHJcXG5pbWcuaWNvbjpob3ZlcixcXHJcXG5zdmc6aG92ZXJ7XFxyXFxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjUpO1xcclxcbn1cXHJcXG5oMXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJEYW5jaW5nIFNjcmlwdFxcXCIsY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxufVxcclxcbi8qSEVBREVSICovXFxyXFxuaGVhZGVye1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MDBweDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbn1cXHJcXG4uaC1sZWZ0e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oLWxlZnQgaW1ne1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgLTEwcHggMTBweCAxNXB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmgtcmlnaHR7XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbSA0cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcbi5hYm91dC10ZXh0e1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDBweDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAlO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6MTVweDtcXHJcXG59XFxyXFxuLmgtbGlua3N7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gKi9cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubS1jb250YWluZXJ7XFxyXFxuZGlzcGxheTpncmlkO1xcclxcbmdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLDFmcikgLyByZXBlYXQoNCwgMWZyKTtcXHJcXG5nYXA6MjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRze1xcclxcbiAgICBtaW4taGVpZ2h0OiAyMzBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJnLWNvbG9yKTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgaHNsKDIxOSwgMjYlLCAyNSUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuXFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMHB4KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlLCBmaWxlciAxcyBlYXNlICwgdHJhbnNmb3JtIDFzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5jYXJkczpudGgtY2hpbGQoMiksXFxyXFxuLmNhcmRzOm50aC1jaGlsZCg2KXtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDIwMG1zIGZpbHRlciAxcyBlYXNlIDIwMG1zICwgdHJhbnNmb3JtIDFzIGVhc2UgMjAwbXM7XFxyXFxufVxcclxcbi5jYXJkczpudGgtY2hpbGQoMyksXFxyXFxuLmNhcmRzOm50aC1jaGlsZCg3KSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSA0MDBtcywgZmlsdGVyIDFzIGVhc2UgNDAwbXMsIHRyYW5zZm9ybSAxcyBlYXNlIDQwMG1zO1xcclxcbn1cXHJcXG4uY2FyZHM6bnRoLWNoaWxkKDQpLFxcclxcbi5jYXJkczpudGgtY2hpbGQoOCkge1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgNjAwbXMsIGZpbHRlciAxcyBlYXNlIDYwMG1zLCB0cmFuc2Zvcm0gMXMgZWFzZSA2MDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzOmhvdmVye1xcclxcbiAgICBzY2FsZTogMS4xNTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwwLDAgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xcclxcbiAgICB6LWluZGV4OiAzO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1le1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWU6OmJlZm9yZXtcXHJcXG4gICAgY29udGVudDogJyc7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAtMTBweDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDAlO1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZTtcXHJcXG59XFxyXFxuLmNhcmRzOmhvdmVyIC5wcm9qZWN0LW5hbWU6OmJlZm9yZXtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzIGltZ3tcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uY2FyZHMgaW1nLmljb257ICAgIFxcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZmlyc3QtbGluZXtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG4gICAgZGlzcGxheTpmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5maXJzdC1saW5lIGgze1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIkRhbmNpbmcgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHB7XFxyXFxuZm9udC1zaXplOiAwLjlyZW07XFxyXFxubGluZS1oZWlnaHQ6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5mb290ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iZy1jb2xvcik7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gNHJlbTtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmYtY29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmYtbGVmdHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5mLWxlZnQgcHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZi1yaWdodHtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5waG9uZSxcXHJcXG4uZW1haWx7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvY2lhbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmltZzJ7XFxyXFxuICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbi8qc2Nyb2xsIGJhciovXFxyXFxuOjotd2Via2l0LXNjcm9sbGJhcntcXHJcXG4gICAgd2lkdGg6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFsdC1iZy1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6dmFyKC0tdGV4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbi8qbWVkaWEgcXVlcmllcyAqL1xcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNzAwcHgpe1xcclxcbiAgICBoZWFkZXJ7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAxMCU7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTQwMHB4KXtcXHJcXG4gICAgLm0tY29udGFpbmVye1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDMsIDFmcikgLyByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgICAgIGdhcDogMjVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHM6bGFzdC1jaGlsZHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpudGgtY2hpbGQoNSl7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1yaWdodCBoMSB7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtbGVmdCBpbWcge1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xMDAlKTtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1saW5rcyBzdmcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5tLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgyLCAxZnIpO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpsYXN0LWNoaWxkIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIC5jYXJkczpudGgtY2hpbGQoNSkge1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXHJcXG4gICAgYm9keSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNTAlO1xcclxcbiAgICB9XFxyXFxuICAgIC5oLWxlZnQgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmFib3V0LXRleHQge1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtcmlnaHQge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1saW5rcyB7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5tLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoOCwgMWZyKSAvIHJlcGVhdCgxLCAxZnIpO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgZ2FwOiA1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWxlZnQge1xcclxcbiAgICAgICAgZ2FwOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5mLWxlZnQgaDEge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuc29jaWFsc3tcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAuc29jaWFscyBzdmcge1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIC5pbWcyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBDbGFzc2VzICovXFxyXFxuXFxyXFxuLnNob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoMCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXHJcXG59XFxyXFxuLnNob3dJbWcxIHtcXHJcXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50IDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDApICFpbXBvcnRhbnQgO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNCkgdHJhbnNsYXRlWCgwKSAhaW1wb3J0YW50IDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMgPT57XHJcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW50cnkpO1xyXG4gICAgICAgIGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKXtcclxuICAgICAgICAgICAgaWYoZW50cnkudGFyZ2V0LmlkID09PSBcImltZzFcIilcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzaG93SW1nMScpXHJcbiAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvdycpXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGVudHJ5LnRhcmdldC5pZCA9PT0gJ2ltZzEnKVxyXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dJbWcxJyk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pKTtcclxuXHJcbmNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRzJyk7XHJcbmNhcmRzLmZvckVhY2goKGVsKSA9PiBvYnNlcnZlci5vYnNlcnZlKGVsKSk7XHJcbmNvbnN0IHRvcEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcxJyk7XHJcbm9ic2VydmVyLm9ic2VydmUodG9wSW1nKTtcclxuY29uc3QgYm90dG9tSW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZzInKTtcclxub2JzZXJ2ZXIub2JzZXJ2ZShib3R0b21JbWcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==