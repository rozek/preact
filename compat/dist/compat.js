var n = require('preact'),
	t = require('preact/hooks');
function e(n, t) {
	for (var e in n) if ('__source' !== e && !(e in t)) return !0;
	for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
	return !1;
}
function r(n, e) {
	var r = e(),
		o = t.useState({ t: { __: r, u: e } }),
		i = o[0].t,
		c = o[1];
	return (
		t.useLayoutEffect(
			function () {
				(i.__ = r), (i.u = e), u(i) && c({ t: i });
			},
			[n, r, e]
		),
		t.useEffect(
			function () {
				return (
					u(i) && c({ t: i }),
					n(function () {
						u(i) && c({ t: i });
					})
				);
			},
			[n]
		),
		r
	);
}
function u(n) {
	var t,
		e,
		r = n.u,
		u = n.__;
	try {
		var o = r();
		return !(
			((t = u) === (e = o) && (0 !== t || 1 / t == 1 / e)) ||
			(t != t && e != e)
		);
	} catch (n) {
		return !0;
	}
}
function o(n) {
	n();
}
function i(n) {
	return n;
}
function c() {
	return [!1, o];
}
var l = t.useLayoutEffect;
function f(n, t) {
	(this.props = n), (this.context = t);
}
function a(t, r) {
	function u(n) {
		var t = this.props.ref,
			u = t == n.ref;
		return (
			!u && t && (t.call ? t(null) : (t.current = null)),
			r ? !r(this.props, n) || !u : e(this.props, n)
		);
	}
	function o(e) {
		return (this.shouldComponentUpdate = u), n.createElement(t, e);
	}
	return (
		(o.displayName = 'Memo(' + (t.displayName || t.name) + ')'),
		(o.prototype.isReactComponent = !0),
		(o.__f = !0),
		o
	);
}
((f.prototype = new n.Component()).isPureReactComponent = !0),
	(f.prototype.shouldComponentUpdate = function (n, t) {
		return e(this.props, n) || e(this.state, t);
	});
var s = n.options.__b;
n.options.__b = function (n) {
	n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
		s && s(n);
};
var p =
	('undefined' != typeof Symbol &&
		Symbol.for &&
		Symbol.for('react.forward_ref')) ||
	3911;
function h(n) {
	function t(t) {
		if (!('ref' in t)) return n(t, null);
		var e = t.ref;
		delete t.ref;
		var r = n(t, e);
		return (t.ref = e), r;
	}
	return (
		(t.$$typeof = p),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
		t
	);
}
var v = function (t, e) {
		return null == t ? null : n.toChildArray(n.toChildArray(t).map(e));
	},
	d = {
		map: v,
		forEach: v,
		count: function (t) {
			return t ? n.toChildArray(t).length : 0;
		},
		only: function (t) {
			var e = n.toChildArray(t);
			if (1 !== e.length) throw 'Children.only';
			return e[0];
		},
		toArray: n.toChildArray
	},
	m = n.options.__e;
n.options.__e = function (n, t, e, r) {
	if (n.then)
		for (var u, o = t; (o = o.__); )
			if ((u = o.__c) && u.__c)
				return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
	m(n, t, e, r);
};
var x = n.options.unmount;
function b(n, t, e) {
	return (
		n &&
			(n.__c &&
				n.__c.__H &&
				(n.__c.__H.__.forEach(function (n) {
					'function' == typeof n.__c && n.__c();
				}),
				(n.__c.__H = null)),
			null !=
				(n = (function (n, t) {
					for (var e in t) n[e] = t[e];
					return n;
				})({}, n)).__c && (n.__c.__P === e && (n.__c.__P = t), (n.__c = null)),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return b(n, t, e);
				}))),
		n
	);
}
function y(n, t, e) {
	return (
		n &&
			e &&
			((n.__v = null),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return y(n, t, e);
				})),
			n.__c &&
				n.__c.__P === t &&
				(n.__e && e.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = e))),
		n
	);
}
function _() {
	(this.__u = 0), (this.o = null), (this.__b = null);
}
function g(n) {
	var t = n.__.__c;
	return t && t.__a && t.__a(n);
}
function S(t) {
	var e, r, u;
	function o(o) {
		if (
			(e ||
				(e = t()).then(
					function (n) {
						r = n.default || n;
					},
					function (n) {
						u = n;
					}
				),
			u)
		)
			throw u;
		if (!r) throw e;
		return n.createElement(r, o);
	}
	return (o.displayName = 'Lazy'), (o.__f = !0), o;
}
function E() {
	(this.i = null), (this.l = null);
}
(n.options.unmount = function (n) {
	var t = n.__c;
	t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), x && x(n);
}),
	((_.prototype = new n.Component()).__c = function (n, t) {
		var e = t.__c,
			r = this;
		null == r.o && (r.o = []), r.o.push(e);
		var u = g(r.__v),
			o = !1,
			i = function () {
				o || ((o = !0), (e.__R = null), u ? u(c) : c());
			};
		e.__R = i;
		var c = function () {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = y(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
					t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
			n.then(i, i);
	}),
	(_.prototype.componentWillUnmount = function () {
		this.o = [];
	}),
	(_.prototype.render = function (t, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement('div'),
					u = this.__v.__k[0].__c;
				this.__v.__k[0] = b(this.__b, r, (u.__O = u.__P));
			}
			this.__b = null;
		}
		var o = e.__a && n.createElement(n.Fragment, null, t.fallback);
		return (
			o && (o.__u &= -33),
			[n.createElement(n.Fragment, null, e.__a ? null : t.children), o]
		);
	});
var C = function (n, t, e) {
	if (
		(++e[1] === e[0] && n.l.delete(t),
		n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.l.size))
	)
		for (e = n.i; e; ) {
			for (; e.length > 3; ) e.pop()();
			if (e[1] < e[0]) break;
			n.i = e = e[2];
		}
};
function O(n) {
	return (
		(this.getChildContext = function () {
			return n.context;
		}),
		n.children
	);
}
function R(t) {
	var e = this,
		r = t.p;
	(e.componentWillUnmount = function () {
		n.render(null, e.h), (e.h = null), (e.p = null);
	}),
		e.p && e.p !== r && e.componentWillUnmount(),
		e.h ||
			((e.p = r),
			(e.h = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				contains: function () {
					return !0;
				},
				appendChild: function (n) {
					this.childNodes.push(n), e.p.appendChild(n);
				},
				insertBefore: function (n, t) {
					this.childNodes.push(n), e.p.insertBefore(n, t);
				},
				removeChild: function (n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
						e.p.removeChild(n);
				}
			})),
		n.render(n.createElement(O, { context: e.context }, t.__v), e.h);
}
function w(t, e) {
	var r = n.createElement(R, { __v: t, p: e });
	return (r.containerInfo = e), r;
}
((E.prototype = new n.Component()).__a = function (n) {
	var t = this,
		e = g(t.__v),
		r = t.l.get(n);
	return (
		r[0]++,
		function (u) {
			var o = function () {
				t.props.revealOrder ? (r.push(u), C(t, n, r)) : u();
			};
			e ? e(o) : o();
		}
	);
}),
	(E.prototype.render = function (t) {
		(this.i = null), (this.l = new Map());
		var e = n.toChildArray(t.children);
		t.revealOrder && 'b' === t.revealOrder[0] && e.reverse();
		for (var r = e.length; r--; ) this.l.set(e[r], (this.i = [1, 0, this.i]));
		return t.children;
	}),
	(E.prototype.componentDidUpdate = E.prototype.componentDidMount =
		function () {
			var n = this;
			this.l.forEach(function (t, e) {
				C(n, e, t);
			});
		});
var j =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.element')) ||
		60103,
	I =
		/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	N = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	k = /[A-Z0-9]/g,
	M = 'undefined' != typeof document,
	T = function (n) {
		return (
			'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
				? /fil|che|rad/
				: /fil|che|ra/
		).test(n);
	};
function A(t, e, r) {
	return (
		null == e.__k && (e.textContent = ''),
		n.render(t, e),
		'function' == typeof r && r(),
		t ? t.__c : null
	);
}
function D(t, e, r) {
	return n.hydrate(t, e), 'function' == typeof r && r(), t ? t.__c : null;
}
(n.Component.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate'
	].forEach(function (t) {
		Object.defineProperty(n.Component.prototype, t, {
			configurable: !0,
			get: function () {
				return this['UNSAFE_' + t];
			},
			set: function (n) {
				Object.defineProperty(this, t, {
					configurable: !0,
					writable: !0,
					value: n
				});
			}
		});
	});
var L = n.options.event;
function F() {}
function U() {
	return this.cancelBubble;
}
function V() {
	return this.defaultPrevented;
}
n.options.event = function (n) {
	return (
		L && (n = L(n)),
		(n.persist = F),
		(n.isPropagationStopped = U),
		(n.isDefaultPrevented = V),
		(n.nativeEvent = n)
	);
};
var W,
	P = {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this.class;
		}
	},
	z = n.options.vnode;
n.options.vnode = function (t) {
	'string' == typeof t.type &&
		(function (t) {
			var e = t.props,
				r = t.type,
				u = {},
				o = -1 === r.indexOf('-');
			for (var i in e) {
				var c = e[i];
				if (
					!(
						('value' === i && 'defaultValue' in e && null == c) ||
						(M && 'children' === i && 'noscript' === r) ||
						'class' === i ||
						'className' === i
					)
				) {
					var l = i.toLowerCase();
					'defaultValue' === i && 'value' in e && null == e.value
						? (i = 'value')
						: 'download' === i && !0 === c
							? (c = '')
							: 'translate' === l && 'no' === c
								? (c = !1)
								: 'o' === l[0] && 'n' === l[1]
									? 'ondoubleclick' === l
										? (i = 'ondblclick')
										: 'onchange' !== l ||
												('input' !== r && 'textarea' !== r) ||
												T(e.type)
											? 'onfocus' === l
												? (i = 'onfocusin')
												: 'onblur' === l
													? (i = 'onfocusout')
													: N.test(i) && (i = l)
											: (l = i = 'oninput')
									: o && I.test(i)
										? (i = i.replace(k, '-$&').toLowerCase())
										: null === c && (c = void 0),
						'oninput' === l && u[(i = l)] && (i = 'oninputCapture'),
						(u[i] = c);
				}
			}
			'select' == r &&
				u.multiple &&
				Array.isArray(u.value) &&
				(u.value = n.toChildArray(e.children).forEach(function (n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})),
				'select' == r &&
					null != u.defaultValue &&
					(u.value = n.toChildArray(e.children).forEach(function (n) {
						n.props.selected = u.multiple
							? -1 != u.defaultValue.indexOf(n.props.value)
							: u.defaultValue == n.props.value;
					})),
				e.class && !e.className
					? ((u.class = e.class), Object.defineProperty(u, 'className', P))
					: ((e.className && !e.class) || (e.class && e.className)) &&
						(u.class = u.className = e.className),
				(t.props = u);
		})(t),
		(t.$$typeof = j),
		z && z(t);
};
var B = n.options.__r;
n.options.__r = function (n) {
	B && B(n), (W = n.__c);
};
var H = n.options.diffed;
n.options.diffed = function (n) {
	H && H(n);
	var t = n.props,
		e = n.__e;
	null != e &&
		'textarea' === n.type &&
		'value' in t &&
		t.value !== e.value &&
		(e.value = null == t.value ? '' : t.value),
		(W = null);
};
var q = {
	ReactCurrentDispatcher: {
		current: {
			readContext: function (n) {
				return W.__n[n.__c].props.value;
			},
			useCallback: t.useCallback,
			useContext: t.useContext,
			useDebugValue: t.useDebugValue,
			useDeferredValue: i,
			useEffect: t.useEffect,
			useId: t.useId,
			useImperativeHandle: t.useImperativeHandle,
			useInsertionEffect: l,
			useLayoutEffect: t.useLayoutEffect,
			useMemo: t.useMemo,
			useReducer: t.useReducer,
			useRef: t.useRef,
			useState: t.useState,
			useSyncExternalStore: r,
			useTransition: c
		}
	}
};
function Z(t) {
	return n.createElement.bind(null, t);
}
function Y(n) {
	return !!n && n.$$typeof === j;
}
function $(t) {
	return Y(t) && t.type === n.Fragment;
}
function G(n) {
	return (
		!!n &&
		!!n.displayName &&
		('string' == typeof n.displayName || n.displayName instanceof String) &&
		n.displayName.startsWith('Memo(')
	);
}
function J(t) {
	return Y(t) ? n.cloneElement.apply(null, arguments) : t;
}
function K(t) {
	return !!t.__k && (n.render(null, t), !0);
}
function Q(n) {
	return (n && (n.base || (1 === n.nodeType && n))) || null;
}
var X = function (n, t) {
		return n(t);
	},
	nn = function (n, t) {
		return n(t);
	},
	tn = n.Fragment,
	en = Y,
	rn = {
		useState: t.useState,
		useId: t.useId,
		useReducer: t.useReducer,
		useEffect: t.useEffect,
		useLayoutEffect: t.useLayoutEffect,
		useInsertionEffect: l,
		useTransition: c,
		useDeferredValue: i,
		useSyncExternalStore: r,
		startTransition: o,
		useRef: t.useRef,
		useImperativeHandle: t.useImperativeHandle,
		useMemo: t.useMemo,
		useCallback: t.useCallback,
		useContext: t.useContext,
		useDebugValue: t.useDebugValue,
		version: '18.3.1',
		Children: d,
		render: A,
		hydrate: D,
		unmountComponentAtNode: K,
		createPortal: w,
		createElement: n.createElement,
		createContext: n.createContext,
		createFactory: Z,
		cloneElement: J,
		createRef: n.createRef,
		Fragment: n.Fragment,
		isValidElement: Y,
		isElement: en,
		isFragment: $,
		isMemo: G,
		findDOMNode: Q,
		Component: n.Component,
		PureComponent: f,
		memo: a,
		forwardRef: h,
		flushSync: nn,
		unstable_batchedUpdates: X,
		StrictMode: tn,
		Suspense: _,
		SuspenseList: E,
		lazy: S,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: q
	};
Object.defineProperty(exports, 'Component', {
	enumerable: !0,
	get: function () {
		return n.Component;
	}
}),
	Object.defineProperty(exports, 'Fragment', {
		enumerable: !0,
		get: function () {
			return n.Fragment;
		}
	}),
	Object.defineProperty(exports, 'createContext', {
		enumerable: !0,
		get: function () {
			return n.createContext;
		}
	}),
	Object.defineProperty(exports, 'createElement', {
		enumerable: !0,
		get: function () {
			return n.createElement;
		}
	}),
	Object.defineProperty(exports, 'createRef', {
		enumerable: !0,
		get: function () {
			return n.createRef;
		}
	}),
	(exports.Children = d),
	(exports.PureComponent = f),
	(exports.StrictMode = tn),
	(exports.Suspense = _),
	(exports.SuspenseList = E),
	(exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q),
	(exports.cloneElement = J),
	(exports.createFactory = Z),
	(exports.createPortal = w),
	(exports.default = rn),
	(exports.findDOMNode = Q),
	(exports.flushSync = nn),
	(exports.forwardRef = h),
	(exports.hydrate = D),
	(exports.isElement = en),
	(exports.isFragment = $),
	(exports.isMemo = G),
	(exports.isValidElement = Y),
	(exports.lazy = S),
	(exports.memo = a),
	(exports.render = A),
	(exports.startTransition = o),
	(exports.unmountComponentAtNode = K),
	(exports.unstable_batchedUpdates = X),
	(exports.useDeferredValue = i),
	(exports.useInsertionEffect = l),
	(exports.useSyncExternalStore = r),
	(exports.useTransition = c),
	(exports.version = '18.3.1'),
	Object.keys(t).forEach(function (n) {
		'default' === n ||
			exports.hasOwnProperty(n) ||
			Object.defineProperty(exports, n, {
				enumerable: !0,
				get: function () {
					return t[n];
				}
			});
	});
//# sourceMappingURL=compat.js.map
