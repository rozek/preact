import {
	Component as n,
	createElement as t,
	options as e,
	toChildArray as r,
	Fragment as u,
	render as o,
	hydrate as i,
	createContext as c,
	createRef as f,
	cloneElement as l
} from 'preact';
export {
	Component,
	Fragment,
	createContext,
	createElement,
	createRef
} from 'preact';
import {
	useState as a,
	useLayoutEffect as s,
	useEffect as h,
	useCallback as v,
	useContext as d,
	useDebugValue as p,
	useId as m,
	useImperativeHandle as y,
	useMemo as _,
	useReducer as b,
	useRef as S
} from 'preact/hooks';
export * from 'preact/hooks';
function g(n, t) {
	for (var e in n) if ('__source' !== e && !(e in t)) return !0;
	for (var r in t) if ('__source' !== r && n[r] !== t[r]) return !0;
	return !1;
}
function E(n, t) {
	var e = t(),
		r = a({ t: { __: e, u: t } }),
		u = r[0].t,
		o = r[1];
	return (
		s(
			function () {
				(u.__ = e), (u.u = t), C(u) && o({ t: u });
			},
			[n, e, t]
		),
		h(
			function () {
				return (
					C(u) && o({ t: u }),
					n(function () {
						C(u) && o({ t: u });
					})
				);
			},
			[n]
		),
		e
	);
}
function C(n) {
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
function x(n) {
	n();
}
function R(n) {
	return n;
}
function w() {
	return [!1, x];
}
var k = s;
function I(n, t) {
	(this.props = n), (this.context = t);
}
function N(n, e) {
	function r(n) {
		var t = this.props.ref,
			r = t == n.ref;
		return (
			!r && t && (t.call ? t(null) : (t.current = null)),
			e ? !e(this.props, n) || !r : g(this.props, n)
		);
	}
	function u(e) {
		return (this.shouldComponentUpdate = r), t(n, e);
	}
	return (
		(u.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
		(u.prototype.isReactComponent = !0),
		(u.__f = !0),
		u
	);
}
((I.prototype = new n()).isPureReactComponent = !0),
	(I.prototype.shouldComponentUpdate = function (n, t) {
		return g(this.props, n) || g(this.state, t);
	});
var M = e.__b;
e.__b = function (n) {
	n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
		M && M(n);
};
var T =
	('undefined' != typeof Symbol &&
		Symbol.for &&
		Symbol.for('react.forward_ref')) ||
	3911;
function A(n) {
	function t(t) {
		if (!('ref' in t)) return n(t, null);
		var e = t.ref;
		delete t.ref;
		var r = n(t, e);
		return (t.ref = e), r;
	}
	return (
		(t.$$typeof = T),
		(t.render = t),
		(t.prototype.isReactComponent = t.__f = !0),
		(t.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
		t
	);
}
var D = function (n, t) {
		return null == n ? null : r(r(n).map(t));
	},
	L = {
		map: D,
		forEach: D,
		count: function (n) {
			return n ? r(n).length : 0;
		},
		only: function (n) {
			var t = r(n);
			if (1 !== t.length) throw 'Children.only';
			return t[0];
		},
		toArray: r
	},
	O = e.__e;
e.__e = function (n, t, e, r) {
	if (n.then)
		for (var u, o = t; (o = o.__); )
			if ((u = o.__c) && u.__c)
				return null == t.__e && ((t.__e = e.__e), (t.__k = e.__k)), u.__c(n, t);
	O(n, t, e, r);
};
var F = e.unmount;
function U(n, t, e) {
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
					return U(n, t, e);
				}))),
		n
	);
}
function V(n, t, e) {
	return (
		n &&
			e &&
			((n.__v = null),
			(n.__k =
				n.__k &&
				n.__k.map(function (n) {
					return V(n, t, e);
				})),
			n.__c &&
				n.__c.__P === t &&
				(n.__e && e.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = e))),
		n
	);
}
function W() {
	(this.__u = 0), (this.o = null), (this.__b = null);
}
function P(n) {
	var t = n.__.__c;
	return t && t.__a && t.__a(n);
}
function j(n) {
	var e, r, u;
	function o(o) {
		if (
			(e ||
				(e = n()).then(
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
		return t(r, o);
	}
	return (o.displayName = 'Lazy'), (o.__f = !0), o;
}
function z() {
	(this.i = null), (this.l = null);
}
(e.unmount = function (n) {
	var t = n.__c;
	t && t.__R && t.__R(), t && 32 & n.__u && (n.type = null), F && F(n);
}),
	((W.prototype = new n()).__c = function (n, t) {
		var e = t.__c,
			r = this;
		null == r.o && (r.o = []), r.o.push(e);
		var u = P(r.__v),
			o = !1,
			i = function () {
				o || ((o = !0), (e.__R = null), u ? u(c) : c());
			};
		e.__R = i;
		var c = function () {
			if (!--r.__u) {
				if (r.state.__a) {
					var n = r.state.__a;
					r.__v.__k[0] = V(n, n.__c.__P, n.__c.__O);
				}
				var t;
				for (r.setState({ __a: (r.__b = null) }); (t = r.o.pop()); )
					t.forceUpdate();
			}
		};
		r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
			n.then(i, i);
	}),
	(W.prototype.componentWillUnmount = function () {
		this.o = [];
	}),
	(W.prototype.render = function (n, e) {
		if (this.__b) {
			if (this.__v.__k) {
				var r = document.createElement('div'),
					o = this.__v.__k[0].__c;
				this.__v.__k[0] = U(this.__b, r, (o.__O = o.__P));
			}
			this.__b = null;
		}
		var i = e.__a && t(u, null, n.fallback);
		return i && (i.__u &= -33), [t(u, null, e.__a ? null : n.children), i];
	});
var B = function (n, t, e) {
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
function H(n) {
	return (
		(this.getChildContext = function () {
			return n.context;
		}),
		n.children
	);
}
function Z(n) {
	var e = this,
		r = n.h;
	(e.componentWillUnmount = function () {
		o(null, e.v), (e.v = null), (e.h = null);
	}),
		e.h && e.h !== r && e.componentWillUnmount(),
		e.v ||
			((e.h = r),
			(e.v = {
				nodeType: 1,
				parentNode: r,
				childNodes: [],
				contains: function () {
					return !0;
				},
				appendChild: function (n) {
					this.childNodes.push(n), e.h.appendChild(n);
				},
				insertBefore: function (n, t) {
					this.childNodes.push(n), e.h.insertBefore(n, t);
				},
				removeChild: function (n) {
					this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
						e.h.removeChild(n);
				}
			})),
		o(t(H, { context: e.context }, n.__v), e.v);
}
function Y(n, e) {
	var r = t(Z, { __v: n, h: e });
	return (r.containerInfo = e), r;
}
((z.prototype = new n()).__a = function (n) {
	var t = this,
		e = P(t.__v),
		r = t.l.get(n);
	return (
		r[0]++,
		function (u) {
			var o = function () {
				t.props.revealOrder ? (r.push(u), B(t, n, r)) : u();
			};
			e ? e(o) : o();
		}
	);
}),
	(z.prototype.render = function (n) {
		(this.i = null), (this.l = new Map());
		var t = r(n.children);
		n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();
		for (var e = t.length; e--; ) this.l.set(t[e], (this.i = [1, 0, this.i]));
		return n.children;
	}),
	(z.prototype.componentDidUpdate = z.prototype.componentDidMount =
		function () {
			var n = this;
			this.l.forEach(function (t, e) {
				B(n, e, t);
			});
		});
var $ =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.element')) ||
		60103,
	q =
		/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
	G = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
	J = /[A-Z0-9]/g,
	K = 'undefined' != typeof document,
	Q = function (n) {
		return (
			'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
				? /fil|che|rad/
				: /fil|che|ra/
		).test(n);
	};
function X(n, t, e) {
	return (
		null == t.__k && (t.textContent = ''),
		o(n, t),
		'function' == typeof e && e(),
		n ? n.__c : null
	);
}
function nn(n, t, e) {
	return i(n, t), 'function' == typeof e && e(), n ? n.__c : null;
}
(n.prototype.isReactComponent = {}),
	[
		'componentWillMount',
		'componentWillReceiveProps',
		'componentWillUpdate'
	].forEach(function (t) {
		Object.defineProperty(n.prototype, t, {
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
var tn = e.event;
function en() {}
function rn() {
	return this.cancelBubble;
}
function un() {
	return this.defaultPrevented;
}
e.event = function (n) {
	return (
		tn && (n = tn(n)),
		(n.persist = en),
		(n.isPropagationStopped = rn),
		(n.isDefaultPrevented = un),
		(n.nativeEvent = n)
	);
};
var on,
	cn = {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this.class;
		}
	},
	fn = e.vnode;
e.vnode = function (n) {
	'string' == typeof n.type &&
		(function (n) {
			var t = n.props,
				e = n.type,
				u = {},
				o = -1 === e.indexOf('-');
			for (var i in t) {
				var c = t[i];
				if (
					!(
						('value' === i && 'defaultValue' in t && null == c) ||
						(K && 'children' === i && 'noscript' === e) ||
						'class' === i ||
						'className' === i
					)
				) {
					var f = i.toLowerCase();
					'defaultValue' === i && 'value' in t && null == t.value
						? (i = 'value')
						: 'download' === i && !0 === c
							? (c = '')
							: 'translate' === f && 'no' === c
								? (c = !1)
								: 'o' === f[0] && 'n' === f[1]
									? 'ondoubleclick' === f
										? (i = 'ondblclick')
										: 'onchange' !== f ||
												('input' !== e && 'textarea' !== e) ||
												Q(t.type)
											? 'onfocus' === f
												? (i = 'onfocusin')
												: 'onblur' === f
													? (i = 'onfocusout')
													: G.test(i) && (i = f)
											: (f = i = 'oninput')
									: o && q.test(i)
										? (i = i.replace(J, '-$&').toLowerCase())
										: null === c && (c = void 0),
						'oninput' === f && u[(i = f)] && (i = 'oninputCapture'),
						(u[i] = c);
				}
			}
			'select' == e &&
				u.multiple &&
				Array.isArray(u.value) &&
				(u.value = r(t.children).forEach(function (n) {
					n.props.selected = -1 != u.value.indexOf(n.props.value);
				})),
				'select' == e &&
					null != u.defaultValue &&
					(u.value = r(t.children).forEach(function (n) {
						n.props.selected = u.multiple
							? -1 != u.defaultValue.indexOf(n.props.value)
							: u.defaultValue == n.props.value;
					})),
				t.class && !t.className
					? ((u.class = t.class), Object.defineProperty(u, 'className', cn))
					: ((t.className && !t.class) || (t.class && t.className)) &&
						(u.class = u.className = t.className),
				(n.props = u);
		})(n),
		(n.$$typeof = $),
		fn && fn(n);
};
var ln = e.__r;
e.__r = function (n) {
	ln && ln(n), (on = n.__c);
};
var an = e.diffed;
e.diffed = function (n) {
	an && an(n);
	var t = n.props,
		e = n.__e;
	null != e &&
		'textarea' === n.type &&
		'value' in t &&
		t.value !== e.value &&
		(e.value = null == t.value ? '' : t.value),
		(on = null);
};
var sn = {
		ReactCurrentDispatcher: {
			current: {
				readContext: function (n) {
					return on.__n[n.__c].props.value;
				},
				useCallback: v,
				useContext: d,
				useDebugValue: p,
				useDeferredValue: R,
				useEffect: h,
				useId: m,
				useImperativeHandle: y,
				useInsertionEffect: k,
				useLayoutEffect: s,
				useMemo: _,
				useReducer: b,
				useRef: S,
				useState: a,
				useSyncExternalStore: E,
				useTransition: w
			}
		}
	},
	hn = '18.3.1';
function vn(n) {
	return t.bind(null, n);
}
function dn(n) {
	return !!n && n.$$typeof === $;
}
function pn(n) {
	return dn(n) && n.type === u;
}
function mn(n) {
	return (
		!!n &&
		!!n.displayName &&
		('string' == typeof n.displayName || n.displayName instanceof String) &&
		n.displayName.startsWith('Memo(')
	);
}
function yn(n) {
	return dn(n) ? l.apply(null, arguments) : n;
}
function _n(n) {
	return !!n.__k && (o(null, n), !0);
}
function bn(n) {
	return (n && (n.base || (1 === n.nodeType && n))) || null;
}
var Sn = function (n, t) {
		return n(t);
	},
	gn = function (n, t) {
		return n(t);
	},
	En = u,
	Cn = dn,
	xn = {
		useState: a,
		useId: m,
		useReducer: b,
		useEffect: h,
		useLayoutEffect: s,
		useInsertionEffect: k,
		useTransition: w,
		useDeferredValue: R,
		useSyncExternalStore: E,
		startTransition: x,
		useRef: S,
		useImperativeHandle: y,
		useMemo: _,
		useCallback: v,
		useContext: d,
		useDebugValue: p,
		version: '18.3.1',
		Children: L,
		render: X,
		hydrate: nn,
		unmountComponentAtNode: _n,
		createPortal: Y,
		createElement: t,
		createContext: c,
		createFactory: vn,
		cloneElement: yn,
		createRef: f,
		Fragment: u,
		isValidElement: dn,
		isElement: Cn,
		isFragment: pn,
		isMemo: mn,
		findDOMNode: bn,
		Component: n,
		PureComponent: I,
		memo: N,
		forwardRef: A,
		flushSync: gn,
		unstable_batchedUpdates: Sn,
		StrictMode: En,
		Suspense: W,
		SuspenseList: z,
		lazy: j,
		__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: sn
	};
export {
	L as Children,
	I as PureComponent,
	En as StrictMode,
	W as Suspense,
	z as SuspenseList,
	sn as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
	yn as cloneElement,
	vn as createFactory,
	Y as createPortal,
	xn as default,
	bn as findDOMNode,
	gn as flushSync,
	A as forwardRef,
	nn as hydrate,
	Cn as isElement,
	pn as isFragment,
	mn as isMemo,
	dn as isValidElement,
	j as lazy,
	N as memo,
	X as render,
	x as startTransition,
	_n as unmountComponentAtNode,
	Sn as unstable_batchedUpdates,
	R as useDeferredValue,
	k as useInsertionEffect,
	E as useSyncExternalStore,
	w as useTransition,
	hn as version
};
//# sourceMappingURL=compat.module.js.map
