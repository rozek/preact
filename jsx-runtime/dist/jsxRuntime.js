var r = require('preact'),
	e = /["&<]/;
function t(r) {
	if (0 === r.length || !1 === e.test(r)) return r;
	for (var t = 0, n = 0, o = '', u = ''; n < r.length; n++) {
		switch (r.charCodeAt(n)) {
			case 34:
				u = '&quot;';
				break;
			case 38:
				u = '&amp;';
				break;
			case 60:
				u = '&lt;';
				break;
			default:
				continue;
		}
		n !== t && (o += r.slice(t, n)), (o += u), (t = n + 1);
	}
	return n !== t && (o += r.slice(t, n)), o;
}
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
	o = 0,
	u = Array.isArray;
function f(e, t, n, u, f, i) {
	t || (t = {});
	var a,
		c,
		p = t;
	'ref' in t && ((a = t.ref), delete t.ref);
	var l = {
		type: e,
		props: p,
		key: n,
		ref: a,
		__k: null,
		__: null,
		__b: 0,
		__e: null,
		__c: null,
		constructor: void 0,
		__v: --o,
		__i: -1,
		__u: 0,
		__source: f,
		__self: i
	};
	if ('function' == typeof e && (a = e.defaultProps))
		for (c in a) void 0 === p[c] && (p[c] = a[c]);
	return r.options.vnode && r.options.vnode(l), l;
}
var i = {},
	a = /[A-Z]/g;
Object.defineProperty(exports, 'Fragment', {
	enumerable: !0,
	get: function () {
		return r.Fragment;
	}
}),
	(exports.jsx = f),
	(exports.jsxAttr = function (e, o) {
		if (r.options.attr) {
			var u = r.options.attr(e, o);
			if ('string' == typeof u) return u;
		}
		if ('ref' === e || 'key' === e) return '';
		if ('style' === e && 'object' == typeof o) {
			var f = '';
			for (var c in o) {
				var p = o[c];
				if (null != p && '' !== p) {
					var l =
							'-' == c[0]
								? c
								: i[c] || (i[c] = c.replace(a, '-$&').toLowerCase()),
						s = ';';
					'number' != typeof p ||
						l.startsWith('--') ||
						n.test(l) ||
						(s = 'px;'),
						(f = f + l + ':' + p + s);
				}
			}
			return e + '="' + f + '"';
		}
		return null == o ||
			!1 === o ||
			'function' == typeof o ||
			'object' == typeof o
			? ''
			: !0 === o
				? e
				: e + '="' + t(o) + '"';
	}),
	(exports.jsxDEV = f),
	(exports.jsxEscape = function r(e) {
		if (null == e || 'boolean' == typeof e || 'function' == typeof e)
			return null;
		if ('object' == typeof e) {
			if (void 0 === e.constructor) return e;
			if (u(e)) {
				for (var n = 0; n < e.length; n++) e[n] = r(e[n]);
				return e;
			}
		}
		return t('' + e);
	}),
	(exports.jsxTemplate = function (e) {
		var t = f(r.Fragment, { tpl: e, exprs: [].slice.call(arguments, 1) });
		return (t.key = t.__v), t;
	}),
	(exports.jsxs = f);
//# sourceMappingURL=jsxRuntime.js.map