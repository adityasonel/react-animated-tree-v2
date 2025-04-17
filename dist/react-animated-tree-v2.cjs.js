'use strict';

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var renderprops = require('react-spring/renderprops');

var Minus = function (props) { return (jsxRuntime.jsx("svg", tslib.__assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0\n  q0 -15 -11 -25.5t-25 -10.5z" }) }) }))); };
var Plus = function (props) { return (jsxRuntime.jsx("svg", tslib.__assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184\n  q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" }) }) }))); };
var Eye = function (props) { return (jsxRuntime.jsx("svg", tslib.__assign({}, props, { viewBox: "61 51 902 666", children: jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z\n  M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5\n  t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z" }) }) }))); };
var Close = function (props) { return (jsxRuntime.jsx("svg", tslib.__assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntime.jsx("g", { children: jsxRuntime.jsx("path", { d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155\n  q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" }) }) }))); };

var Icons = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Close: Close,
  Eye: Eye,
  Minus: Minus,
  Plus: Plus
});

var treeStyles = {
    tree: {
        position: "relative",
        padding: "4px 0px 0px 0px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        verticalAlign: "middle",
    },
    toggle: {
        width: "1em",
        height: "1em",
        marginRight: 10,
        cursor: "pointer",
        verticalAlign: "middle",
    },
    type: {
        textTransform: "uppercase",
        fontFamily: "monospace",
        fontSize: "0.6em",
        verticalAlign: "middle",
    },
    contents: {
        willChange: "transform, opacity, height",
        marginLeft: 6,
        padding: "4px 0px 0px 14px",
        borderLeft: "1px dashed rgba(255,255,255,0.4)",
    },
};
function Tree(props) {
    var _a, _b, _c, _d;
    var _e = react.useState(props.open), open = _e[0], setOpen = _e[1];
    var _f = react.useState(props.visible), visible = _f[0], setVisible = _f[1];
    var _g = react.useState(false), immediate = _g[0], setImmediate = _g[1];
    var id = react.useState(props.itemId)[0];
    var toggle = function () {
        if (typeof props.children !== "undefined") {
            var newOpen = !open;
            if (props.onItemToggle) {
                props.onItemToggle(id, newOpen);
            }
            setOpen(newOpen);
            setImmediate(false);
        }
    };
    var toggleVisibility = function () {
        var newVisible = !visible;
        setVisible(newVisible);
        setImmediate(true);
        if (props.onClick) {
            props.onClick(newVisible);
        }
    };
    var onItemClick = function () {
        if (props.onItemClick) {
            props.onItemClick(id);
        }
    };
    var children = props.children, content = props.content, type = props.type, style = props.style, canHide = props.canHide, springConfig = props.springConfig, icons = props.icons;
    var icon = children
        ? open
            ? (_a = icons === null || icons === void 0 ? void 0 : icons.minusIcon) !== null && _a !== void 0 ? _a : "Minus"
            : (_b = icons === null || icons === void 0 ? void 0 : icons.plusIcon) !== null && _b !== void 0 ? _b : "Plus"
        : (_c = icons === null || icons === void 0 ? void 0 : icons.closeIcon) !== null && _c !== void 0 ? _c : "Close";
    var Icon = typeof icon === "string" ? Icons[icon] : icon;
    var IconEye = (_d = icons === null || icons === void 0 ? void 0 : icons.eyeIcon) !== null && _d !== void 0 ? _d : Eye;
    react.useEffect(function () {
        setOpen(props.open);
    }, [props.open]);
    return (jsxRuntime.jsxs("div", { style: tslib.__assign(tslib.__assign({}, treeStyles.tree), style), className: "treeview", children: [jsxRuntime.jsx(Icon, { className: "toggle", style: tslib.__assign(tslib.__assign({}, treeStyles.toggle), { opacity: children ? 1 : 0.3 }), onClick: toggle }), jsxRuntime.jsx("span", { style: tslib.__assign(tslib.__assign({}, treeStyles.type), { marginRight: type ? 10 : 0 }), children: type }), canHide && (jsxRuntime.jsx(IconEye, { className: "toggle", style: tslib.__assign(tslib.__assign({}, treeStyles.toggle), { opacity: visible ? 1 : 0.4 }), onClick: toggleVisibility })), jsxRuntime.jsx("span", { onClick: onItemClick, style: { verticalAlign: "middle" }, children: content }), jsxRuntime.jsx(renderprops.Spring, tslib.__assign({ native: true, immediate: immediate, config: tslib.__assign({}, renderprops.config.default), from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" }, to: {
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                    transform: open ? "translate3d(0px,0,0)" : "translate3d(20px,0,0)",
                } }, (springConfig && springConfig(open)), { children: function (styles) { return jsxRuntime.jsx(renderprops.animated.div, { style: tslib.__assign(tslib.__assign({}, styles), treeStyles.contents), children: children }); } }))] }));
}

module.exports = Tree;
