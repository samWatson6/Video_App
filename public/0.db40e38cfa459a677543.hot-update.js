webpackHotUpdate(0,{

/***/ "./js/Search.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(\"./node_modules/react/react.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(\"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ShowCard__ = __webpack_require__(\"./js/ShowCard.jsx\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(\"./js/Header.jsx\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\n\n\n\nvar Search = function (_Component) {\n  _inherits(Search, _Component);\n\n  function Search() {\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, Search);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {\n      searchTerm: \"\"\n    }, _this.handleSearchTermChange = function () {\n      var _this2;\n\n      return (_this2 = _this).__handleSearchTermChange__REACT_HOT_LOADER__.apply(_this2, arguments);\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  Search.prototype.__handleSearchTermChange__REACT_HOT_LOADER__ = function __handleSearchTermChange__REACT_HOT_LOADER__(event) {\n    this.setState({ searchTerm: event.target.value });\n  };\n\n  Search.prototype.render = function render() {\n    var _this3 = this;\n\n    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n      \"div\",\n      { className: \"search\" },\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__[\"a\" /* default */], {\n        searchTerm: this.state.searchTerm,\n        showSearch: true,\n        handleSearchTermChange: this.handleSearchTermChange\n      }),\n      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        \"div\",\n        null,\n        this.props.shows.filter(function (show) {\n          return (show.title + \" \" + show.description).toUpperCase().indexOf(_this3.state.searchTerm.toUpperCase()) >= 0;\n        }).map(function (show) {\n          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ShowCard__[\"a\" /* default */], _extends({ key: show.imdbID }, show));\n        })\n      )\n    );\n  };\n\n  return Search;\n}(__WEBPACK_IMPORTED_MODULE_0_react__[\"Component\"]);\n\nvar _default = Search;\n\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (_default);\n;\n\nvar _temp2 = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(Search, \"Search\", \"/Users/Sam/Desktop/Code/complete-intro-to-react/js/Search.jsx\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"/Users/Sam/Desktop/Code/complete-intro-to-react/js/Search.jsx\");\n}();\n\n;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9TZWFyY2guanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvU2VhcmNoLmpzeD9hOTlkIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IFNob3dDYXJkIGZyb20gXCIuL1Nob3dDYXJkXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuXG52YXIgU2VhcmNoID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFNlYXJjaCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU2VhcmNoKCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgU2VhcmNoKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5jYWxsLmFwcGx5KF9Db21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFRlcm06IFwiXCJcbiAgICB9LCBfdGhpcy5oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzMjtcblxuICAgICAgcmV0dXJuIChfdGhpczIgPSBfdGhpcykuX19oYW5kbGVTZWFyY2hUZXJtQ2hhbmdlX19SRUFDVF9IT1RfTE9BREVSX18uYXBwbHkoX3RoaXMyLCBhcmd1bWVudHMpO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgU2VhcmNoLnByb3RvdHlwZS5fX2hhbmRsZVNlYXJjaFRlcm1DaGFuZ2VfX1JFQUNUX0hPVF9MT0FERVJfXyA9IGZ1bmN0aW9uIF9faGFuZGxlU2VhcmNoVGVybUNoYW5nZV9fUkVBQ1RfSE9UX0xPQURFUl9fKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFRlcm06IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgfTtcblxuICBTZWFyY2gucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3NOYW1lOiBcInNlYXJjaFwiIH0sXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWRlciwge1xuICAgICAgICBzZWFyY2hUZXJtOiB0aGlzLnN0YXRlLnNlYXJjaFRlcm0sXG4gICAgICAgIHNob3dTZWFyY2g6IHRydWUsXG4gICAgICAgIGhhbmRsZVNlYXJjaFRlcm1DaGFuZ2U6IHRoaXMuaGFuZGxlU2VhcmNoVGVybUNoYW5nZVxuICAgICAgfSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICBudWxsLFxuICAgICAgICB0aGlzLnByb3BzLnNob3dzLmZpbHRlcihmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgIHJldHVybiAoc2hvdy50aXRsZSArIFwiIFwiICsgc2hvdy5kZXNjcmlwdGlvbikudG9VcHBlckNhc2UoKS5pbmRleE9mKF90aGlzMy5zdGF0ZS5zZWFyY2hUZXJtLnRvVXBwZXJDYXNlKCkpID49IDA7XG4gICAgICAgIH0pLm1hcChmdW5jdGlvbiAoc2hvdykge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFNob3dDYXJkLCBfZXh0ZW5kcyh7IGtleTogc2hvdy5pbWRiSUQgfSwgc2hvdykpO1xuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIFNlYXJjaDtcbn0oQ29tcG9uZW50KTtcblxudmFyIF9kZWZhdWx0ID0gU2VhcmNoO1xuXG5cbmV4cG9ydCBkZWZhdWx0IF9kZWZhdWx0O1xuO1xuXG52YXIgX3RlbXAyID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIF9fUkVBQ1RfSE9UX0xPQURFUl9fID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKFNlYXJjaCwgXCJTZWFyY2hcIiwgXCIvVXNlcnMvU2FtL0Rlc2t0b3AvQ29kZS9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9TZWFyY2guanN4XCIpO1xuXG4gIF9fUkVBQ1RfSE9UX0xPQURFUl9fLnJlZ2lzdGVyKF9kZWZhdWx0LCBcImRlZmF1bHRcIiwgXCIvVXNlcnMvU2FtL0Rlc2t0b3AvQ29kZS9jb21wbGV0ZS1pbnRyby10by1yZWFjdC9qcy9TZWFyY2guanN4XCIpO1xufSgpO1xuXG47XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9qcy9TZWFyY2guanN4XG4vLyBtb2R1bGUgaWQgPSAuL2pzL1NlYXJjaC5qc3hcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})