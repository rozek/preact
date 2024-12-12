!(function (n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'), require('preact/hooks'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/hooks'], e)
			: e(((n || self).preactCompat = {}), n.preact, n.preactHooks);
})(this, function (n, e, t) {
	function r(n, e) {
		for (var t in n) if ('__source' !== t && !(t in e)) return !0;
		for (var r in e) if ('__source' !== r && n[r] !== e[r]) return !0;
		return !1;
	}
	function u(n, e) {
		var r = e(),
			u = t.useState({ t: { __: r, u: e } }),
			i = u[0].t,
			c = u[1];
		return (
			t.useLayoutEffect(
				function () {
					(i.__ = r), (i.u = e), o(i) && c({ t: i });
				},
				[n, r, e]
			),
			t.useEffect(
				function () {
					return (
						o(i) && c({ t: i }),
						n(function () {
							o(i) && c({ t: i });
						})
					);
				},
				[n]
			),
			r
		);
	}
	function o(n) {
		var e,
			t,
			r = n.u,
			u = n.__;
		try {
			var o = r();
			return !(
				((e = u) === (t = o) && (0 !== e || 1 / e == 1 / t)) ||
				(e != e && t != t)
			);
		} catch (n) {
			return !0;
		}
	}
	function i(n) {
		n();
	}
	function c(n) {
		return n;
	}
	function f() {
		return [!1, i];
	}
	var l = t.useLayoutEffect;
	function a(n, e) {
		(this.props = n), (this.context = e);
	}
	function s(n, t) {
		function u(n) {
			var e = this.props.ref,
				u = e == n.ref;
			return (
				!u && e && (e.call ? e(null) : (e.current = null)),
				t ? !t(this.props, n) || !u : r(this.props, n)
			);
		}
		function o(t) {
			return (this.shouldComponentUpdate = u), e.createElement(n, t);
		}
		return (
			(o.displayName = 'Memo(' + (n.displayName || n.name) + ')'),
			(o.prototype.isReactComponent = !0),
			(o.__f = !0),
			o
		);
	}
	((a.prototype = new e.Component()).isPureReactComponent = !0),
		(a.prototype.shouldComponentUpdate = function (n, e) {
			return r(this.props, n) || r(this.state, e);
		});
	var h = e.options.__b;
	e.options.__b = function (n) {
		n.type && n.type.__f && n.ref && ((n.props.ref = n.ref), (n.ref = null)),
			h && h(n);
	};
	var d =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.forward_ref')) ||
		3911;
	function v(n) {
		function e(e) {
			if (!('ref' in e)) return n(e, null);
			var t = e.ref;
			delete e.ref;
			var r = n(e, t);
			return (e.ref = t), r;
		}
		return (
			(e.$$typeof = d),
			(e.render = e),
			(e.prototype.isReactComponent = e.__f = !0),
			(e.displayName = 'ForwardRef(' + (n.displayName || n.name) + ')'),
			e
		);
	}
	var p = function (n, t) {
			return null == n ? null : e.toChildArray(e.toChildArray(n).map(t));
		},
		m = {
			map: p,
			forEach: p,
			count: function (n) {
				return n ? e.toChildArray(n).length : 0;
			},
			only: function (n) {
				var t = e.toChildArray(n);
				if (1 !== t.length) throw 'Children.only';
				return t[0];
			},
			toArray: e.toChildArray
		},
		b = e.options.__e;
	e.options.__e = function (n, e, t, r) {
		if (n.then)
			for (var u, o = e; (o = o.__); )
				if ((u = o.__c) && u.__c)
					return (
						null == e.__e && ((e.__e = t.__e), (e.__k = t.__k)), u.__c(n, e)
					);
		b(n, e, t, r);
	};
	var y = e.options.unmount;
	function _(n, e, t) {
		return (
			n &&
				(n.__c &&
					n.__c.__H &&
					(n.__c.__H.__.forEach(function (n) {
						'function' == typeof n.__c && n.__c();
					}),
					(n.__c.__H = null)),
				null !=
					(n = (function (n, e) {
						for (var t in e) n[t] = e[t];
						return n;
					})({}, n)).__c &&
					(n.__c.__P === t && (n.__c.__P = e), (n.__c = null)),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return _(n, e, t);
					}))),
			n
		);
	}
	function g(n, e, t) {
		return (
			n &&
				t &&
				((n.__v = null),
				(n.__k =
					n.__k &&
					n.__k.map(function (n) {
						return g(n, e, t);
					})),
				n.__c &&
					n.__c.__P === e &&
					(n.__e && t.appendChild(n.__e), (n.__c.__e = !0), (n.__c.__P = t))),
			n
		);
	}
	function S() {
		(this.__u = 0), (this.o = null), (this.__b = null);
	}
	function E(n) {
		var e = n.__.__c;
		return e && e.__a && e.__a(n);
	}
	function C(n) {
		var t, r, u;
		function o(o) {
			if (
				(t ||
					(t = n()).then(
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
			if (!r) throw t;
			return e.createElement(r, o);
		}
		return (o.displayName = 'Lazy'), (o.__f = !0), o;
	}
	function x() {
		(this.i = null), (this.l = null);
	}
	(e.options.unmount = function (n) {
		var e = n.__c;
		e && e.__R && e.__R(), e && 32 & n.__u && (n.type = null), y && y(n);
	}),
		((S.prototype = new e.Component()).__c = function (n, e) {
			var t = e.__c,
				r = this;
			null == r.o && (r.o = []), r.o.push(t);
			var u = E(r.__v),
				o = !1,
				i = function () {
					o || ((o = !0), (t.__R = null), u ? u(c) : c());
				};
			t.__R = i;
			var c = function () {
				if (!--r.__u) {
					if (r.state.__a) {
						var n = r.state.__a;
						r.__v.__k[0] = g(n, n.__c.__P, n.__c.__O);
					}
					var e;
					for (r.setState({ __a: (r.__b = null) }); (e = r.o.pop()); )
						e.forceUpdate();
				}
			};
			r.__u++ || 32 & e.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
				n.then(i, i);
		}),
		(S.prototype.componentWillUnmount = function () {
			this.o = [];
		}),
		(S.prototype.render = function (n, t) {
			if (this.__b) {
				if (this.__v.__k) {
					var r = document.createElement('div'),
						u = this.__v.__k[0].__c;
					this.__v.__k[0] = _(this.__b, r, (u.__O = u.__P));
				}
				this.__b = null;
			}
			var o = t.__a && e.createElement(e.Fragment, null, n.fallback);
			return (
				o && (o.__u &= -33),
				[e.createElement(e.Fragment, null, t.__a ? null : n.children), o]
			);
		});
	var O = function (n, e, t) {
		if (
			(++t[1] === t[0] && n.l.delete(e),
			n.props.revealOrder && ('t' !== n.props.revealOrder[0] || !n.l.size))
		)
			for (t = n.i; t; ) {
				for (; t.length > 3; ) t.pop()();
				if (t[1] < t[0]) break;
				n.i = t = t[2];
			}
	};
	function R(n) {
		return (
			(this.getChildContext = function () {
				return n.context;
			}),
			n.children
		);
	}
	function w(n) {
		var t = this,
			r = n.h;
		(t.componentWillUnmount = function () {
			e.render(null, t.v), (t.v = null), (t.h = null);
		}),
			t.h && t.h !== r && t.componentWillUnmount(),
			t.v ||
				((t.h = r),
				(t.v = {
					nodeType: 1,
					parentNode: r,
					childNodes: [],
					contains: function () {
						return !0;
					},
					appendChild: function (n) {
						this.childNodes.push(n), t.h.appendChild(n);
					},
					insertBefore: function (n, e) {
						this.childNodes.push(n), t.h.insertBefore(n, e);
					},
					removeChild: function (n) {
						this.childNodes.splice(this.childNodes.indexOf(n) >>> 1, 1),
							t.h.removeChild(n);
					}
				})),
			e.render(e.createElement(R, { context: t.context }, n.__v), t.v);
	}
	function j(n, t) {
		var r = e.createElement(w, { __v: n, h: t });
		return (r.containerInfo = t), r;
	}
	((x.prototype = new e.Component()).__a = function (n) {
		var e = this,
			t = E(e.__v),
			r = e.l.get(n);
		return (
			r[0]++,
			function (u) {
				var o = function () {
					e.props.revealOrder ? (r.push(u), O(e, n, r)) : u();
				};
				t ? t(o) : o();
			}
		);
	}),
		(x.prototype.render = function (n) {
			(this.i = null), (this.l = new Map());
			var t = e.toChildArray(n.children);
			n.revealOrder && 'b' === n.revealOrder[0] && t.reverse();
			for (var r = t.length; r--; ) this.l.set(t[r], (this.i = [1, 0, this.i]));
			return n.children;
		}),
		(x.prototype.componentDidUpdate = x.prototype.componentDidMount =
			function () {
				var n = this;
				this.l.forEach(function (e, t) {
					O(n, t, e);
				});
			});
	var T =
			('undefined' != typeof Symbol &&
				Symbol.for &&
				Symbol.for('react.element')) ||
			60103,
		k =
			/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		I = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
		N = /[A-Z0-9]/g,
		M = 'undefined' != typeof document,
		A = function (n) {
			return (
				'undefined' != typeof Symbol && 'symbol' == typeof Symbol()
					? /fil|che|rad/
					: /fil|che|ra/
			).test(n);
		};
	function D(n, t, r) {
		return (
			null == t.__k && (t.textContent = ''),
			e.render(n, t),
			'function' == typeof r && r(),
			n ? n.__c : null
		);
	}
	function L(n, t, r) {
		return e.hydrate(n, t), 'function' == typeof r && r(), n ? n.__c : null;
	}
	(e.Component.prototype.isReactComponent = {}),
		[
			'componentWillMount',
			'componentWillReceiveProps',
			'componentWillUpdate'
		].forEach(function (n) {
			Object.defineProperty(e.Component.prototype, n, {
				configurable: !0,
				get: function () {
					return this['UNSAFE_' + n];
				},
				set: function (e) {
					Object.defineProperty(this, n, {
						configurable: !0,
						writable: !0,
						value: e
					});
				}
			});
		});
	var F = e.options.event;
	function U() {}
	function V() {
		return this.cancelBubble;
	}
	function W() {
		return this.defaultPrevented;
	}
	e.options.event = function (n) {
		return (
			F && (n = F(n)),
			(n.persist = U),
			(n.isPropagationStopped = V),
			(n.isDefaultPrevented = W),
			(n.nativeEvent = n)
		);
	};
	var P,
		z = {
			enumerable: !1,
			configurable: !0,
			get: function () {
				return this.class;
			}
		},
		B = e.options.vnode;
	e.options.vnode = function (n) {
		'string' == typeof n.type &&
			(function (n) {
				var t = n.props,
					r = n.type,
					u = {},
					o = -1 === r.indexOf('-');
				for (var i in t) {
					var c = t[i];
					if (
						!(
							('value' === i && 'defaultValue' in t && null == c) ||
							(M && 'children' === i && 'noscript' === r) ||
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
													('input' !== r && 'textarea' !== r) ||
													A(t.type)
												? 'onfocus' === f
													? (i = 'onfocusin')
													: 'onblur' === f
														? (i = 'onfocusout')
														: I.test(i) && (i = f)
												: (f = i = 'oninput')
										: o && k.test(i)
											? (i = i.replace(N, '-$&').toLowerCase())
											: null === c && (c = void 0),
							'oninput' === f && u[(i = f)] && (i = 'oninputCapture'),
							(u[i] = c);
					}
				}
				'select' == r &&
					u.multiple &&
					Array.isArray(u.value) &&
					(u.value = e.toChildArray(t.children).forEach(function (n) {
						n.props.selected = -1 != u.value.indexOf(n.props.value);
					})),
					'select' == r &&
						null != u.defaultValue &&
						(u.value = e.toChildArray(t.children).forEach(function (n) {
							n.props.selected = u.multiple
								? -1 != u.defaultValue.indexOf(n.props.value)
								: u.defaultValue == n.props.value;
						})),
					t.class && !t.className
						? ((u.class = t.class), Object.defineProperty(u, 'className', z))
						: ((t.className && !t.class) || (t.class && t.className)) &&
							(u.class = u.className = t.className),
					(n.props = u);
			})(n),
			(n.$$typeof = T),
			B && B(n);
	};
	var H = e.options.__r;
	e.options.__r = function (n) {
		H && H(n), (P = n.__c);
	};
	var q = e.options.diffed;
	e.options.diffed = function (n) {
		q && q(n);
		var e = n.props,
			t = n.__e;
		null != t &&
			'textarea' === n.type &&
			'value' in e &&
			e.value !== t.value &&
			(t.value = null == e.value ? '' : e.value),
			(P = null);
	};
	var Z = {
			ReactCurrentDispatcher: {
				current: {
					readContext: function (n) {
						return P.__n[n.__c].props.value;
					},
					useCallback: t.useCallback,
					useContext: t.useContext,
					useDebugValue: t.useDebugValue,
					useDeferredValue: c,
					useEffect: t.useEffect,
					useId: t.useId,
					useImperativeHandle: t.useImperativeHandle,
					useInsertionEffect: l,
					useLayoutEffect: t.useLayoutEffect,
					useMemo: t.useMemo,
					useReducer: t.useReducer,
					useRef: t.useRef,
					useState: t.useState,
					useSyncExternalStore: u,
					useTransition: f
				}
			}
		},
		Y = '18.3.1';
	function $(n) {
		return e.createElement.bind(null, n);
	}
	function G(n) {
		return !!n && n.$$typeof === T;
	}
	function J(n) {
		return G(n) && n.type === e.Fragment;
	}
	function K(n) {
		return (
			!!n &&
			!!n.displayName &&
			('string' == typeof n.displayName || n.displayName instanceof String) &&
			n.displayName.startsWith('Memo(')
		);
	}
	function Q(n) {
		return G(n) ? e.cloneElement.apply(null, arguments) : n;
	}
	function X(n) {
		return !!n.__k && (e.render(null, n), !0);
	}
	function nn(n) {
		return (n && (n.base || (1 === n.nodeType && n))) || null;
	}
	var en = function (n, e) {
			return n(e);
		},
		tn = function (n, e) {
			return n(e);
		},
		rn = e.Fragment,
		un = G,
		on = {
			useState: t.useState,
			useId: t.useId,
			useReducer: t.useReducer,
			useEffect: t.useEffect,
			useLayoutEffect: t.useLayoutEffect,
			useInsertionEffect: l,
			useTransition: f,
			useDeferredValue: c,
			useSyncExternalStore: u,
			startTransition: i,
			useRef: t.useRef,
			useImperativeHandle: t.useImperativeHandle,
			useMemo: t.useMemo,
			useCallback: t.useCallback,
			useContext: t.useContext,
			useDebugValue: t.useDebugValue,
			version: Y,
			Children: m,
			render: D,
			hydrate: L,
			unmountComponentAtNode: X,
			createPortal: j,
			createElement: e.createElement,
			createContext: e.createContext,
			createFactory: $,
			cloneElement: Q,
			createRef: e.createRef,
			Fragment: e.Fragment,
			isValidElement: G,
			isElement: un,
			isFragment: J,
			isMemo: K,
			findDOMNode: nn,
			Component: e.Component,
			PureComponent: a,
			memo: s,
			forwardRef: v,
			flushSync: tn,
			unstable_batchedUpdates: en,
			StrictMode: rn,
			Suspense: S,
			SuspenseList: x,
			lazy: C,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Z
		};
	Object.defineProperty(n, 'Component', {
		enumerable: !0,
		get: function () {
			return e.Component;
		}
	}),
		Object.defineProperty(n, 'Fragment', {
			enumerable: !0,
			get: function () {
				return e.Fragment;
			}
		}),
		Object.defineProperty(n, 'createContext', {
			enumerable: !0,
			get: function () {
				return e.createContext;
			}
		}),
		Object.defineProperty(n, 'createElement', {
			enumerable: !0,
			get: function () {
				return e.createElement;
			}
		}),
		Object.defineProperty(n, 'createRef', {
			enumerable: !0,
			get: function () {
				return e.createRef;
			}
		}),
		(n.Children = m),
		(n.PureComponent = a),
		(n.StrictMode = rn),
		(n.Suspense = S),
		(n.SuspenseList = x),
		(n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z),
		(n.cloneElement = Q),
		(n.createFactory = $),
		(n.createPortal = j),
		(n.default = on),
		(n.findDOMNode = nn),
		(n.flushSync = tn),
		(n.forwardRef = v),
		(n.hydrate = L),
		(n.isElement = un),
		(n.isFragment = J),
		(n.isMemo = K),
		(n.isValidElement = G),
		(n.lazy = C),
		(n.memo = s),
		(n.render = D),
		(n.startTransition = i),
		(n.unmountComponentAtNode = X),
		(n.unstable_batchedUpdates = en),
		(n.useDeferredValue = c),
		(n.useInsertionEffect = l),
		(n.useSyncExternalStore = u),
		(n.useTransition = f),
		(n.version = Y),
		Object.keys(t).forEach(function (e) {
			'default' === e ||
				n.hasOwnProperty(e) ||
				Object.defineProperty(n, e, {
					enumerable: !0,
					get: function () {
						return t[e];
					}
				});
		});
});
//# sourceMappingURL=compat.umd.js.map
