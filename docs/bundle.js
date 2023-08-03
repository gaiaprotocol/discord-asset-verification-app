/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var common_dapp_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-dapp-module */ \"../common-dapp-module/lib/index.js\");\n/* harmony import */ var _view_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/Home.js */ \"./src/view/Home.ts\");\n/* harmony import */ var _view_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/Layout.js */ \"./src/view/Layout.ts\");\n\n\n\n(async () => {\n    if (sessionStorage.__spa_path) {\n        common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.Router.goNoHistory(sessionStorage.__spa_path);\n        sessionStorage.removeItem(\"__spa_path\");\n    }\n    common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.Router.route(\"**\", _view_Layout_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.Router.route(\"\", _view_Home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n})();\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/view/Home.ts":
/*!**************************!*\
  !*** ./src/view/Home.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var common_dapp_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-dapp-module */ \"../common-dapp-module/lib/index.js\");\n/* harmony import */ var _Layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.js */ \"./src/view/Layout.ts\");\n\n\nclass Home extends common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.View {\n    container;\n    constructor() {\n        super();\n        _Layout_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].append(this.container = (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\".home-view\", \"Home\"));\n    }\n    close() {\n        this.container.delete();\n        super.close();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/view/Home.ts?");

/***/ }),

/***/ "./src/view/Layout.ts":
/*!****************************!*\
  !*** ./src/view/Layout.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var common_dapp_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common-dapp-module */ \"../common-dapp-module/lib/index.js\");\n\nclass Layout extends common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.View {\n    static current;\n    static append(node) {\n        Layout.current.content.append(node);\n    }\n    container;\n    content;\n    constructor() {\n        super();\n        Layout.current = this;\n        common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.BodyNode.append(this.container = (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\".layout\", new common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.TopBar({\n            logo: (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\"h1\", new common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.ResponsiveImage(\"img\", \"/images/logo.png\")),\n        }), this.content = (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\"main\"), (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\"footer\", \"BUIDL by \", (0,common_dapp_module__WEBPACK_IMPORTED_MODULE_0__.el)(\"a\", \"Gaia Protocol\", { href: \"https://gaiaprotocol.com\", target: \"_blank\" }))));\n    }\n    close() {\n        this.container.delete();\n        super.close();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/view/Layout.ts?");

/***/ }),

/***/ "../common-dapp-module/lib/component/Component.js":
/*!********************************************************!*\
  !*** ../common-dapp-module/lib/component/Component.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/DomNode.js */ \"../common-dapp-module/lib/dom/DomNode.js\");\n\nclass Component extends _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor(tag, ...nodes) {\n        super(tag + \".component\");\n        this.append(...nodes);\n    }\n}\n//# sourceMappingURL=Component.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/component/Component.js?");

/***/ }),

/***/ "../common-dapp-module/lib/component/TopBar.js":
/*!*****************************************************!*\
  !*** ../common-dapp-module/lib/component/TopBar.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TopBar)\n/* harmony export */ });\n/* harmony import */ var _dom_el_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom/el.js */ \"../common-dapp-module/lib/dom/el.js\");\n/* harmony import */ var _view_Router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view/Router.js */ \"../common-dapp-module/lib/view/Router.js\");\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component.js */ \"../common-dapp-module/lib/component/Component.js\");\n\n\n\nclass TopBar extends _Component_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n    constructor(options) {\n        super(\".topbar\");\n        this.append((0,_dom_el_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"a.logo\", options.logo, {\n            href: \"/\",\n            click: (event) => {\n                event.preventDefault();\n                _view_Router_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].go(\"/\");\n            },\n        }));\n    }\n}\n//# sourceMappingURL=TopBar.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/component/TopBar.js?");

/***/ }),

/***/ "../common-dapp-module/lib/dom/BodyNode.js":
/*!*************************************************!*\
  !*** ../common-dapp-module/lib/dom/BodyNode.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../common-dapp-module/lib/dom/DomNode.js\");\n\nclass BodyNode extends _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    constructor() {\n        super(document.body);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new BodyNode());\n//# sourceMappingURL=BodyNode.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/dom/BodyNode.js?");

/***/ }),

/***/ "../common-dapp-module/lib/dom/DomNode.js":
/*!************************************************!*\
  !*** ../common-dapp-module/lib/dom/DomNode.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomNode)\n/* harmony export */ });\n/* harmony import */ var _tree_TreeNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tree/TreeNode.js */ \"../common-dapp-module/lib/tree/TreeNode.js\");\n/* harmony import */ var _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArrayUtil.js */ \"../common-dapp-module/lib/util/ArrayUtil.js\");\n\n\nclass DomNode extends _tree_TreeNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static NUMBER_STYLE_KEY = [\n        \"zIndex\",\n        \"opacity\",\n        \"flexGrow\",\n        \"flexShrink\",\n        \"gridGap\",\n        \"order\",\n        \"zoom\",\n    ];\n    static keyframesCount = 0;\n    static createElement(tag) {\n        let id;\n        const idIndex = tag.indexOf(\"#\");\n        if (idIndex !== -1) {\n            id = tag.substring(idIndex + 1);\n            tag = tag.substring(0, idIndex);\n            const cindex = id.indexOf(\".\");\n            if (cindex !== -1) {\n                tag += id.substring(cindex);\n                id = id.substring(0, cindex);\n            }\n        }\n        let className;\n        const classNameIndex = tag.indexOf(\".\");\n        if (classNameIndex !== -1) {\n            className = tag.substring(classNameIndex + 1).replace(/\\./g, \" \");\n            tag = tag.substring(0, classNameIndex);\n        }\n        if (tag === \"\") {\n            tag = \"div\";\n        }\n        const element = document.createElement(tag);\n        if (id !== undefined) {\n            element.id = id;\n        }\n        if (className !== undefined) {\n            element.className = className;\n        }\n        return element;\n    }\n    children = [];\n    domEventMap = {};\n    windowEventMap = {};\n    domElement;\n    constructor(domElement) {\n        super();\n        if (domElement instanceof HTMLElement) {\n            this.domElement = domElement;\n        }\n        else {\n            this.domElement = DomNode.createElement(domElement);\n        }\n    }\n    style(style) {\n        for (const [key, value] of Object.entries(style)) {\n            if (value === undefined) {\n                this.domElement.style[key] = null;\n            }\n            else if (typeof value === \"number\" && DomNode.NUMBER_STYLE_KEY.includes(key) !== true) {\n                this.domElement.style[key] = `${value}px`;\n            }\n            else {\n                this.domElement.style[key] = value;\n            }\n        }\n        return this;\n    }\n    get rect() {\n        return this.domElement.getBoundingClientRect();\n    }\n    get innerScrollPosition() {\n        let left = 0;\n        let top = 0;\n        if (this.domElement !== document.body) {\n            let parent = this.domElement.parentNode;\n            while (parent !== document.body && parent !== null) {\n                if (parent instanceof HTMLElement) {\n                    left += parent.scrollLeft;\n                    top += parent.scrollTop;\n                }\n                parent = parent.parentNode;\n            }\n        }\n        return { left, top };\n    }\n    onDom(eventName, eventHandler) {\n        if (this.domEventMap[eventName] === undefined) {\n            this.domEventMap[eventName] = [];\n        }\n        const domEventHandler = (event) => eventHandler(event, this);\n        this.domEventMap[eventName].push({ eventHandler, domEventHandler });\n        this.domElement.addEventListener(eventName, domEventHandler);\n    }\n    onWindow(eventName, eventHandler) {\n        if (this.windowEventMap[eventName] === undefined) {\n            this.windowEventMap[eventName] = [];\n        }\n        const domEventHandler = (event) => eventHandler(event, this);\n        this.windowEventMap[eventName].push({ eventHandler, domEventHandler });\n        window.addEventListener(eventName, domEventHandler);\n    }\n    offDom(eventName, eventHandler) {\n        const domEvents = this.domEventMap[eventName];\n        if (domEvents !== undefined) {\n            const domEvent = domEvents.find((de) => de.eventHandler === eventHandler);\n            if (domEvent !== undefined) {\n                this.domElement.removeEventListener(eventName, domEvent.domEventHandler);\n                _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pull(domEvents, domEvent);\n                if (domEvents.length === 0) {\n                    delete this.domEventMap[eventName];\n                }\n            }\n        }\n    }\n    fireDomEvent(eventName) {\n        this.domElement.dispatchEvent(new Event(eventName));\n    }\n    appendText(text) {\n        if (this.domElement.tagName === \"TEXTAREA\") {\n            this.domElement.append(text);\n        }\n        else {\n            const fragment = new DocumentFragment();\n            const strs = text.split(\"\\n\");\n            for (const [index, str] of strs.entries()) {\n                if (index > 0) {\n                    fragment.append(document.createElement(\"br\"));\n                }\n                fragment.append(str);\n            }\n            this.domElement.append(fragment);\n        }\n        return this;\n    }\n    set text(text) {\n        this.empty().appendText(text);\n    }\n    append(...nodes) {\n        for (const node of nodes) {\n            if (typeof node === \"string\") {\n                this.appendText(node);\n            }\n            else if (node !== undefined) {\n                node.appendTo(this);\n            }\n        }\n        return this;\n    }\n    checkVisible() {\n        if (this.parent !== undefined) {\n            if (this.parent.domElement === document.body) {\n                return true;\n            }\n            else {\n                return this.parent.checkVisible();\n            }\n        }\n        return false;\n    }\n    fireVisible() {\n        this.fireEvent(\"visible\");\n        for (const child of this.children) {\n            child.fireVisible();\n        }\n    }\n    appendTo(node, index) {\n        if (index !== undefined && index < node.children.length) {\n            node.domElement.insertBefore(this.domElement, node.children[index].domElement);\n        }\n        else {\n            node.domElement.append(this.domElement);\n        }\n        const that = super.appendTo(node, index);\n        if (this.checkVisible() === true) {\n            this.fireVisible();\n        }\n        return that;\n    }\n    empty() {\n        super.empty();\n        while (this.domElement.firstChild) {\n            this.domElement.removeChild(this.domElement.firstChild);\n        }\n        return this;\n    }\n    addClass(className) { this.domElement.classList.add(className); }\n    deleteClass(className) { this.domElement.classList.remove(className); }\n    hasClass(className) { return this.domElement.classList.contains(className); }\n    toggleClass(className) { this.domElement.classList.toggle(className); }\n    clone() { return new DomNode(this.domElement.cloneNode(true)); }\n    delete() {\n        this.domElement.remove();\n        this.domEventMap = undefined;\n        for (const [eventName, domEvents] of Object.entries(this.windowEventMap)) {\n            for (const domEvent of domEvents) {\n                window.removeEventListener(eventName, domEvent.domEventHandler);\n            }\n        }\n        this.windowEventMap = undefined;\n        super.delete();\n    }\n    animate({ keyframes, duration = 0.5, timingFunction = \"ease\", delay = 0, iterationCount = 1, direction = \"normal\", onEnd = () => { }, }) {\n        const keyframesName = \"__KEYFRAMES_\" + DomNode.keyframesCount++;\n        let keyframesStr = \"\";\n        let newStyle = {};\n        for (const [key, style] of Object.entries(keyframes)) {\n            keyframesStr += `${key}{`;\n            for (let [name, value] of Object.entries(style)) {\n                if (typeof value === \"number\" && ![\"zIndex\", \"opacity\"].includes(name)) {\n                    value = value + \"px\";\n                }\n                keyframesStr += `${name.replace(/([A-Z])/g, \"-$1\").toLowerCase()}:${value};`;\n            }\n            keyframesStr += \"}\";\n            if (key === \"from\" || key === \"0%\") {\n                newStyle = { ...newStyle, ...style };\n            }\n            else if (key === \"to\" || key === \"100%\") {\n                newStyle = { ...newStyle, ...style };\n            }\n        }\n        const keyframesStyleEl = document.createElement(\"style\");\n        keyframesStyleEl.setAttribute(\"type\", \"text/css\");\n        keyframesStyleEl.appendChild(document.createTextNode(`@keyframes ${keyframesName}{${keyframesStr}}`));\n        document.head.appendChild(keyframesStyleEl);\n        newStyle = { ...newStyle, animation: `${keyframesName} ${duration}s ${timingFunction} ${delay}s ${iterationCount} ${direction}` };\n        this.style(newStyle);\n        if (iterationCount === 1) {\n            setTimeout(() => {\n                if (!this.deleted) {\n                    onEnd();\n                }\n                keyframesStyleEl.remove();\n            }, duration * 1000);\n        }\n    }\n}\n//# sourceMappingURL=DomNode.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/dom/DomNode.js?");

/***/ }),

/***/ "../common-dapp-module/lib/dom/ResponsiveImage.js":
/*!********************************************************!*\
  !*** ../common-dapp-module/lib/dom/ResponsiveImage.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ResponsiveImage)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../common-dapp-module/lib/dom/DomNode.js\");\n\nclass ResponsiveImage extends _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    static SUPPORTED_FORMATS = [\".png\", \".jpg\", \".jpeg\"];\n    constructor(tag, src) {\n        super(tag);\n        this.src = src;\n    }\n    set src(src) {\n        this.domElement.src = src;\n        for (const format of ResponsiveImage.SUPPORTED_FORMATS) {\n            const index = src.lastIndexOf(format);\n            if (index !== -1) {\n                const path = src.substring(0, index);\n                this.domElement.srcset = `${path}@2x${format} 2x, ${path}@3x${format} 3x`;\n                break;\n            }\n        }\n    }\n}\n//# sourceMappingURL=ResponsiveImage.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/dom/ResponsiveImage.js?");

/***/ }),

/***/ "../common-dapp-module/lib/dom/el.js":
/*!*******************************************!*\
  !*** ../common-dapp-module/lib/dom/el.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _DomNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomNode.js */ \"../common-dapp-module/lib/dom/DomNode.js\");\n\nconst el = (tag, ...children) => {\n    const domNode = new _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(tag));\n    for (const child of children) {\n        if (child !== undefined) {\n            if (typeof child === \"string\") {\n                domNode.appendText(child);\n            }\n            else if (child instanceof _DomNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n                domNode.append(child);\n            }\n            else {\n                for (const [name, value] of Object.entries(child)) {\n                    if (typeof value === \"function\") {\n                        domNode.onDom(name, value);\n                    }\n                    else if (name === \"style\" && typeof value === \"object\") {\n                        domNode.style(value);\n                    }\n                    else if (value === undefined) {\n                        domNode.domElement.removeAttribute(name);\n                    }\n                    else {\n                        domNode.domElement.setAttribute(name, String(value));\n                    }\n                }\n            }\n        }\n    }\n    return domNode;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (el);\n//# sourceMappingURL=el.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/dom/el.js?");

/***/ }),

/***/ "../common-dapp-module/lib/event/EventContainer.js":
/*!*********************************************************!*\
  !*** ../common-dapp-module/lib/event/EventContainer.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ EventContainer)\n/* harmony export */ });\n/* harmony import */ var _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/ArrayUtil.js */ \"../common-dapp-module/lib/util/ArrayUtil.js\");\n\nclass EventContainer {\n    static NEXT_ID = 0;\n    id = EventContainer.NEXT_ID++;\n    eventMap = {};\n    delegateEvents = [];\n    deleted = false;\n    addEventHandler(eventName, eventHandler) {\n        if (this.eventMap[eventName] === undefined) {\n            this.eventMap[eventName] = [];\n        }\n        this.eventMap[eventName].push(eventHandler);\n    }\n    removeDelegateEvents(delegateEvents) {\n        for (const [eventName, events] of Object.entries(delegateEvents.events)) {\n            for (const event of events) {\n                delegateEvents.delegate.off(eventName, event);\n            }\n        }\n        _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pull(this.delegateEvents, delegateEvents);\n    }\n    on(eventName, eventHandler) {\n        this.addEventHandler(eventName, eventHandler);\n    }\n    once(eventName, eventHandler) {\n        const onceEventHandler = (...params) => {\n            this.off(eventName, onceEventHandler);\n            eventHandler(...params);\n        };\n        this.addEventHandler(eventName, onceEventHandler);\n    }\n    off(eventName, eventHandler) {\n        if (this.eventMap?.[eventName] !== undefined) {\n            _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].pull(this.eventMap[eventName], eventHandler);\n            if (this.eventMap[eventName].length === 0) {\n                delete this.eventMap[eventName];\n            }\n        }\n    }\n    async fireEvent(eventName, ...params) {\n        const results = [];\n        const promises = [];\n        if (this.eventMap[eventName] !== undefined) {\n            for (const eventHandler of [...this.eventMap[eventName]]) {\n                const result = eventHandler(...params);\n                if (result instanceof Promise) {\n                    promises.push(result);\n                }\n                else {\n                    results.push(result);\n                }\n            }\n        }\n        return results.concat(await Promise.all(promises));\n    }\n    onDelegate(delegate, eventName, eventHandler) {\n        let delegateEvents = this.delegateEvents.find((de) => de.delegate === delegate);\n        if (delegateEvents === undefined) {\n            delegateEvents = { delegate, events: {} };\n            this.delegateEvents.push(delegateEvents);\n        }\n        if (delegateEvents.events[eventName] === undefined) {\n            delegateEvents.events[eventName] = [];\n        }\n        delegateEvents.events[eventName].push(eventHandler);\n        delegate.on(eventName, eventHandler);\n    }\n    offDelegate(delegate) {\n        const delegateEvents = this.delegateEvents.find((de) => de.delegate === delegate);\n        if (delegateEvents !== undefined) {\n            this.removeDelegateEvents(delegateEvents);\n        }\n    }\n    offAll() {\n        this.eventMap = {};\n        for (const delegateEvents of this.delegateEvents) {\n            this.removeDelegateEvents(delegateEvents);\n        }\n        this.delegateEvents = [];\n    }\n    delete() {\n        for (const delegateEvents of this.delegateEvents) {\n            this.removeDelegateEvents(delegateEvents);\n        }\n        this.delegateEvents = undefined;\n        this.fireEvent(\"delete\");\n        this.eventMap = undefined;\n        this.deleted = true;\n    }\n}\n//# sourceMappingURL=EventContainer.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/event/EventContainer.js?");

/***/ }),

/***/ "../common-dapp-module/lib/index.js":
/*!******************************************!*\
  !*** ../common-dapp-module/lib/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BodyNode: () => (/* reexport safe */ _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   DomNode: () => (/* reexport safe */ _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   ResponsiveImage: () => (/* reexport safe */ _dom_ResponsiveImage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _view_Router_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   TopBar: () => (/* reexport safe */ _component_TopBar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   View: () => (/* reexport safe */ _view_View_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n/* harmony export */   el: () => (/* reexport safe */ _dom_el_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _component_TopBar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component/TopBar.js */ \"../common-dapp-module/lib/component/TopBar.js\");\n/* harmony import */ var _dom_BodyNode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/BodyNode.js */ \"../common-dapp-module/lib/dom/BodyNode.js\");\n/* harmony import */ var _dom_DomNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom/DomNode.js */ \"../common-dapp-module/lib/dom/DomNode.js\");\n/* harmony import */ var _dom_ResponsiveImage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom/ResponsiveImage.js */ \"../common-dapp-module/lib/dom/ResponsiveImage.js\");\n/* harmony import */ var _dom_el_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dom/el.js */ \"../common-dapp-module/lib/dom/el.js\");\n/* harmony import */ var _view_Router_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/Router.js */ \"../common-dapp-module/lib/view/Router.js\");\n/* harmony import */ var _view_View_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/View.js */ \"../common-dapp-module/lib/view/View.js\");\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/index.js?");

/***/ }),

/***/ "../common-dapp-module/lib/tree/TreeNode.js":
/*!**************************************************!*\
  !*** ../common-dapp-module/lib/tree/TreeNode.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TreeNode)\n/* harmony export */ });\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/EventContainer.js */ \"../common-dapp-module/lib/event/EventContainer.js\");\n/* harmony import */ var _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArrayUtil.js */ \"../common-dapp-module/lib/util/ArrayUtil.js\");\n\n\nclass TreeNode extends _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    parent;\n    children = [];\n    append(...nodes) {\n        for (const node of nodes) {\n            if (node !== undefined) {\n                node.appendTo(this);\n            }\n        }\n        return this;\n    }\n    appendTo(node, index) {\n        if (this.parent === node && index !== undefined && this.parent.children.indexOf(this) < index) {\n            index -= 1;\n        }\n        this.removeFromParent();\n        if (index !== undefined && index < node.children.length) {\n            node.children.splice(index, 0, this);\n        }\n        else {\n            node.children.push(this);\n        }\n        this.parent = node;\n        return this;\n    }\n    removeFromParent() {\n        if (this.parent !== undefined) {\n            _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pull(this.parent.children, this);\n            this.parent = undefined;\n        }\n    }\n    empty() {\n        while (this.children.length > 0) {\n            this.children[0].delete();\n        }\n        return this;\n    }\n    checkChild(target) {\n        const stack = [...this.children];\n        while (stack.length > 0) {\n            const current = stack.pop();\n            if (current === target)\n                return true;\n            stack.push(...current.children);\n        }\n        return false;\n    }\n    delete() {\n        super.delete();\n        this.removeFromParent();\n        this.empty();\n        this.children = undefined;\n    }\n}\n//# sourceMappingURL=TreeNode.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/tree/TreeNode.js?");

/***/ }),

/***/ "../common-dapp-module/lib/util/ArrayUtil.js":
/*!***************************************************!*\
  !*** ../common-dapp-module/lib/util/ArrayUtil.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ArrayUtil)\n/* harmony export */ });\nclass ArrayUtil {\n    static pull(array, ...removeList) {\n        const removeSet = new Set(removeList);\n        for (let i = array.length - 1; i >= 0; i--) {\n            if (removeSet.has(array[i])) {\n                array.splice(i, 1);\n            }\n        }\n    }\n    static insert(array, index, item) {\n        array.splice(index, 0, item);\n    }\n    static shuffle(array) {\n        let currentIndex = array.length;\n        while (currentIndex !== 0) {\n            const randomIndex = Math.floor(Math.random() * currentIndex);\n            currentIndex -= 1;\n            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];\n        }\n        return array;\n    }\n    static checkSame(array1, array2) {\n        if (array1.length !== array2.length) {\n            return false;\n        }\n        const array2Set = new Set(array2);\n        for (const el of array1) {\n            if (!array2Set.has(el)) {\n                return false;\n            }\n        }\n        return true;\n    }\n}\n//# sourceMappingURL=ArrayUtil.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/util/ArrayUtil.js?");

/***/ }),

/***/ "../common-dapp-module/lib/view/Router.js":
/*!************************************************!*\
  !*** ../common-dapp-module/lib/view/Router.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event/EventContainer.js */ \"../common-dapp-module/lib/event/EventContainer.js\");\n/* harmony import */ var _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/ArrayUtil.js */ \"../common-dapp-module/lib/util/ArrayUtil.js\");\n/* harmony import */ var _URIParser_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./URIParser.js */ \"../common-dapp-module/lib/view/URIParser.js\");\n\n\n\nconst normalizePathname = (pathname) => decodeURIComponent(pathname.endsWith(\"/\") ? pathname.slice(0, -1).substring(1) : pathname.substring(1));\nconst matchPattern = (uriParts, pattern, excludes, params) => pattern.some((pat) => _URIParser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].match(uriParts, pat.split(\"/\"), params)) && !excludes.some((exclude) => _URIParser_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].match(uriParts, exclude.split(\"/\")));\nclass Router extends _event_EventContainer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n    routes = [];\n    redirects = [];\n    openingViews = [];\n    constructor() {\n        super();\n        window.addEventListener(\"popstate\", (event) => {\n            if (event.state !== null) {\n                this.check(event.state);\n            }\n        });\n    }\n    check(preParams) {\n        const uri = normalizePathname(location.pathname);\n        const uriParts = uri.split(\"/\");\n        let viewCreated = false;\n        const toCloseViews = [];\n        for (const { patterns, excludes, to } of this.redirects) {\n            const params = preParams ? { ...preParams } : {};\n            if (matchPattern(uriParts, patterns, excludes, params)) {\n                let uri = to;\n                for (const [key, value] of Object.entries(params)) {\n                    uri = uri.replace(new RegExp(`\\{${key}\\}`, \"g\"), value ?? \"\");\n                }\n                this.goNoHistory(`/${uri}`);\n                return;\n            }\n        }\n        for (const { patterns, excludes, viewType } of this.routes) {\n            const params = preParams ? { ...preParams } : {};\n            const openingView = this.openingViews.find((ov) => ov instanceof viewType);\n            if (matchPattern(uriParts, patterns, excludes, params)) {\n                if (openingView === undefined) {\n                    this.openingViews.push(new viewType(params, uri));\n                    viewCreated = true;\n                }\n                else {\n                    openingView.changeParams(params, uri);\n                }\n            }\n            else if (openingView !== undefined) {\n                toCloseViews.push(openingView);\n                _util_ArrayUtil_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pull(this.openingViews, openingView);\n            }\n        }\n        for (const toCloseView of toCloseViews.reverse()) {\n            toCloseView.close();\n        }\n        if (viewCreated === true) {\n            this.fireEvent(\"go\");\n        }\n    }\n    route(patterns, viewType, excludes = []) {\n        if (typeof patterns === \"string\") {\n            patterns = [patterns];\n        }\n        this.routes.push({ patterns, excludes, viewType });\n        const uri = normalizePathname(location.pathname);\n        const uriParts = uri.split(\"/\");\n        const params = {};\n        if (matchPattern(uriParts, patterns, excludes, params)) {\n            this.openingViews.push(new viewType(params, uri));\n        }\n    }\n    redirect(patterns, to, excludes = []) {\n        if (typeof patterns === \"string\") {\n            patterns = [patterns];\n        }\n        this.redirects.push({ patterns, excludes, to });\n        const uri = normalizePathname(location.pathname);\n        const uriParts = uri.split(\"/\");\n        const params = {};\n        if (matchPattern(uriParts, patterns, excludes, params)) {\n            let uri = to;\n            for (const [key, value] of Object.entries(params)) {\n                uri = uri.replace(new RegExp(`\\{${key}\\}`, \"g\"), value ?? \"\");\n            }\n            this.goNoHistory(`/${uri}`);\n        }\n    }\n    go(uri, params) {\n        if (location.pathname !== uri) {\n            history.pushState(undefined, \"\", uri);\n            this.check(params);\n            window.scrollTo(0, 0);\n        }\n    }\n    goNoHistory(uri, params) {\n        if (location.pathname !== uri) {\n            history.replaceState(undefined, \"\", uri);\n            this.check(params);\n            window.scrollTo(0, 0);\n        }\n    }\n    waitAndGo(uri, params) {\n        setTimeout(() => this.go(uri, params));\n    }\n    refresh() {\n        for (const openingView of this.openingViews.reverse()) {\n            openingView.close();\n        }\n        this.openingViews = [];\n        const uri = normalizePathname(location.pathname);\n        const uriParts = uri.split(\"/\");\n        for (const { patterns, excludes, viewType } of this.routes) {\n            const params = {};\n            if (matchPattern(uriParts, patterns, excludes, params)) {\n                this.openingViews.push(new viewType(params, uri));\n            }\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Router());\n//# sourceMappingURL=Router.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/view/Router.js?");

/***/ }),

/***/ "../common-dapp-module/lib/view/URIParser.js":
/*!***************************************************!*\
  !*** ../common-dapp-module/lib/view/URIParser.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass URIParser {\n    paramRegex = /{(.+)}/;\n    match(uriParts, patternParts, params) {\n        for (let i = 0; i < patternParts.length; i++) {\n            const patternPart = patternParts[i];\n            const uriPart = uriParts[i];\n            if (!patternPart)\n                return false;\n            if (patternPart === \"**\")\n                return true;\n            const paramMatch = this.paramRegex.exec(patternPart);\n            if (uriPart && paramMatch) {\n                params && (params[paramMatch[1]] = uriPart);\n            }\n            else if (patternPart !== \"*\" && patternPart !== uriPart) {\n                return false;\n            }\n            if (i === uriParts.length - 1 && i < patternParts.length - 1 && patternParts[patternParts.length - 1] !== \"\") {\n                return false;\n            }\n        }\n        return true;\n    }\n    parse(uri, pattern, params) {\n        const uriParts = uri.split(\"/\");\n        const patternParts = pattern.split(\"/\");\n        return this.match(uriParts, patternParts, params);\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new URIParser());\n//# sourceMappingURL=URIParser.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/view/URIParser.js?");

/***/ }),

/***/ "../common-dapp-module/lib/view/View.js":
/*!**********************************************!*\
  !*** ../common-dapp-module/lib/view/View.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ View)\n/* harmony export */ });\nclass View {\n    closed = false;\n    changeParams(params, uri) { }\n    close() {\n        this.closed = true;\n    }\n}\n//# sourceMappingURL=View.js.map\n\n//# sourceURL=webpack:///../common-dapp-module/lib/view/View.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;