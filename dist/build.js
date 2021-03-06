/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/init.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/changeStyle/controller.js":
/*!**************************************!*\
  !*** ./js/changeStyle/controller.js ***!
  \**************************************/
/*! exports provided: initBtnStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initBtnStyle\", function() { return initBtnStyle; });\n/* harmony import */ var _changeStyle_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../changeStyle/logic */ \"./js/changeStyle/logic.js\");\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./js/changeStyle/model.js\");\n\r\n\r\n\r\nconst initBtnStyle = () => {\r\n    _model__WEBPACK_IMPORTED_MODULE_1__[\"modelStyle\"].btnChangeWhiteTheme.addEventListener('click', function () {\r\n        Object(_changeStyle_logic__WEBPACK_IMPORTED_MODULE_0__[\"changeStyleWhiteTheme\"])();\r\n    });\r\n    _model__WEBPACK_IMPORTED_MODULE_1__[\"modelStyle\"].btnChangeBlackTheme.addEventListener('click', function () {\r\n        Object(_changeStyle_logic__WEBPACK_IMPORTED_MODULE_0__[\"changeStyleBlackTheme\"])();\r\n    })\r\n};\n\n//# sourceURL=webpack:///./js/changeStyle/controller.js?");

/***/ }),

/***/ "./js/changeStyle/logic.js":
/*!*********************************!*\
  !*** ./js/changeStyle/logic.js ***!
  \*********************************/
/*! exports provided: changeStyleWhiteTheme, changeStyleBlackTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeStyleWhiteTheme\", function() { return changeStyleWhiteTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeStyleBlackTheme\", function() { return changeStyleBlackTheme; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/changeStyle/model.js\");\n\r\n\r\n    const changeStyleWhiteTheme = () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].isWhite = true;\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].main[0].classList.add('main-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].header[0].classList.add('chat__header-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].footer[0].classList.add('footer-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].history[0].classList.add('main__message-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].btnSend[0].classList.add('form__btn-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].inputField[0].classList.add('form__input-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].idUserLenght.classList.add('users--white');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].modalBackground[0].classList.add('nickname-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].modalInput.classList.add('input-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].modalTitle[0].classList.add('title-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].modalBtnSend[0].classList.add('btn-white-theme');\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsg.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsg[i].classList.add('other-msg__msg-white-theme');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsgAfter[i].classList.remove('other-msg--black');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsgAfter[i].classList.add('other-msg--white');\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsg.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsg[i].classList.add('user-msg__msg-white-theme')\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsgAfter[i].classList.remove('user-msg--black');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsgAfter[i].classList.add('user-msg--white')\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].time.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].time[i].classList.add('time-white-theme')\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].nickname.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].nickname[i].classList.add('nickname-white-theme')\r\n        }\r\n\r\n    };\r\n\r\n    const changeStyleBlackTheme = () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].isWhite = false;\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].main[0].classList.remove('main-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].header[0].classList.remove('chat__header-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].footer[0].classList.remove('footer-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].history[0].classList.remove('main__message-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].btnSend[0].classList.remove('form__btn-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].inputField[0].classList.remove('form__input-white-theme');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].idUserLenght.classList.remove('users--white');\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsg.length; i++) {\r\n            console.log(_model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsg[i])\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsg[i].classList.remove('other-msg__msg-white-theme');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsgAfter[i].classList.add('other-msg--black');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].otherMsgAfter[i].classList.remove('other-msg--white');\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsg.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsg[i].classList.remove('user-msg__msg-white-theme');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsgAfter[i].classList.add('user-msg--black');\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].userMsgAfter[i].classList.remove('user-msg--white');\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].time.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].time[i].classList.remove('time-white-theme')\r\n        }\r\n\r\n        for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].nickname.length; i++) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"modelStyle\"].nickname[i].classList.remove('nickname-white-theme')\r\n        }\r\n\r\n    };\r\n\n\n//# sourceURL=webpack:///./js/changeStyle/logic.js?");

/***/ }),

/***/ "./js/changeStyle/model.js":
/*!*********************************!*\
  !*** ./js/changeStyle/model.js ***!
  \*********************************/
/*! exports provided: modelStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modelStyle\", function() { return modelStyle; });\nconst modelStyle = {\r\n    time: document.getElementsByClassName('time'),\r\n    main: document.getElementsByClassName('chat__chat'),\r\n    header: document.getElementsByClassName('chat__header'),\r\n    footer: document.getElementsByClassName('chat__footer'),\r\n    isWhite: false,\r\n    btnSend: document.getElementsByClassName('form__btn'),\r\n    userMsg: document.getElementsByClassName('user-msg__msg'),\r\n    history: document.getElementsByClassName('main__message'),\r\n    otherMsg: document.getElementsByClassName('other-msg__msg'),\r\n    otherMsgAfter: document.getElementsByClassName('other-msg'),\r\n    userMsgAfter: document.getElementsByClassName('user-msg'),\r\n    nickname: document.getElementsByClassName('nickname'),\r\n    inputField: document.getElementsByClassName('form__input'),\r\n    modalTitle: document.getElementsByClassName('nickname__title'),\r\n    modalInput: document.getElementById('nickNameInput'),\r\n    modalBtnSend: document.getElementsByClassName('nickname__btn'),\r\n    idUserLenght: document.getElementById('users'),\r\n    modalBackground: document.getElementsByClassName('modal__nickname'),\r\n    btnChangeWhiteTheme: document.getElementById('white-theme'),\r\n    btnChangeBlackTheme: document.getElementById('black-theme'),\r\n    backgroundUserOnline: document.getElementsByClassName('header__users'),\r\n};\r\n\n\n//# sourceURL=webpack:///./js/changeStyle/model.js?");

/***/ }),

/***/ "./js/controller.js":
/*!**************************!*\
  !*** ./js/controller.js ***!
  \**************************/
/*! exports provided: initController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initController\", function() { return initController; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/model.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/logic.js\");\n/* harmony import */ var _messages_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/logic */ \"./js/messages/logic.js\");\n/* harmony import */ var _usersOnline_logic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usersOnline/logic */ \"./js/usersOnline/logic.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst initController = () => {\r\n    Object(_messages_logic__WEBPACK_IMPORTED_MODULE_2__[\"getMessageFromDB\"])();\r\n    const person = new _model__WEBPACK_IMPORTED_MODULE_0__[\"Person\"](IP);\r\n\r\n    if (localStorage.getItem('isRegistered')) {\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"setNickName\"])(person)\r\n    }\r\n\r\n    Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"printIp\"])(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].changeHeaderIp);\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].setting.addEventListener('click',  () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].modal.classList.add('modal--active')\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].modal.addEventListener('click',  () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].modal.classList.remove('modal--active');\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].modal.childNodes[1].addEventListener('click',  (e) => {\r\n        e.stopPropagation()\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].changeNickNameBtn.addEventListener('click',  () => {\r\n        Object(_usersOnline_logic__WEBPACK_IMPORTED_MODULE_3__[\"setUsersLength\"])();\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"registration\"])(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].changeNickNameInput.value, person)\r\n    });\r\n\r\n    return person;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/controller.js?");

/***/ }),

/***/ "./js/init.js":
/*!********************!*\
  !*** ./js/init.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/main.less */ \"./style/main.less\");\n/* harmony import */ var _style_main_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_main_less__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller */ \"./js/controller.js\");\n/* harmony import */ var _messages_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages/controller */ \"./js/messages/controller.js\");\n/* harmony import */ var _usersOnline_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usersOnline/controller */ \"./js/usersOnline/controller.js\");\n/* harmony import */ var _scrollArrow_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollArrow/controller */ \"./js/scrollArrow/controller.js\");\n/* harmony import */ var _smiles_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./smiles/controller */ \"./js/smiles/controller.js\");\n/* harmony import */ var _changeStyle_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./changeStyle/controller */ \"./js/changeStyle/controller.js\");\ndocument.addEventListener('DOMContentLoaded', init);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction init() {\r\n    if (!localStorage.getItem('deviceID')) {\r\n        localStorage.setItem('deviceID', `${Math.floor(Math.random()*10000)}`)\r\n    }\r\n    const person = Object(_controller__WEBPACK_IMPORTED_MODULE_1__[\"initController\"])();\r\n    Object(_smiles_controller__WEBPACK_IMPORTED_MODULE_5__[\"initSmilesControll\"])();\r\n    Object(_scrollArrow_controller__WEBPACK_IMPORTED_MODULE_4__[\"initArrowControll\"])();\r\n    Object(_messages_controller__WEBPACK_IMPORTED_MODULE_2__[\"initMessagesController\"])(person);\r\n    Object(_usersOnline_controller__WEBPACK_IMPORTED_MODULE_3__[\"initUsersOnlineControll\"])(person);\r\n    Object(_changeStyle_controller__WEBPACK_IMPORTED_MODULE_6__[\"initBtnStyle\"])()\r\n}\n\n//# sourceURL=webpack:///./js/init.js?");

/***/ }),

/***/ "./js/logic.js":
/*!*********************!*\
  !*** ./js/logic.js ***!
  \*********************/
/*! exports provided: registration, setNickName, printIp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration\", function() { return registration; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setNickName\", function() { return setNickName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printIp\", function() { return printIp; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/model.js\");\n\r\n\r\nconst registration = (value, person) => {\r\n    localStorage.setItem('isRegistered', true);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.open('POST', '/registration', true);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.send(JSON.stringify({value: value, DID: localStorage.getItem('deviceID')}));\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.onreadystatechange = function () {\r\n        if (this.readyState === 4 && this.status === 200) {\r\n            if (JSON.parse(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.response)) {\r\n                person.setNickName(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].changeNickNameInput.value);\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].modal.classList.remove('modal--active')\r\n            } else {\r\n                alert('Уже зарегестрирован')\r\n            }\r\n        }\r\n    };\r\n};\r\n\r\nconst setNickName = (person) => {\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.open('POST', '/setNick', true);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.send(JSON.stringify({DID: localStorage.getItem('deviceID')}));\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.onreadystatechange = function () {\r\n        if (this.readyState === 4 && this.status === 200) {\r\n            person.setNickName(_model__WEBPACK_IMPORTED_MODULE_0__[\"model\"].xhr.response)\r\n        }\r\n    }\r\n};\r\n\r\nconst printIp = (value) => {\r\n    value.innerHTML = `Ваш IP: ${IP}`;\r\n};\r\n\n\n//# sourceURL=webpack:///./js/logic.js?");

/***/ }),

/***/ "./js/messages/controller.js":
/*!***********************************!*\
  !*** ./js/messages/controller.js ***!
  \***********************************/
/*! exports provided: initMessagesController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initMessagesController\", function() { return initMessagesController; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/messages/model.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/messages/logic.js\");\n/* harmony import */ var _smiles_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smiles/model */ \"./js/smiles/model.js\");\n\r\n\r\n\r\n\r\nconst initMessagesController = (person) => {\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].setWs(person);\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendBtn.addEventListener('click',  (e) => {\r\n        e.preventDefault();\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].setInputValue();\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"isBlockMsg\"])(_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getInputValue());\r\n\r\n        _smiles_model__WEBPACK_IMPORTED_MODULE_2__[\"smilesModel\"].allSmiles.classList.remove('smiles__all-smiles--active');\r\n\r\n        if (_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getInputValue().trim() !== '' && !_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].isBlocked) {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].ws.send(JSON.stringify({\r\n                nickName : person.getNickName() ? person.getNickName() : null,\r\n                IP : person.getIP(),\r\n                DID: localStorage.getItem('deviceID'),\r\n                msgValue: _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getInputValue(),\r\n            }));\r\n            Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"sendMessageToDB\"])(person.getNickName(), person.getIP(), _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getInputValue(), _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getTime());\r\n        }\r\n\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].clearInputValue()\r\n    });\r\n};\n\n//# sourceURL=webpack:///./js/messages/controller.js?");

/***/ }),

/***/ "./js/messages/logic.js":
/*!******************************!*\
  !*** ./js/messages/logic.js ***!
  \******************************/
/*! exports provided: isBlockMsg, printMessage, sendMessageToDB, getMessageFromDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isBlockMsg\", function() { return isBlockMsg; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printMessage\", function() { return printMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sendMessageToDB\", function() { return sendMessageToDB; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessageFromDB\", function() { return getMessageFromDB; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/messages/model.js\");\n/* harmony import */ var _changeStyle_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../changeStyle/model */ \"./js/changeStyle/model.js\");\n\r\n\r\n\r\nfunction cutNick(value) {\r\n    if (value.length > 15) {\r\n        return value.slice(0, 15) + '...';\r\n    } else return value;\r\n}\r\n\r\nconst isBlockMsg = (msg) => {\r\n    if (!(msg === '')) {\r\n        if (_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg.length === 2) {\r\n            if ((msg === _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg[0]) && (msg === _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg[1])) {\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].isBlocked = true;\r\n                alert('Чат заблокирован на 1 минуту по причине спама');\r\n                setTimeout(() => {\r\n                    _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].isBlocked = false;\r\n                    alert('Чат разблокирован');\r\n                }, 60000)\r\n            }\r\n\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg.shift();\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg.push(msg);\r\n        } else _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].sendedMsg.push(msg);\r\n    }\r\n};\r\n\r\nconst printMessage = (value, divType, person, date) => {\r\n    const msgType = divType === 'user-msg' ? 'user-msg__msg' : 'other-msg__msg';\r\n    const div = document.createElement('div');\r\n    div.setAttribute('class', divType);\r\n\r\n    const massage = document.createElement('div');\r\n\r\n    try {\r\n        let length = value.length * 2 / 1.75;\r\n        for (let i = 1; i < length; i++) {\r\n            if (i % 40 === 0 && value[i] === ' ') {\r\n                let beforeSubStr = value.substring(0, i);\r\n                let afterSubStr = value.substring(i, value.length);\r\n                value = `${beforeSubStr}<br/>${afterSubStr}`;\r\n            } else if (i % 40 === 0 && value[i] !== ' ') {\r\n                for (let j = i; j < value.length; j++) {\r\n                    if (value[j] === ' ') {\r\n                        let beforeSubStr = value.substring(0, j);\r\n                        let afterSubStr = value.substring(j, value.length);\r\n                        value = `${beforeSubStr}<br/>${afterSubStr}`;\r\n                        break\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    } catch (e) {\r\n        console.log(e)\r\n    }\r\n\r\n    massage.innerHTML = value;\r\n    massage.setAttribute('class', msgType);\r\n    if (_changeStyle_model__WEBPACK_IMPORTED_MODULE_1__[\"modelStyle\"].isWhite) {\r\n        if (msgType === 'user-msg__msg') {\r\n            massage.classList.add('user-msg__msg-white-theme');\r\n            div.classList.add('user-msg--white');\r\n        } else {\r\n            massage.classList.add('other-msg__msg-white-theme');\r\n            div.classList.add('other-msg--white');\r\n        }\r\n    } else {\r\n        if (msgType === 'user-msg__msg') {\r\n            div.classList.add('user-msg--black');\r\n        } else {\r\n            div.classList.add('other-msg--black');\r\n        }\r\n    }\r\n\r\n    if (msgType !== 'user-msg__msg') {\r\n        const nickName = document.createElement('p');\r\n        nickName.innerHTML = person.nickName ? `${cutNick(person.nickName)} (${person.IP})` : person.IP;\r\n        nickName.setAttribute('class', 'nickname');\r\n        div.appendChild(nickName);\r\n    }\r\n\r\n    const time = document.createElement('p');\r\n    time.innerHTML = date ? date : _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].getTime();\r\n    time.setAttribute('class', 'time');\r\n    if (_changeStyle_model__WEBPACK_IMPORTED_MODULE_1__[\"modelStyle\"].isWhite) {\r\n        time.classList.add('time-white-theme');\r\n    }\r\n\r\n    const data = document.createElement('div');\r\n    data.setAttribute('class', 'data');\r\n\r\n    div.appendChild(massage);\r\n    div.appendChild(time);\r\n\r\n    const after = document.createElement(':after');\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].messages.appendChild(div);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].messages.scrollTo(0, _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].messages.scrollHeight);\r\n};\r\n\r\nconst sendMessageToDB = (nickName, IP, text, date) => {\r\n    let promise = new Promise(((resolve, reject) => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.open('PUT', '/putMessage', true);\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.send(JSON.stringify({\r\n            nickName: nickName,\r\n            IP: IP,\r\n            text: text,\r\n            date: date,\r\n            deviceId: localStorage.getItem('deviceID')\r\n        }));\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.onreadystatechange = function () {\r\n            if (this.readyState === 4 && this.status === 200) {\r\n                //console.log(messagesModel.xhr.response)\r\n                resolve(_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.response)\r\n                reject('Error')\r\n            }\r\n        };\r\n    }))\r\n    promise.then((data) => {\r\n        console.log(data)\r\n    })\r\n};\r\n\r\nconst getMessageFromDB = () => {\r\n    let promise = new Promise(((resolve, reject) => {\r\n        return new Promise((resolve, reject) => {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.open('GET', '/getMessages', true);\r\n            resolve()\r\n            reject(()=>{\r\n                console.log('Err')\r\n            })\r\n        })\r\n            .then(() => {\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.send();\r\n                console.log(\"WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\")\r\n                resolve();\r\n            })\r\n            .then(() => {\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.onreadystatechange = function () {\r\n                    if (this.readyState === 4 && this.status === 200) {\r\n                        console.log(JSON.parse(_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.response));\r\n                        const messages = JSON.parse(_model__WEBPACK_IMPORTED_MODULE_0__[\"messagesModel\"].xhr.response).messages;\r\n                        messages.forEach(function (item) {\r\n                            if (item.deviceId === localStorage.getItem('deviceID')) {\r\n                                printMessage(item.text, 'user-msg', item, item.date)\r\n                            } else {\r\n                                printMessage(item.text, 'other-msg', item, item.date)\r\n                            }\r\n                        })\r\n                    }\r\n                };\r\n            })\r\n\r\n    }))\r\n    promise.then(() => {\r\n        console.log('Download messages Done!')\r\n    })\r\n};\r\n\n\n//# sourceURL=webpack:///./js/messages/logic.js?");

/***/ }),

/***/ "./js/messages/model.js":
/*!******************************!*\
  !*** ./js/messages/model.js ***!
  \******************************/
/*! exports provided: messagesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"messagesModel\", function() { return messagesModel; });\n/* harmony import */ var _usersOnline_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../usersOnline/logic */ \"./js/usersOnline/logic.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/messages/logic.js\");\n\r\n\r\n\r\nconst messagesModel = {\r\n    xhr: new XMLHttpRequest(),\r\n    ws: new WebSocket('ws://chat-chat.eu-4.evennode.com/'),\r\n    //ws: new WebSocket('ws://localhost:4000/'),\r\n    sendBtn: document.getElementById('send'),\r\n    messages: document.getElementById('messages'),\r\n    isBlocked: false,\r\n    sendedMsg: [],\r\n    inputValue: null,\r\n    setWs(person) {\r\n        this.ws = new WebSocket('ws://chat-chat.eu-4.evennode.com/');\r\n        //this.ws = new WebSocket('ws://localhost:4000/');\r\n        this.ws.onopen = () => {\r\n            Object(_usersOnline_logic__WEBPACK_IMPORTED_MODULE_0__[\"setUserOnline\"])(person)\r\n        };\r\n        this.ws.onclose = () => {\r\n            this.setWs(person)\r\n        };\r\n        this.ws.onmessage = (response) => {\r\n            let res = JSON.parse(response.data);\r\n            res.DID === localStorage.getItem('deviceID')\r\n                ? Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"printMessage\"])(res.msgValue, 'user-msg', person)\r\n                : Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"printMessage\"])(res.msgValue, 'other-msg', res);\r\n        };\r\n    },\r\n    setInputValue() {\r\n        this.inputValue = document.getElementById('input').value;\r\n    },\r\n    getInputValue() {\r\n        return this.inputValue;\r\n    },\r\n    clearInputValue() {\r\n        document.getElementById('input').value = ''\r\n    },\r\n    getTime() {\r\n        const date = new Date();\r\n        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();\r\n        const month = date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;\r\n        const year = date.getFullYear();\r\n        const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();\r\n        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();\r\n        const second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();\r\n        return `${day}.${month}.${year}; ${hours}:${minutes}:${second}`\r\n    },\r\n};\n\n//# sourceURL=webpack:///./js/messages/model.js?");

/***/ }),

/***/ "./js/model.js":
/*!*********************!*\
  !*** ./js/model.js ***!
  \*********************/
/*! exports provided: model, Person */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Person\", function() { return Person; });\nconst model = {\r\n    xhr: new XMLHttpRequest(),\r\n    modal: document.getElementById('modal'),\r\n    setting: document.getElementById('setting'),\r\n    history: document.getElementsByClassName('message__history'),\r\n    userMsg: document.getElementsByClassName('user-msg__msg'),\r\n    otherMsg: document.getElementsByClassName('other-msg__msg'),\r\n    changeHeaderIp: document.getElementById('ip-user'),\r\n    changeNickNameBtn: document.getElementById('nickNameBtn'),\r\n    changeNickNameInput: document.getElementById('nickNameInput'),\r\n};\r\n\r\nclass Person {\r\n    constructor(IP) {\r\n        this.IP = IP;\r\n        this.nickName = null;\r\n    }\r\n    setIP(value) {\r\n        this.IP = value;\r\n    };\r\n    getIP() {\r\n        return this.IP;\r\n    };\r\n    setNickName(value) {\r\n        this.nickName = value;\r\n    };\r\n    getNickName() {\r\n        return this.nickName\r\n    };\r\n}\n\n//# sourceURL=webpack:///./js/model.js?");

/***/ }),

/***/ "./js/scrollArrow/controller.js":
/*!**************************************!*\
  !*** ./js/scrollArrow/controller.js ***!
  \**************************************/
/*! exports provided: initArrowControll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initArrowControll\", function() { return initArrowControll; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/scrollArrow/model.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/scrollArrow/logic.js\");\n\r\n\r\n\r\nconst initArrowControll = () => {\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].chat.addEventListener('scroll', () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].arrow.hidden = ((_model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].chat.scrollHeight - _model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].chat.scrollTop) < 2000)\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].arrow.addEventListener('click', () => {\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"scrollDown\"])(_model__WEBPACK_IMPORTED_MODULE_0__[\"arrowModel\"].chat)\r\n    })\r\n};\n\n//# sourceURL=webpack:///./js/scrollArrow/controller.js?");

/***/ }),

/***/ "./js/scrollArrow/logic.js":
/*!*********************************!*\
  !*** ./js/scrollArrow/logic.js ***!
  \*********************************/
/*! exports provided: scrollDown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollDown\", function() { return scrollDown; });\nconst scrollDown = (elem) => {\r\n    elem.scrollTo(0, elem.scrollHeight);\r\n};\n\n//# sourceURL=webpack:///./js/scrollArrow/logic.js?");

/***/ }),

/***/ "./js/scrollArrow/model.js":
/*!*********************************!*\
  !*** ./js/scrollArrow/model.js ***!
  \*********************************/
/*! exports provided: arrowModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"arrowModel\", function() { return arrowModel; });\nconst arrowModel = {\r\n    arrow: document.getElementById('arrowBot'),\r\n    chat: document.getElementById('messages'),\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./js/scrollArrow/model.js?");

/***/ }),

/***/ "./js/smiles/controller.js":
/*!*********************************!*\
  !*** ./js/smiles/controller.js ***!
  \*********************************/
/*! exports provided: initSmilesControll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initSmilesControll\", function() { return initSmilesControll; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/smiles/model.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/smiles/logic.js\");\n\r\n\r\n\r\nconst initSmilesControll = () => {\r\n    Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"printSmile\"])(_model__WEBPACK_IMPORTED_MODULE_0__[\"smilesModel\"].smilesId, _model__WEBPACK_IMPORTED_MODULE_0__[\"smilesModel\"].smildesPrint, _model__WEBPACK_IMPORTED_MODULE_0__[\"smilesModel\"].input);\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"smilesModel\"].smiles.addEventListener('click', () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"smilesModel\"].allSmiles.classList.toggle('smiles__all-smiles--active')\r\n    })\r\n};\n\n//# sourceURL=webpack:///./js/smiles/controller.js?");

/***/ }),

/***/ "./js/smiles/logic.js":
/*!****************************!*\
  !*** ./js/smiles/logic.js ***!
  \****************************/
/*! exports provided: printSmile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printSmile\", function() { return printSmile; });\nconst printSmile = (smilesId, smilePrint, input) => {\r\n    for (let i = 0; i < smilesId.length; i++) {\r\n        document.getElementById(`${smilesId[i]}`).addEventListener('click',  () => {\r\n            input.value += smilePrint[i];\r\n        })\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./js/smiles/logic.js?");

/***/ }),

/***/ "./js/smiles/model.js":
/*!****************************!*\
  !*** ./js/smiles/model.js ***!
  \****************************/
/*! exports provided: smilesModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"smilesModel\", function() { return smilesModel; });\nconst smilesModel = {\r\n    input: document.getElementById('input'),\r\n    smiles: document.getElementById('smiles'),\r\n    allSmiles: document.getElementById('allSmiles'),\r\n    smilesId: ['smile', 'funTwo', 'fun', 'kiss', 'cool', 'lovely', 'funDevil', 'sadDevil', 'trem', 'clown', 'idit'],\r\n    smildesPrint: ['😀', '😂', '🤣', '😘', '😎', '😍', '😈', '👿', '😬', '🤡', '🤪'],\r\n};\n\n//# sourceURL=webpack:///./js/smiles/model.js?");

/***/ }),

/***/ "./js/usersOnline/controller.js":
/*!**************************************!*\
  !*** ./js/usersOnline/controller.js ***!
  \**************************************/
/*! exports provided: initUsersOnlineControll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initUsersOnlineControll\", function() { return initUsersOnlineControll; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/usersOnline/model.js\");\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ \"./js/usersOnline/logic.js\");\n\r\n\r\n\r\nconst initUsersOnlineControll  = (person) => {\r\n\r\n    window.onunload  = function () {\r\n       Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"setUserOffline\"])(person);\r\n    };\r\n\r\n    setInterval(() => {\r\n        Object(_logic__WEBPACK_IMPORTED_MODULE_1__[\"setUsersLength\"])();\r\n    }, 10000);\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].users.addEventListener('click', function (e) {\r\n        e.stopPropagation();\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersLength.addEventListener('click',  (e) => {\r\n        e.stopPropagation();\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersLength.addEventListener('mouseover',  (e) => {\r\n        e.stopPropagation();\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersTable.classList.add('users__modal--active')\r\n    });\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].chat.addEventListener('click',  () => {\r\n        _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersTable.classList.remove('users__modal--active')\r\n    });\r\n\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/usersOnline/controller.js?");

/***/ }),

/***/ "./js/usersOnline/logic.js":
/*!*********************************!*\
  !*** ./js/usersOnline/logic.js ***!
  \*********************************/
/*! exports provided: setUsersLength, setUserOnline, setUserOffline, printOnlineUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUsersLength\", function() { return setUsersLength; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUserOnline\", function() { return setUserOnline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUserOffline\", function() { return setUserOffline; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printOnlineUsers\", function() { return printOnlineUsers; });\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ \"./js/usersOnline/model.js\");\n\r\n\r\nconst setUsersLength = () => {\r\n    let promise = new Promise((resolve, reject) => {\r\n        return new Promise(() => {\r\n            _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.open('GET', '/getUsersLength', true);\r\n            resolve();\r\n            reject(() => {\r\n                console.log('Err')\r\n            })\r\n        })\r\n            .then(() => {\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.send();\r\n                resolve();\r\n                reject(() => {\r\n                    console.log('Err')\r\n                })\r\n            })\r\n            .then(() => {\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.onreadystatechange = function () {\r\n                    if (this.readyState === 4 && this.status === 200) {\r\n                        document.getElementById('usersLength').innerHTML = JSON.parse(_model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.response).res;\r\n                        printOnlineUsers(JSON.parse(_model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.response).usersList)\r\n                    }\r\n                };\r\n            })\r\n    })\r\n\r\n\r\n};\r\n\r\nconst setUserOnline = (person) => {\r\n    let promise = new Promise(((resolve, reject) => {\r\n        return new Promise(((resolve1, reject1) => {\r\n            if (!sessionStorage.getItem(\"session\")) {\r\n                console.log(localStorage.getItem('deviceID'));\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.open('PUT', '/userOn', true);\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n                _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.send(JSON.stringify({\r\n                    nickName: person.getNickName() ? person.getNickName() : null,\r\n                    IP: person.getIP(),\r\n                    DID: localStorage.getItem('deviceID'),\r\n                }));\r\n                sessionStorage.setItem('session', 'true')\r\n            }\r\n        }))\r\n            .then(()=>{\r\n                setUsersLength()\r\n            })\r\n        //setTimeout(() => , 1000);\r\n    }))\r\n\r\n};\r\n\r\nconst setUserOffline = (person) => {\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.open('PUT', '/userOff', true);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].xhr.send(JSON.stringify({\r\n        nickName: person.getNickName() ? person.getNickName() : null,\r\n        IP: person.getIP(),\r\n        DID: localStorage.getItem('deviceID'),\r\n    }));\r\n};\r\n\r\nconst printOnlineUsers = (...args) => {\r\n    let users = [...args];\r\n    users = users[0];\r\n    console.log(users);\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].setUsersUl();\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersUl.parentNode.removeChild(_model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersUl);\r\n\r\n    const ul = document.createElement('ul');\r\n    ul.setAttribute('class', 'modal__ul ul');\r\n    ul.setAttribute('id', 'table');\r\n    for (let i = 0; i < users.length; i++) {\r\n        const li = document.createElement('li');\r\n        li.setAttribute('class', 'ul__li');\r\n        li.innerHTML = users[i].nickName ? users[i].nickName : users[i].IP;\r\n\r\n        if (users[i].DID === localStorage.getItem('deviceID')) {\r\n            li.style.color = '#00a8ec'\r\n        }\r\n\r\n        ul.appendChild(li);\r\n    }\r\n\r\n    _model__WEBPACK_IMPORTED_MODULE_0__[\"usersOnlineModel\"].usersTable.appendChild(ul);\r\n};\n\n//# sourceURL=webpack:///./js/usersOnline/logic.js?");

/***/ }),

/***/ "./js/usersOnline/model.js":
/*!*********************************!*\
  !*** ./js/usersOnline/model.js ***!
  \*********************************/
/*! exports provided: usersOnlineModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersOnlineModel\", function() { return usersOnlineModel; });\nconst usersOnlineModel = {\r\n    xhr: new XMLHttpRequest(),\r\n    chat: document.getElementById('chat'),\r\n    usersUl: document.getElementById('table'),\r\n    usersLi: document.getElementsByClassName('ul__li'),\r\n    usersTable: document.getElementById('online'),\r\n    usersLength: document.getElementById('usersLength'),\r\n    users: document.getElementById('users'),\r\n    setUsersUl() {\r\n        this.usersUl = document.getElementById('table')\r\n    },\r\n};\n\n//# sourceURL=webpack:///./js/usersOnline/model.js?");

/***/ }),

/***/ "./style/main.less":
/*!*************************!*\
  !*** ./style/main.less ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n\n//# sourceURL=webpack:///./style/main.less?");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map