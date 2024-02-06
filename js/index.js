/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function() {

var body = document.body;
var header = document.querySelector('.header');
var burger = document.querySelector('.burger');
var burgerLine = document.querySelectorAll('.burger__line');
var navList = document.querySelector('.nav__list');
function manageStateBurger(value) {
  body.classList[value]('body_active');
  burger.classList[value]('burger_active');
  burgerLine.forEach(function (e) {
    return e.classList[value]('burger__line_active');
  });
  navList.classList[value]('nav__list_active');
}
header.addEventListener('click', function (e) {
  var target = e.target;
  if (target.classList.contains('burger') || target.classList.contains('burger__line')) {
    manageStateBurger('toggle');
  }
  if (target.tagName === 'LI' || target.tagName === 'A') {
    manageStateBurger('remove');
  }
});

/***/ }),
/* 2 */
/***/ (function() {

var serviceButtonsWrapper = document.querySelector('.service__control-buttons');
var serviceCards = document.querySelectorAll('.service__cards-figure');
var serviceButtons = document.querySelectorAll('.service__control-btn');
var serviceButtonsArray = Array.from(serviceButtons);
var activeElements;
var searchDisabledButton;
var oneBtnActiveCombo = {
  'gardeners': [0, 4],
  'lawn': [2],
  'planting': [1, 3, 5]
};
var twoBtnActiveCombo = {
  'gl': [1, 3, 5],
  'gp': [2],
  'lp': [0, 4]
};
function resetServiceCards() {
  serviceCards.forEach(function (e) {
    e.classList.remove('service__cards-figure_active');
  });
}
function resetDisabledButtons() {
  serviceButtons.forEach(function (e) {
    e.classList.remove('btn_disabled');
    e.removeAttribute('disabled');
  });
}
function checkOneBtnActiveCombination(valueName, loopVar) {
  return activeElements[0].dataset.value === valueName && !oneBtnActiveCombo[valueName].includes(loopVar);
}
function checkTwoBtnActiveCombination(firstValue, secondValue, valueName, loopVar) {
  return activeElements[0].dataset.value === firstValue && activeElements[1].dataset.value === secondValue && twoBtnActiveCombo[valueName].includes(loopVar);
}
function activeServiceCardsOneBtnActive() {
  serviceCards.forEach(function (e, i) {
    if (checkOneBtnActiveCombination('gardeners', i)) {
      e.classList.add('service__cards-figure_active');
    } else if (checkOneBtnActiveCombination('lawn', i)) {
      e.classList.add('service__cards-figure_active');
    } else if (checkOneBtnActiveCombination('planting', i)) {
      e.classList.add('service__cards-figure_active');
    }
  });
}
function activeServiceCardsTwoBtnActive() {
  serviceCards.forEach(function (e, i) {
    e.classList.remove('service__cards-figure_active');
    if (checkTwoBtnActiveCombination('gardeners', 'lawn', 'gl', i)) {
      e.classList.add('service__cards-figure_active');
    } else if (checkTwoBtnActiveCombination('gardeners', 'planting', 'gp', i)) {
      e.classList.add('service__cards-figure_active');
    } else if (checkTwoBtnActiveCombination('lawn', 'planting', 'lp', i)) {
      e.classList.add('service__cards-figure_active');
    }
  });
}
function addDisabledButton() {
  searchDisabledButton = serviceButtonsArray.find(function (e) {
    return !activeElements.includes(e);
  });
  searchDisabledButton.classList.add('btn_disabled');
  searchDisabledButton.setAttribute('disabled', true);
}
serviceButtonsWrapper.addEventListener('click', function (e) {
  var target = e.target;
  target.tagName === 'BUTTON' ? target.classList.toggle('btn_active') : '';
  activeElements = serviceButtonsArray.filter(function (e) {
    return e.classList.contains('btn_active');
  });
  if (activeElements.length === 0) {
    resetServiceCards();
  } else if (activeElements.length === 1) {
    resetDisabledButtons();
    activeServiceCardsOneBtnActive();
  } else if (activeElements.length === 2) {
    addDisabledButton();
    activeServiceCardsTwoBtnActive();
  }
});

/***/ }),
/* 3 */
/***/ (function() {

var tariffButtonsWrapper = document.querySelector('.tariff__buttons');
var tariffButtons = document.querySelectorAll('.tariff__buttons-btn');
var tariffButtonsSvg = document.querySelectorAll('.tariff__buttons-svg');
var dataSetArr = ['btn-one', 'btn-two', 'btn-three'];
tariffButtonsWrapper.addEventListener('click', function (event) {
  var target = event.target;
  var closestDiv = target.closest('div');
  var closestSvg = Array.from(closestDiv.children).find(function (e) {
    return e.tagName === 'svg';
  });
  var activeButtons = Array.from(tariffButtons).filter(function (e) {
    return e !== closestDiv;
  });
  var activeIcons = Array.from(tariffButtonsSvg).filter(function (e) {
    return e !== closestSvg;
  });
  function showActiveBlock() {
    closestDiv.classList.toggle('tariff__buttons-btn_active');
    closestSvg.classList.toggle('tariff__buttons-svg_active');
    activeButtons.forEach(function (e) {
      return e.classList.remove('tariff__buttons-btn_active');
    });
    activeIcons.forEach(function (e) {
      return e.classList.remove('tariff__buttons-svg_active');
    });
  }
  if (dataSetArr.includes(target.dataset.value)) {
    showActiveBlock();
  }
});

/***/ }),
/* 4 */
/***/ (function() {

var city = {
  Canandaigua: {
    city: 'Canandaigua, NY',
    phone: '+1 585 393 0001',
    adress: '151 Charlotte Street'
  },
  NewYork: {
    city: 'New York City',
    phone: '+1 212 456 0002',
    adress: '9 East 91st Street'
  },
  Yonkers: {
    city: 'Yonkers, NY',
    phone: '+1 914 678 0003',
    adress: '511 Warburton Ave'
  },
  Sherill: {
    city: 'Sherrill, NY',
    phone: '+1 315 908 0004',
    adress: '14 WEST Noyes BLVD'
  }
};
var contactsDetailsWrapper = document.querySelector('.contacts__details-wrapper');
var contactsDetails = document.querySelector('.contacts__details');
var contactDetailsSummary = document.querySelector('.contacts__details-summary');
var contactDetailsSummaryText = contactDetailsSummary.querySelector('span');
var popUp = document.querySelector('.contacts__popUp');
var popUpValues = document.querySelectorAll('.contacts__popUp-value p');
var popUpButtonLink = document.querySelector('.contacts__popUp-link');
function choiceValue() {
  contactDetailsSummary.classList.add('contacts__details-summary_active');
  contactsDetails.open = false;
  popUp.classList.add('contacts__popUp_active');
}
contactsDetails.addEventListener('click', function (e) {
  var datasetValue = e.target.dataset.value;
  contactsDetailsWrapper.classList.add('contacts__details-wrapper_active');
  if (e.target.tagName === 'SUMMARY') {
    contactDetailsSummaryText.textContent = e.target.textContent;
  }
  if (Object.keys(city).includes(datasetValue)) {
    choiceValue();
    for (var i = 0; i < popUpValues.length; i++) {
      popUpValues[i].textContent = Object.values(city[datasetValue])[i];
      if (Object.values(city[datasetValue])[i].startsWith('+')) {
        popUpButtonLink.setAttribute('href', "tel:".concat(Object.values(city[datasetValue])[i]));
      }
    }
  }
});

/***/ }),
/* 5 */
/***/ (function() {

var getYear = new Date().getFullYear();
var footerDate = document.querySelector('.footer__date');
footerDate.textContent = getYear;

/***/ })
/******/ 	]);
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _service_blur_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _service_blur_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_service_blur_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _prices_dropdown_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _prices_dropdown_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prices_dropdown_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contacts_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _contacts_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_contacts_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _footer_setYear__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _footer_setYear__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_setYear__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;