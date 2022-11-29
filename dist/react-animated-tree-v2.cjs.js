'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _classCallCheck = require('@babel/runtime/helpers/classCallCheck');
var _createClass = require('@babel/runtime/helpers/createClass');
var _assertThisInitialized = require('@babel/runtime/helpers/assertThisInitialized');
var _inherits = require('@babel/runtime/helpers/inherits');
var _possibleConstructorReturn = require('@babel/runtime/helpers/possibleConstructorReturn');
var _getPrototypeOf = require('@babel/runtime/helpers/getPrototypeOf');
var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var React = require('react');
var PropTypes = require('prop-types');
var renderprops = require('react-spring/renderprops');

var Minus = function Minus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "64 -65 897 897"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0 q0 -15 -11 -25.5t-25 -10.5z"
  })));
};
var Plus = function Plus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "64 -65 897 897"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184 q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z"
  })));
};
var Eye = function Eye(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "61 51 902 666"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5 t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z"
  })));
};
var Close = function Close(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    viewBox: "64 -65 897 897"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155 q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z"
  })));
};

var Icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Plus: Plus,
  Minus: Minus,
  Close: Close,
  Eye: Eye
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var treeStyles = {
  tree: {
    position: "relative",
    padding: "4px 0px 0px 0px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    verticalAlign: "middle"
  },
  toggle: {
    width: "1em",
    height: "1em",
    marginRight: 10,
    cursor: "pointer",
    verticalAlign: "middle"
  },
  type: {
    textTransform: "uppercase",
    fontFamily: "monospace",
    fontSize: "0.6em",
    verticalAlign: "middle"
  },
  contents: {
    willChange: "transform, opacity, height",
    marginLeft: 6,
    padding: "4px 0px 0px 14px",
    borderLeft: "1px dashed rgba(255,255,255,0.4)"
  }
};
var Tree = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Tree, _React$PureComponent);
  var _super = _createSuper(Tree);
  function Tree(props) {
    var _this;
    _classCallCheck(this, Tree);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      if (typeof _this.props.children !== "undefined") {
        _this.props.onItemToggle && _this.props.onItemToggle(_this.state.id, !_this.state.open);
        _this.setState(function (state) {
          return {
            open: !state.open,
            immediate: false
          };
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "toggleVisibility", function () {
      _this.setState(function (state) {
        return {
          visible: !state.visible,
          immediate: true
        };
      }, function () {
        return _this.props.onClick && _this.props.onClick(_this.state.visible);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onItemClick", function () {
      _this.props.onItemClick && _this.props.onItemClick(_this.state.id);
    });
    _this.state = {
      open: props.open,
      visible: props.visible,
      immediate: false,
      id: props.itemId
    };
    return _this;
  }
  _createClass(Tree, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      var _this2 = this;
      this.setState(function (state) {
        return ["open", "visible"].reduce(function (acc, val) {
          return _this2.props[val] !== props[val] ? _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, val, props[val])) : acc;
        }, {});
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        open = _this$state.open,
        visible = _this$state.visible,
        immediate = _this$state.immediate;
      var _this$props = this.props,
        children = _this$props.children,
        content = _this$props.content,
        type = _this$props.type,
        style = _this$props.style,
        canHide = _this$props.canHide,
        springConfig = _this$props.springConfig,
        icons = _this$props.icons;
      var icon = children ? open ? icons.minusIcon || "Minus" : icons.plusIcon || "Plus" : icons.closeIcon || "Close";
      var Icon = typeof icon === "string" ? Icons[icon] : icon;
      var IconEye = icons.eyeIcon || Eye;
      return /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, treeStyles.tree), style),
        className: "treeview"
      }, /*#__PURE__*/React.createElement(Icon, {
        className: "toggle",
        style: _objectSpread(_objectSpread({}, treeStyles.toggle), {}, {
          opacity: children ? 1 : 0.3
        }),
        onClick: this.toggle
      }), /*#__PURE__*/React.createElement("span", {
        style: _objectSpread(_objectSpread({}, treeStyles.type), {}, {
          marginRight: type ? 10 : 0
        })
      }, type), canHide && /*#__PURE__*/React.createElement(IconEye, {
        className: "toggle",
        style: _objectSpread(_objectSpread({}, treeStyles.toggle), {}, {
          opacity: visible ? 1 : 0.4
        }),
        onClick: this.toggleVisibility
      }), /*#__PURE__*/React.createElement("span", {
        onClick: this.onItemClick,
        style: {
          verticalAlign: "middle"
        }
      }, content), /*#__PURE__*/React.createElement(renderprops.Spring, _extends({
        "native": true,
        immediate: immediate,
        config: _objectSpread(_objectSpread({}, renderprops.config["default"]), {}, {
          restSpeedThreshold: 1,
          restDisplacementThreshold: 0.01
        }),
        from: {
          height: 0,
          opacity: 0,
          transform: "translate3d(20px,0,0)"
        },
        to: {
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
          transform: open ? "translate3d(0px,0,0)" : "translate3d(20px,0,0)"
        }
      }, springConfig && springConfig(open)), function (styles) {
        return /*#__PURE__*/React.createElement(renderprops.animated.div, {
          style: _objectSpread(_objectSpread({}, styles), treeStyles.contents)
        }, children);
      }));
    }
  }]);
  return Tree;
}(React.PureComponent);
_defineProperty(Tree, "defaultProps", {
  open: false,
  visible: true,
  canHide: false,
  icons: {}
});
_defineProperty(Tree, "propTypes", {
  open: PropTypes.bool,
  visible: PropTypes.bool,
  canHide: PropTypes.bool,
  content: PropTypes.node,
  springConfig: PropTypes.func,
  itemId: PropTypes.string,
  onItemClick: PropTypes.func,
  onItemToggle: PropTypes.func,
  icons: PropTypes.object
});

module.exports = Tree;
