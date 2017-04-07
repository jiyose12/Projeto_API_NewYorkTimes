/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
      value: true
});
exports.getJSON = getJSON;
function getJSON(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
            return callback(xhr.responseText);
      };
      xhr.open('GET', url);
      xhr.send();
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(0);

var pesquisa = document.querySelector('#pesquisa');
var inicio_data = document.querySelector('#inicio_data');
var fim_data = document.querySelector('#fim_data');
var botaopesquisa = document.querySelector('#botaopesquisa');
var noticias_recentes = document.querySelector('#noticias_recentes .container .itens');
var consulta_noticias = document.querySelector('#consulta_noticias .container .itens');
loadGetInfo();

//Seção notícias recentes
function loadGetInfo() {
  var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8ff00e2c3ac145d093c95d8a403071fc&sort=newest';
  (0, _ajax.getJSON)(url, loadSearchInfo);
}
function loadSearchInfo(json) {
  var searchinfo = JSON.parse(json);
  console.log(searchinfo);
  //Inserindo no html
  var noticiasRecentes = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = searchinfo.response.docs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var field = _step.value;

      noticiasRecentes += '<li class="titulo">' + field.headline.main + '</li><li>' + field.snippet + '</li><li>' + field.web_url + '</li><li>' + field.pub_date + '</li>';

      noticias_recentes.innerHTML = noticiasRecentes;
    }
    //fim da inserção no html
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
//fim da Seção notícias recentes

//Seção Consulta notícias
function loadGetQueryEvent() {
  botaopesquisa.onclick = function () {
    loadGetQuery();
  };
}

function loadGetQuery() {

  var concat = '';
  if (pesquisa != '') {
    concat += '&q=' + pesquisa.value;
  }
  if (inicio_data != '') {
    concat += '&begin_date=' + inicio_data.value;
  }
  if (fim_data != '') {
    concat += '&end_date=' + fim_data.value;
  }
  console.log(concat);
  var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=8ff00e2c3ac145d093c95d8a403071fc' + concat;
  (0, _ajax.getJSON)(url, loadSearchQuery);
}

function loadSearchQuery(json) {
  var searchquery = JSON.parse(json);
  console.log(searchquery);

  //Inserindo no html
  var noticias_pesquisa = '';
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = searchquery.response.docs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var field = _step2.value;

      noticiaspesquisa += '<li class="titulo">' + field.headline.main + '</li><li>' + field.snippet + '</li><li>' + field.web_url + '</li><li>' + field.pub_date + '</li>';

      consulta_noticias.innerHTML = noticiasRecentes;
    }
    //fim da inserção no html
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
//fim da Consulta notícias

//&q=${pesquisa.value}&begin_date=${inicio_data.value}&end_date=${fim_data.value}

/***/ })
/******/ ]);