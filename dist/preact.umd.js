!(function (n, l) {
	'object' == typeof exports && 'undefined' != typeof module
		? l(exports)
		: 'function' == typeof define && define.amd
			? define(['exports'], l)
			: l(((n || self).preact = {}));
})(this, function (n) {
	var l,
		u,
		t,
		i,
		e,
		r,
		o,
		f,
		c,
		s,
		a,
		h,
		p,
		y = 'http://www.w3.org/2000/svg',
		v = 'http://www.w3.org/1999/xhtml',
		d = void 0,
		w = {},
		_ = [],
		g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
		m = Array.isArray;
	function b(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function k(n) {
		n && n.parentNode && n.parentNode.removeChild(n);
	}
	function x(n, u, t) {
		var i,
			e,
			r,
			o = {};
		for (r in u)
			'key' == r ? (i = u[r]) : 'ref' == r ? (e = u[r]) : (o[r] = u[r]);
		if (
			(arguments.length > 2 &&
				(o.children = arguments.length > 3 ? l.call(arguments, 2) : t),
			'function' == typeof n && null != n.defaultProps)
		)
			for (r in n.defaultProps) o[r] === d && (o[r] = n.defaultProps[r]);
		return S(n, o, i, e, null);
	}
	function S(n, l, i, e, r) {
		var o = {
			type: n,
			props: l,
			key: i,
			ref: e,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__c: null,
			constructor: d,
			__v: null == r ? ++t : r,
			__i: -1,
			__u: 0
		};
		return null == r && null != u.vnode && u.vnode(o), o;
	}
	function C(n) {
		return n.children;
	}
	function M(n, l) {
		(this.props = n), (this.context = l);
	}
	function P(n, l) {
		if (null == l) return n.__ ? P(n.__, n.__i + 1) : null;
		for (var u; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return 'function' == typeof n.type ? P(n) : null;
	}
	function T(n) {
		var l, u;
		if (null != (n = n.__) && null != n.__c) {
			for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
				if (null != (u = n.__k[l]) && null != u.__e) {
					n.__e = n.__c.base = u.__e;
					break;
				}
			return T(n);
		}
	}
	function $(n) {
		((!n.__d && (n.__d = !0) && e.push(n) && !I.__r++) ||
			r !== u.debounceRendering) &&
			((r = u.debounceRendering) || o)(I);
	}
	function I() {
		var n, l, t, i, r, o, c, s;
		for (e.sort(f); (n = e.shift()); )
			n.__d &&
				((l = e.length),
				(i = void 0),
				(o = (r = (t = n).__v).__e),
				(c = []),
				(s = []),
				t.__P &&
					(((i = b({}, r)).__v = r.__v + 1),
					u.vnode && u.vnode(i),
					N(
						t.__P,
						i,
						r,
						t.__n,
						t.__P.namespaceURI,
						32 & r.__u ? [o] : null,
						c,
						null == o ? P(r) : o,
						!!(32 & r.__u),
						s
					),
					(i.__v = r.__v),
					(i.__.__k[i.__i] = i),
					V(c, i, s),
					i.__e != o && T(i)),
				e.length > l && e.sort(f));
		I.__r = 0;
	}
	function A(n, l, u, t, i, e, r, o, f, c, s) {
		var a,
			h,
			p,
			y,
			v,
			g,
			m = (t && t.__k) || _,
			b = l.length;
		for (f = H(u, l, m, f, b), a = 0; a < b; a++)
			null != (p = u.__k[a]) &&
				((h = -1 === p.__i ? w : m[p.__i] || w),
				(p.__i = a),
				(g = N(n, p, h, i, e, r, o, f, c, s)),
				(y = p.__e),
				p.ref &&
					h.ref != p.ref &&
					(h.ref && B(h.ref, null, p), s.push(p.ref, p.__c || y, p)),
				null == v && null != y && (v = y),
				4 & p.__u || h.__k === p.__k
					? (f = L(p, f, n))
					: 'function' == typeof p.type && g !== d
						? (f = g)
						: y && (f = y.nextSibling),
				(p.__u &= -7));
		return (u.__e = v), f;
	}
	function H(n, l, u, t, i) {
		var e,
			r,
			o,
			f,
			c,
			s = u.length,
			a = s,
			h = 0;
		for (n.__k = new Array(i), e = 0; e < i; e++)
			null != (r = l[e]) && 'boolean' != typeof r && 'function' != typeof r
				? ((f = e + h),
					((r = n.__k[e] =
						'string' == typeof r ||
						'number' == typeof r ||
						'bigint' == typeof r ||
						r.constructor == String
							? S(null, r, null, null, null)
							: m(r)
								? S(C, { children: r }, null, null, null)
								: r.constructor === d && r.__b > 0
									? S(r.type, r.props, r.key, r.ref ? r.ref : null, r.__v)
									: r).__ = n),
					(r.__b = n.__b + 1),
					(o = null),
					-1 !== (c = r.__i = j(r, u, f, a)) &&
						(a--, (o = u[c]) && (o.__u |= 2)),
					null == o || null === o.__v
						? (-1 == c && h--, 'function' != typeof r.type && (r.__u |= 4))
						: c != f &&
							(c == f - 1
								? h--
								: c == f + 1
									? h++
									: (c > f ? h-- : h++, (r.__u |= 4))))
				: (n.__k[e] = null);
		if (a)
			for (e = 0; e < s; e++)
				null != (o = u[e]) &&
					0 == (2 & o.__u) &&
					(o.__e == t && (t = P(o)), D(o, o));
		return t;
	}
	function L(n, l, u) {
		var t, i;
		if ('function' == typeof n.type) {
			for (t = n.__k, i = 0; t && i < t.length; i++)
				t[i] && ((t[i].__ = n), (l = L(t[i], l, u)));
			return l;
		}
		n.__e != l &&
			(l && n.type && !u.contains(l) && (l = P(n)),
			u.insertBefore(n.__e, l || null),
			(l = n.__e));
		do {
			l = l && l.nextSibling;
		} while (null != l && 8 == l.nodeType);
		return l;
	}
	function j(n, l, u, t) {
		var i,
			e,
			r = n.key,
			o = n.type,
			f = l[u];
		if (null === f || (f && r == f.key && o === f.type && 0 == (2 & f.__u)))
			return u;
		if (t > (null != f && 0 == (2 & f.__u) ? 1 : 0))
			for (i = u - 1, e = u + 1; i >= 0 || e < l.length; ) {
				if (i >= 0) {
					if ((f = l[i]) && 0 == (2 & f.__u) && r == f.key && o === f.type)
						return i;
					i--;
				}
				if (e < l.length) {
					if ((f = l[e]) && 0 == (2 & f.__u) && r == f.key && o === f.type)
						return e;
					e++;
				}
			}
		return -1;
	}
	function F(n, l, u) {
		'-' == l[0]
			? n.setProperty(l, null == u ? '' : u)
			: (n[l] =
					null == u ? '' : 'number' != typeof u || g.test(l) ? u : u + 'px');
	}
	function O(n, l, u, t, i) {
		var e;
		n: if ('style' == l)
			if ('string' == typeof u) n.style.cssText = u;
			else {
				if (('string' == typeof t && (n.style.cssText = t = ''), t))
					for (l in t) (u && l in u) || F(n.style, l, '');
				if (u) for (l in u) (t && u[l] === t[l]) || F(n.style, l, u[l]);
			}
		else if ('o' == l[0] && 'n' == l[1])
			(e = l != (l = l.replace(c, '$1'))),
				(l =
					l.toLowerCase() in n || 'onFocusOut' == l || 'onFocusIn' == l
						? l.toLowerCase().slice(2)
						: l.slice(2)),
				n.l || (n.l = {}),
				(n.l[l + e] = u),
				u
					? t
						? (u.u = t.u)
						: ((u.u = s), n.addEventListener(l, e ? h : a, e))
					: n.removeEventListener(l, e ? h : a, e);
		else {
			if (i == y) l = l.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
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
	function z(n) {
		return function (l) {
			if (this.l) {
				var t = this.l[l.type + n];
				if (null == l.t) l.t = s++;
				else if (l.t < t.u) return;
				return t(u.event ? u.event(l) : l);
			}
		};
	}
	function N(n, l, t, i, e, r, o, f, c, s) {
		var a,
			h,
			p,
			y,
			v,
			w,
			_,
			g,
			x,
			S,
			P,
			T,
			$,
			I,
			H,
			L,
			j,
			F = l.type;
		if (l.constructor !== d) return null;
		128 & t.__u && ((c = !!(32 & t.__u)), (r = [(f = l.__e = t.__e)])),
			(a = u.__b) && a(l);
		n: if ('function' == typeof F)
			try {
				if (
					((g = l.props),
					(x = 'prototype' in F && F.prototype.render),
					(S = (a = F.contextType) && i[a.__c]),
					(P = a ? (S ? S.props.value : a.__) : i),
					t.__c
						? (_ = (h = l.__c = t.__c).__ = h.__E)
						: (x
								? (l.__c = h = new F(g, P))
								: ((l.__c = h = new M(g, P)),
									(h.constructor = F),
									(h.render = E)),
							S && S.sub(h),
							(h.props = g),
							h.state || (h.state = {}),
							(h.context = P),
							(h.__n = i),
							(p = h.__d = !0),
							(h.__h = []),
							(h._sb = [])),
					x && null == h.__s && (h.__s = h.state),
					x &&
						null != F.getDerivedStateFromProps &&
						(h.__s == h.state && (h.__s = b({}, h.__s)),
						b(h.__s, F.getDerivedStateFromProps(g, h.__s))),
					(y = h.props),
					(v = h.state),
					(h.__v = l),
					p)
				)
					x &&
						null == F.getDerivedStateFromProps &&
						null != h.componentWillMount &&
						h.componentWillMount(),
						x && null != h.componentDidMount && h.__h.push(h.componentDidMount);
				else {
					if (
						(x &&
							null == F.getDerivedStateFromProps &&
							g !== y &&
							null != h.componentWillReceiveProps &&
							h.componentWillReceiveProps(g, P),
						!h.__e &&
							((null != h.shouldComponentUpdate &&
								!1 === h.shouldComponentUpdate(g, h.__s, P)) ||
								l.__v == t.__v))
					) {
						for (
							l.__v != t.__v &&
								((h.props = g), (h.state = h.__s), (h.__d = !1)),
								l.__e = t.__e,
								l.__k = t.__k,
								l.__k.some(function (n) {
									n && (n.__ = l);
								}),
								T = 0;
							T < h._sb.length;
							T++
						)
							h.__h.push(h._sb[T]);
						(h._sb = []), h.__h.length && o.push(h);
						break n;
					}
					null != h.componentWillUpdate && h.componentWillUpdate(g, h.__s, P),
						x &&
							null != h.componentDidUpdate &&
							h.__h.push(function () {
								h.componentDidUpdate(y, v, w);
							});
				}
				if (
					((h.context = P),
					(h.props = g),
					(h.__P = n),
					(h.__e = !1),
					($ = u.__r),
					(I = 0),
					x)
				) {
					for (
						h.state = h.__s,
							h.__d = !1,
							$ && $(l),
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
							$ && $(l),
							(a = h.render(h.props, h.state, h.context)),
							(h.state = h.__s);
					} while (h.__d && ++I < 25);
				(h.state = h.__s),
					null != h.getChildContext && (i = b(b({}, i), h.getChildContext())),
					x &&
						!p &&
						null != h.getSnapshotBeforeUpdate &&
						(w = h.getSnapshotBeforeUpdate(y, v)),
					(f = A(
						n,
						m(
							(L =
								null != a && a.type === C && null == a.key
									? a.props.children
									: a)
						)
							? L
							: [L],
						l,
						t,
						i,
						e,
						r,
						o,
						f,
						c,
						s
					)),
					(h.base = l.__e),
					(l.__u &= -161),
					h.__h.length && o.push(h),
					_ && (h.__E = h.__ = null);
			} catch (n) {
				if (((l.__v = null), c || null != r))
					if (n.then) {
						for (
							l.__u |= c ? 160 : 128;
							f && 8 == f.nodeType && f.nextSibling;
						)
							f = f.nextSibling;
						(r[r.indexOf(f)] = null), (l.__e = f);
					} else for (j = r.length; j--; ) k(r[j]);
				else (l.__e = t.__e), (l.__k = t.__k);
				u.__e(n, l, t);
			}
		else
			null == r && l.__v == t.__v
				? ((l.__k = t.__k), (l.__e = t.__e))
				: (f = l.__e = q(t.__e, l, t, i, e, r, o, c, s));
		return (a = u.diffed) && a(l), 128 & l.__u ? void 0 : f;
	}
	function V(n, l, t) {
		for (var i = 0; i < t.length; i++) B(t[i], t[++i], t[++i]);
		u.__c && u.__c(l, n),
			n.some(function (l) {
				try {
					(n = l.__h),
						(l.__h = []),
						n.some(function (n) {
							n.call(l);
						});
				} catch (n) {
					u.__e(n, l.__v);
				}
			});
	}
	function q(n, t, i, e, r, o, f, c, s) {
		var a,
			h,
			p,
			_,
			g,
			b,
			x,
			S = i.props,
			C = t.props,
			M = t.type;
		if (
			('svg' == M
				? (r = y)
				: 'math' == M
					? (r = 'http://www.w3.org/1998/Math/MathML')
					: r || (r = v),
			null != o)
		)
			for (a = 0; a < o.length; a++)
				if (
					(g = o[a]) &&
					'setAttribute' in g == !!M &&
					(M ? g.localName == M : 3 == g.nodeType)
				) {
					(n = g), (o[a] = null);
					break;
				}
		if (null == n) {
			if (null == M) return document.createTextNode(C);
			(n = document.createElementNS(r, M, C.is && C)),
				c && (u.__m && u.__m(t, o), (c = !1)),
				(o = null);
		}
		if (null === M) S === C || (c && n.data === C) || (n.data = C);
		else {
			if (
				((o = o && l.call(n.childNodes)), (S = i.props || w), !c && null != o)
			)
				for (S = {}, a = 0; a < n.attributes.length; a++)
					S[(g = n.attributes[a]).name] = g.value;
			for (a in S)
				if (((g = S[a]), 'children' == a));
				else if ('dangerouslySetInnerHTML' == a) p = g;
				else if (!(a in C)) {
					if (
						('value' == a && 'defaultValue' in C) ||
						('checked' == a && 'defaultChecked' in C)
					)
						continue;
					O(n, a, null, g, r);
				}
			for (a in C)
				(g = C[a]),
					'children' == a
						? (_ = g)
						: 'dangerouslySetInnerHTML' == a
							? (h = g)
							: 'value' == a
								? (b = g)
								: 'checked' == a
									? (x = g)
									: (c && 'function' != typeof g) ||
										S[a] === g ||
										O(n, a, g, S[a], r);
			if (h)
				c ||
					(p && (h.__html === p.__html || h.__html === n.innerHTML)) ||
					(n.innerHTML = h.__html),
					(t.__k = []);
			else if (
				(p && (n.innerHTML = ''),
				A(
					n,
					m(_) ? _ : [_],
					t,
					i,
					e,
					'foreignObject' == M ? v : r,
					o,
					f,
					o ? o[0] : i.__k && P(i, 0),
					c,
					s
				),
				null != o)
			)
				for (a = o.length; a--; ) k(o[a]);
			c ||
				((a = 'value'),
				'progress' == M && null == b
					? n.removeAttribute('value')
					: b !== d &&
						(b !== n[a] ||
							('progress' == M && !b) ||
							('option' == M && b !== S[a])) &&
						O(n, a, b, S[a], r),
				(a = 'checked'),
				x !== d && x !== n[a] && O(n, a, x, S[a], r));
		}
		return n;
	}
	function B(n, l, t) {
		try {
			if ('function' == typeof n) {
				var i = 'function' == typeof n.__u;
				i && n.__u(), (i && null == l) || (n.__u = n(l));
			} else n.current = l;
		} catch (n) {
			u.__e(n, t);
		}
	}
	function D(n, l, t) {
		var i, e;
		if (
			(u.unmount && u.unmount(n),
			(i = n.ref) && ((i.current && i.current !== n.__e) || B(i, null, l)),
			null != (i = n.__c))
		) {
			if (i.componentWillUnmount)
				try {
					i.componentWillUnmount();
				} catch (n) {
					u.__e(n, l);
				}
			i.base = i.__P = null;
		}
		if ((i = n.__k))
			for (e = 0; e < i.length; e++)
				i[e] && D(i[e], l, t || 'function' != typeof n.type);
		t || k(n.__e), (n.__c = n.__ = n.__e = d);
	}
	function E(n, l, u) {
		return this.constructor(n, u);
	}
	function G(n, t, i) {
		var e, r, o, f;
		t == document && (t = document.documentElement),
			u.__ && u.__(n, t),
			(r = (e = 'function' == typeof i) ? null : (i && i.__k) || t.__k),
			(o = []),
			(f = []),
			N(
				t,
				(n = ((!e && i) || t).__k = x(C, null, [n])),
				r || w,
				w,
				t.namespaceURI,
				!e && i ? [i] : r ? null : t.firstChild ? l.call(t.childNodes) : null,
				o,
				!e && i ? i : r ? r.__e : t.firstChild,
				e,
				f
			),
			V(o, n, f);
	}
	(l = _.slice),
		(u = {
			__e: function (n, l, u, t) {
				for (var i, e, r; (l = l.__); )
					if ((i = l.__c) && !i.__)
						try {
							if (
								((e = i.constructor) &&
									null != e.getDerivedStateFromError &&
									(i.setState(e.getDerivedStateFromError(n)), (r = i.__d)),
								null != i.componentDidCatch &&
									(i.componentDidCatch(n, t || {}), (r = i.__d)),
								r)
							)
								return (i.__E = i);
						} catch (l) {
							n = l;
						}
				throw n;
			}
		}),
		(t = 0),
		(i = function (n) {
			return null != n && n.constructor == d;
		}),
		(M.prototype.setState = function (n, l) {
			var u;
			(u =
				null != this.__s && this.__s !== this.state
					? this.__s
					: (this.__s = b({}, this.state))),
				'function' == typeof n && (n = n(b({}, u), this.props)),
				n && b(u, n),
				null != n && this.__v && (l && this._sb.push(l), $(this));
		}),
		(M.prototype.forceUpdate = function (n) {
			this.__v && ((this.__e = !0), n && this.__h.push(n), $(this));
		}),
		(M.prototype.render = C),
		(e = []),
		(o =
			'function' == typeof Promise
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(f = function (n, l) {
			return n.__v.__b - l.__v.__b;
		}),
		(I.__r = 0),
		(c = /(PointerCapture)$|Capture$/i),
		(s = 0),
		(a = z(!1)),
		(h = z(!0)),
		(p = 0),
		(n.Component = M),
		(n.Fragment = C),
		(n.cloneElement = function (n, u, t) {
			var i,
				e,
				r,
				o,
				f = b({}, n.props);
			for (r in (n.type && n.type.defaultProps && (o = n.type.defaultProps), u))
				'key' == r
					? (i = u[r])
					: 'ref' == r
						? (e = u[r])
						: (f[r] = u[r] === d && o !== d ? o[r] : u[r]);
			return (
				arguments.length > 2 &&
					(f.children = arguments.length > 3 ? l.call(arguments, 2) : t),
				S(n.type, f, i || n.key, e || n.ref, null)
			);
		}),
		(n.createContext = function (n, l) {
			var u = {
				__c: (l = '__cC' + p++),
				__: n,
				Consumer: function (n, l) {
					return n.children(l);
				},
				Provider: function (n) {
					var u, t;
					return (
						this.getChildContext ||
							((u = new Set()),
							((t = {})[l] = this),
							(this.getChildContext = function () {
								return t;
							}),
							(this.componentWillUnmount = function () {
								u = null;
							}),
							(this.shouldComponentUpdate = function (n) {
								this.props.value !== n.value &&
									u.forEach(function (n) {
										(n.__e = !0), $(n);
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
			};
			return (u.Provider.__ = u.Consumer.contextType = u);
		}),
		(n.createElement = x),
		(n.createRef = function () {
			return { current: null };
		}),
		(n.h = x),
		(n.hydrate = function n(l, u) {
			G(l, u, n);
		}),
		(n.isValidElement = i),
		(n.options = u),
		(n.render = G),
		(n.toChildArray = function n(l, u) {
			return (
				(u = u || []),
				null == l ||
					'boolean' == typeof l ||
					(m(l)
						? l.some(function (l) {
								n(l, u);
							})
						: u.push(l)),
				u
			);
		});
});
//# sourceMappingURL=preact.umd.js.map