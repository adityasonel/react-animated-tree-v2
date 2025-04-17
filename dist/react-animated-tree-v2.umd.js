(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('react-dom')) :
    typeof define === 'function' && define.amd ? define(['react', 'react-dom'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ReactAnimatedTreeV2 = factory(global.React, global.ReactDOM));
})(this, (function (require$$0$1, require$$3) { 'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol */


    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    function getAugmentedNamespace(n) {
      if (n.__esModule) return n;
      var f = n.default;
    	if (typeof f == "function") {
    		var a = function a () {
    			if (this instanceof a) {
    				var args = [null];
    				args.push.apply(args, arguments);
    				var Ctor = Function.bind.apply(f, args);
    				return new Ctor();
    			}
    			return f.apply(this, arguments);
    		};
    		a.prototype = f.prototype;
      } else a = {};
      Object.defineProperty(a, '__esModule', {value: true});
    	Object.keys(n).forEach(function (k) {
    		var d = Object.getOwnPropertyDescriptor(n, k);
    		Object.defineProperty(a, k, d.get ? d : {
    			enumerable: true,
    			get: function () {
    				return n[k];
    			}
    		});
    	});
    	return a;
    }

    var jsxRuntime = {exports: {}};

    var reactJsxRuntime_production_min = {};

    /** @license React v16.14.0
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var hasRequiredReactJsxRuntime_production_min;

    function requireReactJsxRuntime_production_min () {
    	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
    	hasRequiredReactJsxRuntime_production_min = 1;
    var f=require$$0$1,g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
    	function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
    	return reactJsxRuntime_production_min;
    }

    var reactJsxRuntime_development = {};

    /** @license React v16.14.0
     * react-jsx-runtime.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    var hasRequiredReactJsxRuntime_development;

    function requireReactJsxRuntime_development () {
    	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
    	hasRequiredReactJsxRuntime_development = 1;
    	(function (exports) {

    		if (process.env.NODE_ENV !== "production") {
    		  (function() {

    		var React = require$$0$1;

    		// ATTENTION
    		// When adding new symbols to this file,
    		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    		// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    		// nor polyfill, then a plain number is used for performance.
    		var REACT_ELEMENT_TYPE = 0xeac7;
    		var REACT_PORTAL_TYPE = 0xeaca;
    		exports.Fragment = 0xeacb;
    		var REACT_STRICT_MODE_TYPE = 0xeacc;
    		var REACT_PROFILER_TYPE = 0xead2;
    		var REACT_PROVIDER_TYPE = 0xeacd;
    		var REACT_CONTEXT_TYPE = 0xeace;
    		var REACT_FORWARD_REF_TYPE = 0xead0;
    		var REACT_SUSPENSE_TYPE = 0xead1;
    		var REACT_SUSPENSE_LIST_TYPE = 0xead8;
    		var REACT_MEMO_TYPE = 0xead3;
    		var REACT_LAZY_TYPE = 0xead4;
    		var REACT_BLOCK_TYPE = 0xead9;
    		var REACT_SERVER_BLOCK_TYPE = 0xeada;
    		var REACT_FUNDAMENTAL_TYPE = 0xead5;
    		var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
    		var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

    		if (typeof Symbol === 'function' && Symbol.for) {
    		  var symbolFor = Symbol.for;
    		  REACT_ELEMENT_TYPE = symbolFor('react.element');
    		  REACT_PORTAL_TYPE = symbolFor('react.portal');
    		  exports.Fragment = symbolFor('react.fragment');
    		  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
    		  REACT_PROFILER_TYPE = symbolFor('react.profiler');
    		  REACT_PROVIDER_TYPE = symbolFor('react.provider');
    		  REACT_CONTEXT_TYPE = symbolFor('react.context');
    		  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
    		  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
    		  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
    		  REACT_MEMO_TYPE = symbolFor('react.memo');
    		  REACT_LAZY_TYPE = symbolFor('react.lazy');
    		  REACT_BLOCK_TYPE = symbolFor('react.block');
    		  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
    		  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
    		  symbolFor('react.scope');
    		  symbolFor('react.opaque.id');
    		  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
    		  symbolFor('react.offscreen');
    		  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    		}

    		var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    		var FAUX_ITERATOR_SYMBOL = '@@iterator';
    		function getIteratorFn(maybeIterable) {
    		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    		    return null;
    		  }

    		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

    		  if (typeof maybeIterator === 'function') {
    		    return maybeIterator;
    		  }

    		  return null;
    		}

    		var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

    		function error(format) {
    		  {
    		    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    		      args[_key2 - 1] = arguments[_key2];
    		    }

    		    printWarning('error', format, args);
    		  }
    		}

    		function printWarning(level, format, args) {
    		  // When changing this logic, you might want to also
    		  // update consoleWithStackDev.www.js as well.
    		  {
    		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    		    var stack = '';

    		    if (currentlyValidatingElement) {
    		      var name = getComponentName(currentlyValidatingElement.type);
    		      var owner = currentlyValidatingElement._owner;
    		      stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner.type));
    		    }

    		    stack += ReactDebugCurrentFrame.getStackAddendum();

    		    if (stack !== '') {
    		      format += '%s';
    		      args = args.concat([stack]);
    		    }

    		    var argsWithFormat = args.map(function (item) {
    		      return '' + item;
    		    }); // Careful: RN currently depends on this prefix

    		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    		    // breaks IE9: https://github.com/facebook/react/issues/13610
    		    // eslint-disable-next-line react-internal/no-production-logging

    		    Function.prototype.apply.call(console[level], console, argsWithFormat);
    		  }
    		}

    		// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

    		var enableScopeAPI = false; // Experimental Create Event Handle API.

    		function isValidElementType(type) {
    		  if (typeof type === 'string' || typeof type === 'function') {
    		    return true;
    		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


    		  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    		    return true;
    		  }

    		  if (typeof type === 'object' && type !== null) {
    		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
    		      return true;
    		    }
    		  }

    		  return false;
    		}


    		var BEFORE_SLASH_RE = /^(.*)[\\\/]/;
    		function describeComponentFrame (name, source, ownerName) {
    		  var sourceInfo = '';

    		  if (source) {
    		    var path = source.fileName;
    		    var fileName = path.replace(BEFORE_SLASH_RE, '');

    		    {
    		      // In DEV, include code for a common special case:
    		      // prefer "folder/index.js" instead of just "index.js".
    		      if (/^index\./.test(fileName)) {
    		        var match = path.match(BEFORE_SLASH_RE);

    		        if (match) {
    		          var pathBeforeSlash = match[1];

    		          if (pathBeforeSlash) {
    		            var folderName = pathBeforeSlash.replace(BEFORE_SLASH_RE, '');
    		            fileName = folderName + '/' + fileName;
    		          }
    		        }
    		      }
    		    }

    		    sourceInfo = ' (at ' + fileName + ':' + source.lineNumber + ')';
    		  } else if (ownerName) {
    		    sourceInfo = ' (created by ' + ownerName + ')';
    		  }

    		  return '\n    in ' + (name || 'Unknown') + sourceInfo;
    		}

    		var Resolved = 1;
    		function refineResolvedLazyComponent(lazyComponent) {
    		  return lazyComponent._status === Resolved ? lazyComponent._result : null;
    		}

    		function getWrappedName(outerType, innerType, wrapperName) {
    		  var functionName = innerType.displayName || innerType.name || '';
    		  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    		}

    		function getComponentName(type) {
    		  if (type == null) {
    		    // Host root, text node or just invalid type.
    		    return null;
    		  }

    		  {
    		    if (typeof type.tag === 'number') {
    		      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    		    }
    		  }

    		  if (typeof type === 'function') {
    		    return type.displayName || type.name || null;
    		  }

    		  if (typeof type === 'string') {
    		    return type;
    		  }

    		  switch (type) {
    		    case exports.Fragment:
    		      return 'Fragment';

    		    case REACT_PORTAL_TYPE:
    		      return 'Portal';

    		    case REACT_PROFILER_TYPE:
    		      return "Profiler";

    		    case REACT_STRICT_MODE_TYPE:
    		      return 'StrictMode';

    		    case REACT_SUSPENSE_TYPE:
    		      return 'Suspense';

    		    case REACT_SUSPENSE_LIST_TYPE:
    		      return 'SuspenseList';
    		  }

    		  if (typeof type === 'object') {
    		    switch (type.$$typeof) {
    		      case REACT_CONTEXT_TYPE:
    		        return 'Context.Consumer';

    		      case REACT_PROVIDER_TYPE:
    		        return 'Context.Provider';

    		      case REACT_FORWARD_REF_TYPE:
    		        return getWrappedName(type, type.render, 'ForwardRef');

    		      case REACT_MEMO_TYPE:
    		        return getComponentName(type.type);

    		      case REACT_BLOCK_TYPE:
    		        return getComponentName(type.render);

    		      case REACT_LAZY_TYPE:
    		        {
    		          var thenable = type;
    		          var resolvedThenable = refineResolvedLazyComponent(thenable);

    		          if (resolvedThenable) {
    		            return getComponentName(resolvedThenable);
    		          }

    		          break;
    		        }
    		    }
    		  }

    		  return null;
    		}

    		var loggedTypeFailures = {};
    		ReactSharedInternals.ReactDebugCurrentFrame;
    		var currentlyValidatingElement = null;

    		function setCurrentlyValidatingElement(element) {
    		  {
    		    currentlyValidatingElement = element;
    		  }
    		}

    		function checkPropTypes(typeSpecs, values, location, componentName, element) {
    		  {
    		    // $FlowFixMe This is okay but Flow doesn't know it.
    		    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    		    for (var typeSpecName in typeSpecs) {
    		      if (has(typeSpecs, typeSpecName)) {
    		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
    		        // fail the render phase where it didn't fail before. So we log it.
    		        // After these have been cleaned up, we'll let them throw.

    		        try {
    		          // This is intentionally an invariant that gets caught. It's the same
    		          // behavior as without this statement except with a better message.
    		          if (typeof typeSpecs[typeSpecName] !== 'function') {
    		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
    		            err.name = 'Invariant Violation';
    		            throw err;
    		          }

    		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
    		        } catch (ex) {
    		          error$1 = ex;
    		        }

    		        if (error$1 && !(error$1 instanceof Error)) {
    		          setCurrentlyValidatingElement(element);

    		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

    		          setCurrentlyValidatingElement(null);
    		        }

    		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
    		          // Only monitor this failure once because there tends to be a lot of the
    		          // same error.
    		          loggedTypeFailures[error$1.message] = true;
    		          setCurrentlyValidatingElement(element);

    		          error('Failed %s type: %s', location, error$1.message);

    		          setCurrentlyValidatingElement(null);
    		        }
    		      }
    		    }
    		  }
    		}

    		var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    		var hasOwnProperty = Object.prototype.hasOwnProperty;
    		var RESERVED_PROPS = {
    		  key: true,
    		  ref: true,
    		  __self: true,
    		  __source: true
    		};
    		var specialPropKeyWarningShown;
    		var specialPropRefWarningShown;
    		var didWarnAboutStringRefs;

    		{
    		  didWarnAboutStringRefs = {};
    		}

    		function hasValidRef(config) {
    		  {
    		    if (hasOwnProperty.call(config, 'ref')) {
    		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

    		      if (getter && getter.isReactWarning) {
    		        return false;
    		      }
    		    }
    		  }

    		  return config.ref !== undefined;
    		}

    		function hasValidKey(config) {
    		  {
    		    if (hasOwnProperty.call(config, 'key')) {
    		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

    		      if (getter && getter.isReactWarning) {
    		        return false;
    		      }
    		    }
    		  }

    		  return config.key !== undefined;
    		}

    		function warnIfStringRefCannotBeAutoConverted(config, self) {
    		  {
    		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
    		      var componentName = getComponentName(ReactCurrentOwner.current.type);

    		      if (!didWarnAboutStringRefs[componentName]) {
    		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

    		        didWarnAboutStringRefs[componentName] = true;
    		      }
    		    }
    		  }
    		}

    		function defineKeyPropWarningGetter(props, displayName) {
    		  {
    		    var warnAboutAccessingKey = function () {
    		      if (!specialPropKeyWarningShown) {
    		        specialPropKeyWarningShown = true;

    		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
    		      }
    		    };

    		    warnAboutAccessingKey.isReactWarning = true;
    		    Object.defineProperty(props, 'key', {
    		      get: warnAboutAccessingKey,
    		      configurable: true
    		    });
    		  }
    		}

    		function defineRefPropWarningGetter(props, displayName) {
    		  {
    		    var warnAboutAccessingRef = function () {
    		      if (!specialPropRefWarningShown) {
    		        specialPropRefWarningShown = true;

    		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
    		      }
    		    };

    		    warnAboutAccessingRef.isReactWarning = true;
    		    Object.defineProperty(props, 'ref', {
    		      get: warnAboutAccessingRef,
    		      configurable: true
    		    });
    		  }
    		}
    		/**
    		 * Factory method to create a new React element. This no longer adheres to
    		 * the class pattern, so do not use new to call it. Also, instanceof check
    		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
    		 * if something is a React Element.
    		 *
    		 * @param {*} type
    		 * @param {*} props
    		 * @param {*} key
    		 * @param {string|object} ref
    		 * @param {*} owner
    		 * @param {*} self A *temporary* helper to detect places where `this` is
    		 * different from the `owner` when React.createElement is called, so that we
    		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
    		 * functions, and as long as `this` and owner are the same, there will be no
    		 * change in behavior.
    		 * @param {*} source An annotation object (added by a transpiler or otherwise)
    		 * indicating filename, line number, and/or other information.
    		 * @internal
    		 */


    		var ReactElement = function (type, key, ref, self, source, owner, props) {
    		  var element = {
    		    // This tag allows us to uniquely identify this as a React Element
    		    $$typeof: REACT_ELEMENT_TYPE,
    		    // Built-in properties that belong on the element
    		    type: type,
    		    key: key,
    		    ref: ref,
    		    props: props,
    		    // Record the component responsible for creating this element.
    		    _owner: owner
    		  };

    		  {
    		    // The validation flag is currently mutative. We put it on
    		    // an external backing store so that we can freeze the whole object.
    		    // This can be replaced with a WeakMap once they are implemented in
    		    // commonly used development environments.
    		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    		    // the validation flag non-enumerable (where possible, which should
    		    // include every environment we run tests in), so the test framework
    		    // ignores it.

    		    Object.defineProperty(element._store, 'validated', {
    		      configurable: false,
    		      enumerable: false,
    		      writable: true,
    		      value: false
    		    }); // self and source are DEV only properties.

    		    Object.defineProperty(element, '_self', {
    		      configurable: false,
    		      enumerable: false,
    		      writable: false,
    		      value: self
    		    }); // Two elements created in two different places should be considered
    		    // equal for testing purposes and therefore we hide it from enumeration.

    		    Object.defineProperty(element, '_source', {
    		      configurable: false,
    		      enumerable: false,
    		      writable: false,
    		      value: source
    		    });

    		    if (Object.freeze) {
    		      Object.freeze(element.props);
    		      Object.freeze(element);
    		    }
    		  }

    		  return element;
    		};
    		/**
    		 * https://github.com/reactjs/rfcs/pull/107
    		 * @param {*} type
    		 * @param {object} props
    		 * @param {string} key
    		 */

    		function jsxDEV(type, config, maybeKey, source, self) {
    		  {
    		    var propName; // Reserved names are extracted

    		    var props = {};
    		    var key = null;
    		    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    		    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    		    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    		    // but as an intermediary step, we will use jsxDEV for everything except
    		    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    		    // key is explicitly declared to be undefined or not.

    		    if (maybeKey !== undefined) {
    		      key = '' + maybeKey;
    		    }

    		    if (hasValidKey(config)) {
    		      key = '' + config.key;
    		    }

    		    if (hasValidRef(config)) {
    		      ref = config.ref;
    		      warnIfStringRefCannotBeAutoConverted(config, self);
    		    } // Remaining properties are added to a new props object


    		    for (propName in config) {
    		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
    		        props[propName] = config[propName];
    		      }
    		    } // Resolve default props


    		    if (type && type.defaultProps) {
    		      var defaultProps = type.defaultProps;

    		      for (propName in defaultProps) {
    		        if (props[propName] === undefined) {
    		          props[propName] = defaultProps[propName];
    		        }
    		      }
    		    }

    		    if (key || ref) {
    		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

    		      if (key) {
    		        defineKeyPropWarningGetter(props, displayName);
    		      }

    		      if (ref) {
    		        defineRefPropWarningGetter(props, displayName);
    		      }
    		    }

    		    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    		  }
    		}

    		var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    		ReactSharedInternals.ReactDebugCurrentFrame;

    		function setCurrentlyValidatingElement$1(element) {
    		  currentlyValidatingElement = element;
    		}

    		var propTypesMisspellWarningShown;

    		{
    		  propTypesMisspellWarningShown = false;
    		}
    		/**
    		 * Verifies the object is a ReactElement.
    		 * See https://reactjs.org/docs/react-api.html#isvalidelement
    		 * @param {?object} object
    		 * @return {boolean} True if `object` is a ReactElement.
    		 * @final
    		 */

    		function isValidElement(object) {
    		  {
    		    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    		  }
    		}

    		function getDeclarationErrorAddendum() {
    		  {
    		    if (ReactCurrentOwner$1.current) {
    		      var name = getComponentName(ReactCurrentOwner$1.current.type);

    		      if (name) {
    		        return '\n\nCheck the render method of `' + name + '`.';
    		      }
    		    }

    		    return '';
    		  }
    		}

    		function getSourceInfoErrorAddendum(source) {
    		  {
    		    if (source !== undefined) {
    		      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    		      var lineNumber = source.lineNumber;
    		      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    		    }

    		    return '';
    		  }
    		}
    		/**
    		 * Warn if there's no key explicitly set on dynamic arrays of children or
    		 * object keys are not valid. This allows us to keep track of children between
    		 * updates.
    		 */


    		var ownerHasKeyUseWarning = {};

    		function getCurrentComponentErrorInfo(parentType) {
    		  {
    		    var info = getDeclarationErrorAddendum();

    		    if (!info) {
    		      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

    		      if (parentName) {
    		        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
    		      }
    		    }

    		    return info;
    		  }
    		}
    		/**
    		 * Warn if the element doesn't have an explicit key assigned to it.
    		 * This element is in an array. The array could grow and shrink or be
    		 * reordered. All children that haven't already been validated are required to
    		 * have a "key" property assigned to it. Error statuses are cached so a warning
    		 * will only be shown once.
    		 *
    		 * @internal
    		 * @param {ReactElement} element Element that requires a key.
    		 * @param {*} parentType element's parent's type.
    		 */


    		function validateExplicitKey(element, parentType) {
    		  {
    		    if (!element._store || element._store.validated || element.key != null) {
    		      return;
    		    }

    		    element._store.validated = true;
    		    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    		    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
    		      return;
    		    }

    		    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    		    // property, it may be the creator of the child that's responsible for
    		    // assigning it a key.

    		    var childOwner = '';

    		    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
    		      // Give the component that originally created this child.
    		      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    		    }

    		    setCurrentlyValidatingElement$1(element);

    		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    		    setCurrentlyValidatingElement$1(null);
    		  }
    		}
    		/**
    		 * Ensure that every element either is passed in a static location, in an
    		 * array with an explicit keys property defined, or in an object literal
    		 * with valid key property.
    		 *
    		 * @internal
    		 * @param {ReactNode} node Statically passed child of any type.
    		 * @param {*} parentType node's parent's type.
    		 */


    		function validateChildKeys(node, parentType) {
    		  {
    		    if (typeof node !== 'object') {
    		      return;
    		    }

    		    if (Array.isArray(node)) {
    		      for (var i = 0; i < node.length; i++) {
    		        var child = node[i];

    		        if (isValidElement(child)) {
    		          validateExplicitKey(child, parentType);
    		        }
    		      }
    		    } else if (isValidElement(node)) {
    		      // This element was passed in a valid location.
    		      if (node._store) {
    		        node._store.validated = true;
    		      }
    		    } else if (node) {
    		      var iteratorFn = getIteratorFn(node);

    		      if (typeof iteratorFn === 'function') {
    		        // Entry iterators used to provide implicit keys,
    		        // but now we print a separate warning for them later.
    		        if (iteratorFn !== node.entries) {
    		          var iterator = iteratorFn.call(node);
    		          var step;

    		          while (!(step = iterator.next()).done) {
    		            if (isValidElement(step.value)) {
    		              validateExplicitKey(step.value, parentType);
    		            }
    		          }
    		        }
    		      }
    		    }
    		  }
    		}
    		/**
    		 * Given an element, validate that its props follow the propTypes definition,
    		 * provided by the type.
    		 *
    		 * @param {ReactElement} element
    		 */


    		function validatePropTypes(element) {
    		  {
    		    var type = element.type;

    		    if (type === null || type === undefined || typeof type === 'string') {
    		      return;
    		    }

    		    var propTypes;

    		    if (typeof type === 'function') {
    		      propTypes = type.propTypes;
    		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    		    // Inner props are checked in the reconciler.
    		    type.$$typeof === REACT_MEMO_TYPE)) {
    		      propTypes = type.propTypes;
    		    } else {
    		      return;
    		    }

    		    if (propTypes) {
    		      // Intentionally inside to avoid triggering lazy initializers:
    		      var name = getComponentName(type);
    		      checkPropTypes(propTypes, element.props, 'prop', name, element);
    		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
    		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

    		      var _name = getComponentName(type);

    		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    		    }

    		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
    		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    		    }
    		  }
    		}
    		/**
    		 * Given a fragment, validate that it can only be provided with fragment props
    		 * @param {ReactElement} fragment
    		 */


    		function validateFragmentProps(fragment) {
    		  {
    		    var keys = Object.keys(fragment.props);

    		    for (var i = 0; i < keys.length; i++) {
    		      var key = keys[i];

    		      if (key !== 'children' && key !== 'key') {
    		        setCurrentlyValidatingElement$1(fragment);

    		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

    		        setCurrentlyValidatingElement$1(null);
    		        break;
    		      }
    		    }

    		    if (fragment.ref !== null) {
    		      setCurrentlyValidatingElement$1(fragment);

    		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

    		      setCurrentlyValidatingElement$1(null);
    		    }
    		  }
    		}

    		function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
    		  {
    		    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    		    // succeed and there will likely be errors in render.

    		    if (!validType) {
    		      var info = '';

    		      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
    		        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
    		      }

    		      var sourceInfo = getSourceInfoErrorAddendum(source);

    		      if (sourceInfo) {
    		        info += sourceInfo;
    		      } else {
    		        info += getDeclarationErrorAddendum();
    		      }

    		      var typeString;

    		      if (type === null) {
    		        typeString = 'null';
    		      } else if (Array.isArray(type)) {
    		        typeString = 'array';
    		      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
    		        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
    		        info = ' Did you accidentally export a JSX literal instead of a component?';
    		      } else {
    		        typeString = typeof type;
    		      }

    		      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    		    }

    		    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    		    // TODO: Drop this when these are no longer allowed as the type argument.

    		    if (element == null) {
    		      return element;
    		    } // Skip key warning if the type isn't valid since our key validation logic
    		    // doesn't expect a non-string/function type and can throw confusing errors.
    		    // We don't want exception behavior to differ between dev and prod.
    		    // (Rendering will throw with a helpful message and as soon as the type is
    		    // fixed, the key warnings will appear.)


    		    if (validType) {
    		      var children = props.children;

    		      if (children !== undefined) {
    		        if (isStaticChildren) {
    		          if (Array.isArray(children)) {
    		            for (var i = 0; i < children.length; i++) {
    		              validateChildKeys(children[i], type);
    		            }

    		            if (Object.freeze) {
    		              Object.freeze(children);
    		            }
    		          } else {
    		            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
    		          }
    		        } else {
    		          validateChildKeys(children, type);
    		        }
    		      }
    		    }

    		    if (type === exports.Fragment) {
    		      validateFragmentProps(element);
    		    } else {
    		      validatePropTypes(element);
    		    }

    		    return element;
    		  }
    		} // These two functions exist to still get child warnings in dev
    		// even with the prod transform. This means that jsxDEV is purely
    		// opt-in behavior for better messages but that we won't stop
    		// giving you warnings if you use production apis.

    		function jsxWithValidationStatic(type, props, key) {
    		  {
    		    return jsxWithValidation(type, props, key, true);
    		  }
    		}
    		function jsxWithValidationDynamic(type, props, key) {
    		  {
    		    return jsxWithValidation(type, props, key, false);
    		  }
    		}

    		var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
    		// for now we can ship identical prod functions

    		var jsxs =  jsxWithValidationStatic ;

    		exports.jsx = jsx;
    		exports.jsxs = jsxs;
    		  })();
    		} 
    	} (reactJsxRuntime_development));
    	return reactJsxRuntime_development;
    }

    if (process.env.NODE_ENV === 'production') {
      jsxRuntime.exports = requireReactJsxRuntime_production_min();
    } else {
      jsxRuntime.exports = requireReactJsxRuntime_development();
    }

    var jsxRuntimeExports = jsxRuntime.exports;

    var renderprops = {};

    function _objectWithoutPropertiesLoose$1(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }
      return target;
    }

    var objectWithoutPropertiesLoose = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: _objectWithoutPropertiesLoose$1
    });

    var require$$0 = /*@__PURE__*/getAugmentedNamespace(objectWithoutPropertiesLoose);

    function _extends$1() {
      _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends$1.apply(this, arguments);
    }

    var _extends$2 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        default: _extends$1
    });

    var require$$1 = /*@__PURE__*/getAugmentedNamespace(_extends$2);

    Object.defineProperty(renderprops, '__esModule', { value: true });

    function _interopDefault$1 (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

    var _objectWithoutPropertiesLoose = _interopDefault$1(require$$0);
    var _extends = _interopDefault$1(require$$1);
    var React = require$$0$1;
    var React__default = _interopDefault$1(React);
    var ReactDOM = _interopDefault$1(require$$3);

    let bugfixes = undefined;
    let applyAnimatedValues = undefined;
    let colorNames = [];
    let requestFrame = cb => typeof window !== 'undefined' && window.requestAnimationFrame(cb);
    let cancelFrame = cb => typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
    let interpolation = undefined;
    let now = () => Date.now();
    let defaultElement = undefined;
    let createAnimatedStyle = undefined;
    const injectApplyAnimatedValues = (fn, transform) => applyAnimatedValues = {
      fn,
      transform
    };
    const injectColorNames = names => colorNames = names;
    const injectBugfixes = fn => bugfixes = fn;
    const injectInterpolation = cls => interpolation = cls;
    const injectFrame = (raf, caf) => {
      var _ref = [raf, caf];
      requestFrame = _ref[0];
      cancelFrame = _ref[1];
      return _ref;
    };
    const injectNow = nowFn => now = nowFn;
    const injectDefaultElement = el => defaultElement = el;
    const injectCreateAnimatedStyle = factory => createAnimatedStyle = factory;

    var Globals = /*#__PURE__*/Object.freeze({
      get bugfixes () { return bugfixes; },
      get applyAnimatedValues () { return applyAnimatedValues; },
      get colorNames () { return colorNames; },
      get requestFrame () { return requestFrame; },
      get cancelFrame () { return cancelFrame; },
      get interpolation () { return interpolation; },
      get now () { return now; },
      get defaultElement () { return defaultElement; },
      get createAnimatedStyle () { return createAnimatedStyle; },
      injectApplyAnimatedValues: injectApplyAnimatedValues,
      injectColorNames: injectColorNames,
      injectBugfixes: injectBugfixes,
      injectInterpolation: injectInterpolation,
      injectFrame: injectFrame,
      injectNow: injectNow,
      injectDefaultElement: injectDefaultElement,
      injectCreateAnimatedStyle: injectCreateAnimatedStyle
    });

    class Animated {
      attach() {}

      detach() {}

      getValue() {}

      getAnimatedValue() {
        return this.getValue();
      }

      addChild(child) {}

      removeChild(child) {}

      getChildren() {
        return [];
      }

    }

    const getValues = object => Object.keys(object).map(k => object[k]);

    class AnimatedWithChildren extends Animated {
      constructor() {
        var _this;

        super(...arguments);
        _this = this;
        this.children = [];

        this.getChildren = () => this.children;

        this.getPayload = function (index) {
          if (index === void 0) {
            index = undefined;
          }

          return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _this;
        };
      }

      addChild(child) {
        if (this.children.length === 0) this.attach();
        this.children.push(child);
      }

      removeChild(child) {
        const index = this.children.indexOf(child);
        this.children.splice(index, 1);
        if (this.children.length === 0) this.detach();
      }

    }
    class AnimatedArrayWithChildren extends AnimatedWithChildren {
      constructor() {
        super(...arguments);
        this.payload = [];

        this.getAnimatedValue = () => this.getValue();

        this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

        this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
      }

    }
    class AnimatedObjectWithChildren extends AnimatedWithChildren {
      constructor() {
        super(...arguments);
        this.payload = {};

        this.getAnimatedValue = () => this.getValue(true);

        this.attach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

        this.detach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
      }

      getValue(animated) {
        if (animated === void 0) {
          animated = false;
        }

        const payload = {};

        for (const key in this.payload) {
          const value = this.payload[key];
          if (animated && !(value instanceof Animated)) continue;
          payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
        }

        return payload;
      }

    }

    class AnimatedStyle extends AnimatedObjectWithChildren {
      constructor(style) {
        super();
        style = style || {};
        if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
        this.payload = style;
      }

    }

    // http://www.w3.org/TR/css3-color/#svg-color
    const colors = {
      transparent: 0x00000000,
      aliceblue: 0xf0f8ffff,
      antiquewhite: 0xfaebd7ff,
      aqua: 0x00ffffff,
      aquamarine: 0x7fffd4ff,
      azure: 0xf0ffffff,
      beige: 0xf5f5dcff,
      bisque: 0xffe4c4ff,
      black: 0x000000ff,
      blanchedalmond: 0xffebcdff,
      blue: 0x0000ffff,
      blueviolet: 0x8a2be2ff,
      brown: 0xa52a2aff,
      burlywood: 0xdeb887ff,
      burntsienna: 0xea7e5dff,
      cadetblue: 0x5f9ea0ff,
      chartreuse: 0x7fff00ff,
      chocolate: 0xd2691eff,
      coral: 0xff7f50ff,
      cornflowerblue: 0x6495edff,
      cornsilk: 0xfff8dcff,
      crimson: 0xdc143cff,
      cyan: 0x00ffffff,
      darkblue: 0x00008bff,
      darkcyan: 0x008b8bff,
      darkgoldenrod: 0xb8860bff,
      darkgray: 0xa9a9a9ff,
      darkgreen: 0x006400ff,
      darkgrey: 0xa9a9a9ff,
      darkkhaki: 0xbdb76bff,
      darkmagenta: 0x8b008bff,
      darkolivegreen: 0x556b2fff,
      darkorange: 0xff8c00ff,
      darkorchid: 0x9932ccff,
      darkred: 0x8b0000ff,
      darksalmon: 0xe9967aff,
      darkseagreen: 0x8fbc8fff,
      darkslateblue: 0x483d8bff,
      darkslategray: 0x2f4f4fff,
      darkslategrey: 0x2f4f4fff,
      darkturquoise: 0x00ced1ff,
      darkviolet: 0x9400d3ff,
      deeppink: 0xff1493ff,
      deepskyblue: 0x00bfffff,
      dimgray: 0x696969ff,
      dimgrey: 0x696969ff,
      dodgerblue: 0x1e90ffff,
      firebrick: 0xb22222ff,
      floralwhite: 0xfffaf0ff,
      forestgreen: 0x228b22ff,
      fuchsia: 0xff00ffff,
      gainsboro: 0xdcdcdcff,
      ghostwhite: 0xf8f8ffff,
      gold: 0xffd700ff,
      goldenrod: 0xdaa520ff,
      gray: 0x808080ff,
      green: 0x008000ff,
      greenyellow: 0xadff2fff,
      grey: 0x808080ff,
      honeydew: 0xf0fff0ff,
      hotpink: 0xff69b4ff,
      indianred: 0xcd5c5cff,
      indigo: 0x4b0082ff,
      ivory: 0xfffff0ff,
      khaki: 0xf0e68cff,
      lavender: 0xe6e6faff,
      lavenderblush: 0xfff0f5ff,
      lawngreen: 0x7cfc00ff,
      lemonchiffon: 0xfffacdff,
      lightblue: 0xadd8e6ff,
      lightcoral: 0xf08080ff,
      lightcyan: 0xe0ffffff,
      lightgoldenrodyellow: 0xfafad2ff,
      lightgray: 0xd3d3d3ff,
      lightgreen: 0x90ee90ff,
      lightgrey: 0xd3d3d3ff,
      lightpink: 0xffb6c1ff,
      lightsalmon: 0xffa07aff,
      lightseagreen: 0x20b2aaff,
      lightskyblue: 0x87cefaff,
      lightslategray: 0x778899ff,
      lightslategrey: 0x778899ff,
      lightsteelblue: 0xb0c4deff,
      lightyellow: 0xffffe0ff,
      lime: 0x00ff00ff,
      limegreen: 0x32cd32ff,
      linen: 0xfaf0e6ff,
      magenta: 0xff00ffff,
      maroon: 0x800000ff,
      mediumaquamarine: 0x66cdaaff,
      mediumblue: 0x0000cdff,
      mediumorchid: 0xba55d3ff,
      mediumpurple: 0x9370dbff,
      mediumseagreen: 0x3cb371ff,
      mediumslateblue: 0x7b68eeff,
      mediumspringgreen: 0x00fa9aff,
      mediumturquoise: 0x48d1ccff,
      mediumvioletred: 0xc71585ff,
      midnightblue: 0x191970ff,
      mintcream: 0xf5fffaff,
      mistyrose: 0xffe4e1ff,
      moccasin: 0xffe4b5ff,
      navajowhite: 0xffdeadff,
      navy: 0x000080ff,
      oldlace: 0xfdf5e6ff,
      olive: 0x808000ff,
      olivedrab: 0x6b8e23ff,
      orange: 0xffa500ff,
      orangered: 0xff4500ff,
      orchid: 0xda70d6ff,
      palegoldenrod: 0xeee8aaff,
      palegreen: 0x98fb98ff,
      paleturquoise: 0xafeeeeff,
      palevioletred: 0xdb7093ff,
      papayawhip: 0xffefd5ff,
      peachpuff: 0xffdab9ff,
      peru: 0xcd853fff,
      pink: 0xffc0cbff,
      plum: 0xdda0ddff,
      powderblue: 0xb0e0e6ff,
      purple: 0x800080ff,
      rebeccapurple: 0x663399ff,
      red: 0xff0000ff,
      rosybrown: 0xbc8f8fff,
      royalblue: 0x4169e1ff,
      saddlebrown: 0x8b4513ff,
      salmon: 0xfa8072ff,
      sandybrown: 0xf4a460ff,
      seagreen: 0x2e8b57ff,
      seashell: 0xfff5eeff,
      sienna: 0xa0522dff,
      silver: 0xc0c0c0ff,
      skyblue: 0x87ceebff,
      slateblue: 0x6a5acdff,
      slategray: 0x708090ff,
      slategrey: 0x708090ff,
      snow: 0xfffafaff,
      springgreen: 0x00ff7fff,
      steelblue: 0x4682b4ff,
      tan: 0xd2b48cff,
      teal: 0x008080ff,
      thistle: 0xd8bfd8ff,
      tomato: 0xff6347ff,
      turquoise: 0x40e0d0ff,
      violet: 0xee82eeff,
      wheat: 0xf5deb3ff,
      white: 0xffffffff,
      whitesmoke: 0xf5f5f5ff,
      yellow: 0xffff00ff,
      yellowgreen: 0x9acd32ff
    };

    class Interpolation {
      // Default config = config, args
      // Short config   = range, output, extrapolate
      static create(config, output, extra) {
        if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
          range: config,
          output,
          extrapolate: extra || 'extend'
        });
        let outputRange = config.output;
        let inputRange = config.range || [0, 1];

        let easing = config.easing || (t => t);

        let extrapolateLeft = 'extend';
        let map = config.map;
        if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
        let extrapolateRight = 'extend';
        if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
        return input => {
          let range = findRange(input, inputRange);
          return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
        };
      }

    }

    function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
      let result = map ? map(input) : input; // Extrapolate

      if (result < inputMin) {
        if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
      }

      if (result > inputMax) {
        if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
      }

      if (outputMin === outputMax) return outputMin;
      if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

      if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

      result = easing(result); // Output Range

      if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
      return result;
    }

    function findRange(input, inputRange) {
      for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

      return i - 1;
    }

    // const INTEGER = '[-+]?\\d+';
    const NUMBER = '[-+]?\\d*\\.?\\d+';
    const PERCENTAGE = NUMBER + '%';

    function call() {
      return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
    }

    const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
    const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
    const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
    const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
    const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    const hex6 = /^#([0-9a-fA-F]{6})$/;
    const hex8 = /^#([0-9a-fA-F]{8})$/;

    /*
    https://github.com/react-community/normalize-css-color

    BSD 3-Clause License

    Copyright (c) 2016, React Community
    All rights reserved.

    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:

    * Redistributions of source code must retain the above copyright notice, this
      list of conditions and the following disclaimer.

    * Redistributions in binary form must reproduce the above copyright notice,
      this list of conditions and the following disclaimer in the documentation
      and/or other materials provided with the distribution.

    * Neither the name of the copyright holder nor the names of its
      contributors may be used to endorse or promote products derived from
      this software without specific prior written permission.

    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */
    function normalizeColor(color) {
      let match;

      if (typeof color === 'number') {
        return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
      } // Ordered based on occurrences on Facebook codebase


      if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
      if (colors.hasOwnProperty(color)) return colors[color];

      if (match = rgb.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        0x000000ff) >>> // a
        0;
      }

      if (match = rgba.exec(color)) {
        return (parse255(match[1]) << 24 | // r
        parse255(match[2]) << 16 | // g
        parse255(match[3]) << 8 | // b
        parse1(match[4])) >>> // a
        0;
      }

      if (match = hex3.exec(color)) {
        return parseInt(match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        'ff', // a
        16) >>> 0;
      } // https://drafts.csswg.org/css-color-4/#hex-notation


      if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

      if (match = hex4.exec(color)) {
        return parseInt(match[1] + match[1] + // r
        match[2] + match[2] + // g
        match[3] + match[3] + // b
        match[4] + match[4], // a
        16) >>> 0;
      }

      if (match = hsl.exec(color)) {
        return (hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
        ) | 0x000000ff) >>> // a
        0;
      }

      if (match = hsla.exec(color)) {
        return (hslToRgb(parse360(match[1]), // h
        parsePercentage(match[2]), // s
        parsePercentage(match[3]) // l
        ) | parse1(match[4])) >>> // a
        0;
      }

      return null;
    }

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    function hslToRgb(h, s, l) {
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      const r = hue2rgb(p, q, h + 1 / 3);
      const g = hue2rgb(p, q, h);
      const b = hue2rgb(p, q, h - 1 / 3);
      return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
    }

    function parse255(str) {
      const int = parseInt(str, 10);
      if (int < 0) return 0;
      if (int > 255) return 255;
      return int;
    }

    function parse360(str) {
      const int = parseFloat(str);
      return (int % 360 + 360) % 360 / 360;
    }

    function parse1(str) {
      const num = parseFloat(str);
      if (num < 0) return 0;
      if (num > 1) return 255;
      return Math.round(num * 255);
    }

    function parsePercentage(str) {
      // parseFloat conveniently ignores the final %
      const int = parseFloat(str);
      if (int < 0) return 0;
      if (int > 100) return 1;
      return int / 100;
    }

    function colorToRgba(input) {
      let int32Color = normalizeColor(input);
      if (int32Color === null) return input;
      int32Color = int32Color || 0;
      let r = (int32Color & 0xff000000) >>> 24;
      let g = (int32Color & 0x00ff0000) >>> 16;
      let b = (int32Color & 0x0000ff00) >>> 8;
      let a = (int32Color & 0x000000ff) / 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    } // Problem: https://github.com/animatedjs/animated/pull/102
    // Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


    const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
    // Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

    const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

    const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
    /**
     * Supports string shapes by extracting numbers so new values can be computed,
     * and recombines those values into new strings of the same shape.  Supports
     * things like:
     *
     *   rgba(123, 42, 99, 0.36)           // colors
     *   -45deg                            // values with units
     *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
     */

    function createInterpolation(config) {
      // Replace colors with rgba
      const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba)); // ->
      // [
      //   [0, 50],
      //   [100, 150],
      //   [200, 250],
      //   [0, 0.5],
      // ]

      const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
      outputRange.forEach(value => {
        value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
      });
      const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
        return Interpolation.create(_extends({}, config, {
          output: outputRanges[i]
        }));
      });
      return input => {
        let i = 0;
        return outputRange[0] // 'rgba(0, 100, 200, 0)'
        // ->
        // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
        .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
        // round the opacity (4th column).
        .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
      };
    }

    class AnimatedInterpolation extends AnimatedArrayWithChildren {
      constructor(parents, _config, _arg) {
        super();

        this.getValue = () => this.calc(...this.payload.map(value => value.getValue()));

        this.updateConfig = (config, arg) => this.calc = Interpolation.create(config, arg);

        this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

        this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
        parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
        this.calc = Interpolation.create(_config, _arg);
      }

    }
    const interpolate$1 = (parents, config, arg) => parents && new AnimatedInterpolation(parents, config, arg);

    /**
     * Animated works by building a directed acyclic graph of dependencies
     * transparently when you render your Animated components.
     *
     *               new Animated.Value(0)
     *     .interpolate()        .interpolate()    new Animated.Value(1)
     *         opacity               translateY      scale
     *          style                         transform
     *         View#234                         style
     *                                         View#123
     *
     * A) Top Down phase
     * When an Animated.Value is updated, we recursively go down through this
     * graph in order to find leaf nodes: the views that we flag as needing
     * an update.
     *
     * B) Bottom Up phase
     * When a view is flagged as needing an update, we recursively go back up
     * in order to build the new value that it needs. The reason why we need
     * this two-phases process is to deal with composite props such as
     * transform which can receive values from multiple parents.
     */

    function findAnimatedStyles(node, styles) {
      if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(child => findAnimatedStyles(child, styles));
    }
    /**
     * Standard value for driving animations.  One `Animated.Value` can drive
     * multiple properties in a synchronized fashion, but can only be driven by one
     * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
     * or calling `setValue`) will stop any previous ones.
     */


    class AnimatedValue extends AnimatedWithChildren {
      constructor(_value) {
        var _this;

        super();
        _this = this;

        this.setValue = function (value, flush) {
          if (flush === void 0) {
            flush = true;
          }

          _this.value = value;
          if (flush) _this.flush();
        };

        this.getValue = () => this.value;

        this.updateStyles = () => findAnimatedStyles(this, this.animatedStyles);

        this.updateValue = value => this.flush(this.value = value);

        this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

        this.value = _value;
        this.animatedStyles = new Set();
        this.done = false;
        this.startPosition = _value;
        this.lastPosition = _value;
        this.lastVelocity = undefined;
        this.lastTime = undefined;
        this.controller = undefined;
      }

      flush() {
        if (this.animatedStyles.size === 0) this.updateStyles();
        this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
      }

      prepare(controller) {
        // Values stay loyal to their original controller, this is also a way to
        // detect trailing values originating from a foreign controller
        if (this.controller === undefined) this.controller = controller;

        if (this.controller === controller) {
          this.startPosition = this.value;
          this.lastPosition = this.value;
          this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
          this.lastTime = controller.isActive ? this.lastTime : undefined;
          this.done = false;
          this.animatedStyles.clear();
        }
      }

    }

    class AnimatedArray extends AnimatedArrayWithChildren {
      constructor(array) {
        var _this;

        super();
        _this = this;

        this.setValue = function (value, flush) {
          if (flush === void 0) {
            flush = true;
          }

          if (Array.isArray(value)) {
            if (value.length === _this.payload.length) value.forEach((v, i) => _this.payload[i].setValue(v, flush));
          } else _this.payload.forEach((v, i) => _this.payload[i].setValue(value, flush));
        };

        this.getValue = () => this.payload.map(v => v.getValue());

        this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

        this.payload = array.map(n => new AnimatedValue(n));
      }

    }

    function withDefault(value, defaultValue) {
      return value === undefined || value === null ? defaultValue : value;
    }
    function toArray(a) {
      return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
    }
    function shallowEqual(a, b) {
      if (typeof a !== typeof b) return false;
      if (typeof a === 'string' || typeof a === 'number') return a === b;
      let i;

      for (i in a) if (!(i in b)) return false;

      for (i in b) if (a[i] !== b[i]) return false;

      return i === void 0 ? a === b : true;
    }
    function callProp(obj) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return typeof obj === 'function' ? obj(...args) : obj;
    }
    function getValues$1(object) {
      return Object.keys(object).map(k => object[k]);
    }
    function getForwardProps(props) {
      props.to;
            props.from;
            props.config;
            props.native;
            props.onStart;
            props.onRest;
            props.onFrame;
            props.children;
            props.reset;
            props.reverse;
            props.force;
            props.immediate;
            props.impl;
            props.inject;
            props.delay;
            props.attach;
            props.destroyed;
            props.interpolateTo;
            props.autoStart;
            props.ref;
            const forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

      return forward;
    }
    function interpolateTo(props) {
      const forward = getForwardProps(props);
      const rest = Object.keys(props).reduce((a, k) => forward[k] !== void 0 ? a : _extends({}, a, {
        [k]: props[k]
      }), {});
      return _extends({
        to: forward
      }, rest);
    }
    function convertToAnimatedValue(acc, _ref) {
      let name = _ref[0],
          value = _ref[1];
      return _extends({}, acc, {
        [name]: new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value)
      });
    }
    function convertValues(props) {
      const from = props.from,
            to = props.to,
            native = props.native;
      const allProps = Object.entries(_extends({}, from, to));
      return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
    }
    function handleRef(ref, forward) {
      if (forward) {
        // If it's a function, assume it's a ref callback
        if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
          // If it's an object and has a 'current' property, assume it's a ref object
          forward.current = ref;
        }
      }

      return ref;
    }

    const check = value => value === 'auto';

    const overwrite = (width, height) => (acc, _ref) => {
      let name = _ref[0],
          value = _ref[1];
      return _extends({}, acc, {
        [name]: value === 'auto' ? ~name.indexOf('height') ? height : width : value
      });
    };

    function fixAuto(props, callback) {
      const from = props.from,
            to = props.to,
            children = props.children; // Dry-route props back if nothing's using 'auto' in there
      // TODO: deal with "null"

      if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

      let element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

      if (!element) return; // Or it could be an array (#346) ...

      if (Array.isArray(element)) element = {
        type: 'div',
        props: {
          children: element
        } // Extract styles

      };
      const elementStyles = element.props.style; // Return v.dom with injected ref

      return React__default.createElement(element.type, _extends({
        key: element.key ? element.key : undefined
      }, element.props, {
        style: _extends({}, elementStyles, {
          position: 'absolute',
          visibility: 'hidden'
        }),
        ref: _ref2 => {
          if (_ref2) {
            // Once it's rendered out, fetch bounds (minus padding/margin/borders)
            let node = ReactDOM.findDOMNode(_ref2);
            let width, height;
            let cs = getComputedStyle(node);

            if (cs.boxSizing === 'border-box') {
              width = node.offsetWidth;
              height = node.offsetHeight;
            } else {
              const paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
              const paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
              const borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
              const borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
              width = node.offsetWidth - paddingX - borderX;
              height = node.offsetHeight - paddingY - borderY;
            }

            const convert = overwrite(width, height);
            callback(_extends({}, props, {
              from: Object.entries(from).reduce(convert, from),
              to: Object.entries(to).reduce(convert, to)
            }));
          }
        }
      }));
    }

    let isUnitlessNumber = {
      animationIterationCount: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      // SVG-related properties
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };

    const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

    const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
    isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
      prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
      return acc;
    }, isUnitlessNumber);

    function dangerousStyleValue(name, value, isCustomProperty) {
      if (value == null || typeof value === 'boolean' || value === '') return '';
      if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

      return ('' + value).trim();
    }

    const attributeCache = {};
    injectCreateAnimatedStyle(style => new AnimatedStyle(style));
    injectDefaultElement('div');
    injectInterpolation(createInterpolation);
    injectColorNames(colors);
    injectBugfixes(fixAuto);
    injectApplyAnimatedValues((instance, props) => {
      if (instance.nodeType && instance.setAttribute !== undefined) {
        const style = props.style,
              children = props.children,
              scrollTop = props.scrollTop,
              scrollLeft = props.scrollLeft,
              attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

        if (scrollTop !== void 0) instance.scrollTop = scrollTop;
        if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

        if (children !== void 0) instance.textContent = children; // Set styles ...

        for (let styleName in style) {
          if (!style.hasOwnProperty(styleName)) continue;
          var isCustomProperty = styleName.indexOf('--') === 0;
          var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
          if (styleName === 'float') styleName = 'cssFloat';
          if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
        } // Set attributes ...


        for (let name in attributes) {
          // Attributes are written in dash case
          const dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
          if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
        }
      } else return false;
    }, style => style);

    let active = false;
    const controllers = new Set();

    const frameLoop = () => {
      let time = now();

      for (let controller of controllers) {
        let isDone = true;
        let noChange = true;

        for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
          let config = controller.configs[configIdx];
          let endOfAnimation, lastTime;

          for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
            let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

            if (animation.done) continue;
            let from = config.fromValues[valIdx];
            let to = config.toValues[valIdx];
            let position = animation.lastPosition;
            let isAnimated = to instanceof Animated;
            let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
            if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

            if (config.immediate || !isAnimated && !config.decay && from === to) {
              animation.updateValue(to);
              animation.done = true;
              continue;
            } // Doing delay here instead of setTimeout is one async worry less


            if (config.delay && time - controller.startTime < config.delay) {
              isDone = false;
              continue;
            } // Flag change


            noChange = false; // Break animation when string values are involved

            if (typeof from === 'string' || typeof to === 'string') {
              animation.updateValue(to);
              animation.done = true;
              continue;
            }

            if (config.duration !== void 0) {
              /** Duration easing */
              position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
              endOfAnimation = time >= controller.startTime + config.delay + config.duration;
            } else if (config.decay) {
              /** Decay easing */
              position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
              endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
              if (endOfAnimation) to = position;
            } else {
              /** Spring easing */
              lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
              velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

              if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

              let numSteps = Math.floor(time - lastTime);

              for (let i = 0; i < numSteps; ++i) {
                let force = -config.tension * (position - to);
                let damping = -config.friction * velocity;
                let acceleration = (force + damping) / config.mass;
                velocity = velocity + acceleration * 1 / 1000;
                position = position + velocity * 1 / 1000;
              } // Conditions for stopping the spring animation


              let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
              let isVelocity = Math.abs(velocity) <= config.precision;
              let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
              endOfAnimation = isOvershooting || isVelocity && isDisplacement;
              animation.lastVelocity = velocity;
              animation.lastTime = time;
            } // Trails aren't done until their parents conclude


            if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

            if (endOfAnimation) {
              // Ensure that we end up with a round value
              if (animation.value !== to) position = to;
              animation.done = true;
            } else isDone = false;

            animation.updateValue(position);
            animation.lastPosition = position;
          } // Keep track of updated values only when necessary


          if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
        } // Update callbacks in the end of the frame


        if (controller.props.onFrame || !controller.props.native) {
          if (!controller.props.native && controller.onUpdate) controller.onUpdate();
          if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
        } // Either call onEnd or next frame


        if (isDone) {
          controllers.delete(controller);
          controller.debouncedOnEnd({
            finished: true,
            noChange
          });
        }
      } // Loop over as long as there are controllers ...


      if (controllers.size) requestFrame(frameLoop);else active = false;
    };

    const addController = controller => {
      if (!controllers.has(controller)) {
        controllers.add(controller);
        if (!active) requestFrame(frameLoop);
        active = true;
      }
    };

    const removeController = controller => {
      if (controllers.has(controller)) {
        controllers.delete(controller);
      }
    };

    class Controller {
      constructor(props, config) {
        if (config === void 0) {
          config = {
            native: true,
            interpolateTo: true,
            autoStart: true
          };
        }

        this.getValues = () => this.props.native ? this.interpolations : this.animatedProps;

        this.dependents = new Set();
        this.isActive = false;
        this.hasChanged = false;
        this.props = {};
        this.merged = {};
        this.animations = {};
        this.interpolations = {};
        this.animatedProps = {};
        this.configs = [];
        this.frame = undefined;
        this.startTime = undefined;
        this.lastTime = undefined;
        this.update(_extends({}, props, config));
      }

      update(props) {
        this.props = _extends({}, this.props, props);

        let _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
            _ref$from = _ref.from,
            from = _ref$from === void 0 ? {} : _ref$from,
            _ref$to = _ref.to,
            to = _ref$to === void 0 ? {} : _ref$to,
            _ref$config = _ref.config,
            config = _ref$config === void 0 ? {} : _ref$config,
            _ref$delay = _ref.delay,
            delay = _ref$delay === void 0 ? 0 : _ref$delay,
            reverse = _ref.reverse,
            attach = _ref.attach,
            reset = _ref.reset,
            immediate = _ref.immediate,
            autoStart = _ref.autoStart,
            ref = _ref.ref; // Reverse values when requested


        if (reverse) {
          var _ref2 = [to, from];
          from = _ref2[0];
          to = _ref2[1];
        }

        this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

        let target = attach && attach(this); // Reset merged props when necessary

        let extra = reset ? {} : this.merged; // This will collect all props that were ever set

        this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

        this.animations = Object.entries(this.merged).reduce((acc, _ref3, i) => {
          let name = _ref3[0],
              value = _ref3[1];
          // Issue cached entries, except on reset
          let entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

          const isNumber = typeof value === 'number';
          const isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
          const isArray = !isNumber && !isString && Array.isArray(value);
          let fromValue = from[name] !== undefined ? from[name] : value;
          let toValue = isNumber || isArray ? value : isString ? value : 1;
          let toConfig = callProp(config, name);
          if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

          if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
            this.hasChanged = true;
            let parent, interpolation$$1;
            if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
              const prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

              if (entry.parent) {
                parent = entry.parent;
                parent.setValue(0, false);
              } else parent = new AnimatedValue(0);

              const range = {
                output: [prev !== void 0 ? prev : fromValue, value]
              };

              if (entry.interpolation) {
                interpolation$$1 = entry.interpolation;
                entry.interpolation.updateConfig(range);
              } else interpolation$$1 = parent.interpolate(range);
            } // Set immediate values

            if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

            const animatedValues = toArray(parent.getPayload());
            animatedValues.forEach(value => value.prepare(this));
            return _extends({}, acc, {
              [name]: _extends({}, entry, {
                name,
                parent,
                interpolation: interpolation$$1,
                animatedValues,
                changes: value,
                fromValues: toArray(parent.getValue()),
                toValues: toArray(target ? toValue.getPayload() : toValue),
                immediate: callProp(immediate, name),
                delay: withDefault(toConfig.delay, delay || 0),
                initialVelocity: withDefault(toConfig.velocity, 0),
                clamp: withDefault(toConfig.clamp, false),
                precision: withDefault(toConfig.precision, 0.01),
                tension: withDefault(toConfig.tension, 170),
                friction: withDefault(toConfig.friction, 26),
                mass: withDefault(toConfig.mass, 1),
                duration: toConfig.duration,
                easing: withDefault(toConfig.easing, t => t),
                decay: toConfig.decay
              })
            });
          } else return acc;
        }, this.animations);

        if (this.hasChanged) {
          this.configs = getValues$1(this.animations);
          this.animatedProps = {};
          this.interpolations = {};

          for (let key in this.animations) {
            this.interpolations[key] = this.animations[key].interpolation;
            this.animatedProps[key] = this.animations[key].interpolation.getValue();
          }
        } // TODO: clean up ref in controller


        for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          start[_key - 1] = arguments[_key];
        }

        if (!ref && (autoStart || start.length)) this.start(...start);
        const onEnd = start[0],
              onUpdate = start[1];
        this.onEnd = typeof onEnd === 'function' && onEnd;
        this.onUpdate = onUpdate;
        return this.getValues();
      }

      start(onEnd, onUpdate) {
        this.startTime = now();
        if (this.isActive) this.stop();
        this.isActive = true;
        this.onEnd = typeof onEnd === 'function' && onEnd;
        this.onUpdate = onUpdate;
        if (this.props.onStart) this.props.onStart();
        addController(this);
        return new Promise(res => this.resolve = res);
      }

      stop(finished) {
        if (finished === void 0) {
          finished = false;
        }

        // Reset collected changes since the animation has been stopped cold turkey
        if (finished) getValues$1(this.animations).forEach(a => a.changes = undefined);
        this.debouncedOnEnd({
          finished
        });
      }

      destroy() {
        removeController(this);
        this.props = {};
        this.merged = {};
        this.animations = {};
        this.interpolations = {};
        this.animatedProps = {};
        this.configs = [];
      }

      debouncedOnEnd(result) {
        removeController(this);
        this.isActive = false;
        const onEnd = this.onEnd;
        this.onEnd = null;
        if (onEnd) onEnd(result);
        if (this.resolve) this.resolve();
        this.resolve = null;
      }

    }

    class AnimatedProps extends AnimatedObjectWithChildren {
      constructor(props, callback) {
        super();
        if (props.style) props = _extends({}, props, {
          style: createAnimatedStyle(props.style)
        });
        this.payload = props;
        this.update = callback;
        this.attach();
      }

    }

    function createAnimatedComponent(Component) {
      class AnimatedComponent extends React__default.Component {
        constructor(props) {
          super();

          this.callback = () => {
            if (this.node) {
              const didUpdate = applyAnimatedValues.fn(this.node, this.propsAnimated.getAnimatedValue(), this);
              if (didUpdate === false) this.forceUpdate();
            }
          };

          this.attachProps(props);
        }

        componentWillUnmount() {
          this.propsAnimated && this.propsAnimated.detach();
        }

        setNativeProps(props) {
          const didUpdate = applyAnimatedValues.fn(this.node, props, this);
          if (didUpdate === false) this.forceUpdate();
        } // The system is best designed when setNativeProps is implemented. It is
        // able to avoid re-rendering and directly set the attributes that
        // changed. However, setNativeProps can only be implemented on leaf
        // native components. If you want to animate a composite component, you
        // need to re-render it. In this case, we have a fallback that uses
        // forceUpdate.


        attachProps(_ref) {
          _ref.forwardRef;
              let nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

          const oldPropsAnimated = this.propsAnimated;
          this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
          // of children. If it goes to 0, then the parent also detaches itself
          // and so on.
          // An optimization is to attach the new elements and THEN detach the old
          // ones instead of detaching and THEN attaching.
          // This way the intermediate state isn't to go to 0 and trigger
          // this expensive recursive detaching to then re-attach everything on
          // the very next operation.

          oldPropsAnimated && oldPropsAnimated.detach();
        }

        shouldComponentUpdate(props) {
          const style = props.style,
                nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

          const _this$props = this.props,
                currentStyle = _this$props.style,
                currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

          if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
            this.attachProps(props);
            return true;
          }

          return false;
        }

        render() {
          const _this$propsAnimated$g = this.propsAnimated.getValue();
                _this$propsAnimated$g.scrollTop;
                _this$propsAnimated$g.scrollLeft;
                const animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

          return React__default.createElement(Component, _extends({}, animatedProps, {
            ref: node => this.node = handleRef(node, this.props.forwardRef)
          }));
        }

      }

      return React__default.forwardRef((props, ref) => React__default.createElement(AnimatedComponent, _extends({}, props, {
        forwardRef: ref
      })));
    }

    const config = {
      default: {
        tension: 170,
        friction: 26
      },
      gentle: {
        tension: 120,
        friction: 14
      },
      wobbly: {
        tension: 180,
        friction: 12
      },
      stiff: {
        tension: 210,
        friction: 20
      },
      slow: {
        tension: 280,
        friction: 60
      },
      molasses: {
        tension: 280,
        friction: 120
      }
    };

    class Spring extends React__default.Component {
      constructor() {
        super(...arguments);
        this.state = {
          lastProps: {
            from: {},
            to: {}
          },
          propsChanged: false,
          internal: false
        };
        this.controller = new Controller(null, null);
        this.didUpdate = false;
        this.didInject = false;
        this.finished = true;

        this.start = () => {
          this.finished = false;
          let wasMounted = this.mounted;
          this.controller.start(props => this.finish(_extends({}, props, {
            wasMounted
          })), this.update);
        };

        this.stop = () => this.controller.stop(true);

        this.update = () => this.mounted && this.setState({
          internal: true
        });

        this.finish = (_ref) => {
          let finished = _ref.finished,
              noChange = _ref.noChange,
              wasMounted = _ref.wasMounted;
          this.finished = true;

          if (this.mounted && finished) {
            // Only call onRest if either we *were* mounted, or when there were changes
            if (this.props.onRest && (wasMounted || !noChange)) this.props.onRest(this.controller.merged); // Restore end-state

            if (this.mounted && this.didInject) {
              this.afterInject = convertValues(this.props);
              this.setState({
                internal: true
              });
            } // If we have an inject or values to apply after the animation we ping here


            if (this.mounted && (this.didInject || this.props.after)) this.setState({
              internal: true
            });
            this.didInject = false;
          }
        };
      }

      componentDidMount() {
        // componentDidUpdate isn't called on mount, we call it here to start animating
        this.componentDidUpdate();
        this.mounted = true;
      }

      componentWillUnmount() {
        // Stop all ongoing animtions
        this.mounted = false;
        this.stop();
      }

      static getDerivedStateFromProps(props, _ref2) {
        let internal = _ref2.internal,
            lastProps = _ref2.lastProps;
        // The following is a test against props that could alter the animation
        const from = props.from,
              to = props.to,
              reset = props.reset,
              force = props.force;
        const propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
        return {
          propsChanged,
          lastProps: props,
          internal: false
        };
      }

      render() {
        const children = this.props.children;
        const propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
        // Handle injected frames, for instance targets/web/fix-auto
        // An inject will return an intermediary React node which measures itself out
        // .. and returns a callback when the values sought after are ready, usually "auto".

        if (this.props.inject && propsChanged && !this.injectProps) {
          const frame = this.props.inject(this.props, injectProps => {
            // The inject frame has rendered, now let's update animations...
            this.injectProps = injectProps;
            this.setState({
              internal: true
            });
          }); // Render out injected frame

          if (frame) return frame;
        } // Update phase -----------------------------------------------------------


        if (this.injectProps || propsChanged) {
          // We can potentially cause setState, but we're inside render, the flag prevents that
          this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
          // An update can occur on injected props, or when own-props have changed.

          if (this.injectProps) {
            this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
            // .. will be restored after the animation is finished. When someone animates towards
            // .. "auto", the end-result should be "auto", not "1999px", which would block nested
            // .. height/width changes.

            this.didInject = true;
          } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


          this.didUpdate = true;
          this.afterInject = undefined;
          this.injectProps = undefined;
        } // Render phase -----------------------------------------------------------
        // Render out raw values or AnimatedValues depending on "native"


        let values = _extends({}, this.controller.getValues(), this.afterInject);

        if (this.finished) values = _extends({}, values, this.props.after);
        return Object.keys(values).length ? children(values) : null;
      }

      componentDidUpdate() {
        // The animation has to start *after* render, since at that point the scene
        // .. graph should be established, so we do it here. Unfortunatelly, non-native
        // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
        // .. didUpdate prevents that as it gets set only on prop changes.
        if (this.didUpdate) this.start();
        this.didUpdate = false;
      }

    }
    Spring.defaultProps = {
      from: {},
      to: {},
      config: config.default,
      native: false,
      immediate: false,
      reset: false,
      force: false,
      inject: bugfixes
    };

    class Trail extends React__default.PureComponent {
      constructor() {
        super(...arguments);
        this.first = true;
        this.instances = new Set();

        this.hook = (instance, index, length, reverse) => {
          // Add instance to set
          this.instances.add(instance); // Return undefined on the first index and from then on the previous instance

          if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(this.instances)[reverse ? index + 1 : index - 1];
        };
      }

      render() {
        const _this$props = this.props,
              items = _this$props.items,
              _children = _this$props.children,
              _this$props$from = _this$props.from,
              from = _this$props$from === void 0 ? {} : _this$props$from,
              initial = _this$props.initial,
              reverse = _this$props.reverse,
              keys = _this$props.keys,
              delay = _this$props.delay,
              onRest = _this$props.onRest,
              props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

        const array = toArray(items);
        return toArray(array).map((item, i) => React__default.createElement(Spring, _extends({
          onRest: i === 0 ? onRest : null,
          key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
          from: this.first && initial !== void 0 ? initial || {} : from
        }, props, {
          delay: i === 0 && delay || undefined,
          attach: instance => this.hook(instance, i, array.length, reverse),
          children: props => {
            const child = _children(item, i);

            return child ? child(props) : null;
          }
        })));
      }

      componentDidUpdate(prevProps) {
        this.first = false;
        if (prevProps.items !== this.props.items) this.instances.clear();
      }

    }
    Trail.defaultProps = {
      keys: item => item
    };

    const DEFAULT = '__default';

    class KeyframesImpl extends React__default.PureComponent {
      constructor() {
        var _this;

        super(...arguments);
        _this = this;
        this.guid = 0;
        this.state = {
          props: {},
          resolve: () => null,
          last: true,
          index: 0
        };

        this.next = function (props, last, index) {
          if (last === void 0) {
            last = true;
          }

          if (index === void 0) {
            index = 0;
          }

          _this.running = true;
          return new Promise(resolve => {
            _this.mounted && _this.setState(state => ({
              props,
              resolve,
              last,
              index
            }), () => _this.running = false);
          });
        };
      }

      componentDidMount() {
        this.mounted = true;
        this.componentDidUpdate({});
      }

      componentWillUnmount() {
        this.mounted = false;
      }

      componentDidUpdate(previous) {
        var _this2 = this;

        const _this$props = this.props,
              states = _this$props.states,
              f = _this$props.filter,
              state = _this$props.state;

        if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
          if (states && state && states[state]) {
            const localId = ++this.guid;
            const slots = states[state];

            if (slots) {
              if (Array.isArray(slots)) {
                let q = Promise.resolve();

                for (let i = 0; i < slots.length; i++) {
                  let index = i;
                  let slot = slots[index];
                  let last = index === slots.length - 1;
                  q = q.then(() => localId === this.guid && this.next(f(slot), last, index));
                }
              } else if (typeof slots === 'function') {
                let index = 0;
                slots( // next
                function (props, last) {
                  if (last === void 0) {
                    last = false;
                  }

                  return localId === _this2.guid && _this2.next(f(props), last, index++);
                }, // cancel
                () => requestFrame(() => this.instance && this.instance.stop()), // ownprops
                this.props);
              } else {
                this.next(f(states[state]));
              }
            }
          }
        }
      }

      render() {
        const _this$state = this.state,
              props = _this$state.props,
              resolve = _this$state.resolve,
              last = _this$state.last,
              index = _this$state.index;
        if (!props || Object.keys(props).length === 0) return null;

        let _this$props2 = this.props;
            _this$props2.state;
            _this$props2.filter;
            _this$props2.states;
            let config = _this$props2.config,
            Component = _this$props2.primitive,
            _onRest = _this$props2.onRest,
            forwardRef = _this$props2.forwardRef,
            rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


        if (Array.isArray(config)) config = config[index];
        return React__default.createElement(Component, _extends({
          ref: _ref => this.instance = handleRef(_ref, forwardRef),
          config: config
        }, rest, props, {
          onRest: args => {
            resolve(args);
            if (_onRest && last) _onRest(args);
          }
        }));
      }

    }

    KeyframesImpl.defaultProps = {
      state: DEFAULT
    };
    const Keyframes = React__default.forwardRef((props, ref) => React__default.createElement(KeyframesImpl, _extends({}, props, {
      forwardRef: ref
    })));

    Keyframes.create = primitive => function (states, filter) {
      if (filter === void 0) {
        filter = states => states;
      }

      if (typeof states === 'function' || Array.isArray(states)) states = {
        [DEFAULT]: states
      };
      return props => React__default.createElement(KeyframesImpl, _extends({
        primitive: primitive,
        states: states,
        filter: filter
      }, props));
    };

    Keyframes.Spring = states => Keyframes.create(Spring)(states, interpolateTo);

    Keyframes.Trail = states => Keyframes.create(Trail)(states, interpolateTo);

    let guid = 0;

    let get = props => {
      let items = props.items,
          keys = props.keys,
          rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

      items = toArray(items !== void 0 ? items : null);
      keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

      return _extends({
        items,
        keys: keys.map(key => String(key))
      }, rest);
    };

    class Transition extends React__default.PureComponent {
      componentDidMount() {
        this.mounted = true;
      }

      componentWillUnmount() {
        this.mounted = false;
      }

      constructor(prevProps) {
        super(prevProps);

        this.destroyItem = (item, key, state) => values => {
          const _this$props = this.props,
                onRest = _this$props.onRest,
                onDestroyed = _this$props.onDestroyed;

          if (this.mounted) {
            onDestroyed && onDestroyed(item);
            this.setState((_ref) => {
              let deleted = _ref.deleted;
              return {
                deleted: deleted.filter(t => t.key !== key)
              };
            });
            onRest && onRest(item, state, values);
          }
        };

        this.state = {
          first: true,
          transitions: [],
          current: {},
          deleted: [],
          prevProps
        };
      }

      static getDerivedStateFromProps(props, _ref2) {
        let first = _ref2.first,
            prevProps = _ref2.prevProps,
            state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

        let _get = get(props),
            items = _get.items,
            keys = _get.keys,
            initial = _get.initial,
            from = _get.from,
            enter = _get.enter,
            leave = _get.leave,
            update = _get.update,
            _get$trail = _get.trail,
            trail = _get$trail === void 0 ? 0 : _get$trail,
            unique = _get.unique,
            config = _get.config;

        let _get2 = get(prevProps),
            _keys = _get2.keys,
            _items = _get2.items;

        let current = _extends({}, state.current);

        let deleted = [...state.deleted]; // Compare next keys with current keys

        let currentKeys = Object.keys(current);
        let currentSet = new Set(currentKeys);
        let nextSet = new Set(keys);
        let added = keys.filter(item => !currentSet.has(item));
        let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
        let updated = keys.filter(item => currentSet.has(item));
        let delay = 0;
        added.forEach(key => {
          // In unique mode, remove fading out transitions if their key comes in again
          if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
          const keyIndex = keys.indexOf(key);
          const item = items[keyIndex];
          const state = 'enter';
          current[key] = {
            state,
            originalKey: key,
            key: unique ? String(key) : guid++,
            item,
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
            to: callProp(enter, item)
          };
        });
        removed.forEach(key => {
          const keyIndex = _keys.indexOf(key);

          const item = _items[keyIndex];
          const state = 'leave';
          deleted.push(_extends({}, current[key], {
            state,
            destroyed: true,
            left: _keys[Math.max(0, keyIndex - 1)],
            right: _keys[Math.min(_keys.length, keyIndex + 1)],
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            to: callProp(leave, item)
          }));
          delete current[key];
        });
        updated.forEach(key => {
          const keyIndex = keys.indexOf(key);
          const item = items[keyIndex];
          const state = 'update';
          current[key] = _extends({}, current[key], {
            item,
            state,
            trail: delay = delay + trail,
            config: callProp(config, item, state),
            to: callProp(update, item)
          });
        }); // This tries to restore order for deleted items by finding their last known siblings

        let out = keys.map(key => current[key]);
        deleted.forEach((_ref3) => {
          let left = _ref3.left,
              right = _ref3.right,
              transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

          let pos; // Was it the element on the left, if yes, move there ...

          if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // Or how about the element on the right ...

          if (pos === -1) pos = out.findIndex(t => t.originalKey === right); // Maybe we'll find it in the list of deleted items

          if (pos === -1) pos = deleted.findIndex(t => t.originalKey === left); // Checking right side as well

          if (pos === -1) pos = deleted.findIndex(t => t.originalKey === right); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

          pos = Math.max(0, pos);
          out = [...out.slice(0, pos), transition, ...out.slice(pos)];
        });
        return {
          first: first && added.length === 0,
          transitions: out,
          current,
          deleted,
          prevProps: props
        };
      }

      render() {
        const _this$props2 = this.props;
              _this$props2.initial;
              _this$props2.from;
              _this$props2.enter;
              _this$props2.leave;
              _this$props2.update;
              _this$props2.onDestroyed;
              _this$props2.keys;
              _this$props2.items;
              const onFrame = _this$props2.onFrame,
              onRest = _this$props2.onRest,
              onStart = _this$props2.onStart;
              _this$props2.trail;
              _this$props2.config;
              const _children = _this$props2.children;
              _this$props2.unique;
              const reset = _this$props2.reset,
              extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

        return this.state.transitions.map((_ref4, i) => {
          let state = _ref4.state,
              key = _ref4.key,
              item = _ref4.item,
              from = _ref4.from,
              to = _ref4.to,
              trail = _ref4.trail,
              config = _ref4.config,
              destroyed = _ref4.destroyed;
          return React__default.createElement(Keyframes, _extends({
            reset: reset && state === 'enter',
            primitive: Spring,
            state: state,
            filter: interpolateTo,
            states: {
              [state]: to
            },
            key: key,
            onRest: destroyed ? this.destroyItem(item, key, state) : onRest && (values => onRest(item, state, values)),
            onStart: onStart && (() => onStart(item, state)),
            onFrame: onFrame && (values => onFrame(item, state, values)),
            delay: trail,
            config: config
          }, extra, {
            from: from,
            children: props => {
              const child = _children(item, state, i);

              return child ? child(props) : null;
            }
          }));
        });
      }

    }
    Transition.defaultProps = {
      keys: item => item,
      unique: false,
      reset: false
    };

    const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
    'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
    const extendedAnimated = domElements.reduce((acc, element) => {
      acc[element] = createAnimatedComponent(element);
      return acc;
    }, createAnimatedComponent);

    var Spring_1 = renderprops.Spring = Spring;
    renderprops.Keyframes = Keyframes;
    renderprops.Transition = Transition;
    renderprops.Trail = Trail;
    renderprops.Controller = Controller;
    var config_1 = renderprops.config = config;
    var animated = renderprops.animated = extendedAnimated;
    renderprops.interpolate = interpolate$1;
    renderprops.Globals = Globals;

    var Minus = function (props) { return (jsxRuntimeExports.jsx("svg", __assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntimeExports.jsx("g", { children: jsxRuntimeExports.jsx("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 347h-442q-14 0 -25 10.5t-11 25.5v0q0 15 11 25.5t25 10.5h442q14 0 25 -10.5t11 -25.5v0\n  q0 -15 -11 -25.5t-25 -10.5z" }) }) }))); };
    var Plus = function (props) { return (jsxRuntimeExports.jsx("svg", __assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntimeExports.jsx("g", { children: jsxRuntimeExports.jsx("path", { d: "M888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0zM732 420h-184v183q0 15 -10.5 25.5t-25.5 10.5v0q-14 0 -25 -10.5t-11 -25.5v-183h-184\n  q-15 0 -25.5 -11t-10.5 -25v0q0 -15 10.5 -25.5t25.5 -10.5h184v-183q0 -15 11 -25.5t25 -10.5v0q15 0 25.5 10.5t10.5 25.5v183h184q15 0 25.5 10.5t10.5 25.5v0q0 14 -10.5 25t-25.5 11z" }) }) }))); };
    var Eye = function (props) { return (jsxRuntimeExports.jsx("svg", __assign({}, props, { viewBox: "61 51 902 666", children: jsxRuntimeExports.jsx("g", { children: jsxRuntimeExports.jsx("path", { d: "M963 384q0 14 -21 62q-26 65 -61 109q-57 71 -139 112q-99 50 -230 50t-231 -50q-80 -41 -138 -112q-34 -43 -61 -109q-21 -48 -21 -62v0v0v0v0q0 -14 21 -62q27 -66 61 -109q57 -71 139 -112q100 -50 230 -50t230 50q81 41 139 112q35 44 62 109q20 48 20 62v0v0v0v0z\n  M889 384q-25 -77 -64 -126h-1q-46 -59 -114 -93q-85 -42 -198.5 -42t-198.5 42q-67 34 -114 93q-40 49 -65 126q25 77 65 126q47 59 114 93q85 43 199 43t198 -43q67 -33 114 -93q40 -49 65 -126zM512 558q-72 0 -122.5 -50.5t-50.5 -122.5t50.5 -122.5t122.5 -50.5\n  t122.5 50.5t50.5 122.5t-50.5 122.5t-122.5 50.5zM614 385q0 -42 -30 -72t-72 -30t-72 30t-30 72t30 72t72 30t72 -30t30 -72z" }) }) }))); };
    var Close = function (props) { return (jsxRuntimeExports.jsx("svg", __assign({}, props, { viewBox: "64 -65 897 897", children: jsxRuntimeExports.jsx("g", { children: jsxRuntimeExports.jsx("path", { d: "M717.5 589.5q-10.5 10.5 -25.5 10.5t-26 -10l-154 -155l-154 155q-11 10 -26 10t-25.5 -10.5t-10.5 -25.5t11 -25l154 -155l-154 -155q-11 -10 -11 -25t10.5 -25.5t25.5 -10.5t26 10l154 155l154 -155q11 -10 26 -10t25.5 10.5t10.5 25t-11 25.5l-154 155l154 155\n  q11 10 11 25t-10.5 25.5zM888 760v0v0v-753v0h-752v0v753v0h752zM888 832h-752q-30 0 -51 -21t-21 -51v-753q0 -29 21 -50.5t51 -21.5h753q29 0 50.5 21.5t21.5 50.5v753q0 30 -21.5 51t-51.5 21v0z" }) }) }))); };

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
        var _e = require$$0$1.useState(props.open), open = _e[0], setOpen = _e[1];
        var _f = require$$0$1.useState(props.visible), visible = _f[0], setVisible = _f[1];
        var _g = require$$0$1.useState(false), immediate = _g[0], setImmediate = _g[1];
        var id = require$$0$1.useState(props.itemId)[0];
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
        require$$0$1.useEffect(function () {
            setOpen(props.open);
        }, [props.open]);
        return (jsxRuntimeExports.jsxs("div", { style: __assign(__assign({}, treeStyles.tree), style), className: "treeview", children: [jsxRuntimeExports.jsx(Icon, { className: "toggle", style: __assign(__assign({}, treeStyles.toggle), { opacity: children ? 1 : 0.3 }), onClick: toggle }), jsxRuntimeExports.jsx("span", { style: __assign(__assign({}, treeStyles.type), { marginRight: type ? 10 : 0 }), children: type }), canHide && (jsxRuntimeExports.jsx(IconEye, { className: "toggle", style: __assign(__assign({}, treeStyles.toggle), { opacity: visible ? 1 : 0.4 }), onClick: toggleVisibility })), jsxRuntimeExports.jsx("span", { onClick: onItemClick, style: { verticalAlign: "middle" }, children: content }), jsxRuntimeExports.jsx(Spring_1, __assign({ native: true, immediate: immediate, config: __assign({}, config_1.default), from: { height: 0, opacity: 0, transform: "translate3d(20px,0,0)" }, to: {
                        height: open ? "auto" : 0,
                        opacity: open ? 1 : 0,
                        transform: open ? "translate3d(0px,0,0)" : "translate3d(20px,0,0)",
                    } }, (springConfig && springConfig(open)), { children: function (styles) { return jsxRuntimeExports.jsx(animated.div, { style: __assign(__assign({}, styles), treeStyles.contents), children: children }); } }))] }));
    }

    return Tree;

}));
