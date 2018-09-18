webpackHotUpdate(0,{

/***/ "./js/Search.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json__ = __webpack_require__(\"./data.json\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_json__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShowCard__ = __webpack_require__(\"./js/ShowCard.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(\"./js/Header.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Search = function (_React$Component) {\n  _inherits(Search, _React$Component);\n\n  function Search() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Search);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {\n      searchTerm: \"\"\n    }, _this.handleSearchTermChange = function () {\n      var _this2;\n\n      return (_this2 = _this).__handleSearchTermChange__REACT_HOT_LOADER__.apply(_this2, arguments);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  Search.prototype.__handleSearchTermChange__REACT_HOT_LOADER__ = function __handleSearchTermChange__REACT_HOT_LOADER__(event) {\n    this.setState({ searchTerm: event.currentTarget.value });\n  };\n\n  Search.prototype.render = function render() {\n    var _this3 = this;\n\n    return __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n      \"div\",\n      { className: \"search\" },\n      __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](__WEBPACK_IMPORTED_MODULE_3__Header__[\"a\" /* default */], {\n        handleSearchTermChange: this.handleSearchTermChange,\n        showSearch: true,\n        searchTerm: this.state.searchTerm\n      }),\n      __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](\n        \"div\",\n        null,\n        __WEBPACK_IMPORTED_MODULE_1__data_json___default.a.shows.filter(function (show) {\n          return (show.title + \" \" + show.description).toUpperCase().indexOf(_this3.state.searchTerm.toUpperCase()) >= 0;\n        }).map(function (show) {\n          return __WEBPACK_IMPORTED_MODULE_0_react__[\"createElement\"](__WEBPACK_IMPORTED_MODULE_2__ShowCard__[\"a\" /* default */], _extends({}, show, { key: show.imdbID }));\n        })\n      )\n    );\n  };\n\n  return Search;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Search;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Search, \"Search\", \"/Users/Sam/Desktop/Code/complete-intro-to-react/js/Search.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/Sam/Desktop/Code/complete-intro-to-react/js/Search.jsx\");\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9TZWFyY2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvU2VhcmNoLmpzeD9hOTlkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgcHJlbG9hZCBmcm9tIFwiLi4vZGF0YS5qc29uXCI7XG5pbXBvcnQgU2hvd0NhcmQgZnJvbSBcIi4vU2hvd0NhcmRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbnZhciBTZWFyY2ggPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2VhcmNoLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTZWFyY2goKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTZWFyY2gpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoVGVybTogXCJcIlxuICAgIH0sIF90aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMyO1xuXG4gICAgICByZXR1cm4gKF90aGlzMiA9IF90aGlzKS5fX2hhbmRsZVNlYXJjaFRlcm1DaGFuZ2VfX1JFQUNUX0hPVF9MT0FERVJfXy5hcHBseShfdGhpczIsIGFyZ3VtZW50cyk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBTZWFyY2gucHJvdG90eXBlLl9faGFuZGxlU2VhcmNoVGVybUNoYW5nZV9fUkVBQ1RfSE9UX0xPQURFUl9fID0gZnVuY3Rpb24gX19oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlX19SRUFDVF9IT1RfTE9BREVSX18oZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoVGVybTogZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcInNlYXJjaFwiIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge1xuICAgICAgICBoYW5kbGVTZWFyY2hUZXJtQ2hhbmdlOiB0aGlzLmhhbmRsZVNlYXJjaFRlcm1DaGFuZ2UsXG4gICAgICAgIHNob3dTZWFyY2g6IHRydWUsXG4gICAgICAgIHNlYXJjaFRlcm06IHRoaXMuc3RhdGUuc2VhcmNoVGVybVxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBwcmVsb2FkLnNob3dzLmZpbHRlcihmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgIHJldHVybiAoc2hvdy50aXRsZSArIFwiIFwiICsgc2hvdy5kZXNjcmlwdGlvbikudG9VcHBlckNhc2UoKS5pbmRleE9mKF90aGlzMy5zdGF0ZS5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkpID49IDA7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNob3dDYXJkLCBfZXh0ZW5kcyh7fSwgc2hvdywgeyBrZXk6IHNob3cuaW1kYklEIH0pKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9O1xuXG4gIHJldHVybiBTZWFyY2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBfZGVmYXVsdCA9IFNlYXJjaDtcblxuXG5leHBvcnQgZGVmYXVsdCBfZGVmYXVsdDtcbjtcblxudmFyIF90ZW1wMiA9IGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBfX1JFQUNUX0hPVF9MT0FERVJfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihTZWFyY2gsIFwiU2VhcmNoXCIsIFwiL1VzZXJzL1NhbS9EZXNrdG9wL0NvZGUvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvU2VhcmNoLmpzeFwiKTtcblxuICBfX1JFQUNUX0hPVF9MT0FERVJfXy5yZWdpc3RlcihfZGVmYXVsdCwgXCJkZWZhdWx0XCIsIFwiL1VzZXJzL1NhbS9EZXNrdG9wL0NvZGUvY29tcGxldGUtaW50cm8tdG8tcmVhY3QvanMvU2VhcmNoLmpzeFwiKTtcbn0oKTtcblxuO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vanMvU2VhcmNoLmpzeFxuLy8gbW9kdWxlIGlkID0gLi9qcy9TZWFyY2guanN4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})