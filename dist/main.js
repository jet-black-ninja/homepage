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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/bg2.gif */ "./src/img/bg2.gif"), __webpack_require__.b);
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
    width:24px;
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
    background-size: cover;
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
    height:24rem;
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
    padding: 15rem 4rem;
    display: flex; 
    flex-direction: column;
    justify-content: space-around;
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
    scale: 1.25;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0,0,0 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
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
    justify-content: space-around;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;IAGI,QAAQ;IACR,SAAS;IACT,QAAQ;IACR,eAAe;IACf,YAAY;IACZ,wBAAwB;IACxB,qBAAqB;AACzB;AACA;;CAEC,cAAc;AACf;AACA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;AACzB;AACA;;IAEI,WAAW;IACX,UAAU;IACV,sCAAsC;IACtC,iBAAiB;IACjB,wBAAwB;IACxB,iBAAiB;AACrB;AACA;IACI,eAAe;IACf,kCAAkC;IAClC,uBAAuB;IACvB,iCAAiC;IACjC,YAAY;IACZ,qBAAqB;IACrB,8BAA8B;IAC9B,SAAS;IACT,wDAAmC;IACnC,0BAA0B;IAC1B,4BAA4B;IAC5B,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;AACA;;IAEI,oBAAoB;AACxB;AACA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,kBAAkB;IAClB,4CAA4C;AAChD;AACA,UAAU;AACV;IACI,iBAAiB;IACjB,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,SAAS;IACT,4CAA4C;IAC5C,YAAY;AAChB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,+CAA+C;IAC/C,iBAAiB;;IAEjB,UAAU;IACV,iBAAiB;IACjB,qCAAqC;IACrC,2BAA2B;AAC/B;;AAEA;IACI,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;AACA;IACI,oBAAoB;IACpB,aAAa;IACb,SAAS;AACb;;AAEA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,SAAS;AACb;;AAEA;AACA,YAAY;AACZ,6CAA6C;AAC7C,QAAQ;AACR;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,qCAAqC;IACrC,oCAAoC;IACpC,mBAAmB;IACnB,4CAA4C;IAC5C,iBAAiB;;IAEjB,UAAU;IACV,iBAAiB;IACjB,6BAA6B;IAC7B,gFAAgF;AACpF;;AAEA;;IAEI,kGAAkG;AACtG;AACA;;IAEI,kGAAkG;AACtG;AACA;;IAEI,kGAAkG;AACtG;;AAEA;IACI,WAAW;IACX,wTAAwT;AAC5T;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,OAAO;IACP,SAAS;IACT,WAAW;IACX,qCAAqC;IACrC,4BAA4B;AAChC;AACA;IACI,UAAU;AACd;;AAEA;IACI,WAAW;IACX,gCAAgC;AACpC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,YAAY;IACZ,8BAA8B;IAC9B,mBAAmB;AACvB;AACA;IACI,sCAAsC;IACtC,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;AACA,iBAAiB;AACjB,kBAAkB;AAClB;;AAEA,WAAW;AACX;IACI,qCAAqC;IACrC,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;IACV,iBAAiB;IACjB,2BAA2B;IAC3B,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA,aAAa;AACb;IACI,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,qCAAqC;AACzC;;AAEA;IACI,4BAA4B;AAChC;;AAEA,iBAAiB;;AAEjB;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ;;AAEA;IACI;QACI,8CAA8C;QAC9C,SAAS;;IAEb;IACA;QACI,oBAAoB;IACxB;IACA;QACI,oBAAoB;IACxB;AACJ;;AAEA;IACI;QACI,sBAAsB;IAC1B;IACA;QACI,UAAU;IACd;IACA;QACI,kBAAkB;IACtB;IACA;QACI,cAAc;QACd,YAAY;QACZ,mBAAmB;QACnB,qCAAqC;IACzC;IACA;QACI,YAAY;IAChB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;IAC3B;AACJ;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,YAAY;QACZ,gBAAgB;IACpB;IACA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;IACA;QACI,aAAa;IACjB;IACA;QACI,gBAAgB;QAChB,kBAAkB;IACtB;IACA;QACI,8CAA8C;QAC9C,SAAS;IACb;IACA;QACI,aAAa;IACjB;IACA;QACI,sBAAsB;QACtB,mBAAmB;QACnB,6BAA6B;QAC7B,SAAS;IACb;IACA;QACI,SAAS;IACb;IACA;QACI,kBAAkB;QAClB,mBAAmB;IACvB;IACA;QACI,kBAAkB;IACtB;IACA;QACI,YAAY;IAChB;IACA;QACI,cAAc;QACd,YAAY;QACZ,eAAe;QACf,0BAA0B;IAC9B;AACJ;;AAEA,oBAAoB;;AAEpB;IACI,UAAU;IACV,eAAe;IACf,wBAAwB;AAC5B;AACA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,+CAA+C;AACnD","sourcesContent":["*,\r\n*::before,\r\n*::after{\r\n    margin:0;\r\n    padding:0;\r\n    border:0;\r\n    font-size: 100%;\r\n    font:inherit;\r\n    vertical-align: baseline;\r\n    box-sizing:border-box;\r\n}\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\n:root {\r\n    --bg-color: #061431;\r\n    --alt-bg-color: #162544;\r\n    --accent-color: white;\r\n    --text-color: #ffffff;\r\n}\r\nimg.icon,\r\nsvg{\r\n    height:24px;\r\n    width:24px;\r\n    transition: transform 0.2s ease-in-out;\r\n    user-select: none;\r\n    fill:var(--accent-color);\r\n    user-select: none;\r\n}\r\nbody{\r\n    line-height:1.5;\r\n    font-family: \"Raleway\", sans-serif;\r\n    color:var(--text-color);\r\n    background-color: var(--bg-color);\r\n    display:flex;\r\n    flex-direction:column;\r\n    justify-content: space-between;\r\n    gap:100px;\r\n    background-image:url(./img/bg2.gif);\r\n    background-position:center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\nol,ul{\r\n    list-style:none;\r\n}\r\nimg.icon:hover,\r\nsvg:hover{\r\n    transform:scale(1.5);\r\n}\r\nh1{\r\n    font-family: \"Dancing Script\",cursive;\r\n    font-size: 2.5rem;\r\n    width: fit-content;\r\n    border-bottom: 2px solid var(--accent-color);\r\n}\r\n/*HEADER */\r\nheader{\r\n    max-width: 1500px;\r\n    margin: auto;\r\n    margin-top: 100px;\r\n    background-color: var(--bg-color);\r\n    display: flex;\r\n    gap: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    height:24rem;\r\n}\r\n.h-left{\r\n    position: relative;\r\n}\r\n\r\n.h-left img{\r\n    width: 260px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) -10px 10px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: scale(1) translateX(-100%);\r\n    transition: all 1s ease-out;\r\n}\r\n\r\n.h-right{\r\n    padding: 15rem 4rem;\r\n    display: flex; \r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n.about-text{\r\n    margin-top: 10px;\r\n    padding: 10px 0px;\r\n    padding-right: 10%;\r\n    line-height: 1.1rem;\r\n    text-align: justify;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap:15px;\r\n}\r\n.h-links{\r\n    align-self: flex-end;\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\n/* Main */\r\n\r\nmain{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items:  center;\r\n    gap: 50px;\r\n}\r\n\r\n.m-container{\r\ndisplay:grid;\r\ngrid-template: repeat(2,1fr) / repeat(4, 1fr);\r\ngap:25px;\r\n}\r\n\r\n.cards{\r\n    min-height: 230px;\r\n    max-width: 350px;\r\n    background-color: var(--alt-bg-color);\r\n    border: 1px solid hsl(219, 26%, 25%);\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    user-select: none;\r\n\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(-100px);\r\n    transition: scale 0.25s ease, opacity 1s ease, filer 1s ease , transform 1s ease;\r\n}\r\n\r\n.cards:nth-child(2),\r\n.cards:nth-child(6){\r\n    transition: scale 0.25s ease, opacity 1s ease 200ms filter 1s ease 200ms , transform 1s ease 200ms;\r\n}\r\n.cards:nth-child(3),\r\n.cards:nth-child(7) {\r\n    transition: scale 0.25s ease, opacity 1s ease 400ms, filter 1s ease 400ms, transform 1s ease 400ms;\r\n}\r\n.cards:nth-child(4),\r\n.cards:nth-child(8) {\r\n    transition: scale 0.25s ease, opacity 1s ease 600ms, filter 1s ease 600ms, transform 1s ease 600ms;\r\n}\r\n\r\n.cards:hover{\r\n    scale: 1.25;\r\n    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0,0,0 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;\r\n}\r\n\r\n.project-name{\r\n    position: relative;\r\n}\r\n\r\n.project-name::before{\r\n    content: '';\r\n    position: absolute;\r\n    bottom: -10px;\r\n    left: 0;\r\n    width: 0%;\r\n    height: 2px;\r\n    background-color: var(--accent-color);\r\n    transition: width 0.25s ease;\r\n}\r\n.cards:hover .project-name::before{\r\n    width:100%;\r\n}\r\n\r\n.cards img{\r\n    width: 100%;\r\n    border-radius: 25px 25px 0px 0px;\r\n}\r\n\r\n.text{\r\n    padding: 1em;\r\n}\r\n\r\n.first-line{\r\n    margin-bottom: 15px;\r\n    display:flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n.first-line h3{\r\n    font-family: \"Dancing Script\", cursive;\r\n    font-size: 1.5rem;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.text p{\r\nfont-size: 0.9rem;\r\nline-height: 1.1em;\r\n}\r\n\r\n/* footer */\r\nfooter{\r\n    background-color: var(--alt-bg-color);\r\n    padding: 2rem 4rem;\r\n    overflow: hidden;\r\n}\r\n\r\n.f-container{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.f-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.f-right{\r\n    user-select: none;\r\n}\r\n\r\n.phone,\r\n.email{\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n.socials{\r\n    display: flex;\r\n    gap: 25px;\r\n}\r\n\r\n.img2{\r\n    max-width: 400px;\r\n    border-radius: 25px;\r\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\r\n    opacity: 0;\r\n    filter: blur(5px);\r\n    transform: translateX(100%);\r\n    transition: all 1s ease;\r\n    margin-left: 75px;\r\n}\r\n\r\n/*scroll bar*/\r\n::-webkit-scrollbar{\r\n    width: 10px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb{\r\n    background: var(--accent-color);\r\n    border: 2px solid var(--alt-bg-color);\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover{\r\n    background:var(--text-color);\r\n}\r\n\r\n/*media queries */\r\n\r\n@media screen and (max-width : 1700px){\r\n    header{\r\n        margin: 0px 10%;\r\n        margin-top: 100px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width : 1400px){\r\n    .m-container{\r\n        grid-template: repeat(3, 1fr) / repeat(3, 1fr);\r\n        gap: 25px;\r\n\r\n    }\r\n    .cards:last-child{\r\n        grid-column-start: 3;\r\n    }\r\n    .cards:nth-child(5){\r\n        grid-column-start: 3;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 1080px) {\r\n    header {\r\n        flex-direction: column;\r\n    }\r\n    .about-text {\r\n        padding: 0;\r\n    }\r\n    .h-right h1 {\r\n        align-self: center;\r\n    }\r\n    .h-left img {\r\n        display: block;\r\n        margin: auto;\r\n        margin-bottom: 50px;\r\n        transform: scale(1) translateY(-100%);\r\n    }\r\n    .h-links svg {\r\n        height: 40px;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(4, 1fr) / repeat(2, 1fr);\r\n        gap: 50px;\r\n    }\r\n    .cards:last-child {\r\n        grid-column-start: auto;\r\n    }\r\n    .cards:nth-child(5) {\r\n        grid-column-start: auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n    body {\r\n        background-size: 100% 50%;\r\n    }\r\n    .h-left img {\r\n        width: 200px;\r\n        margin-bottom: 0;\r\n    }\r\n    .about-text {\r\n        text-align: left;\r\n        line-height: 1.25em;\r\n    }\r\n    .h-right {\r\n        padding: 2rem;\r\n    }\r\n    .h-links {\r\n        margin-top: 25px;\r\n        align-self: center;\r\n    }\r\n    .m-container {\r\n        grid-template: repeat(8, 1fr) / repeat(1, 1fr);\r\n        gap: 50px;\r\n    }\r\n    footer {\r\n        padding: 2rem;\r\n    }\r\n    .f-container {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: space-around;\r\n        gap: 50px;\r\n    }\r\n    .f-left {\r\n        gap: 15px;\r\n    }\r\n    .f-left h1 {\r\n        align-self: center;\r\n        margin-bottom: 25px;\r\n    }\r\n    .socials{\r\n        align-self: center;\r\n    }\r\n    .socials svg {\r\n        height: 40px;\r\n    }\r\n    .img2 {\r\n        display: block;\r\n        margin: auto;\r\n        max-width: 100%;\r\n        transform: translateY(90%);\r\n    }\r\n}\r\n\r\n/* Utility Classes */\r\n\r\n.show {\r\n    opacity: 1;\r\n    filter: blur(0);\r\n    transform: translateX(0);\r\n}\r\n.showImg1 {\r\n    opacity: 1 !important ;\r\n    filter: blur(0) !important ;\r\n    transform: scale(1.4) translateX(0) !important ;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/img/bg2.gif":
/*!*************************!*\
  !*** ./src/img/bg2.gif ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15633f0a3dda7bc1197f.gif";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUNBQW1DO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLFlBQVksS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxN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L3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2hvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2hvbWVwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWcvYmcyLmdpZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlcntcclxuICAgIG1hcmdpbjowO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgYm9yZGVyOjA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250OmluaGVyaXQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbn1cclxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuOnJvb3Qge1xyXG4gICAgLS1iZy1jb2xvcjogIzA2MTQzMTtcclxuICAgIC0tYWx0LWJnLWNvbG9yOiAjMTYyNTQ0O1xyXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlO1xyXG4gICAgLS10ZXh0LWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbmltZy5pY29uLFxyXG5zdmd7XHJcbiAgICBoZWlnaHQ6MjRweDtcclxuICAgIHdpZHRoOjI0cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgZmlsbDp2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuYm9keXtcclxuICAgIGxpbmUtaGVpZ2h0OjEuNTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJhbGV3YXlcIiwgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOnZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbm9sLHVse1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG59XHJcbmltZy5pY29uOmhvdmVyLFxyXG5zdmc6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS41KTtcclxufVxyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkRhbmNpbmcgU2NyaXB0XCIsY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1jb2xvcik7XHJcbn1cclxuLypIRUFERVIgKi9cclxuaGVhZGVye1xyXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIGhlaWdodDoyNHJlbTtcclxufVxyXG4uaC1sZWZ0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaC1sZWZ0IGltZ3tcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgLTEwcHggMTBweCAxNXB4O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcblxyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxufVxyXG5cclxuLmgtcmlnaHR7XHJcbiAgICBwYWRkaW5nOiAxNXJlbSA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbn1cclxuLmFib3V0LXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xcmVtO1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOjE1cHg7XHJcbn1cclxuLmgtbGlua3N7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi8qIE1haW4gKi9cclxuXHJcbm1haW57XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xyXG4gICAgZ2FwOiA1MHB4O1xyXG59XHJcblxyXG4ubS1jb250YWluZXJ7XHJcbmRpc3BsYXk6Z3JpZDtcclxuZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsMWZyKSAvIHJlcGVhdCg0LCAxZnIpO1xyXG5nYXA6MjVweDtcclxufVxyXG5cclxuLmNhcmRze1xyXG4gICAgbWluLWhlaWdodDogMjMwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJnLWNvbG9yKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyMTksIDI2JSwgMjUlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xyXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlLCBmaWxlciAxcyBlYXNlICwgdHJhbnNmb3JtIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5jYXJkczpudGgtY2hpbGQoMiksXHJcbi5jYXJkczpudGgtY2hpbGQoNil7XHJcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgMjAwbXMgZmlsdGVyIDFzIGVhc2UgMjAwbXMgLCB0cmFuc2Zvcm0gMXMgZWFzZSAyMDBtcztcclxufVxyXG4uY2FyZHM6bnRoLWNoaWxkKDMpLFxyXG4uY2FyZHM6bnRoLWNoaWxkKDcpIHtcclxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSA0MDBtcywgZmlsdGVyIDFzIGVhc2UgNDAwbXMsIHRyYW5zZm9ybSAxcyBlYXNlIDQwMG1zO1xyXG59XHJcbi5jYXJkczpudGgtY2hpbGQoNCksXHJcbi5jYXJkczpudGgtY2hpbGQoOCkge1xyXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDYwMG1zLCBmaWx0ZXIgMXMgZWFzZSA2MDBtcywgdHJhbnNmb3JtIDFzIGVhc2UgNjAwbXM7XHJcbn1cclxuXHJcbi5jYXJkczpob3ZlcntcclxuICAgIHNjYWxlOiAxLjI1O1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggLTIzcHggMjVweCAwcHggaW5zZXQsIHJnYmEoMCwwLDAgMC4xNSkgMHB4IC0zNnB4IDMwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IC03OXB4IDQwcHggMHB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMDYpIDBweCAycHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA0cHggMnB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCA4cHggNHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAxNnB4IDhweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggMzJweCAxNnB4O1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1le1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lOjpiZWZvcmV7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDAlO1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4yNXMgZWFzZTtcclxufVxyXG4uY2FyZHM6aG92ZXIgLnByb2plY3QtbmFtZTo6YmVmb3Jle1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5cclxuLmNhcmRzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG59XHJcblxyXG4uZmlyc3QtbGluZXtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5maXJzdC1saW5lIGgze1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRGFuY2luZyBTY3JpcHRcIiwgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnRleHQgcHtcclxuZm9udC1zaXplOiAwLjlyZW07XHJcbmxpbmUtaGVpZ2h0OiAxLjFlbTtcclxufVxyXG5cclxuLyogZm9vdGVyICovXHJcbmZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFsdC1iZy1jb2xvcik7XHJcbiAgICBwYWRkaW5nOiAycmVtIDRyZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZi1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mLWxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG59XHJcblxyXG4uZi1yaWdodHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG4ucGhvbmUsXHJcbi5lbWFpbHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uc29jaWFsc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDI1cHg7XHJcbn1cclxuXHJcbi5pbWcye1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbn1cclxuXHJcbi8qc2Nyb2xsIGJhciovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XHJcbiAgICB3aWR0aDogMTBweDtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1jb2xvcik7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbHQtYmctY29sb3IpO1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDp2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuLyptZWRpYSBxdWVyaWVzICovXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTcwMHB4KXtcclxuICAgIGhlYWRlcntcclxuICAgICAgICBtYXJnaW46IDBweCAxMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGggOiAxNDAwcHgpe1xyXG4gICAgLm0tY29udGFpbmVye1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XHJcbiAgICAgICAgZ2FwOiAyNXB4O1xyXG5cclxuICAgIH1cclxuICAgIC5jYXJkczpsYXN0LWNoaWxke1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAzO1xyXG4gICAgfVxyXG4gICAgLmNhcmRzOm50aC1jaGlsZCg1KXtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuYWJvdXQtdGV4dCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5oLXJpZ2h0IGgxIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuaC1sZWZ0IGltZyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xMDAlKTtcclxuICAgIH1cclxuICAgIC5oLWxpbmtzIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm0tY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoNCwgMWZyKSAvIHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgICAgIGdhcDogNTBweDtcclxuICAgIH1cclxuICAgIC5jYXJkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogYXV0bztcclxuICAgIH1cclxuICAgIC5jYXJkczpudGgtY2hpbGQoNSkge1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gICAgYm9keSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcclxuICAgIH1cclxuICAgIC5oLWxlZnQgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIC5hYm91dC10ZXh0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1ZW07XHJcbiAgICB9XHJcbiAgICAuaC1yaWdodCB7XHJcbiAgICAgICAgcGFkZGluZzogMnJlbTtcclxuICAgIH1cclxuICAgIC5oLWxpbmtzIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5tLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoMSwgMWZyKTtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICB9XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbiAgICAuZi1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICBnYXA6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAuZi1sZWZ0IHtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuZi1sZWZ0IGgxIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIH1cclxuICAgIC5zb2NpYWxze1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5zb2NpYWxzIHN2ZyB7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLmltZzIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDkwJSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xyXG5cclxuLnNob3cge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGZpbHRlcjogYmx1cigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxufVxyXG4uc2hvd0ltZzEge1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50IDtcclxuICAgIGZpbHRlcjogYmx1cigwKSAhaW1wb3J0YW50IDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS40KSB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQgO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7SUFHSSxRQUFRO0lBQ1IsU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7QUFDQTs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtBQUN6QjtBQUNBOztJQUVJLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2Ysa0NBQWtDO0lBQ2xDLHVCQUF1QjtJQUN2QixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw4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RFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlcntcXHJcXG4gICAgbWFyZ2luOjA7XFxyXFxuICAgIHBhZGRpbmc6MDtcXHJcXG4gICAgYm9yZGVyOjA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXHJcXG4gICAgZm9udDppbmhlcml0O1xcclxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxyXFxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcXHJcXG59XFxyXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxyXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXHJcXG5cXHRkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLWJnLWNvbG9yOiAjMDYxNDMxO1xcclxcbiAgICAtLWFsdC1iZy1jb2xvcjogIzE2MjU0NDtcXHJcXG4gICAgLS1hY2NlbnQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAtLXRleHQtY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcbmltZy5pY29uLFxcclxcbnN2Z3tcXHJcXG4gICAgaGVpZ2h0OjI0cHg7XFxyXFxuICAgIHdpZHRoOjI0cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgZmlsbDp2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgbGluZS1oZWlnaHQ6MS41O1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlJhbGV3YXlcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICBjb2xvcjp2YXIoLS10ZXh0LWNvbG9yKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBnYXA6MTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC4vaW1nL2JnMi5naWYpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxub2wsdWx7XFxyXFxuICAgIGxpc3Qtc3R5bGU6bm9uZTtcXHJcXG59XFxyXFxuaW1nLmljb246aG92ZXIsXFxyXFxuc3ZnOmhvdmVye1xcclxcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS41KTtcXHJcXG59XFxyXFxuaDF7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLGN1cnNpdmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbn1cXHJcXG4vKkhFQURFUiAqL1xcclxcbmhlYWRlcntcXHJcXG4gICAgbWF4LXdpZHRoOiAxNTAwcHg7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgaGVpZ2h0OjI0cmVtO1xcclxcbn1cXHJcXG4uaC1sZWZ0e1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5oLWxlZnQgaW1ne1xcclxcbiAgICB3aWR0aDogMjYwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgLTEwcHggMTBweCAxNXB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWCgtMTAwJSk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLmgtcmlnaHR7XFxyXFxuICAgIHBhZGRpbmc6IDE1cmVtIDRyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7IFxcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuLmFib3V0LXRleHR7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDoxNXB4O1xcclxcbn1cXHJcXG4uaC1saW5rc3tcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiAqL1xcclxcblxcclxcbm1haW57XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tLWNvbnRhaW5lcntcXHJcXG5kaXNwbGF5OmdyaWQ7XFxyXFxuZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsMWZyKSAvIHJlcGVhdCg0LCAxZnIpO1xcclxcbmdhcDoyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHN7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hbHQtYmctY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjE5LCAyNiUsIDI1JSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4zNSkgMHB4IDVweCAxNXB4O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG5cXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UsIGZpbGVyIDFzIGVhc2UgLCB0cmFuc2Zvcm0gMXMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmRzOm50aC1jaGlsZCgyKSxcXHJcXG4uY2FyZHM6bnRoLWNoaWxkKDYpe1xcclxcbiAgICB0cmFuc2l0aW9uOiBzY2FsZSAwLjI1cyBlYXNlLCBvcGFjaXR5IDFzIGVhc2UgMjAwbXMgZmlsdGVyIDFzIGVhc2UgMjAwbXMgLCB0cmFuc2Zvcm0gMXMgZWFzZSAyMDBtcztcXHJcXG59XFxyXFxuLmNhcmRzOm50aC1jaGlsZCgzKSxcXHJcXG4uY2FyZHM6bnRoLWNoaWxkKDcpIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogc2NhbGUgMC4yNXMgZWFzZSwgb3BhY2l0eSAxcyBlYXNlIDQwMG1zLCBmaWx0ZXIgMXMgZWFzZSA0MDBtcywgdHJhbnNmb3JtIDFzIGVhc2UgNDAwbXM7XFxyXFxufVxcclxcbi5jYXJkczpudGgtY2hpbGQoNCksXFxyXFxuLmNhcmRzOm50aC1jaGlsZCg4KSB7XFxyXFxuICAgIHRyYW5zaXRpb246IHNjYWxlIDAuMjVzIGVhc2UsIG9wYWNpdHkgMXMgZWFzZSA2MDBtcywgZmlsdGVyIDFzIGVhc2UgNjAwbXMsIHRyYW5zZm9ybSAxcyBlYXNlIDYwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHM6aG92ZXJ7XFxyXFxuICAgIHNjYWxlOiAxLjI1O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAtMjNweCAyNXB4IDBweCBpbnNldCwgcmdiYSgwLDAsMCAwLjE1KSAwcHggLTM2cHggMzBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggLTc5cHggNDBweCAwcHggaW5zZXQsIHJnYmEoMCwgMCwgMCwgMC4wNikgMHB4IDJweCAxcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDRweCAycHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDhweCA0cHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IDE2cHggOHB4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAzMnB4IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZTo6YmVmb3Jle1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBib3R0b206IC0xMHB4O1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB3aWR0aDogMCU7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xcclxcbn1cXHJcXG4uY2FyZHM6aG92ZXIgLnByb2plY3QtbmFtZTo6YmVmb3Jle1xcclxcbiAgICB3aWR0aDoxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2FyZHMgaW1ne1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweCAyNXB4IDBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0e1xcclxcbiAgICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5maXJzdC1saW5le1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbiAgICBkaXNwbGF5OmZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmZpcnN0LWxpbmUgaDN7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiRGFuY2luZyBTY3JpcHRcXFwiLCBjdXJzaXZlO1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRleHQgcHtcXHJcXG5mb250LXNpemU6IDAuOXJlbTtcXHJcXG5saW5lLWhlaWdodDogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcbmZvb3RlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWx0LWJnLWNvbG9yKTtcXHJcXG4gICAgcGFkZGluZzogMnJlbSA0cmVtO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uZi1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZi1sZWZ0e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmYtcmlnaHR7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUsXFxyXFxuLmVtYWlse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbWcye1xcclxcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKnNjcm9sbCBiYXIqL1xcclxcbjo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hbHQtYmctY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kOnZhcigtLXRleHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKm1lZGlhIHF1ZXJpZXMgKi9cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoIDogMTcwMHB4KXtcXHJcXG4gICAgaGVhZGVye1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMTAlO1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aCA6IDE0MDBweCl7XFxyXFxuICAgIC5tLWNvbnRhaW5lcntcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgzLCAxZnIpIC8gcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgICAgICBnYXA6IDI1cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG4gICAgLmNhcmRzOmxhc3QtY2hpbGR7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMztcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHM6bnRoLWNoaWxkKDUpe1xcclxcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDM7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtcmlnaHQgaDEge1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgIC5oLWxlZnQgaW1nIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgtMTAwJSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtbGlua3Mgc3ZnIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAubS1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDQsIDFmcikgLyByZXBlYXQoMiwgMWZyKTtcXHJcXG4gICAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHM6bGFzdC1jaGlsZCB7XFxyXFxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICAuY2FyZHM6bnRoLWNoaWxkKDUpIHtcXHJcXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAgIGJvZHkge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcXHJcXG4gICAgfVxcclxcbiAgICAuaC1sZWZ0IGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICB9XFxyXFxuICAgIC5hYm91dC10ZXh0IHtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgICAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xcclxcbiAgICB9XFxyXFxuICAgIC5oLXJpZ2h0IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgLmgtbGlua3Mge1xcclxcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcbiAgICAubS1jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDgsIDFmcikgLyByZXBlYXQoMSwgMWZyKTtcXHJcXG4gICAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICBmb290ZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAuZi1jb250YWluZXIge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgIGdhcDogNTBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZi1sZWZ0IHtcXHJcXG4gICAgICAgIGdhcDogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgICAuZi1sZWZ0IGgxIHtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNvY2lhbHN7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG4gICAgLnNvY2lhbHMgc3ZnIHtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcbiAgICAuaW1nMiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg5MCUpO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgQ2xhc3NlcyAqL1xcclxcblxcclxcbi5zaG93IHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxyXFxufVxcclxcbi5zaG93SW1nMSB7XFxyXFxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudCA7XFxyXFxuICAgIGZpbHRlcjogYmx1cigwKSAhaW1wb3J0YW50IDtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpIHRyYW5zbGF0ZVgoMCkgIWltcG9ydGFudCA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXHJcbmNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzID0+e1xyXG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVudHJ5KTtcclxuICAgICAgICBpZihlbnRyeS5pc0ludGVyc2VjdGluZyl7XHJcbiAgICAgICAgICAgIGlmKGVudHJ5LnRhcmdldC5pZCA9PT0gXCJpbWcxXCIpXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnc2hvd0ltZzEnKVxyXG4gICAgICAgICAgICBlbHNlIFxyXG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBpZihlbnRyeS50YXJnZXQuaWQgPT09ICdpbWcxJylcclxuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93SW1nMScpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSk7XHJcblxyXG5jb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkcycpO1xyXG5jYXJkcy5mb3JFYWNoKChlbCkgPT4gb2JzZXJ2ZXIub2JzZXJ2ZShlbCkpO1xyXG5jb25zdCB0b3BJbWcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nMScpO1xyXG5vYnNlcnZlci5vYnNlcnZlKHRvcEltZyk7XHJcbmNvbnN0IGJvdHRvbUltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcyJyk7XHJcbm9ic2VydmVyLm9ic2VydmUoYm90dG9tSW1nKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=