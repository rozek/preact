var n = require('preact');
require('preact/devtools');
var e = {};
function o(e) {
	return e.type === n.Fragment
		? 'Fragment'
		: 'function' == typeof e.type
			? e.type.displayName || e.type.name
			: 'string' == typeof e.type
				? e.type
				: '#text';
}
var t = [],
	r = [];
function a() {
	return t.length > 0 ? t[t.length - 1] : null;
}
var i = !0;
function s(e) {
	return 'function' == typeof e.type && e.type != n.Fragment;
}
function c(n) {
	for (var e = [n], t = n; null != t.__o; ) e.push(t.__o), (t = t.__o);
	return e.reduce(function (n, e) {
		n += '  in ' + o(e);
		var t = e.__source;
		return (
			t
				? (n += ' (at ' + t.fileName + ':' + t.lineNumber + ')')
				: i &&
					console.warn(
						'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
					),
			(i = !1),
			n + '\n'
		);
	}, '');
}
var l = 'function' == typeof WeakMap;
function u(n) {
	var e = [];
	return n.__k
		? (n.__k.forEach(function (n) {
				n && 'function' == typeof n.type
					? e.push.apply(e, u(n))
					: n && 'string' == typeof n.type && e.push(n.type);
			}),
			e)
		: e;
}
function f(n) {
	return n
		? 'function' == typeof n.type
			? null == n.__
				? null != n.__e && null != n.__e.parentNode
					? n.__e.parentNode.localName
					: ''
				: f(n.__)
			: n.type
		: '';
}
var d = n.Component.prototype.setState;
function p(n) {
	return (
		'table' === n ||
		'tfoot' === n ||
		'tbody' === n ||
		'thead' === n ||
		'td' === n ||
		'tr' === n ||
		'th' === n
	);
}
n.Component.prototype.setState = function (n, e) {
	return (
		null == this.__v &&
			null == this.state &&
			console.warn(
				'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
					c(a())
			),
		d.call(this, n, e)
	);
};
var h =
		/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
	v = n.Component.prototype.forceUpdate;
function y(n) {
	var e = n.props,
		t = o(n),
		r = '';
	for (var a in e)
		if (e.hasOwnProperty(a) && 'children' !== a) {
			var i = e[a];
			'function' == typeof i &&
				(i = 'function ' + (i.displayName || i.name) + '() {}'),
				(i =
					Object(i) !== i || i.toString
						? i + ''
						: Object.prototype.toString.call(i)),
				(r += ' ' + a + '=' + JSON.stringify(i));
		}
	var s = e.children;
	return '<' + t + r + (s && s.length ? '>..</' + t + '>' : ' />');
}
(n.Component.prototype.forceUpdate = function (n) {
	return (
		null == this.__v
			? console.warn(
					'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
						c(a())
				)
			: null == this.__P &&
				console.warn(
					'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
						c(this.__v)
				),
		v.call(this, n)
	);
}),
	(n.options.__m = function (n, e) {
		var o = n.type,
			t = e
				.map(function (n) {
					return n && n.localName;
				})
				.filter(Boolean);
		console.error(
			'Expected a DOM node of type ' +
				o +
				' but found ' +
				t.join(', ') +
				" as available DOM-node(s), this is caused by the SSR'd HTML containing different DOM-nodes compared to the hydrated one.\n\n" +
				c(n)
		);
	}),
	(function () {
		!(function () {
			var e = n.options.__b,
				o = n.options.diffed,
				a = n.options.__,
				i = n.options.vnode,
				c = n.options.__r;
			(n.options.diffed = function (n) {
				s(n) && r.pop(), t.pop(), o && o(n);
			}),
				(n.options.__b = function (n) {
					s(n) && t.push(n), e && e(n);
				}),
				(n.options.__ = function (n, e) {
					(r = []), a && a(n, e);
				}),
				(n.options.vnode = function (n) {
					(n.__o = r.length > 0 ? r[r.length - 1] : null), i && i(n);
				}),
				(n.options.__r = function (n) {
					s(n) && r.push(n), c && c(n);
				});
		})();
		var a = !1,
			i = n.options.__b,
			d = n.options.diffed,
			v = n.options.vnode,
			m = n.options.__r,
			b = n.options.__e,
			w = n.options.__,
			g = n.options.__h,
			E = l
				? {
						useEffect: new WeakMap(),
						useLayoutEffect: new WeakMap(),
						lazyPropTypes: new WeakMap()
					}
				: null,
			k = [];
		(n.options.__e = function (n, e, t, r) {
			if (e && e.__c && 'function' == typeof n.then) {
				var a = n;
				n = new Error('Missing Suspense. The throwing component was: ' + o(e));
				for (var i = e; i; i = i.__)
					if (i.__c && i.__c.__c) {
						n = a;
						break;
					}
				if (n instanceof Error) throw n;
			}
			try {
				((r = r || {}).componentStack = c(e)),
					b(n, e, t, r),
					'function' != typeof n.then &&
						setTimeout(function () {
							throw n;
						});
			} catch (n) {
				throw n;
			}
		}),
			(n.options.__ = function (n, e) {
				if (!e)
					throw new Error(
						'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
					);
				var t;
				switch (e.nodeType) {
					case 1:
					case 11:
					case 9:
						t = !0;
						break;
					default:
						t = !1;
				}
				if (!t) {
					var r = o(n);
					throw new Error(
						'Expected a valid HTML node as a second argument to render.\tReceived ' +
							e +
							' instead: render(<' +
							r +
							' />, ' +
							e +
							');'
					);
				}
				w && w(n, e);
			}),
			(n.options.__b = function (n) {
				var t = n.type;
				if (((a = !0), void 0 === t))
					throw new Error(
						'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
							y(n) +
							'\n\n' +
							c(n)
					);
				if (null != t && 'object' == typeof t) {
					if (void 0 !== t.__k && void 0 !== t.__e)
						throw new Error(
							'Invalid type passed to createElement(): ' +
								t +
								'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
								o(n) +
								' = ' +
								y(t) +
								';\n  let vnode = <My' +
								o(n) +
								' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
								c(n)
						);
					throw new Error(
						'Invalid type passed to createElement(): ' +
							(Array.isArray(t) ? 'array' : t)
					);
				}
				if (
					void 0 !== n.ref &&
					'function' != typeof n.ref &&
					'object' != typeof n.ref &&
					!('$$typeof' in n)
				)
					throw new Error(
						'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
							typeof n.ref +
							'] instead\n' +
							y(n) +
							'\n\n' +
							c(n)
					);
				if ('string' == typeof n.type)
					for (var r in n.props)
						if (
							'o' === r[0] &&
							'n' === r[1] &&
							'function' != typeof n.props[r] &&
							null != n.props[r]
						)
							throw new Error(
								'Component\'s "' +
									r +
									'" property should be a function, but got [' +
									typeof n.props[r] +
									'] instead\n' +
									y(n) +
									'\n\n' +
									c(n)
							);
				if ('function' == typeof n.type && n.type.propTypes) {
					if (
						'Lazy' === n.type.displayName &&
						E &&
						!E.lazyPropTypes.has(n.type)
					) {
						var s =
							'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
						try {
							var l = n.type();
							E.lazyPropTypes.set(n.type, !0),
								console.warn(s + 'Component wrapped in lazy() is ' + o(l));
						} catch (n) {
							console.warn(
								s +
									"We will log the wrapped component's name once it is loaded."
							);
						}
					}
					var u = n.props;
					n.type.__f &&
						delete (u = (function (n, e) {
							for (var o in e) n[o] = e[o];
							return n;
						})({}, u)).ref,
						(function (n, o, t, r, a) {
							Object.keys(n).forEach(function (t) {
								var i;
								try {
									i = n[t](
										o,
										t,
										r,
										'prop',
										null,
										'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
									);
								} catch (n) {
									i = n;
								}
								i &&
									!(i.message in e) &&
									((e[i.message] = !0),
									console.error(
										'Failed prop type: ' + i.message + ((a && '\n' + a()) || '')
									));
							});
						})(n.type.propTypes, u, 0, o(n), function () {
							return c(n);
						});
				}
				i && i(n);
			});
		var T,
			_ = 0;
		(n.options.__r = function (n) {
			m && m(n), (a = !0);
			var e = n.__c;
			if ((e === T ? _++ : (_ = 1), _ >= 25))
				throw new Error(
					'Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: ' +
						o(n)
				);
			T = e;
		}),
			(n.options.__h = function (n, e, o) {
				if (!n || !a)
					throw new Error('Hook can only be invoked from render methods.');
				g && g(n, e, o);
			});
		var O = function (n, e) {
				return {
					get: function () {
						var o = 'get' + n + e;
						k &&
							k.indexOf(o) < 0 &&
							(k.push(o),
							console.warn('getting vnode.' + n + ' is deprecated, ' + e));
					},
					set: function () {
						var o = 'set' + n + e;
						k &&
							k.indexOf(o) < 0 &&
							(k.push(o),
							console.warn('setting vnode.' + n + ' is not allowed, ' + e));
					}
				};
			},
			I = {
				nodeName: O('nodeName', 'use vnode.type'),
				attributes: O('attributes', 'use vnode.props'),
				children: O('children', 'use vnode.props.children')
			},
			M = Object.create({}, I);
		(n.options.vnode = function (n) {
			var e = n.props;
			if (null !== n.type && null != e && ('__source' in e || '__self' in e)) {
				var o = (n.props = {});
				for (var t in e) {
					var r = e[t];
					'__source' === t
						? (n.__source = r)
						: '__self' === t
							? (n.__self = r)
							: (o[t] = r);
				}
			}
			(n.__proto__ = M), v && v(n);
		}),
			(n.options.diffed = function (n) {
				var e,
					t = n.type,
					r = n.__;
				if (
					(n.__k &&
						n.__k.forEach(function (e) {
							if ('object' == typeof e && e && void 0 === e.type) {
								var o = Object.keys(e).join(',');
								throw new Error(
									'Objects are not valid as a child. Encountered an object with the keys {' +
										o +
										'}.\n\n' +
										c(n)
								);
							}
						}),
					n.__c === T && (_ = 0),
					'string' == typeof t &&
						(p(t) || 'p' === t || 'a' === t || 'button' === t))
				) {
					var i = f(r);
					if ('' !== i && p(t))
						'table' === t && 'td' !== i && p(i)
							? (console.log(i, r.__e),
								console.error(
									'Improper nesting of table. Your <table> should not have a table-node parent.' +
										y(n) +
										'\n\n' +
										c(n)
								))
							: ('thead' !== t && 'tfoot' !== t && 'tbody' !== t) ||
									'table' === i
								? 'tr' === t && 'thead' !== i && 'tfoot' !== i && 'tbody' !== i
									? console.error(
											'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' +
												y(n) +
												'\n\n' +
												c(n)
										)
									: 'td' === t && 'tr' !== i
										? console.error(
												'Improper nesting of table. Your <td> should have a <tr> parent.' +
													y(n) +
													'\n\n' +
													c(n)
											)
										: 'th' === t &&
											'tr' !== i &&
											console.error(
												'Improper nesting of table. Your <th> should have a <tr>.' +
													y(n) +
													'\n\n' +
													c(n)
											)
								: console.error(
										'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
											y(n) +
											'\n\n' +
											c(n)
									);
					else if ('p' === t) {
						var s = u(n).filter(function (n) {
							return h.test(n);
						});
						s.length &&
							console.error(
								'Improper nesting of paragraph. Your <p> should not have ' +
									s.join(', ') +
									' as child-elements.' +
									y(n) +
									'\n\n' +
									c(n)
							);
					} else
						('a' !== t && 'button' !== t) ||
							(-1 !== u(n).indexOf(t) &&
								console.error(
									'Improper nesting of interactive content. Your <' +
										t +
										'> should not have other ' +
										('a' === t ? 'anchor' : 'button') +
										' tags as child-elements.' +
										y(n) +
										'\n\n' +
										c(n)
								));
				}
				if (((a = !1), d && d(n), null != n.__k))
					for (var l = [], v = 0; v < n.__k.length; v++) {
						var m = n.__k[v];
						if (m && null != m.key) {
							var b = m.key;
							if (-1 !== l.indexOf(b)) {
								console.error(
									'Following component has two or more children with the same key attribute: "' +
										b +
										'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
										y(n) +
										'\n\n' +
										c(n)
								);
								break;
							}
							l.push(b);
						}
					}
				if (null != n.__c && null != n.__c.__H) {
					var w = n.__c.__H.__;
					if (w)
						for (var g = 0; g < w.length; g += 1) {
							var E = w[g];
							if (E.__H)
								for (var k = 0; k < E.__H.length; k++)
									if ((e = E.__H[k]) != e) {
										var O = o(n);
										console.warn(
											'Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index ' +
												g +
												' in component ' +
												O +
												' was called with NaN.'
										);
									}
						}
				}
			});
	})(),
	(exports.resetPropWarnings = function () {
		e = {};
	});
//# sourceMappingURL=debug.js.map
