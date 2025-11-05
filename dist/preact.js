var n,
	l,
	t,
	u,
	r,
	i,
	e,
	o,
	f,
	c,
	s,
	h,
	a = {},
	p = [],
	y = /(mi|mn|mo|ms$|mte|msp)/,
	v = Array.isArray,
	w = p.slice,
	d = Object.assign;
function g(n) {
	n && n.parentNode && n.remove();
}
function _(n, l, t) {
	var u,
		r,
		i,
		e = {};
	for (i in l)
		'key' == i
			? (u = l[i])
			: 'ref' == i && 'function' != typeof n
				? (r = l[i])
				: (e[i] = l[i]);
	return (
		arguments.length > 2 &&
			(e.children = arguments.length > 3 ? w.call(arguments, 2) : t),
		x(n, e, u, r, null)
	);
}
function x(t, u, r, i, e) {
	var o = {
		type: t,
		props: u,
		key: r,
		ref: i,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: null == e ? ++l : e,
		__i: -1,
		__u: 0
	};
	return null == e && null != n.vnode && n.vnode(o), o;
}
function m(n) {
	return n.children;
}
function b(n, l) {
	(this.props = n), (this.context = l), (this.__g = 0);
}
function k(n, l) {
	if (null == l) return n.__ ? k(n.__, n.__i + 1) : null;
	for (var t; l < n.__k.length; l++)
		if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
	return 'function' == typeof n.type ? k(n) : null;
}
function M(n) {
	var l, t;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = null, l = 0; l < n.__k.length; l++)
			if (null != (t = n.__k[l]) && null != t.__e) {
				n.__e = t.__e;
				break;
			}
		return M(n);
	}
}
function $(l) {
	((8 & l.__g || !(l.__g |= 8) || !u.push(l) || i++) &&
		r == n.debounceRendering) ||
		((r = n.debounceRendering) || queueMicrotask)(S);
}
function S() {
	for (var l, t, r, o, f, c, s, h, a = 1; u.length; )
		u.length > a && u.sort(e),
			(l = u.shift()),
			(a = u.length),
			8 & l.__g &&
				((r = void 0),
				(o = void 0),
				(f = (o = (t = l).__v).__e),
				(c = []),
				(s = []),
				(h = t.__P) &&
					(((r = d({}, o)).__v = o.__v + 1),
					n.vnode && n.vnode(r),
					T(
						h,
						r,
						o,
						t.__n,
						h.namespaceURI,
						32 & o.__u ? [f] : null,
						c,
						null == f ? k(o) : f,
						!!(32 & o.__u),
						s,
						h.ownerDocument
					),
					(r.__v = o.__v),
					(r.__.__k[r.__i] = r),
					N(c, r, s),
					(o.__ = o.__e = null),
					r.__e != f && M(r)));
	i = 0;
}
function C(n, l, t, u, r, i, e, o, f, c, s, h) {
	var y,
		v,
		w,
		d,
		g,
		_,
		x,
		m = (u && u.__k) || p,
		b = l.length;
	for (f = L(t, l, m, f, b), y = 0; y < b; y++)
		null != (w = t.__k[y]) &&
			((v = -1 == w.__i ? a : m[w.__i] || a),
			(w.__i = y),
			(_ = T(n, w, v, r, i, e, o, f, c, s, h)),
			(d = w.__e),
			w.ref &&
				v.ref != w.ref &&
				(v.ref && z(v.ref, null, w), s.push(w.ref, w.__c || d, w)),
			null == g && null != d && (g = d),
			(x = 4 & w.__u) || v.__k === w.__k
				? (f = j(w, f, n, x))
				: 'function' == typeof w.type && void 0 !== _
					? (f = _)
					: d && (f = d.nextSibling),
			(w.__u &= -7));
	return (t.__e = g), f;
}
function L(n, l, t, u, r) {
	var i,
		e,
		o,
		f,
		c,
		s = t.length,
		h = s,
		a = 0;
	for (n.__k = new Array(r), i = 0; i < r; i++)
		null != (e = l[i]) && 'boolean' != typeof e && 'function' != typeof e
			? ('string' == typeof e ||
				'number' == typeof e ||
				'bigint' == typeof e ||
				e.constructor == String
					? (e = n.__k[i] = x(null, e, null, null, null))
					: v(e)
						? (e = n.__k[i] = x(m, { children: e }, null, null, null))
						: null == e.constructor && e.__b > 0
							? (e = n.__k[i] =
									x(e.type, e.props, e.key, e.ref ? e.ref : null, e.__v))
							: (n.__k[i] = e),
				(f = i + a),
				(e.__ = n),
				(e.__b = n.__b + 1),
				(o = null),
				-1 != (c = e.__i = A(e, t, f, h)) && (h--, (o = t[c]) && (o.__u |= 2)),
				null == o || null == o.__v
					? (-1 == c && (r > s ? a-- : r < s && a++),
						'function' != typeof e.type && (e.__u |= 4))
					: c != f &&
						(c == f - 1
							? a--
							: c == f + 1
								? a++
								: (c > f ? a-- : a++, (e.__u |= 4))))
			: (n.__k[i] = null);
	if (h)
		for (i = 0; i < s; i++)
			null != (o = t[i]) &&
				0 == (2 & o.__u) &&
				(o.__e == u && (u = k(o)), B(o, o));
	return u;
}
function j(n, l, t, u) {
	var r, i;
	if ('function' == typeof n.type) {
		for (r = n.__k, i = 0; r && i < r.length; i++)
			r[i] && ((r[i].__ = n), (l = j(r[i], l, t, u)));
		return l;
	}
	n.__e != l &&
		(u &&
			(l && n.type && !l.parentNode && (l = k(n)),
			t.insertBefore(n.__e, l || null)),
		(l = n.__e));
	do {
		l = l && l.nextSibling;
	} while (null != l && 8 == l.nodeType);
	return l;
}
function A(n, l, t, u) {
	var r,
		i,
		e,
		o = n.key,
		f = n.type,
		c = l[t],
		s = null != c && 0 == (2 & c.__u);
	if ((null === c && null == o) || (s && o == c.key && f == c.type)) return t;
	if (u > (s ? 1 : 0))
		for (r = t - 1, i = t + 1; r >= 0 || i < l.length; )
			if (
				null != (c = l[(e = r >= 0 ? r-- : i++)]) &&
				0 == (2 & c.__u) &&
				o == c.key &&
				f == c.type
			)
				return e;
	return -1;
}
function H(n, l, t) {
	'-' == l[0]
		? n.setProperty(l, null == t ? '' : t)
		: (n[l] = null == t ? '' : t);
}
function I(n, l, t, u, r) {
	var i;
	n: if ('style' == l)
		if ('string' == typeof t) n.style.cssText = t;
		else {
			if (('string' == typeof u && (n.style.cssText = u = ''), u))
				for (l in u) (t && l in t) || H(n.style, l, '');
			if (t) for (l in t) (u && t[l] == u[l]) || H(n.style, l, t[l]);
		}
	else if ('o' == l[0] && 'n' == l[1])
		(i = l != (l = l.replace(o, '$1'))),
			(l = l.slice(2))[0].toLowerCase() != l[0] && (l = l.toLowerCase()),
			n.__l || (n.__l = {}),
			(n.__l[l + i] = t),
			t
				? u
					? (t.l = u.l)
					: ((t.l = f), n.addEventListener(l, i ? s : c, i))
				: n.removeEventListener(l, i ? s : c, i);
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
function O(l) {
	return function (t) {
		if (this.__l) {
			var u = this.__l[t.type + l];
			if (null == t.t) t.t = f++;
			else if (t.t < u.l) return;
			return u(n.event ? n.event(t) : t);
		}
	};
}
function T(l, t, u, r, i, e, o, f, c, s, h) {
	var a,
		p,
		y,
		w,
		_,
		x,
		k,
		M,
		$,
		S,
		L,
		j,
		A,
		H,
		I,
		O,
		T,
		N,
		z = t.type;
	if (null != t.constructor) return null;
	128 & u.__u &&
		(c = 32 & u.__u) &&
		u.__c.__z &&
		((f = (e = u.__c.__z)[0]), (u.__c.__z = null)),
		(a = n.__b) && a(t);
	n: if ('function' == typeof z)
		try {
			if (
				((x = t.props),
				(k = 'prototype' in z && z.prototype.render),
				(M = (a = z.contextType) && r[a.__c]),
				($ = a ? (M ? M.props.value : a.__) : r),
				u.__c
					? 2 & (p = t.__c = u.__c).__g && (p.__g |= 1)
					: (k
							? (t.__c = p = new z(x, $))
							: ((t.__c = p = new b(x, $)),
								(p.constructor = z),
								(p.render = D)),
						M && M.sub(p),
						(p.props = x),
						p.state || (p.state = {}),
						(p.context = $),
						(p.__n = r),
						(p.__g |= 8),
						(p.__h = []),
						(p._sb = [])),
				k && null == p.__s && (p.__s = p.state),
				k &&
					null != z.getDerivedStateFromProps &&
					(p.__s == p.state && (p.__s = d({}, p.__s)),
					d(p.__s, z.getDerivedStateFromProps(x, p.__s))),
				(y = p.props),
				(w = p.state),
				(p.__v = t),
				u.__c)
			) {
				if (
					(k &&
						null == z.getDerivedStateFromProps &&
						x !== y &&
						null != p.componentWillReceiveProps &&
						p.componentWillReceiveProps(x, $),
					(!(4 & p.__g) &&
						null != p.shouldComponentUpdate &&
						!1 === p.shouldComponentUpdate(x, p.__s, $)) ||
						t.__v == u.__v)
				) {
					for (
						t.__v != u.__v && ((p.props = x), (p.state = p.__s), (p.__g &= -9)),
							t.__e = u.__e,
							t.__k = u.__k,
							t.__k.some(function (n) {
								n && (n.__ = t);
							}),
							S = 0;
						S < p._sb.length;
						S++
					)
						p.__h.push(p._sb[S]);
					(p._sb = []), p.__h.length && o.push(p);
					break n;
				}
				null != p.componentWillUpdate && p.componentWillUpdate(x, p.__s, $),
					k &&
						null != p.componentDidUpdate &&
						p.__h.push(function () {
							p.componentDidUpdate(y, w, _);
						});
			} else
				k &&
					null == z.getDerivedStateFromProps &&
					null != p.componentWillMount &&
					p.componentWillMount(),
					k && null != p.componentDidMount && p.__h.push(p.componentDidMount);
			if (
				((p.context = $),
				(p.props = x),
				(p.__P = l),
				(p.__g &= -5),
				(L = n.__r),
				(j = 0),
				k)
			) {
				for (
					p.state = p.__s,
						p.__g &= -9,
						L && L(t),
						a = p.render(p.props, p.state, p.context),
						A = 0;
					A < p._sb.length;
					A++
				)
					p.__h.push(p._sb[A]);
				p._sb = [];
			} else
				do {
					(p.__g &= -9),
						L && L(t),
						(a = p.render(p.props, p.state, p.context)),
						(p.state = p.__s);
				} while (8 & p.__g && ++j < 25);
			(p.state = p.__s),
				null != p.getChildContext && (r = d({}, r, p.getChildContext())),
				k &&
					u.__c &&
					null != p.getSnapshotBeforeUpdate &&
					(_ = p.getSnapshotBeforeUpdate(y, w)),
				null != a && a.type === m && null == a.key && (a = P(a.props.children)),
				(f = C(l, v(a) ? a : [a], t, u, r, i, e, o, f, c, s, h)),
				(t.__u &= -161),
				p.__h.length && o.push(p),
				2 & p.__g && (p.__g &= -4);
		} catch (l) {
			if (((t.__v = null), c || null != e))
				if (l.then) {
					for (
						H = 0, t.__u |= c ? 160 : 128, t.__c.__z = [], O = 0;
						O < e.length;
						O++
					)
						null == (T = e[O]) ||
							I ||
							(8 == T.nodeType
								? ('$s' == T.data
										? (H && t.__c.__z.push(T), H++)
										: '/$s' == T.data &&
											(--H && t.__c.__z.push(T), (I = 0 == H), (f = e[O])),
									(e[O] = null))
								: H && (t.__c.__z.push(T), (e[O] = null)));
					if (!I) {
						for (; f && 8 == f.nodeType && f.nextSibling; ) f = f.nextSibling;
						(e[e.indexOf(f)] = null), (t.__c.__z = [f]);
					}
					t.__e = f;
				} else {
					for (N = e.length; N--; ) g(e[N]);
					q(t);
				}
			else (t.__e = u.__e), (t.__k = u.__k), l.then || q(t);
			n.__e(l, t, u);
		}
	else f = t.__e = V(u.__e, t, u, r, i, e, o, c, s, h);
	return (a = n.diffed) && a(t), 128 & t.__u ? void 0 : f;
}
function q(n) {
	n && n.__c && (n.__c.__g |= 4), n && n.__k && n.__k.forEach(q);
}
function N(l, t, u) {
	for (var r = 0; r < u.length; r++) z(u[r], u[++r], u[++r]);
	n.__c && n.__c(t, l),
		l.some(function (t) {
			try {
				(l = t.__h),
					(t.__h = []),
					l.some(function (n) {
						n.call(t);
					});
			} catch (l) {
				n.__e(l, t.__v);
			}
		});
}
function P(n) {
	return 'object' != typeof n || null == n || (n.__b && n.__b > 0)
		? n
		: v(n)
			? n.map(P)
			: d({}, n);
}
function V(l, t, u, r, i, e, o, f, c, s) {
	var h,
		p,
		d,
		_,
		x,
		m,
		b,
		M,
		$ = u.props,
		S = t.props,
		L = t.type;
	if (
		('svg' == L
			? (i = 'http://www.w3.org/2000/svg')
			: 'math' == L
				? (i = 'http://www.w3.org/1998/Math/MathML')
				: i || (i = 'http://www.w3.org/1999/xhtml'),
		null != e)
	)
		for (h = 0; h < e.length; h++)
			if (
				(x = e[h]) &&
				'setAttribute' in x == !!L &&
				(L ? x.localName == L : 3 == x.nodeType)
			) {
				(l = x), (e[h] = null);
				break;
			}
	if (null == l) {
		if (null == L) return s.createTextNode(S);
		(l = s.createElementNS(i, L, S.is && S)),
			f && (n.__m && n.__m(t, e), (f = !1)),
			(e = null);
	}
	if (null == L) $ === S || (f && l.data == S) || (l.data = S);
	else {
		if (((e = e && w.call(l.childNodes)), ($ = u.props || a), !f && null != e))
			for ($ = {}, h = 0; h < l.attributes.length; h++)
				$[(x = l.attributes[h]).name] = x.value;
		for (h in $)
			if (((x = $[h]), 'children' == h));
			else if ('dangerouslySetInnerHTML' == h) d = x;
			else if (!(h in S)) {
				if (
					('value' == h && 'defaultValue' in S) ||
					('checked' == h && 'defaultChecked' in S)
				)
					continue;
				I(l, h, null, x, i);
			}
		for (h in ((M = 1 & u.__u), S))
			(x = S[h]),
				'children' == h
					? (_ = x)
					: 'dangerouslySetInnerHTML' == h
						? (p = x)
						: 'value' == h
							? (m = x)
							: 'checked' == h
								? (b = x)
								: (f && 'function' != typeof x) ||
									($[h] === x && !M) ||
									I(l, h, x, $[h], i);
		if (p)
			f ||
				(d && (p.__html == d.__html || p.__html == l.innerHTML)) ||
				(l.innerHTML = p.__html),
				(t.__k = []);
		else if (
			(d && (l.innerHTML = ''),
			('foreignObject' == L ||
				('http://www.w3.org/1998/Math/MathML' == i && y.test(L))) &&
				(i = 'http://www.w3.org/1999/xhtml'),
			C(
				'template' == L ? l.content : l,
				v(_) ? _ : [_],
				t,
				u,
				r,
				i,
				e,
				o,
				e ? e[0] : u.__k && k(u, 0),
				f,
				c,
				s
			),
			null != e)
		)
			for (h = e.length; h--; ) g(e[h]);
		f ||
			((h = 'value'),
			'progress' == L && null == m
				? l.removeAttribute('value')
				: null == m ||
					(m === l[h] && ('progress' !== L || m)) ||
					I(l, h, m, $[h], i),
			(h = 'checked'),
			null != b && b != l[h] && I(l, h, b, $[h], i));
	}
	return l;
}
function z(l, t, u) {
	try {
		'function' == typeof l
			? ('function' == typeof l.__u && l.__u(),
				('function' == typeof l.__u && null == t) || (l.__u = l(t)))
			: (l.current = t);
	} catch (l) {
		n.__e(l, u);
	}
}
function B(l, t, u) {
	var r, i;
	if (
		(n.unmount && n.unmount(l),
		!(r = l.ref) || (r.current && r.current != l.__e) || z(r, null, t),
		null != (r = l.__c))
	) {
		if (r.componentWillUnmount)
			try {
				r.componentWillUnmount();
			} catch (l) {
				n.__e(l, t);
			}
		r.__P = null;
	}
	if ((r = l.__k))
		for (i = 0; i < r.length; i++)
			r[i] && B(r[i], t, u || 'function' != typeof l.type);
	u || g(l.__e),
		l.__e && l.__e.__l && (l.__e.__l = null),
		(l.__e = l.__c = l.__ = null);
}
function D(n, l, t) {
	return this.constructor(n, t);
}
function E(l, t) {
	var u, r, i, e;
	t == document && (t = document.documentElement),
		n.__ && n.__(l, t),
		(r = (u = l && 32 & l.__u) ? null : t.__k),
		(t.__k = _(m, null, [l])),
		(i = []),
		(e = []),
		T(
			t,
			t.__k,
			r || a,
			a,
			t.namespaceURI,
			r ? null : t.firstChild ? w.call(t.childNodes) : null,
			i,
			r ? r.__e : t.firstChild,
			u,
			e,
			t.ownerDocument
		),
		N(i, t.__k, e);
}
(n = {
	__e: function (n, l, t, u) {
		for (var r, e, o; (l = l.__); )
			if ((r = l.__c) && !(1 & r.__g)) {
				r.__g |= 4;
				try {
					if (
						((e = r.constructor) &&
							null != e.getDerivedStateFromError &&
							(r.setState(e.getDerivedStateFromError(n)), (o = 8 & r.__g)),
						null != r.componentDidCatch &&
							(r.componentDidCatch(n, u || {}), (o = 8 & r.__g)),
						o)
					)
						return void (r.__g |= 2);
				} catch (l) {
					n = l;
				}
			}
		throw ((i = 0), n);
	}
}),
	(l = 0),
	(t = function (n) {
		return null != n && null == n.constructor;
	}),
	(b.prototype.setState = function (n, l) {
		var t;
		(t =
			null != this.__s && this.__s != this.state
				? this.__s
				: (this.__s = d({}, this.state))),
			'function' == typeof n && (n = n(d({}, t), this.props)),
			n && (d(t, n), this.__v && (l && this._sb.push(l), $(this)));
	}),
	(b.prototype.forceUpdate = function (n) {
		this.__v && ((this.__g |= 4), n && this.__h.push(n), $(this));
	}),
	(b.prototype.render = m),
	(u = []),
	(i = 0),
	(e = function (n, l) {
		return n.__v.__b - l.__v.__b;
	}),
	(o = /(PointerCapture)$|Capture$/i),
	(f = 0),
	(c = O(!1)),
	(s = O(!0)),
	(h = 0),
	(exports.Component = b),
	(exports.Fragment = m),
	(exports.cloneElement = function (n, l, t) {
		var u,
			r,
			i,
			e = d({}, n.props);
		for (i in l)
			'key' == i
				? (u = l[i])
				: 'ref' == i && 'function' != typeof n.type
					? (r = l[i])
					: (e[i] = l[i]);
		return (
			arguments.length > 2 &&
				(e.children = arguments.length > 3 ? w.call(arguments, 2) : t),
			x(n.type, e, u || n.key, r || n.ref, null)
		);
	}),
	(exports.createContext = function (n) {
		function l(n) {
			var t, u;
			return (
				this.getChildContext ||
					((t = new Set()),
					((u = {})[l.__c] = this),
					(this.getChildContext = function () {
						return u;
					}),
					(this.componentWillUnmount = function () {
						t = null;
					}),
					(this.shouldComponentUpdate = function (n) {
						this.props.value != n.value &&
							t.forEach(function (n) {
								(n.__g |= 4), $(n);
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
		return (
			(l.__c = '__cC' + h++),
			(l.__ = n),
			(l.Provider =
				l.__l =
				(l.Consumer = function (n, l) {
					return n.children(l);
				}).contextType =
					l),
			l
		);
	}),
	(exports.createElement = _),
	(exports.createRef = function () {
		return { current: null };
	}),
	(exports.h = _),
	(exports.hydrate = function (n, l) {
		(n.__u |= 32), E(n, l);
	}),
	(exports.isValidElement = t),
	(exports.options = n),
	(exports.render = E),
	(exports.toChildArray = function n(l, t) {
		return (
			(t = t || []),
			null == l ||
				'boolean' == typeof l ||
				(v(l)
					? l.some(function (l) {
							n(l, t);
						})
					: t.push(l)),
			t
		);
	});
//# sourceMappingURL=preact.js.map
