var n,
	t,
	r,
	u,
	o = require('preact'),
	i = 0,
	f = [],
	c = o.options,
	e = c.__b,
	a = c.__r,
	v = c.diffed,
	s = c.__c,
	l = c.unmount,
	p = c.__;
function x(n, r) {
	c.__h && c.__h(t, n, i || r), (i = 0);
	var u = t.__H || (t.__H = { __: [], __h: [] });
	return n >= u.__.length && u.__.push({}), u.__[n];
}
function d(n) {
	return (i = 1), m(b, n);
}
function m(r, u, o) {
	var i = x(n++, 2);
	if (
		((i.t = r),
		!i.__c &&
			((i.__ = [
				o ? o(u) : b(void 0, u),
				function (n) {
					var t = i.__N ? i.__N[0] : i.__[0],
						r = i.t(t, n);
					t !== r && ((i.__N = [r, i.__[1]]), i.__c.setState({}));
				}
			]),
			(i.__c = t),
			!t.u))
	) {
		var f = function (n, t, r) {
			if (!i.__c.__H) return !0;
			var u = i.__c.__H.__.filter(function (n) {
				return !!n.__c;
			});
			if (
				u.every(function (n) {
					return !n.__N;
				})
			)
				return !c || c.call(this, n, t, r);
			var o = i.__c.props !== n;
			return (
				u.forEach(function (n) {
					if (n.__N) {
						var t = n.__[0];
						(n.__ = n.__N), (n.__N = void 0), t !== n.__[0] && (o = !0);
					}
				}),
				(c && c.call(this, n, t, r)) || o
			);
		};
		t.u = !0;
		var c = t.shouldComponentUpdate,
			e = t.componentWillUpdate;
		(t.componentWillUpdate = function (n, t, r) {
			if (this.__e) {
				var u = c;
				(c = void 0), f(n, t, r), (c = u);
			}
			e && e.call(this, n, t, r);
		}),
			(t.shouldComponentUpdate = f);
	}
	return i.__N || i.__;
}
function h(r, u) {
	var o = x(n++, 4);
	!c.__s && P(o.__H, u) && ((o.__ = r), (o.o = u), t.__h.push(o));
}
function y(t, r) {
	var u = x(n++, 7);
	return P(u.__H, r) && ((u.__ = t()), (u.__H = r), (u.__h = t)), u.__;
}
function _() {
	for (var n; (n = f.shift()); )
		if (n.__P && n.__H)
			try {
				n.__H.__h.forEach(F), n.__H.__h.forEach(T), (n.__H.__h = []);
			} catch (t) {
				(n.__H.__h = []), c.__e(t, n.__v);
			}
}
(c.__b = function (n) {
	(t = null), e && e(n);
}),
	(c.__ = function (n, t) {
		n && t.__k && t.__k.__m && (n.__m = t.__k.__m), p && p(n, t);
	}),
	(c.__r = function (u) {
		a && a(u), (n = 0);
		var o = (t = u.__c).__H;
		o &&
			(r === t
				? ((o.__h = []),
					(t.__h = []),
					o.__.forEach(function (n) {
						n.__N && (n.__ = n.__N), (n.o = n.__N = void 0);
					}))
				: (o.__h.forEach(F), o.__h.forEach(T), (o.__h = []), (n = 0))),
			(r = t);
	}),
	(c.diffed = function (n) {
		v && v(n);
		var o = n.__c;
		o &&
			o.__H &&
			(o.__H.__h.length &&
				((1 !== f.push(o) && u === c.requestAnimationFrame) ||
					((u = c.requestAnimationFrame) || A)(_)),
			o.__H.__.forEach(function (n) {
				n.o && (n.__H = n.o), (n.o = void 0);
			})),
			(r = t = null);
	}),
	(c.__c = function (n, t) {
		t.some(function (n) {
			try {
				n.__h.forEach(F),
					(n.__h = n.__h.filter(function (n) {
						return !n.__ || T(n);
					}));
			} catch (r) {
				t.some(function (n) {
					n.__h && (n.__h = []);
				}),
					(t = []),
					c.__e(r, n.__v);
			}
		}),
			s && s(n, t);
	}),
	(c.unmount = function (n) {
		l && l(n);
		var t,
			r = n.__c;
		r &&
			r.__H &&
			(r.__H.__.forEach(function (n) {
				try {
					F(n);
				} catch (n) {
					t = n;
				}
			}),
			(r.__H = void 0),
			t && c.__e(t, r.__v));
	});
var q = 'function' == typeof requestAnimationFrame;
function A(n) {
	var t,
		r = function () {
			clearTimeout(u), q && cancelAnimationFrame(t), setTimeout(n);
		},
		u = setTimeout(r, 100);
	q && (t = requestAnimationFrame(r));
}
function F(n) {
	var r = t,
		u = n.__c;
	'function' == typeof u && ((n.__c = void 0), u()), (t = r);
}
function T(n) {
	var r = t;
	(n.__c = n.__()), (t = r);
}
function P(n, t) {
	return (
		!n ||
		n.length !== t.length ||
		t.some(function (t, r) {
			return t !== n[r];
		})
	);
}
function b(n, t) {
	return 'function' == typeof t ? t(n) : t;
}
(exports.useCallback = function (n, t) {
	return (
		(i = 8),
		y(function () {
			return n;
		}, t)
	);
}),
	(exports.useContext = function (r) {
		var u = t.context[r.__c],
			o = x(n++, 9);
		return (
			(o.c = r),
			u ? (null == o.__ && ((o.__ = !0), u.sub(t)), u.props.value) : r.__
		);
	}),
	(exports.useDebugValue = function (n, t) {
		c.useDebugValue && c.useDebugValue(t ? t(n) : n);
	}),
	(exports.useEffect = function (r, u) {
		var o = x(n++, 3);
		!c.__s && P(o.__H, u) && ((o.__ = r), (o.o = u), t.__H.__h.push(o));
	}),
	(exports.useErrorBoundary = function (r) {
		var u = x(n++, 10),
			o = d();
		return (
			(u.__ = r),
			t.componentDidCatch ||
				(t.componentDidCatch = function (n, t) {
					u.__ && u.__(n, t), o[1](n);
				}),
			[
				o[0],
				function () {
					o[1](void 0);
				}
			]
		);
	}),
	(exports.useId = function () {
		var r = x(n++, 11);
		if (!r.__) {
			for (var u = t.__v; null !== u && !u.__m && null !== u.__; ) u = u.__;
			var o = u.__m || (u.__m = [0, 0]);
			r.__ = 'P' + o[0] + '-' + o[1]++;
		}
		return r.__;
	}),
	(exports.useImperativeHandle = function (n, t, r) {
		(i = 6),
			h(
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
				null == r ? r : r.concat(n)
			);
	}),
	(exports.useLayoutEffect = h),
	(exports.useMemo = y),
	(exports.useReducer = m),
	(exports.useRef = function (n) {
		return (
			(i = 5),
			y(function () {
				return { current: n };
			}, [])
		);
	}),
	(exports.useState = d);
//# sourceMappingURL=hooks.js.map
