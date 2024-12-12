!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], t)
			: t(((n || self).preactHooks = {}), n.preact);
})(this, function (n, t) {
	var u,
		r,
		i,
		o,
		f = 0,
		c = [],
		e = t.options,
		a = e.__b,
		v = e.__r,
		l = e.diffed,
		d = e.__c,
		s = e.unmount,
		p = e.__;
	function h(n, t) {
		e.__h && e.__h(r, n, f || t), (f = 0);
		var u = r.__H || (r.__H = { __: [], __h: [] });
		return n >= u.__.length && u.__.push({}), u.__[n];
	}
	function y(n) {
		return (f = 1), m(j, n);
	}
	function m(n, t, i) {
		var o = h(u++, 2);
		if (
			((o.t = n),
			!o.__c &&
				((o.__ = [
					i ? i(t) : j(void 0, t),
					function (n) {
						var t = o.__N ? o.__N[0] : o.__[0],
							u = o.t(t, n);
						t !== u && ((o.__N = [u, o.__[1]]), o.__c.setState({}));
					}
				]),
				(o.__c = r),
				!r.u))
		) {
			var f = function (n, t, u) {
				if (!o.__c.__H) return !0;
				var r = o.__c.__H.__.filter(function (n) {
					return !!n.__c;
				});
				if (
					r.every(function (n) {
						return !n.__N;
					})
				)
					return !c || c.call(this, n, t, u);
				var i = o.__c.props !== n;
				return (
					r.forEach(function (n) {
						if (n.__N) {
							var t = n.__[0];
							(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (i = !0);
						}
					}),
					(c && c.call(this, n, t, u)) || i
				);
			};
			r.u = !0;
			var c = r.shouldComponentUpdate,
				e = r.componentWillUpdate;
			(r.componentWillUpdate = function (n, t, u) {
				if (this.__e) {
					var r = c;
					(c = void 0), f(n, t, u), (c = r);
				}
				e && e.call(this, n, t, u);
			}),
				(r.shouldComponentUpdate = f);
		}
		return o.__N || o.__;
	}
	function T(n, t) {
		var i = h(u++, 4);
		!e.__s && g(i.__H, t) && ((i.__ = n), (i.i = t), r.__h.push(i));
	}
	function _(n, t) {
		var r = h(u++, 7);
		return g(r.__H, t) && ((r.__ = n()), (r.__H = t), (r.__h = n)), r.__;
	}
	function b() {
		for (var n; (n = c.shift()); )
			if (n.__P && n.__H)
				try {
					n.__H.__h.forEach(A), n.__H.__h.forEach(F), (n.__H.__h = []);
				} catch (t) {
					(n.__H.__h = []), e.__e(t, n.__v);
				}
	}
	(e.__b = function (n) {
		(r = null), a && a(n);
	}),
		(e.__ = function (n, t) {
			n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
		}),
		(e.__r = function (n) {
			v && v(n), (u = 0);
			var t = (r = n.__c).__H;
			t &&
				(i === r
					? ((t.__h = []),
						(r.__h = []),
						t.__.forEach(function (n) {
							n.__N && (n.__ = n.__N), (n.i = n.__N = void 0);
						}))
					: (t.__h.forEach(A), t.__h.forEach(F), (t.__h = []), (u = 0))),
				(i = r);
		}),
		(e.diffed = function (n) {
			l && l(n);
			var t = n.__c;
			t &&
				t.__H &&
				(t.__H.__h.length &&
					((1 !== c.push(t) && o === e.requestAnimationFrame) ||
						((o = e.requestAnimationFrame) || x)(b)),
				t.__H.__.forEach(function (n) {
					n.i && (n.__H = n.i), (n.i = void 0);
				})),
				(i = r = null);
		}),
		(e.__c = function (n, t) {
			t.some(function (n) {
				try {
					n.__h.forEach(A),
						(n.__h = n.__h.filter(function (n) {
							return !n.__ || F(n);
						}));
				} catch (u) {
					t.some(function (n) {
						n.__h && (n.__h = []);
					}),
						(t = []),
						e.__e(u, n.__v);
				}
			}),
				d && d(n, t);
		}),
		(e.unmount = function (n) {
			s && s(n);
			var t,
				u = n.__c;
			u &&
				u.__H &&
				(u.__H.__.forEach(function (n) {
					try {
						A(n);
					} catch (n) {
						t = n;
					}
				}),
				(u.__H = void 0),
				t && e.__e(t, u.__v));
		});
	var q = 'function' == typeof requestAnimationFrame;
	function x(n) {
		var t,
			u = function () {
				clearTimeout(r), q && cancelAnimationFrame(t), setTimeout(n);
			},
			r = setTimeout(u, 100);
		q && (t = requestAnimationFrame(u));
	}
	function A(n) {
		var t = r,
			u = n.__c;
		'function' == typeof u && ((n.__c = void 0), u()), (r = t);
	}
	function F(n) {
		var t = r;
		(n.__c = n.__()), (r = t);
	}
	function g(n, t) {
		return (
			!n ||
			n.length !== t.length ||
			t.some(function (t, u) {
				return t !== n[u];
			})
		);
	}
	function j(n, t) {
		return 'function' == typeof t ? t(n) : t;
	}
	(n.useCallback = function (n, t) {
		return (
			(f = 8),
			_(function () {
				return n;
			}, t)
		);
	}),
		(n.useContext = function (n) {
			var t = r.context[n.__c],
				i = h(u++, 9);
			return (
				(i.c = n),
				t ? (null == i.__ && ((i.__ = !0), t.sub(r)), t.props.value) : n.__
			);
		}),
		(n.useDebugValue = function (n, t) {
			e.useDebugValue && e.useDebugValue(t ? t(n) : n);
		}),
		(n.useEffect = function (n, t) {
			var i = h(u++, 3);
			!e.__s && g(i.__H, t) && ((i.__ = n), (i.i = t), r.__H.__h.push(i));
		}),
		(n.useErrorBoundary = function (n) {
			var t = h(u++, 10),
				i = y();
			return (
				(t.__ = n),
				r.componentDidCatch ||
					(r.componentDidCatch = function (n, u) {
						t.__ && t.__(n, u), i[1](n);
					}),
				[
					i[0],
					function () {
						i[1](void 0);
					}
				]
			);
		}),
		(n.useId = function () {
			var n = h(u++, 11);
			if (!n.__) {
				for (var t = r.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
				var i = t.__m || (t.__m = [0, 0]);
				n.__ = 'P' + i[0] + '-' + i[1]++;
			}
			return n.__;
		}),
		(n.useImperativeHandle = function (n, t, u) {
			(f = 6),
				T(
					function () {
						return 'function' == typeof n
							? (n(t()),
								function () {
									return n(null);
								})
							: n
								? ((n.current = t()),
									function () {
										return (n.current = null);
									})
								: void 0;
					},
					null == u ? u : u.concat(n)
				);
		}),
		(n.useLayoutEffect = T),
		(n.useMemo = _),
		(n.useReducer = m),
		(n.useRef = function (n) {
			return (
				(f = 5),
				_(function () {
					return { current: n };
				}, [])
			);
		}),
		(n.useState = y);
});
//# sourceMappingURL=hooks.umd.js.map