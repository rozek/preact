var n,
	l,
	t,
	u,
	r,
	i,
	o,
	e,
	f,
	c,
	s,
	a,
	h,
	p = {},
	v = [],
	y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	d = Array.isArray;
function w(n, l) {
	for (var t in l) n[t] = l[t];
	return n;
}
function _(n) {
	n && n.parentNode && n.parentNode.removeChild(n);
}
function g(l, t, u) {
	var r,
		i,
		o,
		e = {};
	for (o in t)
		'key' == o ? (r = t[o]) : 'ref' == o ? (i = t[o]) : (e[o] = t[o]);
	if (
		(arguments.length > 2 &&
			(e.children = arguments.length > 3 ? n.call(arguments, 2) : u),
		'function' == typeof l && null != l.defaultProps)
	)
		for (o in l.defaultProps) void 0 === e[o] && (e[o] = l.defaultProps[o]);
	return x(l, e, r, i, null);
}
function x(n, u, r, i, o) {
	var e = {
		type: n,
		props: u,
		key: r,
		ref: i,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: null == o ? ++t : o,
		__i: -1,
		__u: 0
	};
	return null == o && null != l.vnode && l.vnode(e), e;
}
function m(n) {
	return n.children;
}
function b(n, l) {
	(this.props = n), (this.context = l);
}
function k(n, l) {
	if (null == l) return n.__ ? k(n.__, n.__i + 1) : null;
	for (var t; l < n.__k.length; l++)
		if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
	return 'function' == typeof n.type ? k(n) : null;
}
function S(n) {
	var l, t;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (t = n.__k[l]) && null != t.__e) {
				n.__e = n.__c.base = t.__e;
				break;
			}
		return S(n);
	}
}
function C(n) {
	((!n.__d && (n.__d = !0) && r.push(n) && !M.__r++) ||
		i !== l.debounceRendering) &&
		((i = l.debounceRendering) || o)(M);
}
function M() {
	var n, t, u, i, o, f, c, s;
	for (r.sort(e); (n = r.shift()); )
		n.__d &&
			((t = r.length),
			(i = void 0),
			(f = (o = (u = n).__v).__e),
			(c = []),
			(s = []),
			u.__P &&
				(((i = w({}, o)).__v = o.__v + 1),
				l.vnode && l.vnode(i),
				F(
					u.__P,
					i,
					o,
					u.__n,
					u.__P.namespaceURI,
					32 & o.__u ? [f] : null,
					c,
					null == f ? k(o) : f,
					!!(32 & o.__u),
					s
				),
				(i.__v = o.__v),
				(i.__.__k[i.__i] = i),
				O(c, i, s),
				i.__e != f && S(i)),
			r.length > t && r.sort(e));
	M.__r = 0;
}
function P(n, l, t, u, r, i, o, e, f, c, s) {
	var a,
		h,
		y,
		d,
		w,
		_,
		g = (u && u.__k) || v,
		x = l.length;
	for (f = $(t, l, g, f, x), a = 0; a < x; a++)
		null != (y = t.__k[a]) &&
			((h = -1 === y.__i ? p : g[y.__i] || p),
			(y.__i = a),
			(_ = F(n, y, h, r, i, o, e, f, c, s)),
			(d = y.__e),
			y.ref &&
				h.ref != y.ref &&
				(h.ref && z(h.ref, null, y), s.push(y.ref, y.__c || d, y)),
			null == w && null != d && (w = d),
			4 & y.__u || h.__k === y.__k
				? (f = I(y, f, n))
				: 'function' == typeof y.type && void 0 !== _
					? (f = _)
					: d && (f = d.nextSibling),
			(y.__u &= -7));
	return (t.__e = w), f;
}
function $(n, l, t, u, r) {
	var i,
		o,
		e,
		f,
		c,
		s = t.length,
		a = s,
		h = 0;
	for (n.__k = new Array(r), i = 0; i < r; i++)
		null != (o = l[i]) && 'boolean' != typeof o && 'function' != typeof o
			? ((f = i + h),
				((o = n.__k[i] =
					'string' == typeof o ||
					'number' == typeof o ||
					'bigint' == typeof o ||
					o.constructor == String
						? x(null, o, null, null, null)
						: d(o)
							? x(m, { children: o }, null, null, null)
							: void 0 === o.constructor && o.__b > 0
								? x(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
								: o).__ = n),
				(o.__b = n.__b + 1),
				(e = null),
				-1 !== (c = o.__i = A(o, t, f, a)) && (a--, (e = t[c]) && (e.__u |= 2)),
				null == e || null === e.__v
					? (-1 == c && h--, 'function' != typeof o.type && (o.__u |= 4))
					: c != f &&
						(c == f - 1
							? h--
							: c == f + 1
								? h++
								: (c > f ? h-- : h++, (o.__u |= 4))))
			: (n.__k[i] = null);
	if (a)
		for (i = 0; i < s; i++)
			null != (e = t[i]) &&
				0 == (2 & e.__u) &&
				(e.__e == u && (u = k(e)), N(e, e));
	return u;
}
function I(n, l, t) {
	var u, r;
	if ('function' == typeof n.type) {
		for (u = n.__k, r = 0; u && r < u.length; r++)
			u[r] && ((u[r].__ = n), (l = I(u[r], l, t)));
		return l;
	}
	n.__e != l &&
		(l && n.type && !t.contains(l) && (l = k(n)),
		t.insertBefore(n.__e, l || null),
		(l = n.__e));
	do {
		l = l && l.nextSibling;
	} while (null != l && 8 == l.nodeType);
	return l;
}
function A(n, l, t, u) {
	var r,
		i,
		o = n.key,
		e = n.type,
		f = l[t];
	if (null === f || (f && o == f.key && e === f.type && 0 == (2 & f.__u)))
		return t;
	if (u > (null != f && 0 == (2 & f.__u) ? 1 : 0))
		for (r = t - 1, i = t + 1; r >= 0 || i < l.length; ) {
			if (r >= 0) {
				if ((f = l[r]) && 0 == (2 & f.__u) && o == f.key && e === f.type)
					return r;
				r--;
			}
			if (i < l.length) {
				if ((f = l[i]) && 0 == (2 & f.__u) && o == f.key && e === f.type)
					return i;
				i++;
			}
		}
	return -1;
}
function H(n, l, t) {
	'-' == l[0]
		? n.setProperty(l, null == t ? '' : t)
		: (n[l] =
				null == t ? '' : 'number' != typeof t || y.test(l) ? t : t + 'px');
}
function L(n, l, t, u, r) {
	var i;
	n: if ('style' == l)
		if ('string' == typeof t) n.style.cssText = t;
		else {
			if (('string' == typeof u && (n.style.cssText = u = ''), u))
				for (l in u) (t && l in t) || H(n.style, l, '');
			if (t) for (l in t) (u && t[l] === u[l]) || H(n.style, l, t[l]);
		}
	else if ('o' == l[0] && 'n' == l[1])
		(i = l != (l = l.replace(f, '$1'))),
			(l =
				l.toLowerCase() in n || 'onFocusOut' == l || 'onFocusIn' == l
					? l.toLowerCase().slice(2)
					: l.slice(2)),
			n.l || (n.l = {}),
			(n.l[l + i] = t),
			t
				? u
					? (t.t = u.t)
					: ((t.t = c), n.addEventListener(l, i ? a : s, i))
				: n.removeEventListener(l, i ? a : s, i);
	else {
		if ('http://www.w3.org/2000/svg' == r)
			l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
		else if (
			'width' != l &&
			'height' != l &&
			'href' != l &&
			'list' != l &&
			'form' != l &&
			'tabIndex' != l &&
			'download' != l &&
			'rowSpan' != l &&
			'colSpan' != l &&
			'role' != l &&
			'popover' != l &&
			l in n
		)
			try {
				n[l] = null == t ? '' : t;
				break n;
			} catch (n) {}
		'function' == typeof t ||
			(null == t || (!1 === t && '-' != l[4])
				? n.removeAttribute(l)
				: n.setAttribute(l, 'popover' == l && 1 == t ? '' : t));
	}
}
function T(n) {
	return function (t) {
		if (this.l) {
			var u = this.l[t.type + n];
			if (null == t.u) t.u = c++;
			else if (t.u < u.t) return;
			return u(l.event ? l.event(t) : t);
		}
	};
}
function F(n, t, u, r, i, o, e, f, c, s) {
	var a,
		h,
		p,
		v,
		y,
		g,
		x,
		k,
		S,
		C,
		M,
		$,
		I,
		A,
		H,
		L,
		T,
		F = t.type;
	if (void 0 !== t.constructor) return null;
	128 & u.__u && ((c = !!(32 & u.__u)), (o = [(f = t.__e = u.__e)])),
		(a = l.__b) && a(t);
	n: if ('function' == typeof F)
		try {
			if (
				((k = t.props),
				(S = 'prototype' in F && F.prototype.render),
				(C = (a = F.contextType) && r[a.__c]),
				(M = a ? (C ? C.props.value : a.__) : r),
				u.__c
					? (x = (h = t.__c = u.__c).__ = h.__E)
					: (S
							? (t.__c = h = new F(k, M))
							: ((t.__c = h = new b(k, M)),
								(h.constructor = F),
								(h.render = V)),
						C && C.sub(h),
						(h.props = k),
						h.state || (h.state = {}),
						(h.context = M),
						(h.__n = r),
						(p = h.__d = !0),
						(h.__h = []),
						(h._sb = [])),
				S && null == h.__s && (h.__s = h.state),
				S &&
					null != F.getDerivedStateFromProps &&
					(h.__s == h.state && (h.__s = w({}, h.__s)),
					w(h.__s, F.getDerivedStateFromProps(k, h.__s))),
				(v = h.props),
				(y = h.state),
				(h.__v = t),
				p)
			)
				S &&
					null == F.getDerivedStateFromProps &&
					null != h.componentWillMount &&
					h.componentWillMount(),
					S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
			else {
				if (
					(S &&
						null == F.getDerivedStateFromProps &&
						k !== v &&
						null != h.componentWillReceiveProps &&
						h.componentWillReceiveProps(k, M),
					!h.__e &&
						((null != h.shouldComponentUpdate &&
							!1 === h.shouldComponentUpdate(k, h.__s, M)) ||
							t.__v == u.__v))
				) {
					for (
						t.__v != u.__v && ((h.props = k), (h.state = h.__s), (h.__d = !1)),
							t.__e = u.__e,
							t.__k = u.__k,
							t.__k.some(function (n) {
								n && (n.__ = t);
							}),
							$ = 0;
						$ < h._sb.length;
						$++
					)
						h.__h.push(h._sb[$]);
					(h._sb = []), h.__h.length && e.push(h);
					break n;
				}
				null != h.componentWillUpdate && h.componentWillUpdate(k, h.__s, M),
					S &&
						null != h.componentDidUpdate &&
						h.__h.push(function () {
							h.componentDidUpdate(v, y, g);
						});
			}
			if (
				((h.context = M),
				(h.props = k),
				(h.__P = n),
				(h.__e = !1),
				(I = l.__r),
				(A = 0),
				S)
			) {
				for (
					h.state = h.__s,
						h.__d = !1,
						I && I(t),
						a = h.render(h.props, h.state, h.context),
						H = 0;
					H < h._sb.length;
					H++
				)
					h.__h.push(h._sb[H]);
				h._sb = [];
			} else
				do {
					(h.__d = !1),
						I && I(t),
						(a = h.render(h.props, h.state, h.context)),
						(h.state = h.__s);
				} while (h.__d && ++A < 25);
			(h.state = h.__s),
				null != h.getChildContext && (r = w(w({}, r), h.getChildContext())),
				S &&
					!p &&
					null != h.getSnapshotBeforeUpdate &&
					(g = h.getSnapshotBeforeUpdate(v, y)),
				(f = P(
					n,
					d(
						(L =
							null != a && a.type === m && null == a.key ? a.props.children : a)
					)
						? L
						: [L],
					t,
					u,
					r,
					i,
					o,
					e,
					f,
					c,
					s
				)),
				(h.base = t.__e),
				(t.__u &= -161),
				h.__h.length && e.push(h),
				x && (h.__E = h.__ = null);
		} catch (n) {
			if (((t.__v = null), c || null != o))
				if (n.then) {
					for (t.__u |= c ? 160 : 128; f && 8 == f.nodeType && f.nextSibling; )
						f = f.nextSibling;
					(o[o.indexOf(f)] = null), (t.__e = f);
				} else for (T = o.length; T--; ) _(o[T]);
			else (t.__e = u.__e), (t.__k = u.__k);
			l.__e(n, t, u);
		}
	else
		null == o && t.__v == u.__v
			? ((t.__k = u.__k), (t.__e = u.__e))
			: (f = t.__e = j(u.__e, t, u, r, i, o, e, c, s));
	return (a = l.diffed) && a(t), 128 & t.__u ? void 0 : f;
}
function O(n, t, u) {
	for (var r = 0; r < u.length; r++) z(u[r], u[++r], u[++r]);
	l.__c && l.__c(t, n),
		n.some(function (t) {
			try {
				(n = t.__h),
					(t.__h = []),
					n.some(function (n) {
						n.call(t);
					});
			} catch (n) {
				l.__e(n, t.__v);
			}
		});
}
function j(t, u, r, i, o, e, f, c, s) {
	var a,
		h,
		v,
		y,
		w,
		g,
		x,
		m = r.props,
		b = u.props,
		S = u.type;
	if (
		('svg' == S
			? (o = 'http://www.w3.org/2000/svg')
			: 'math' == S
				? (o = 'http://www.w3.org/1998/Math/MathML')
				: o || (o = 'http://www.w3.org/1999/xhtml'),
		null != e)
	)
		for (a = 0; a < e.length; a++)
			if (
				(w = e[a]) &&
				'setAttribute' in w == !!S &&
				(S ? w.localName == S : 3 == w.nodeType)
			) {
				(t = w), (e[a] = null);
				break;
			}
	if (null == t) {
		if (null == S) return document.createTextNode(b);
		(t = document.createElementNS(o, S, b.is && b)),
			c && (l.__m && l.__m(u, e), (c = !1)),
			(e = null);
	}
	if (null === S) m === b || (c && t.data === b) || (t.data = b);
	else {
		if (((e = e && n.call(t.childNodes)), (m = r.props || p), !c && null != e))
			for (m = {}, a = 0; a < t.attributes.length; a++)
				m[(w = t.attributes[a]).name] = w.value;
		for (a in m)
			if (((w = m[a]), 'children' == a));
			else if ('dangerouslySetInnerHTML' == a) v = w;
			else if (!(a in b)) {
				if (
					('value' == a && 'defaultValue' in b) ||
					('checked' == a && 'defaultChecked' in b)
				)
					continue;
				L(t, a, null, w, o);
			}
		for (a in b)
			(w = b[a]),
				'children' == a
					? (y = w)
					: 'dangerouslySetInnerHTML' == a
						? (h = w)
						: 'value' == a
							? (g = w)
							: 'checked' == a
								? (x = w)
								: (c && 'function' != typeof w) ||
									m[a] === w ||
									L(t, a, w, m[a], o);
		if (h)
			c ||
				(v && (h.__html === v.__html || h.__html === t.innerHTML)) ||
				(t.innerHTML = h.__html),
				(u.__k = []);
		else if (
			(v && (t.innerHTML = ''),
			P(
				t,
				d(y) ? y : [y],
				u,
				r,
				i,
				'foreignObject' == S ? 'http://www.w3.org/1999/xhtml' : o,
				e,
				f,
				e ? e[0] : r.__k && k(r, 0),
				c,
				s
			),
			null != e)
		)
			for (a = e.length; a--; ) _(e[a]);
		c ||
			((a = 'value'),
			'progress' == S && null == g
				? t.removeAttribute('value')
				: void 0 !== g &&
					(g !== t[a] ||
						('progress' == S && !g) ||
						('option' == S && g !== m[a])) &&
					L(t, a, g, m[a], o),
			(a = 'checked'),
			void 0 !== x && x !== t[a] && L(t, a, x, m[a], o));
	}
	return t;
}
function z(n, t, u) {
	try {
		if ('function' == typeof n) {
			var r = 'function' == typeof n.__u;
			r && n.__u(), (r && null == t) || (n.__u = n(t));
		} else n.current = t;
	} catch (n) {
		l.__e(n, u);
	}
}
function N(n, t, u) {
	var r, i;
	if (
		(l.unmount && l.unmount(n),
		(r = n.ref) && ((r.current && r.current !== n.__e) || z(r, null, t)),
		null != (r = n.__c))
	) {
		if (r.componentWillUnmount)
			try {
				r.componentWillUnmount();
			} catch (n) {
				l.__e(n, t);
			}
		r.base = r.__P = null;
	}
	if ((r = n.__k))
		for (i = 0; i < r.length; i++)
			r[i] && N(r[i], t, u || 'function' != typeof n.type);
	u || _(n.__e), (n.__c = n.__ = n.__e = void 0);
}
function V(n, l, t) {
	return this.constructor(n, t);
}
function q(t, u, r) {
	var i, o, e, f;
	u == document && (u = document.documentElement),
		l.__ && l.__(t, u),
		(o = (i = 'function' == typeof r) ? null : (r && r.__k) || u.__k),
		(e = []),
		(f = []),
		F(
			u,
			(t = ((!i && r) || u).__k = g(m, null, [t])),
			o || p,
			p,
			u.namespaceURI,
			!i && r ? [r] : o ? null : u.firstChild ? n.call(u.childNodes) : null,
			e,
			!i && r ? r : o ? o.__e : u.firstChild,
			i,
			f
		),
		O(e, t, f);
}
(n = v.slice),
	(l = {
		__e: function (n, l, t, u) {
			for (var r, i, o; (l = l.__); )
				if ((r = l.__c) && !r.__)
					try {
						if (
							((i = r.constructor) &&
								null != i.getDerivedStateFromError &&
								(r.setState(i.getDerivedStateFromError(n)), (o = r.__d)),
							null != r.componentDidCatch &&
								(r.componentDidCatch(n, u || {}), (o = r.__d)),
							o)
						)
							return (r.__E = r);
					} catch (l) {
						n = l;
					}
			throw n;
		}
	}),
	(t = 0),
	(u = function (n) {
		return null != n && null == n.constructor;
	}),
	(b.prototype.setState = function (n, l) {
		var t;
		(t =
			null != this.__s && this.__s !== this.state
				? this.__s
				: (this.__s = w({}, this.state))),
			'function' == typeof n && (n = n(w({}, t), this.props)),
			n && w(t, n),
			null != n && this.__v && (l && this._sb.push(l), C(this));
	}),
	(b.prototype.forceUpdate = function (n) {
		this.__v && ((this.__e = !0), n && this.__h.push(n), C(this));
	}),
	(b.prototype.render = m),
	(r = []),
	(o =
		'function' == typeof Promise
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(e = function (n, l) {
		return n.__v.__b - l.__v.__b;
	}),
	(M.__r = 0),
	(f = /(PointerCapture)$|Capture$/i),
	(c = 0),
	(s = T(!1)),
	(a = T(!0)),
	(h = 0),
	(exports.Component = b),
	(exports.Fragment = m),
	(exports.cloneElement = function (l, t, u) {
		var r,
			i,
			o,
			e,
			f = w({}, l.props);
		for (o in (l.type && l.type.defaultProps && (e = l.type.defaultProps), t))
			'key' == o
				? (r = t[o])
				: 'ref' == o
					? (i = t[o])
					: (f[o] = void 0 === t[o] && void 0 !== e ? e[o] : t[o]);
		return (
			arguments.length > 2 &&
				(f.children = arguments.length > 3 ? n.call(arguments, 2) : u),
			x(l.type, f, r || l.key, i || l.ref, null)
		);
	}),
	(exports.createContext = function (n, l) {
		var t = {
			__c: (l = '__cC' + h++),
			__: n,
			Consumer: function (n, l) {
				return n.children(l);
			},
			Provider: function (n) {
				var t, u;
				return (
					this.getChildContext ||
						((t = new Set()),
						((u = {})[l] = this),
						(this.getChildContext = function () {
							return u;
						}),
						(this.componentWillUnmount = function () {
							t = null;
						}),
						(this.shouldComponentUpdate = function (n) {
							this.props.value !== n.value &&
								t.forEach(function (n) {
									(n.__e = !0), C(n);
								});
						}),
						(this.sub = function (n) {
							t.add(n);
							var l = n.componentWillUnmount;
							n.componentWillUnmount = function () {
								t && t.delete(n), l && l.call(n);
							};
						})),
					n.children
				);
			}
		};
		return (t.Provider.__ = t.Consumer.contextType = t);
	}),
	(exports.createElement = g),
	(exports.createRef = function () {
		return { current: null };
	}),
	(exports.h = g),
	(exports.hydrate = function n(l, t) {
		q(l, t, n);
	}),
	(exports.isValidElement = u),
	(exports.options = l),
	(exports.render = q),
	(exports.toChildArray = function n(l, t) {
		return (
			(t = t || []),
			null == l ||
				'boolean' == typeof l ||
				(d(l)
					? l.some(function (l) {
							n(l, t);
						})
					: t.push(l)),
			t
		);
	});
//# sourceMappingURL=preact.js.map
