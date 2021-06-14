module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\nvar _jsxFileName = \"/Users/junpilbyeon/Desktop/inflearn-nodebird/node-bird/front/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//여기서 페이지들의 공통되는 것들을 처리할 수 있다.\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 4\n    }\n  }, __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }), __jsx(\"title\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, \"NodeBird\")), __jsx(Component, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }));\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQ25DLFNBQ0MsbUVBT0MsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBTSxXQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsRUFFQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZELENBUEQsRUFXQyxNQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhELENBREQ7QUFlQSxDQWhCRDs7QUFrQkFELFFBQVEsQ0FBQ0UsU0FBVCxHQUFxQjtBQUNwQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURiLENBQXJCO0FBSWVDLDRIQUFPLENBQUNDLFNBQVIsQ0FBa0JQLFFBQWxCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/sl6zquLDshJwg7Y6Y7J207KeA65Ok7J2YIOqzte2GteuQmOuKlCDqsoPrk6TsnYQg7LKY66as7ZWgIOyImCDsnojri6QuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdHsvKiBcblx0XHRcdHJlZHV47JeQ7ISc64qUIO2OmOydtOyngOulvCA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT4g66W87I2o7IScIOqwkOyLuOyjvOuKlOuNsCBcblx0XHRcdG5leHTsl5DshJzripQg7JWI7I2o7KSY64+EIOuQnOuLpC5cblx0XHRcdG5leHQtcmVkdXgtd3JhcHBlcuqwgCDslYzslYTshJwg6rCQ7Iu47KSA64ukLlxuXHRcdFx06re4656Y7IScIOyasOumrOqwgCDsjajso7zrqbQg7KSR67O17J20IOuQmOyWtOuyhOumvC5cblx0XHQqL31cblx0XHRcdDxIZWFkPlxuXHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHQ8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuXHRcdFx0PC9IZWFkPlxuXHRcdFx0PENvbXBvbmVudCAvPlxuXHRcdDwvPlxuXHQpO1xufTtcblxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xuXHRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n //요게(HYDRATE) 액션이라고 한다\n\n\n\n //state 부분. 중앙 저장소\n\n/*\n\tconst initialState = {\n\t\tuser: {},\n\t\tpost: {},\n\t};\n*/\n// action 부분. 액션은 객체다.\n\n/*\n  const changeNickname = {\n    type: 'CHANGE_NICKNAME',\n    data: 'kimhozzi',\n  };\n*/\n//action creator\n\n/*\n  const changeNickname = (data) => {\n    return {\n      type: 'CHANGE_NICKNAME',\n      data: data,\n    }\n  }\n  changeNickname('kimozzi');\n  store.dispatch(changeNickname('kimhozzi'));\n\n*/\n// state를 바꾸고 싶을때 action을 만들고 dispatch로 변경.\n// 리듀서는 이전상태과 액션을 통해서 다음상태를 만들어내는 함수\n// (이전상태, 액션) => 다음상태\n\n/*\nHYDRATE는 next-redux-wrapper를 쓸 때 필요한 액션이다\n서버사이드렌더링을 위해서 쓴다.\n서버쪽에서 실행된 리덕스의 결과물이 프론트에서는 HYDRATE라는 액션 이름 아래에 데이터로 전달된다.\n*/\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  // combineReducers는 여러 리듀서를 사용할 때 리듀서들을 하나로 묶어주는 메소드이다.\n  index: (state = {}, action) => {\n    //hydrate를 위해서 인덱스 리듀서 추가.\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztDQUE4Qzs7QUFDOUM7QUFFQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbkM7QUFDQUMsT0FBSyxFQUFFLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQWFDLE1BQWIsS0FBd0I7QUFDOUI7QUFDQSxZQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDQyxXQUFLQywwREFBTDtBQUNDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLCtDQUFZRCxLQUFaLEdBQXNCQyxNQUFNLENBQUNLLE9BQTdCOztBQUNEO0FBQ0MsZUFBT04sS0FBUDtBQUxGO0FBT0EsR0FYa0M7QUFZbkNPLHFEQVptQztBQWFuQ0MscURBQUlBO0FBYitCLENBQUQsQ0FBbkM7QUFnQmVYLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJzsgLy/smpTqsowoSFlEUkFURSkg7JWh7IWY7J2065286rOgIO2VnOuLpFxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgdXNlciBmcm9tICcuL3VzZXInO1xuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0Jztcbi8vc3RhdGUg67aA67aELiDspJHslZkg7KCA7J6l7IaMXG4vKlxuXHRjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdFx0dXNlcjoge30sXG5cdFx0cG9zdDoge30sXG5cdH07XG4qL1xuLy8gYWN0aW9uIOu2gOu2hC4g7JWh7IWY7J2AIOqwneyytOuLpC5cbi8qXG4gIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xuICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxuICAgIGRhdGE6ICdraW1ob3p6aScsXG4gIH07XG4qL1xuXG4vL2FjdGlvbiBjcmVhdG9yXG4vKlxuICBjb25zdCBjaGFuZ2VOaWNrbmFtZSA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6ICdDSEFOR0VfTklDS05BTUUnLFxuICAgICAgZGF0YTogZGF0YSxcbiAgICB9XG4gIH1cbiAgY2hhbmdlTmlja25hbWUoJ2tpbW96emknKTtcbiAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlTmlja25hbWUoJ2tpbWhvenppJykpO1xuXG4qL1xuLy8gc3RhdGXrpbwg67CU6r646rOgIOyLtuydhOuVjCBhY3Rpb27snYQg66eM65Ok6rOgIGRpc3BhdGNo66GcIOuzgOqyvS5cblxuLy8g66as65OA7ISc64qUIOydtOyghOyDge2DnOqzvCDslaHshZjsnYQg7Ya17ZW07IScIOuLpOydjOyDge2DnOulvCDrp4zrk6TslrTrgrTripQg7ZWo7IiYXG4vLyAo7J207KCE7IOB7YOcLCDslaHshZgpID0+IOuLpOydjOyDge2DnFxuXG4vKlxuSFlEUkFUReuKlCBuZXh0LXJlZHV4LXdyYXBwZXLrpbwg7JO4IOuVjCDtlYTsmpTtlZwg7JWh7IWY7J2064ukXG7shJzrsoTsgqzsnbTrk5zroIzrjZTrp4HsnYQg7JyE7ZW07IScIOyTtOuLpC5cbuyEnOuyhOyqveyXkOyEnCDsi6TtlonrkJwg66as642V7Iqk7J2YIOqysOqzvOusvOydtCDtlITroaDtirjsl5DshJzripQgSFlEUkFUReudvOuKlCDslaHshZgg7J2066aEIOyVhOuemOyXkCDrjbDsnbTthLDroZwg7KCE64us65Cc64ukLlxuKi9cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcblx0Ly8gY29tYmluZVJlZHVjZXJz64qUIOyXrOufrCDrpqzrk4DshJzrpbwg7IKs7Jqp7ZWgIOuVjCDrpqzrk4DshJzrk6TsnYQg7ZWY64KY66GcIOustuyWtOyjvOuKlCDrqZTshozrk5zsnbTri6QuXG5cdGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XG5cdFx0Ly9oeWRyYXRl66W8IOychO2VtOyEnCDsnbjrjbHsiqQg66as65OA7IScIOy2lOqwgC5cblx0XHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0XHRjYXNlIEhZRFJBVEU6XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcblx0XHRcdFx0cmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0fVxuXHR9LFxuXHR1c2VyLFxuXHRwb3N0LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  //sequelize에서 다른 정보들과 합쳐서 주기때문에 앞글자가 대문자다. (알아서 저래 됨)\n  mainPosts: [{\n    id: 1,\n    User: {\n      id: 1,\n      nickname: '스티븐호킹스'\n    },\n    content: '첫번째게시글 #김태그 #리덕스',\n    Images: [{\n      src: 'https://image.freepik.com/free-photo/arrangement-summer-still-life-elements_23-2148968970.jpg'\n    }, {\n      src: 'https://image.freepik.com/free-photo/assortment-summer-still-life-elements_23-2148968978.jpg'\n    }, {\n      src: 'https://image.flaticon.com/icons/png/512/891/891947.png'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'master de velo'\n      },\n      content: '우와 첫 축하'\n    }, {\n      User: {\n        nickname: 'bien conduit'\n      },\n      content: 'Felicitation!'\n    }]\n  }],\n  imagePaths: [],\n  postAdded: false\n};\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터',\n  User: {\n    id: 1,\n    nickname: '김호찌'\n  },\n  Images: [],\n  Comments: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQzNCO0FBQ0FDLFdBQVMsRUFBRSxDQUNWO0FBQ0NDLE1BQUUsRUFBRSxDQURMO0FBRUNDLFFBQUksRUFBRTtBQUNMRCxRQUFFLEVBQUUsQ0FEQztBQUVMRSxjQUFRLEVBQUU7QUFGTCxLQUZQO0FBTUNDLFdBQU8sRUFBRSxrQkFOVjtBQU9DQyxVQUFNLEVBQUUsQ0FDUDtBQUNDQyxTQUFHLEVBQUU7QUFETixLQURPLEVBSVA7QUFDQ0EsU0FBRyxFQUFFO0FBRE4sS0FKTyxFQU9QO0FBQUVBLFNBQUcsRUFBRTtBQUFQLEtBUE8sQ0FQVDtBQWdCQ0MsWUFBUSxFQUFFLENBQ1Q7QUFDQ0wsVUFBSSxFQUFFO0FBQ0xDLGdCQUFRLEVBQUU7QUFETCxPQURQO0FBSUNDLGFBQU8sRUFBRTtBQUpWLEtBRFMsRUFPVDtBQUNDRixVQUFJLEVBQUU7QUFDTEMsZ0JBQVEsRUFBRTtBQURMLE9BRFA7QUFJQ0MsYUFBTyxFQUFFO0FBSlYsS0FQUztBQWhCWCxHQURVLENBRmdCO0FBbUMzQkksWUFBVSxFQUFFLEVBbkNlO0FBb0MzQkMsV0FBUyxFQUFFO0FBcENnQixDQUFyQjtBQXVDUCxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDTyxNQUFNQyxPQUFPLEdBQUc7QUFDdEJDLE1BQUksRUFBRUY7QUFEZ0IsQ0FBaEI7QUFHUCxNQUFNRyxTQUFTLEdBQUc7QUFDakJaLElBQUUsRUFBRSxDQURhO0FBRWpCRyxTQUFPLEVBQUUsT0FGUTtBQUdqQkYsTUFBSSxFQUFFO0FBQ0xELE1BQUUsRUFBRSxDQURDO0FBRUxFLFlBQVEsRUFBRTtBQUZMLEdBSFc7QUFPakJFLFFBQU0sRUFBRSxFQVBTO0FBUWpCRSxVQUFRLEVBQUU7QUFSTyxDQUFsQjs7QUFXQSxNQUFNTyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHaEIsWUFBVCxFQUF1QmlCLE1BQXZCLEtBQWtDO0FBQ2pELFVBQVFBLE1BQU0sQ0FBQ0osSUFBZjtBQUNDLFNBQUtGLFFBQUw7QUFDQyw2Q0FDSUssS0FESjtBQUVDZixpQkFBUyxFQUFFLENBQUNhLFNBQUQsRUFBWSxHQUFHRSxLQUFLLENBQUNmLFNBQXJCLENBRlo7QUFHQ1MsaUJBQVMsRUFBRTtBQUhaOztBQUtEO0FBQ0MsYUFBT00sS0FBUDtBQVJGO0FBVUEsQ0FYRDs7QUFhZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcblx0Ly9zZXF1ZWxpemXsl5DshJwg64uk66W4IOygleuztOuTpOqzvCDtlanss5DshJwg7KO86riw65WM66y47JeQIOyVnuq4gOyekOqwgCDrjIDrrLjsnpDri6QuICjslYzslYTshJwg7KCA656YIOuQqClcblx0bWFpblBvc3RzOiBbXG5cdFx0e1xuXHRcdFx0aWQ6IDEsXG5cdFx0XHRVc2VyOiB7XG5cdFx0XHRcdGlkOiAxLFxuXHRcdFx0XHRuaWNrbmFtZTogJ+yKpO2LsOu4kO2YuO2CueyKpCcsXG5cdFx0XHR9LFxuXHRcdFx0Y29udGVudDogJ+yyq+uyiOynuOqyjOyLnOq4gCAj6rmA7YOc6re4ICPrpqzrjZXsiqQnLFxuXHRcdFx0SW1hZ2VzOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzcmM6ICdodHRwczovL2ltYWdlLmZyZWVwaWsuY29tL2ZyZWUtcGhvdG8vYXJyYW5nZW1lbnQtc3VtbWVyLXN0aWxsLWxpZmUtZWxlbWVudHNfMjMtMjE0ODk2ODk3MC5qcGcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3JjOiAnaHR0cHM6Ly9pbWFnZS5mcmVlcGlrLmNvbS9mcmVlLXBob3RvL2Fzc29ydG1lbnQtc3VtbWVyLXN0aWxsLWxpZmUtZWxlbWVudHNfMjMtMjE0ODk2ODk3OC5qcGcnLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7IHNyYzogJ2h0dHBzOi8vaW1hZ2UuZmxhdGljb24uY29tL2ljb25zL3BuZy81MTIvODkxLzg5MTk0Ny5wbmcnIH0sXG5cdFx0XHRdLFxuXHRcdFx0Q29tbWVudHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFVzZXI6IHtcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiAnbWFzdGVyIGRlIHZlbG8nLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0Y29udGVudDogJ+yasOyZgCDssqsg7LaV7ZWYJyxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdFVzZXI6IHtcblx0XHRcdFx0XHRcdG5pY2tuYW1lOiAnYmllbiBjb25kdWl0Jyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGNvbnRlbnQ6ICdGZWxpY2l0YXRpb24hJyxcblx0XHRcdFx0fSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XSxcblx0aW1hZ2VQYXRoczogW10sXG5cdHBvc3RBZGRlZDogZmFsc2UsXG59O1xuXG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcblx0dHlwZTogQUREX1BPU1QsXG59O1xuY29uc3QgZHVtbXlQb3N0ID0ge1xuXHRpZDogMixcblx0Y29udGVudDogJ+uNlOuvuOuNsOydtO2EsCcsXG5cdFVzZXI6IHtcblx0XHRpZDogMSxcblx0XHRuaWNrbmFtZTogJ+q5gO2YuOywjCcsXG5cdH0sXG5cdEltYWdlczogW10sXG5cdENvbW1lbnRzOiBbXSxcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSBBRERfUE9TVDpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRtYWluUG9zdHM6IFtkdW1teVBvc3QsIC4uLnN0YXRlLm1haW5Qb3N0c10sXG5cdFx0XHRcdHBvc3RBZGRlZDogdHJ1ZSxcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data: data\n  };\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDM0JDLFlBQVUsRUFBRSxLQURlO0FBRTNCQyxJQUFFLEVBQUUsSUFGdUI7QUFHM0JDLFlBQVUsRUFBRSxFQUhlO0FBSTNCQyxXQUFTLEVBQUU7QUFKZ0IsQ0FBckI7QUFPQSxNQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBVTtBQUNwQyxTQUFPO0FBQ05DLFFBQUksRUFBRSxRQURBO0FBRU5ELFFBQUksRUFBRUE7QUFGQSxHQUFQO0FBSUEsQ0FMTTtBQU9BLE1BQU1FLFlBQVksR0FBRyxNQUFNO0FBQ2pDLFNBQU87QUFDTkQsUUFBSSxFQUFFO0FBREEsR0FBUDtBQUdBLENBSk07O0FBTVAsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1YsWUFBVCxFQUF1QlcsTUFBdkIsS0FBa0M7QUFDakQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0MsU0FBSyxRQUFMO0FBQ0MsNkNBQ0lHLEtBREo7QUFFQ1Qsa0JBQVUsRUFBRSxJQUZiO0FBR0NDLFVBQUUsRUFBRVMsTUFBTSxDQUFDTDtBQUhaOztBQUtELFNBQUssU0FBTDtBQUNDLDZDQUNJSSxLQURKO0FBRUNULGtCQUFVLEVBQUUsS0FGYjtBQUdDQyxVQUFFLEVBQUU7QUFITDs7QUFLRDtBQUNDLGFBQU9RLEtBQVA7QUFkRjtBQWdCQSxDQWpCRDs7QUFtQmVELHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG5cdGlzTG9nZ2VkSW46IGZhbHNlLFxuXHRtZTogbnVsbCxcblx0c2lnblVwRGF0YToge30sXG5cdGxvZ2luRGF0YToge30sXG59O1xuXG5leHBvcnQgY29uc3QgbG9naW5BY3Rpb24gPSAoZGF0YSkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdMT0dfSU4nLFxuXHRcdGRhdGE6IGRhdGEsXG5cdH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdHR5cGU6ICdMT0dfT1VUJyxcblx0fTtcbn07XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuXHRzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG5cdFx0Y2FzZSAnTE9HX0lOJzpcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC4uLnN0YXRlLFxuXHRcdFx0XHRpc0xvZ2dlZEluOiB0cnVlLFxuXHRcdFx0XHRtZTogYWN0aW9uLmRhdGEsXG5cdFx0XHR9O1xuXHRcdGNhc2UgJ0xPR19PVVQnOlxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Li4uc3RhdGUsXG5cdFx0XHRcdGlzTG9nZ2VkSW46IGZhbHNlLFxuXHRcdFx0XHRtZTogbnVsbCxcblx0XHRcdH07XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiBzdGF0ZTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n// store를 설정하는 configure JS 파일입니다.\n// npm i next-redux-wrapper 로 다운받아줘야합니다.\n// npm i redux-devtools-extension <-- ㅇㅣ것이 있어야 개발자 브라우저 도구랑 연결이 됩니다.\n\n/* 컨피규어 스토어는 이런 식으로 만듭니다\n  const configureStore = () => {\n\n  };\n\n  const wrapper = createWrapper(configureStore,{옵션 객체});\n\n  export default wrapper;\n*/\n// 스테이트와 리듀서를 포함하는게 스토어이다.\n\n\n\n\n\n\nconst configureStore = () => {\n  const middlewares = []; // <-- 사가나 미들웨어들을 넣는 곳.\n\n  const enhancer = false ? undefined // 배포용\n  : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares)); //개발용\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: process.env.NODE_EV === 'development' // true면 디버그가 더 자세하게 설명떠서 편하다.\n\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIiwicHJvY2VzcyIsImVudiIsIk5PREVfRVYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQzVCLFFBQU1DLFdBQVcsR0FBRyxFQUFwQixDQUQ0QixDQUNKOztBQUN4QixRQUFNQyxRQUFRLEdBQ2IsUUFDR0MsU0FESCxDQUM0QztBQUQ1QyxJQUVHQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSHZCLENBRjRCLENBSzhCOztBQUMxRCxRQUFNSyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFELEVBQVVOLFFBQVYsQ0FBekI7QUFDQSxTQUFPSSxLQUFQO0FBQ0EsQ0FSRDs7QUFVQSxNQUFNRyxPQUFPLEdBQUdDLHdFQUFhLENBQUNWLGNBQUQsRUFBaUI7QUFDN0NXLE9BQUssRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQVosS0FBd0IsYUFEYyxDQUNDOztBQURELENBQWpCLENBQTdCO0FBSWVMLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzdG9yZeulvCDshKTsoJXtlZjripQgY29uZmlndXJlIEpTIO2MjOydvOyeheuLiOuLpC5cbi8vIG5wbSBpIG5leHQtcmVkdXgtd3JhcHBlciDroZwg64uk7Jq067Cb7JWE7KSY7JW87ZWp64uI64ukLlxuXG4vLyBucG0gaSByZWR1eC1kZXZ0b29scy1leHRlbnNpb24gPC0tIOOFh+OFo+qyg+ydtCDsnojslrTslbwg6rCc67Cc7J6QIOu4jOudvOyasOyggCDrj4TqtazrnpEg7Jew6rKw7J20IOuQqeuLiOuLpC5cbi8qIOy7qO2UvOq3nOyWtCDsiqTthqDslrTripQg7J2065+wIOyLneycvOuhnCDrp4zrk63ri4jri6RcbiAgY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG5cbiAgfTtcblxuICBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSx77Ji17IWYIOqwneyytH0pO1xuXG4gIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4qL1xuLy8g7Iqk7YWM7J207Yq47JmAIOumrOuTgOyEnOulvCDtj6ztlajtlZjripTqsowg7Iqk7Yag7Ja07J2064ukLlxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG5cdGNvbnN0IG1pZGRsZXdhcmVzID0gW107IC8vIDwtLSDsgqzqsIDrgpgg66+465Ok7Juo7Ja065Ok7J2EIOuEo+uKlCDqs7MuXG5cdGNvbnN0IGVuaGFuY2VyID1cblx0XHRwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cdFx0XHQ/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSkgLy8g67Cw7Y+s7JqpXG5cdFx0XHQ6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSk7IC8v6rCc67Cc7JqpXG5cdGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xuXHRyZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xuXHRkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FViA9PT0gJ2RldmVsb3BtZW50JywgLy8gdHJ1ZeuptCDrlJTrsoTqt7jqsIAg642UIOyekOyEuO2VmOqyjCDshKTrqoXrlqDshJwg7Y647ZWY64ukLlxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });