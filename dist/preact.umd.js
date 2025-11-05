!(function (n, t) {
	'object' == typeof exports && 'undefined' != typeof module
		? t(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], t)
			: t(((n || self).preact = {}));
})(this, function (n) {
	var t,
		i,
		e,
		f,
		r,
		o,
		u,
		c,
		s,
		a,
		h,
		p,
		l = 'http://www.w3.org/2000/svg',
		y = 'http://www.w3.org/1999/xhtml',
		v = 'http://www.w3.org/1998/Math/MathML',
		d = null,
		w = void 0,
		_ = {},
		g = [],
		b = /(mi|mn|mo|ms$|mte|msp)/,
		m = Array.isArray,
		k = g.slice,
		$ = Object.assign;
	function x(n) {
		n && n.parentNode && n.remove();
	}
	function M(n, t, i) {
		var e,
			f,
			r,
			o = {};
		for (r in t)
			'key' == r
				? (e = t[r])
				: 'ref' == r && 'function' != typeof n
					? (f = t[r])
					: (o[r] = t[r]);
		return (
			arguments.length > 2 &&
				(o.children = arguments.length > 3 ? k.call(arguments, 2) : i),
			S(n, o, e, f, d)
		);
	}
	function S(n, e, f, r, o) {
		var u = {
			type: n,
			props: e,
			key: f,
			ref: r,
			__k: d,
			__: d,
			__b: 0,
			__e: d,
			__c: d,
			constructor: w,
			__v: o == d ? ++i : o,
			__i: -1,
			__u: 0
		};
		return o == d && t.vnode != d && t.vnode(u), u;
	}
	function j(n) {
		return n.children;
	}
	function C(n, t) {
		(this.props = n), (this.context = t), (this.__g = 0);
	}
	function T(n, t) {
		if (t == d) return n.__ ? T(n.__, n.__i + 1) : d;
		for (var i; t < n.__k.length; t++)
			if ((i = n.__k[t]) != d && i.__e != d) return i.__e;
		return 'function' == typeof n.type ? T(n) : d;
	}
	function A(n) {
		var t, i;
		if ((n = n.__) != d && n.__c != d) {
			for (n.__e = d, t = 0; t < n.__k.length; t++)
				if ((i = n.__k[t]) != d && i.__e != d) {
					n.__e = i.__e;
					break;
				}
			return A(n);
		}
	}
	function H(n) {
		((8 & n.__g || !(n.__g |= 8) || !f.push(n) || o++) &&
			r == t.debounceRendering) ||
			((r = t.debounceRendering) || queueMicrotask)(I);
	}
	function I() {
		for (var n, i, e, r, c, s, a, h, p = 1; f.length; )
			f.length > p && f.sort(u),
				(n = f.shift()),
				(p = f.length),
				8 & n.__g &&
					((e = void 0),
					(r = void 0),
					(c = (r = (i = n).__v).__e),
					(s = []),
					(a = []),
					(h = i.__P) &&
						(((e = $({}, r)).__v = r.__v + 1),
						t.vnode && t.vnode(e),
						B(
							h,
							e,
							r,
							i.__n,
							h.namespaceURI,
							32 & r.__u ? [c] : d,
							s,
							c == d ? T(r) : c,
							!!(32 & r.__u),
							a,
							h.ownerDocument
						),
						(e.__v = r.__v),
						(e.__.__k[e.__i] = e),
						E(s, e, a),
						(r.__ = r.__e = d),
						e.__e != c && A(e)));
		o = 0;
	}
	function L(n, t, i, e, f, r, o, u, c, s, a, h) {
		var p,
			l,
			y,
			v,
			b,
			m,
			k,
			$ = (e && e.__k) || g,
			x = t.length;
		for (c = O(i, t, $, c, x), p = 0; p < x; p++)
			(y = i.__k[p]) != d &&
				((l = -1 == y.__i ? _ : $[y.__i] || _),
				(y.__i = p),
				(m = B(n, y, l, f, r, o, u, c, s, a, h)),
				(v = y.__e),
				y.ref &&
					l.ref != y.ref &&
					(l.ref && J(l.ref, d, y), a.push(y.ref, y.__c || v, y)),
				b == d && v != d && (b = v),
				(k = 4 & y.__u) || l.__k === y.__k
					? (c = q(y, c, n, k))
					: 'function' == typeof y.type && m !== w
						? (c = m)
						: v && (c = v.nextSibling),
				(y.__u &= -7));
		return (i.__e = b), c;
	}
	function O(n, t, i, e, f) {
		var r,
			o,
			u,
			c,
			s,
			a = i.length,
			h = a,
			p = 0;
		for (n.__k = new Array(f), r = 0; r < f; r++)
			(o = t[r]) != d && 'boolean' != typeof o && 'function' != typeof o
				? ('string' == typeof o ||
					'number' == typeof o ||
					'bigint' == typeof o ||
					o.constructor == String
						? (o = n.__k[r] = S(d, o, d, d, d))
						: m(o)
							? (o = n.__k[r] = S(j, { children: o }, d, d, d))
							: o.constructor == w && o.__b > 0
								? (o = n.__k[r] =
										S(o.type, o.props, o.key, o.ref ? o.ref : d, o.__v))
								: (n.__k[r] = o),
					(c = r + p),
					(o.__ = n),
					(o.__b = n.__b + 1),
					(s = o.__i = N(o, i, c, h)),
					(u = d),
					-1 != s && (h--, (u = i[s]) && (u.__u |= 2)),
					u == d || u.__v == d
						? (-1 == s && (f > a ? p-- : f < a && p++),
							'function' != typeof o.type && (o.__u |= 4))
						: s != c &&
							(s == c - 1
								? p--
								: s == c + 1
									? p++
									: (s > c ? p-- : p++, (o.__u |= 4))))
				: (n.__k[r] = d);
		if (h)
			for (r = 0; r < a; r++)
				(u = i[r]) != d &&
					0 == (2 & u.__u) &&
					(u.__e == e && (e = T(u)), K(u, u));
		return e;
	}
	function q(n, t, i, e) {
		var f, r;
		if ('function' == typeof n.type) {
			for (f = n.__k, r = 0; f && r < f.length; r++)
				f[r] && ((f[r].__ = n), (t = q(f[r], t, i, e)));
			return t;
		}
		n.__e != t &&
			(e &&
				(t && n.type && !t.parentNode && (t = T(n)),
				i.insertBefore(n.__e, t || d)),
			(t = n.__e));
		do {
			t = t && t.nextSibling;
		} while (t != d && 8 == t.nodeType);
		return t;
	}
	function N(n, t, i, e) {
		var f,
			r,
			o,
			u = n.key,
			c = n.type,
			s = t[i],
			a = s != d && 0 == (2 & s.__u);
		if ((s === d && null == u) || (a && u == s.key && c == s.type)) return i;
		if (e > (a ? 1 : 0))
			for (f = i - 1, r = i + 1; f >= 0 || r < t.length; )
				if (
					(s = t[(o = f >= 0 ? f-- : r++)]) != d &&
					0 == (2 & s.__u) &&
					u == s.key &&
					c == s.type
				)
					return o;
		return -1;
	}
	function P(n, t, i) {
		'-' == t[0] ? n.setProperty(t, i == d ? '' : i) : (n[t] = i == d ? '' : i);
	}
	function V(n, t, i, e, f) {
		var r;
		n: if ('style' == t)
			if ('string' == typeof i) n.style.cssText = i;
			else {
				if (('string' == typeof e && (n.style.cssText = e = ''), e))
					for (t in e) (i && t in i) || P(n.style, t, '');
				if (i) for (t in i) (e && i[t] == e[t]) || P(n.style, t, i[t]);
			}
		else if ('o' == t[0] && 'n' == t[1])
			(r = t != (t = t.replace(c, '$1'))),
				(t = t.slice(2))[0].toLowerCase() != t[0] && (t = t.toLowerCase()),
				n.__l || (n.__l = {}),
				(n.__l[t + r] = i),
				i
					? e
						? (i.t = e.t)
						: ((i.t = s), n.addEventListener(t, r ? h : a, r))
					: n.removeEventListener(t, r ? h : a, r);
		else {
			if (f == l) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
			else if (
				'width' != t &&
				'height' != t &&
				'href' != t &&
				'list' != t &&
				'form' != t &&
				'tabIndex' != t &&
				'download' != t &&
				'rowSpan' != t &&
				'colSpan' != t &&
				'role' != t &&
				'popover' != t &&
				t in n
			)
				try {
					n[t] = i == d ? '' : i;
					break n;
				} catch (n) {}
			'function' == typeof i ||
				(i == d || (!1 === i && '-' != t[4])
					? n.removeAttribute(t)
					: n.setAttribute(t, 'popover' == t && 1 == i ? '' : i));
		}
	}
	function z(n) {
		return function (i) {
			if (this.__l) {
				var e = this.__l[i.type + n];
				if (i.i == d) i.i = s++;
				else if (i.i < e.t) return;
				return e(t.event ? t.event(i) : i);
			}
		};
	}
	function B(n, i, e, f, r, o, u, c, s, a, h) {
		var p,
			l,
			y,
			v,
			_,
			g,
			b,
			k,
			M,
			S,
			T,
			A,
			H,
			I,
			O,
			q,
			N,
			P,
			V = i.type;
		if (i.constructor != w) return d;
		128 & e.__u &&
			(s = 32 & e.__u) &&
			e.__c.__z &&
			((c = (o = e.__c.__z)[0]), (e.__c.__z = d)),
			(p = t.__b) && p(i);
		n: if ('function' == typeof V)
			try {
				if (
					((g = i.props),
					(b = 'prototype' in V && V.prototype.render),
					(k = (p = V.contextType) && f[p.__c]),
					(M = p ? (k ? k.props.value : p.__) : f),
					e.__c
						? 2 & (l = i.__c = e.__c).__g && (l.__g |= 1)
						: (b
								? (i.__c = l = new V(g, M))
								: ((i.__c = l = new C(g, M)),
									(l.constructor = V),
									(l.render = Q)),
							k && k.sub(l),
							(l.props = g),
							l.state || (l.state = {}),
							(l.context = M),
							(l.__n = f),
							(l.__g |= 8),
							(l.__h = []),
							(l._sb = [])),
					b && l.__s == d && (l.__s = l.state),
					b &&
						V.getDerivedStateFromProps != d &&
						(l.__s == l.state && (l.__s = $({}, l.__s)),
						$(l.__s, V.getDerivedStateFromProps(g, l.__s))),
					(y = l.props),
					(v = l.state),
					(l.__v = i),
					e.__c)
				) {
					if (
						(b &&
							V.getDerivedStateFromProps == d &&
							g !== y &&
							l.componentWillReceiveProps != d &&
							l.componentWillReceiveProps(g, M),
						(!(4 & l.__g) &&
							l.shouldComponentUpdate != d &&
							!1 === l.shouldComponentUpdate(g, l.__s, M)) ||
							i.__v == e.__v)
					) {
						for (
							i.__v != e.__v &&
								((l.props = g), (l.state = l.__s), (l.__g &= -9)),
								i.__e = e.__e,
								i.__k = e.__k,
								i.__k.some(function (n) {
									n && (n.__ = i);
								}),
								S = 0;
							S < l._sb.length;
							S++
						)
							l.__h.push(l._sb[S]);
						(l._sb = []), l.__h.length && u.push(l);
						break n;
					}
					l.componentWillUpdate != d && l.componentWillUpdate(g, l.__s, M),
						b &&
							l.componentDidUpdate != d &&
							l.__h.push(function () {
								l.componentDidUpdate(y, v, _);
							});
				} else
					b &&
						V.getDerivedStateFromProps == d &&
						l.componentWillMount != d &&
						l.componentWillMount(),
						b && l.componentDidMount != d && l.__h.push(l.componentDidMount);
				if (
					((l.context = M),
					(l.props = g),
					(l.__P = n),
					(l.__g &= -5),
					(T = t.__r),
					(A = 0),
					b)
				) {
					for (
						l.state = l.__s,
							l.__g &= -9,
							T && T(i),
							p = l.render(l.props, l.state, l.context),
							H = 0;
						H < l._sb.length;
						H++
					)
						l.__h.push(l._sb[H]);
					l._sb = [];
				} else
					do {
						(l.__g &= -9),
							T && T(i),
							(p = l.render(l.props, l.state, l.context)),
							(l.state = l.__s);
					} while (8 & l.__g && ++A < 25);
				(l.state = l.__s),
					l.getChildContext != d && (f = $({}, f, l.getChildContext())),
					b &&
						e.__c &&
						l.getSnapshotBeforeUpdate != d &&
						(_ = l.getSnapshotBeforeUpdate(y, v)),
					p != d && p.type === j && p.key == d && (p = F(p.props.children)),
					(c = L(n, m(p) ? p : [p], i, e, f, r, o, u, c, s, a, h)),
					(i.__u &= -161),
					l.__h.length && u.push(l),
					2 & l.__g && (l.__g &= -4);
			} catch (n) {
				if (((i.__v = d), s || o != d))
					if (n.then) {
						for (
							I = 0, i.__u |= s ? 160 : 128, i.__c.__z = [], q = 0;
							q < o.length;
							q++
						)
							(N = o[q]) == d ||
								O ||
								(8 == N.nodeType
									? ('$s' == N.data
											? (I && i.__c.__z.push(N), I++)
											: '/$s' == N.data &&
												(--I && i.__c.__z.push(N), (O = 0 == I), (c = o[q])),
										(o[q] = d))
									: I && (i.__c.__z.push(N), (o[q] = d)));
						if (!O) {
							for (; c && 8 == c.nodeType && c.nextSibling; ) c = c.nextSibling;
							(o[o.indexOf(c)] = d), (i.__c.__z = [c]);
						}
						i.__e = c;
					} else {
						for (P = o.length; P--; ) x(o[P]);
						D(i);
					}
				else (i.__e = e.__e), (i.__k = e.__k), n.then || D(i);
				t.__e(n, i, e);
			}
		else c = i.__e = G(e.__e, i, e, f, r, o, u, s, a, h);
		return (p = t.diffed) && p(i), 128 & i.__u ? w : c;
	}
	function D(n) {
		n && n.__c && (n.__c.__g |= 4), n && n.__k && n.__k.forEach(D);
	}
	function E(n, i, e) {
		for (var f = 0; f < e.length; f++) J(e[f], e[++f], e[++f]);
		t.__c && t.__c(i, n),
			n.some(function (i) {
				try {
					(n = i.__h),
						(i.__h = []),
						n.some(function (n) {
							n.call(i);
						});
				} catch (n) {
					t.__e(n, i.__v);
				}
			});
	}
	function F(n) {
		return 'object' != typeof n || n == d || (n.__b && n.__b > 0)
			? n
			: m(n)
				? n.map(F)
				: $({}, n);
	}
	function G(n, i, e, f, r, o, u, c, s, a) {
		var h,
			p,
			g,
			$,
			M,
			S,
			j,
			C,
			A = e.props,
			H = i.props,
			I = i.type;
		if (('svg' == I ? (r = l) : 'math' == I ? (r = v) : r || (r = y), o != d))
			for (h = 0; h < o.length; h++)
				if (
					(M = o[h]) &&
					'setAttribute' in M == !!I &&
					(I ? M.localName == I : 3 == M.nodeType)
				) {
					(n = M), (o[h] = d);
					break;
				}
		if (n == d) {
			if (I == d) return a.createTextNode(H);
			(n = a.createElementNS(r, I, H.is && H)),
				c && (t.__m && t.__m(i, o), (c = !1)),
				(o = d);
		}
		if (I == d) A === H || (c && n.data == H) || (n.data = H);
		else {
			if (((o = o && k.call(n.childNodes)), (A = e.props || _), !c && o != d))
				for (A = {}, h = 0; h < n.attributes.length; h++)
					A[(M = n.attributes[h]).name] = M.value;
			for (h in A)
				if (((M = A[h]), 'children' == h));
				else if ('dangerouslySetInnerHTML' == h) g = M;
				else if (!(h in H)) {
					if (
						('value' == h && 'defaultValue' in H) ||
						('checked' == h && 'defaultChecked' in H)
					)
						continue;
					V(n, h, d, M, r);
				}
			for (h in ((C = 1 & e.__u), H))
				(M = H[h]),
					'children' == h
						? ($ = M)
						: 'dangerouslySetInnerHTML' == h
							? (p = M)
							: 'value' == h
								? (S = M)
								: 'checked' == h
									? (j = M)
									: (c && 'function' != typeof M) ||
										(A[h] === M && !C) ||
										V(n, h, M, A[h], r);
			if (p)
				c ||
					(g && (p.__html == g.__html || p.__html == n.innerHTML)) ||
					(n.innerHTML = p.__html),
					(i.__k = []);
			else if (
				(g && (n.innerHTML = ''),
				('foreignObject' == I || (r == v && b.test(I))) && (r = y),
				L(
					'template' == I ? n.content : n,
					m($) ? $ : [$],
					i,
					e,
					f,
					r,
					o,
					u,
					o ? o[0] : e.__k && T(e, 0),
					c,
					s,
					a
				),
				o != d)
			)
				for (h = o.length; h--; ) x(o[h]);
			c ||
				((h = 'value'),
				'progress' == I && S == d
					? n.removeAttribute('value')
					: S == w ||
						(S === n[h] && ('progress' !== I || S)) ||
						V(n, h, S, A[h], r),
				(h = 'checked'),
				j != w && j != n[h] && V(n, h, j, A[h], r));
		}
		return n;
	}
	function J(n, i, e) {
		try {
			'function' == typeof n
				? ('function' == typeof n.__u && n.__u(),
					('function' == typeof n.__u && i == d) || (n.__u = n(i)))
				: (n.current = i);
		} catch (n) {
			t.__e(n, e);
		}
	}
	function K(n, i, e) {
		var f, r;
		if (
			(t.unmount && t.unmount(n),
			!(f = n.ref) || (f.current && f.current != n.__e) || J(f, d, i),
			(f = n.__c) != d)
		) {
			if (f.componentWillUnmount)
				try {
					f.componentWillUnmount();
				} catch (n) {
					t.__e(n, i);
				}
			f.__P = d;
		}
		if ((f = n.__k))
			for (r = 0; r < f.length; r++)
				f[r] && K(f[r], i, e || 'function' != typeof n.type);
		e || x(n.__e),
			n.__e && n.__e.__l && (n.__e.__l = d),
			(n.__e = n.__c = n.__ = d);
	}
	function Q(n, t, i) {
		return this.constructor(n, i);
	}
	function R(n, i) {
		var e, f, r, o;
		i == document && (i = document.documentElement),
			t.__ && t.__(n, i),
			(f = (e = n && 32 & n.__u) ? d : i.__k),
			(i.__k = M(j, d, [n])),
			(r = []),
			(o = []),
			B(
				i,
				i.__k,
				f || _,
				_,
				i.namespaceURI,
				f ? d : i.firstChild ? k.call(i.childNodes) : d,
				r,
				f ? f.__e : i.firstChild,
				e,
				o,
				i.ownerDocument
			),
			E(r, i.__k, o);
	}
	(t = {
		__e: function (n, t, i, e) {
			for (var f, r, u; (t = t.__); )
				if ((f = t.__c) && !(1 & f.__g)) {
					f.__g |= 4;
					try {
						if (
							((r = f.constructor) &&
								r.getDerivedStateFromError != d &&
								(f.setState(r.getDerivedStateFromError(n)), (u = 8 & f.__g)),
							f.componentDidCatch != d &&
								(f.componentDidCatch(n, e || {}), (u = 8 & f.__g)),
							u)
						)
							return void (f.__g |= 2);
					} catch (t) {
						n = t;
					}
				}
			throw ((o = 0), n);
		}
	}),
		(i = 0),
		(e = function (n) {
			return n != d && n.constructor == w;
		}),
		(C.prototype.setState = function (n, t) {
			var i;
			(i =
				this.__s != d && this.__s != this.state
					? this.__s
					: (this.__s = $({}, this.state))),
				'function' == typeof n && (n = n($({}, i), this.props)),
				n && ($(i, n), this.__v && (t && this._sb.push(t), H(this)));
		}),
		(C.prototype.forceUpdate = function (n) {
			this.__v && ((this.__g |= 4), n && this.__h.push(n), H(this));
		}),
		(C.prototype.render = j),
		(f = []),
		(o = 0),
		(u = function (n, t) {
			return n.__v.__b - t.__v.__b;
		}),
		(c = /(PointerCapture)$|Capture$/i),
		(s = 0),
		(a = z(!1)),
		(h = z(!0)),
		(p = 0),
		(n.Component = C),
		(n.Fragment = j),
		(n.cloneElement = function (n, t, i) {
			var e,
				f,
				r,
				o = $({}, n.props);
			for (r in t)
				'key' == r
					? (e = t[r])
					: 'ref' == r && 'function' != typeof n.type
						? (f = t[r])
						: (o[r] = t[r]);
			return (
				arguments.length > 2 &&
					(o.children = arguments.length > 3 ? k.call(arguments, 2) : i),
				S(n.type, o, e || n.key, f || n.ref, d)
			);
		}),
		(n.createContext = function (n) {
			function t(n) {
				var i, e;
				return (
					this.getChildContext ||
						((i = new Set()),
						((e = {})[t.__c] = this),
						(this.getChildContext = function () {
							return e;
						}),
						(this.componentWillUnmount = function () {
							i = d;
						}),
						(this.shouldComponentUpdate = function (n) {
							this.props.value != n.value &&
								i.forEach(function (n) {
									(n.__g |= 4), H(n);
								});
						}),
						(this.sub = function (n) {
							i.add(n);
							var t = n.componentWillUnmount;
							n.componentWillUnmount = function () {
								i && i.delete(n), t && t.call(n);
							};
						})),
					n.children
				);
			}
			return (
				(t.__c = '__cC' + p++),
				(t.__ = n),
				(t.Provider =
					t.__l =
					(t.Consumer = function (n, t) {
						return n.children(t);
					}).contextType =
						t),
				t
			);
		}),
		(n.createElement = M),
		(n.createRef = function () {
			return { current: d };
		}),
		(n.h = M),
		(n.hydrate = function (n, t) {
			(n.__u |= 32), R(n, t);
		}),
		(n.isValidElement = e),
		(n.options = t),
		(n.render = R),
		(n.toChildArray = function n(t, i) {
			return (
				(i = i || []),
				t == d ||
					'boolean' == typeof t ||
					(m(t)
						? t.some(function (t) {
								n(t, i);
							})
						: i.push(t)),
				i
			);
		});
});
//# sourceMappingURL=preact.umd.js.map
