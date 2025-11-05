var n,
	l,
	u,
	t,
	i,
	r,
	f,
	e,
	o,
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
function _(n, l, u) {
	var t,
		i,
		r,
		f = {};
	for (r in l)
		'key' == r
			? (t = l[r])
			: 'ref' == r && 'function' != typeof n
				? (i = l[r])
				: (f[r] = l[r]);
	return (
		arguments.length > 2 &&
			(f.children = arguments.length > 3 ? w.call(arguments, 2) : u),
		m(n, f, t, i, null)
	);
}
function m(u, t, i, r, f) {
	var e = {
		type: u,
		props: t,
		key: i,
		ref: r,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: null == f ? ++l : f,
		__i: -1,
		__u: 0
	};
	return null == f && null != n.vnode && n.vnode(e), e;
}
function b() {
	return { current: null };
}
function k(n) {
	return n.children;
}
function M(n, l) {
	(this.props = n), (this.context = l), (this.__g = 0);
}
function $(n, l) {
	if (null == l) return n.__ ? $(n.__, n.__i + 1) : null;
	for (var u; l < n.__k.length; l++)
		if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
	return 'function' == typeof n.type ? $(n) : null;
}
function S(n) {
	var l, u;
	if (null != (n = n.__) && null != n.__c) {
		for (n.__e = null, l = 0; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = u.__e;
				break;
			}
		return S(n);
	}
}
function x(l) {
	((8 & l.__g || !(l.__g |= 8) || !t.push(l) || r++) &&
		i == n.debounceRendering) ||
		((i = n.debounceRendering) || queueMicrotask)(C);
}
function C() {
	for (var l, u, i, e, o, c, s, h, a = 1; t.length; )
		t.length > a && t.sort(f),
			(l = t.shift()),
			(a = t.length),
			8 & l.__g &&
				((i = void 0),
				(e = void 0),
				(o = (e = (u = l).__v).__e),
				(c = []),
				(s = []),
				(h = u.__P) &&
					(((i = d({}, e)).__v = e.__v + 1),
					n.vnode && n.vnode(i),
					N(
						h,
						i,
						e,
						u.__n,
						h.namespaceURI,
						32 & e.__u ? [o] : null,
						c,
						null == o ? $(e) : o,
						!!(32 & e.__u),
						s,
						h.ownerDocument
					),
					(i.__v = e.__v),
					(i.__.__k[i.__i] = i),
					V(c, i, s),
					(e.__ = e.__e = null),
					i.__e != o && S(i)));
	r = 0;
}
function L(n, l, u, t, i, r, f, e, o, c, s, h) {
	var y,
		v,
		w,
		d,
		g,
		_,
		m,
		b = (t && t.__k) || p,
		k = l.length;
	for (o = j(u, l, b, o, k), y = 0; y < k; y++)
		null != (w = u.__k[y]) &&
			((v = -1 == w.__i ? a : b[w.__i] || a),
			(w.__i = y),
			(_ = N(n, w, v, i, r, f, e, o, c, s, h)),
			(d = w.__e),
			w.ref &&
				v.ref != w.ref &&
				(v.ref && D(v.ref, null, w), s.push(w.ref, w.__c || d, w)),
			null == g && null != d && (g = d),
			(m = 4 & w.__u) || v.__k === w.__k
				? (o = A(w, o, n, m))
				: 'function' == typeof w.type && void 0 !== _
					? (o = _)
					: d && (o = d.nextSibling),
			(w.__u &= -7));
	return (u.__e = g), o;
}
function j(n, l, u, t, i) {
	var r,
		f,
		e,
		o,
		c,
		s = u.length,
		h = s,
		a = 0;
	for (n.__k = new Array(i), r = 0; r < i; r++)
		null != (f = l[r]) && 'boolean' != typeof f && 'function' != typeof f
			? ('string' == typeof f ||
				'number' == typeof f ||
				'bigint' == typeof f ||
				f.constructor == String
					? (f = n.__k[r] = m(null, f, null, null, null))
					: v(f)
						? (f = n.__k[r] = m(k, { children: f }, null, null, null))
						: null == f.constructor && f.__b > 0
							? (f = n.__k[r] =
									m(f.type, f.props, f.key, f.ref ? f.ref : null, f.__v))
							: (n.__k[r] = f),
				(o = r + a),
				(f.__ = n),
				(f.__b = n.__b + 1),
				(e = null),
				-1 != (c = f.__i = I(f, u, o, h)) && (h--, (e = u[c]) && (e.__u |= 2)),
				null == e || null == e.__v
					? (-1 == c && (i > s ? a-- : i < s && a++),
						'function' != typeof f.type && (f.__u |= 4))
					: c != o &&
						(c == o - 1
							? a--
							: c == o + 1
								? a++
								: (c > o ? a-- : a++, (f.__u |= 4))))
			: (n.__k[r] = null);
	if (h)
		for (r = 0; r < s; r++)
			null != (e = u[r]) &&
				0 == (2 & e.__u) &&
				(e.__e == t && (t = $(e)), E(e, e));
	return t;
}
function A(n, l, u, t) {
	var i, r;
	if ('function' == typeof n.type) {
		for (i = n.__k, r = 0; i && r < i.length; r++)
			i[r] && ((i[r].__ = n), (l = A(i[r], l, u, t)));
		return l;
	}
	n.__e != l &&
		(t &&
			(l && n.type && !l.parentNode && (l = $(n)),
			u.insertBefore(n.__e, l || null)),
		(l = n.__e));
	do {
		l = l && l.nextSibling;
	} while (null != l && 8 == l.nodeType);
	return l;
}
function H(n, l) {
	return (
		(l = l || []),
		null == n ||
			'boolean' == typeof n ||
			(v(n)
				? n.some(function (n) {
						H(n, l);
					})
				: l.push(n)),
		l
	);
}
function I(n, l, u, t) {
	var i,
		r,
		f,
		e = n.key,
		o = n.type,
		c = l[u],
		s = null != c && 0 == (2 & c.__u);
	if ((null === c && null == e) || (s && e == c.key && o == c.type)) return u;
	if (t > (s ? 1 : 0))
		for (i = u - 1, r = u + 1; i >= 0 || r < l.length; )
			if (
				null != (c = l[(f = i >= 0 ? i-- : r++)]) &&
				0 == (2 & c.__u) &&
				e == c.key &&
				o == c.type
			)
				return f;
	return -1;
}
function O(n, l, u) {
	'-' == l[0]
		? n.setProperty(l, null == u ? '' : u)
		: (n[l] = null == u ? '' : u);
}
function T(n, l, u, t, i) {
	var r;
	n: if ('style' == l)
		if ('string' == typeof u) n.style.cssText = u;
		else {
			if (('string' == typeof t && (n.style.cssText = t = ''), t))
				for (l in t) (u && l in u) || O(n.style, l, '');
			if (u) for (l in u) (t && u[l] == t[l]) || O(n.style, l, u[l]);
		}
	else if ('o' == l[0] && 'n' == l[1])
		(r = l != (l = l.replace(e, '$1'))),
			(l = l.slice(2))[0].toLowerCase() != l[0] && (l = l.toLowerCase()),
			n.__l || (n.__l = {}),
			(n.__l[l + r] = u),
			u
				? t
					? (u.l = t.l)
					: ((u.l = o), n.addEventListener(l, r ? s : c, r))
				: n.removeEventListener(l, r ? s : c, r);
	else {
		if ('http://www.w3.org/2000/svg' == i)
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
				n[l] = null == u ? '' : u;
				break n;
			} catch (n) {}
		'function' == typeof u ||
			(null == u || (!1 === u && '-' != l[4])
				? n.removeAttribute(l)
				: n.setAttribute(l, 'popover' == l && 1 == u ? '' : u));
	}
}
function q(l) {
	return function (u) {
		if (this.__l) {
			var t = this.__l[u.type + l];
			if (null == u.u) u.u = o++;
			else if (u.u < t.l) return;
			return t(n.event ? n.event(u) : u);
		}
	};
}
function N(l, u, t, i, r, f, e, o, c, s, h) {
	var a,
		p,
		y,
		w,
		_,
		m,
		b,
		$,
		S,
		x,
		C,
		j,
		A,
		H,
		I,
		O,
		T,
		q,
		N = u.type;
	if (null != u.constructor) return null;
	128 & t.__u &&
		(c = 32 & t.__u) &&
		t.__c.__z &&
		((o = (f = t.__c.__z)[0]), (t.__c.__z = null)),
		(a = n.__b) && a(u);
	n: if ('function' == typeof N)
		try {
			if (
				((m = u.props),
				(b = 'prototype' in N && N.prototype.render),
				($ = (a = N.contextType) && i[a.__c]),
				(S = a ? ($ ? $.props.value : a.__) : i),
				t.__c
					? 2 & (p = u.__c = t.__c).__g && (p.__g |= 1)
					: (b
							? (u.__c = p = new N(m, S))
							: ((u.__c = p = new M(m, S)),
								(p.constructor = N),
								(p.render = F)),
						$ && $.sub(p),
						(p.props = m),
						p.state || (p.state = {}),
						(p.context = S),
						(p.__n = i),
						(p.__g |= 8),
						(p.__h = []),
						(p._sb = [])),
				b && null == p.__s && (p.__s = p.state),
				b &&
					null != N.getDerivedStateFromProps &&
					(p.__s == p.state && (p.__s = d({}, p.__s)),
					d(p.__s, N.getDerivedStateFromProps(m, p.__s))),
				(y = p.props),
				(w = p.state),
				(p.__v = u),
				t.__c)
			) {
				if (
					(b &&
						null == N.getDerivedStateFromProps &&
						m !== y &&
						null != p.componentWillReceiveProps &&
						p.componentWillReceiveProps(m, S),
					(!(4 & p.__g) &&
						null != p.shouldComponentUpdate &&
						!1 === p.shouldComponentUpdate(m, p.__s, S)) ||
						u.__v == t.__v)
				) {
					for (
						u.__v != t.__v && ((p.props = m), (p.state = p.__s), (p.__g &= -9)),
							u.__e = t.__e,
							u.__k = t.__k,
							u.__k.some(function (n) {
								n && (n.__ = u);
							}),
							x = 0;
						x < p._sb.length;
						x++
					)
						p.__h.push(p._sb[x]);
					(p._sb = []), p.__h.length && e.push(p);
					break n;
				}
				null != p.componentWillUpdate && p.componentWillUpdate(m, p.__s, S),
					b &&
						null != p.componentDidUpdate &&
						p.__h.push(function () {
							p.componentDidUpdate(y, w, _);
						});
			} else
				b &&
					null == N.getDerivedStateFromProps &&
					null != p.componentWillMount &&
					p.componentWillMount(),
					b && null != p.componentDidMount && p.__h.push(p.componentDidMount);
			if (
				((p.context = S),
				(p.props = m),
				(p.__P = l),
				(p.__g &= -5),
				(C = n.__r),
				(j = 0),
				b)
			) {
				for (
					p.state = p.__s,
						p.__g &= -9,
						C && C(u),
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
						C && C(u),
						(a = p.render(p.props, p.state, p.context)),
						(p.state = p.__s);
				} while (8 & p.__g && ++j < 25);
			(p.state = p.__s),
				null != p.getChildContext && (i = d({}, i, p.getChildContext())),
				b &&
					t.__c &&
					null != p.getSnapshotBeforeUpdate &&
					(_ = p.getSnapshotBeforeUpdate(y, w)),
				null != a && a.type === k && null == a.key && (a = z(a.props.children)),
				(o = L(l, v(a) ? a : [a], u, t, i, r, f, e, o, c, s, h)),
				(u.__u &= -161),
				p.__h.length && e.push(p),
				2 & p.__g && (p.__g &= -4);
		} catch (l) {
			if (((u.__v = null), c || null != f))
				if (l.then) {
					for (
						H = 0, u.__u |= c ? 160 : 128, u.__c.__z = [], O = 0;
						O < f.length;
						O++
					)
						null == (T = f[O]) ||
							I ||
							(8 == T.nodeType
								? ('$s' == T.data
										? (H && u.__c.__z.push(T), H++)
										: '/$s' == T.data &&
											(--H && u.__c.__z.push(T), (I = 0 == H), (o = f[O])),
									(f[O] = null))
								: H && (u.__c.__z.push(T), (f[O] = null)));
					if (!I) {
						for (; o && 8 == o.nodeType && o.nextSibling; ) o = o.nextSibling;
						(f[f.indexOf(o)] = null), (u.__c.__z = [o]);
					}
					u.__e = o;
				} else {
					for (q = f.length; q--; ) g(f[q]);
					P(u);
				}
			else (u.__e = t.__e), (u.__k = t.__k), l.then || P(u);
			n.__e(l, u, t);
		}
	else o = u.__e = B(t.__e, u, t, i, r, f, e, c, s, h);
	return (a = n.diffed) && a(u), 128 & u.__u ? void 0 : o;
}
function P(n) {
	n && n.__c && (n.__c.__g |= 4), n && n.__k && n.__k.forEach(P);
}
function V(l, u, t) {
	for (var i = 0; i < t.length; i++) D(t[i], t[++i], t[++i]);
	n.__c && n.__c(u, l),
		l.some(function (u) {
			try {
				(l = u.__h),
					(u.__h = []),
					l.some(function (n) {
						n.call(u);
					});
			} catch (l) {
				n.__e(l, u.__v);
			}
		});
}
function z(n) {
	return 'object' != typeof n || null == n || (n.__b && n.__b > 0)
		? n
		: v(n)
			? n.map(z)
			: d({}, n);
}
function B(l, u, t, i, r, f, e, o, c, s) {
	var h,
		p,
		d,
		_,
		m,
		b,
		k,
		M,
		S = t.props,
		x = u.props,
		C = u.type;
	if (
		('svg' == C
			? (r = 'http://www.w3.org/2000/svg')
			: 'math' == C
				? (r = 'http://www.w3.org/1998/Math/MathML')
				: r || (r = 'http://www.w3.org/1999/xhtml'),
		null != f)
	)
		for (h = 0; h < f.length; h++)
			if (
				(m = f[h]) &&
				'setAttribute' in m == !!C &&
				(C ? m.localName == C : 3 == m.nodeType)
			) {
				(l = m), (f[h] = null);
				break;
			}
	if (null == l) {
		if (null == C) return s.createTextNode(x);
		(l = s.createElementNS(r, C, x.is && x)),
			o && (n.__m && n.__m(u, f), (o = !1)),
			(f = null);
	}
	if (null == C) S === x || (o && l.data == x) || (l.data = x);
	else {
		if (((f = f && w.call(l.childNodes)), (S = t.props || a), !o && null != f))
			for (S = {}, h = 0; h < l.attributes.length; h++)
				S[(m = l.attributes[h]).name] = m.value;
		for (h in S)
			if (((m = S[h]), 'children' == h));
			else if ('dangerouslySetInnerHTML' == h) d = m;
			else if (!(h in x)) {
				if (
					('value' == h && 'defaultValue' in x) ||
					('checked' == h && 'defaultChecked' in x)
				)
					continue;
				T(l, h, null, m, r);
			}
		for (h in ((M = 1 & t.__u), x))
			(m = x[h]),
				'children' == h
					? (_ = m)
					: 'dangerouslySetInnerHTML' == h
						? (p = m)
						: 'value' == h
							? (b = m)
							: 'checked' == h
								? (k = m)
								: (o && 'function' != typeof m) ||
									(S[h] === m && !M) ||
									T(l, h, m, S[h], r);
		if (p)
			o ||
				(d && (p.__html == d.__html || p.__html == l.innerHTML)) ||
				(l.innerHTML = p.__html),
				(u.__k = []);
		else if (
			(d && (l.innerHTML = ''),
			('foreignObject' == C ||
				('http://www.w3.org/1998/Math/MathML' == r && y.test(C))) &&
				(r = 'http://www.w3.org/1999/xhtml'),
			L(
				'template' == C ? l.content : l,
				v(_) ? _ : [_],
				u,
				t,
				i,
				r,
				f,
				e,
				f ? f[0] : t.__k && $(t, 0),
				o,
				c,
				s
			),
			null != f)
		)
			for (h = f.length; h--; ) g(f[h]);
		o ||
			((h = 'value'),
			'progress' == C && null == b
				? l.removeAttribute('value')
				: null == b ||
					(b === l[h] && ('progress' !== C || b)) ||
					T(l, h, b, S[h], r),
			(h = 'checked'),
			null != k && k != l[h] && T(l, h, k, S[h], r));
	}
	return l;
}
function D(l, u, t) {
	try {
		'function' == typeof l
			? ('function' == typeof l.__u && l.__u(),
				('function' == typeof l.__u && null == u) || (l.__u = l(u)))
			: (l.current = u);
	} catch (l) {
		n.__e(l, t);
	}
}
function E(l, u, t) {
	var i, r;
	if (
		(n.unmount && n.unmount(l),
		!(i = l.ref) || (i.current && i.current != l.__e) || D(i, null, u),
		null != (i = l.__c))
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (l) {
				n.__e(l, u);
			}
		i.__P = null;
	}
	if ((i = l.__k))
		for (r = 0; r < i.length; r++)
			i[r] && E(i[r], u, t || 'function' != typeof l.type);
	t || g(l.__e),
		l.__e && l.__e.__l && (l.__e.__l = null),
		(l.__e = l.__c = l.__ = null);
}
function F(n, l, u) {
	return this.constructor(n, u);
}
function G(l, u) {
	var t, i, r, f;
	u == document && (u = document.documentElement),
		n.__ && n.__(l, u),
		(i = (t = l && 32 & l.__u) ? null : u.__k),
		(u.__k = _(k, null, [l])),
		(r = []),
		(f = []),
		N(
			u,
			u.__k,
			i || a,
			a,
			u.namespaceURI,
			i ? null : u.firstChild ? w.call(u.childNodes) : null,
			r,
			i ? i.__e : u.firstChild,
			t,
			f,
			u.ownerDocument
		),
		V(r, u.__k, f);
}
function J(n, l) {
	(n.__u |= 32), G(n, l);
}
function K(n, l, u) {
	var t,
		i,
		r,
		f = d({}, n.props);
	for (r in l)
		'key' == r
			? (t = l[r])
			: 'ref' == r && 'function' != typeof n.type
				? (i = l[r])
				: (f[r] = l[r]);
	return (
		arguments.length > 2 &&
			(f.children = arguments.length > 3 ? w.call(arguments, 2) : u),
		m(n.type, f, t || n.key, i || n.ref, null)
	);
}
function Q(n) {
	function l(n) {
		var u, t;
		return (
			this.getChildContext ||
				((u = new Set()),
				((t = {})[l.__c] = this),
				(this.getChildContext = function () {
					return t;
				}),
				(this.componentWillUnmount = function () {
					u = null;
				}),
				(this.shouldComponentUpdate = function (n) {
					this.props.value != n.value &&
						u.forEach(function (n) {
							(n.__g |= 4), x(n);
						});
				}),
				(this.sub = function (n) {
					u.add(n);
					var l = n.componentWillUnmount;
					n.componentWillUnmount = function () {
						u && u.delete(n), l && l.call(n);
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
}
(n = {
	__e: function (n, l, u, t) {
		for (var i, f, e; (l = l.__); )
			if ((i = l.__c) && !(1 & i.__g)) {
				i.__g |= 4;
				try {
					if (
						((f = i.constructor) &&
							null != f.getDerivedStateFromError &&
							(i.setState(f.getDerivedStateFromError(n)), (e = 8 & i.__g)),
						null != i.componentDidCatch &&
							(i.componentDidCatch(n, t || {}), (e = 8 & i.__g)),
						e)
					)
						return void (i.__g |= 2);
				} catch (l) {
					n = l;
				}
			}
		throw ((r = 0), n);
	}
}),
	(l = 0),
	(u = function (n) {
		return null != n && null == n.constructor;
	}),
	(M.prototype.setState = function (n, l) {
		var u;
		(u =
			null != this.__s && this.__s != this.state
				? this.__s
				: (this.__s = d({}, this.state))),
			'function' == typeof n && (n = n(d({}, u), this.props)),
			n && (d(u, n), this.__v && (l && this._sb.push(l), x(this)));
	}),
	(M.prototype.forceUpdate = function (n) {
		this.__v && ((this.__g |= 4), n && this.__h.push(n), x(this));
	}),
	(M.prototype.render = k),
	(t = []),
	(r = 0),
	(f = function (n, l) {
		return n.__v.__b - l.__v.__b;
	}),
	(e = /(PointerCapture)$|Capture$/i),
	(o = 0),
	(c = q(!1)),
	(s = q(!0)),
	(h = 0);
export {
	M as Component,
	k as Fragment,
	K as cloneElement,
	Q as createContext,
	_ as createElement,
	b as createRef,
	_ as h,
	J as hydrate,
	u as isValidElement,
	n as options,
	G as render,
	H as toChildArray
};
//# sourceMappingURL=preact.mjs.map
