!(function (n, e) {
	'object' == typeof exports && 'undefined' != typeof module
		? e(exports, require('preact'), require('preact/devtools'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact', 'preact/devtools'], e)
			: e(((n || self).preactDebug = {}), n.preact);
})(this, function (n, e) {
	var o = {};
	function t(n) {
		return n.type === e.Fragment
			? 'Fragment'
			: 'function' == typeof n.type
				? n.type.displayName || n.type.name
				: 'string' == typeof n.type
					? n.type
					: '#text';
	}
	var r = [],
		a = [];
	function i() {
		return r.length > 0 ? r[r.length - 1] : null;
	}
	var s = !0;
	function c(n) {
		return 'function' == typeof n.type && n.type != e.Fragment;
	}
	function l(n) {
		for (var e = [n], o = n; null != o.__o; ) e.push(o.__o), (o = o.__o);
		return e.reduce(function (n, e) {
			n += '  in ' + t(e);
			var o = e.__source;
			return (
				o
					? (n += ' (at ' + o.fileName + ':' + o.lineNumber + ')')
					: s &&
						console.warn(
							'Add @babel/plugin-transform-react-jsx-source to get a more detailed component stack. Note that you should not add it to production builds of your App for bundle size reasons.'
						),
				(s = !1),
				n + '\n'
			);
		}, '');
	}
	var u = 'function' == typeof WeakMap;
	function f(n) {
		var e = [];
		return n.__k
			? (n.__k.forEach(function (n) {
					n && 'function' == typeof n.type
						? e.push.apply(e, f(n))
						: n && 'string' == typeof n.type && e.push(n.type);
				}),
				e)
			: e;
	}
	function d(n) {
		return n
			? 'function' == typeof n.type
				? null == n.__
					? null != n.__e && null != n.__e.parentNode
						? n.__e.parentNode.localName
						: ''
					: d(n.__)
				: n.type
			: '';
	}
	var p = e.Component.prototype.setState;
	function h(n) {
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
	e.Component.prototype.setState = function (n, e) {
		return (
			null == this.__v &&
				null == this.state &&
				console.warn(
					'Calling "this.setState" inside the constructor of a component is a no-op and might be a bug in your application. Instead, set "this.state = {}" directly.\n\n' +
						l(i())
				),
			p.call(this, n, e)
		);
	};
	var v =
			/^(address|article|aside|blockquote|details|div|dl|fieldset|figcaption|figure|footer|form|h1|h2|h3|h4|h5|h6|header|hgroup|hr|main|menu|nav|ol|p|pre|search|section|table|ul)$/,
		y = e.Component.prototype.forceUpdate;
	function m(n) {
		var e = n.props,
			o = t(n),
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
		return '<' + o + r + (s && s.length ? '>..</' + o + '>' : ' />');
	}
	(e.Component.prototype.forceUpdate = function (n) {
		return (
			null == this.__v
				? console.warn(
						'Calling "this.forceUpdate" inside the constructor of a component is a no-op and might be a bug in your application.\n\n' +
							l(i())
					)
				: null == this.__P &&
					console.warn(
						'Can\'t call "this.forceUpdate" on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.\n\n' +
							l(this.__v)
					),
			y.call(this, n)
		);
	}),
		(e.options.__m = function (n, e) {
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
					l(n)
			);
		}),
		(function () {
			!(function () {
				var n = e.options.__b,
					o = e.options.diffed,
					t = e.options.__,
					i = e.options.vnode,
					s = e.options.__r;
				(e.options.diffed = function (n) {
					c(n) && a.pop(), r.pop(), o && o(n);
				}),
					(e.options.__b = function (e) {
						c(e) && r.push(e), n && n(e);
					}),
					(e.options.__ = function (n, e) {
						(a = []), t && t(n, e);
					}),
					(e.options.vnode = function (n) {
						(n.__o = a.length > 0 ? a[a.length - 1] : null), i && i(n);
					}),
					(e.options.__r = function (n) {
						c(n) && a.push(n), s && s(n);
					});
			})();
			var n = !1,
				i = e.options.__b,
				s = e.options.diffed,
				p = e.options.vnode,
				y = e.options.__r,
				b = e.options.__e,
				g = e.options.__,
				w = e.options.__h,
				E = u
					? {
							useEffect: new WeakMap(),
							useLayoutEffect: new WeakMap(),
							lazyPropTypes: new WeakMap()
						}
					: null,
				k = [];
			(e.options.__e = function (n, e, o, r) {
				if (e && e.__c && 'function' == typeof n.then) {
					var a = n;
					n = new Error(
						'Missing Suspense. The throwing component was: ' + t(e)
					);
					for (var i = e; i; i = i.__)
						if (i.__c && i.__c.__c) {
							n = a;
							break;
						}
					if (n instanceof Error) throw n;
				}
				try {
					((r = r || {}).componentStack = l(e)),
						b(n, e, o, r),
						'function' != typeof n.then &&
							setTimeout(function () {
								throw n;
							});
				} catch (n) {
					throw n;
				}
			}),
				(e.options.__ = function (n, e) {
					if (!e)
						throw new Error(
							'Undefined parent passed to render(), this is the second argument.\nCheck if the element is available in the DOM/has the correct id.'
						);
					var o;
					switch (e.nodeType) {
						case 1:
						case 11:
						case 9:
							o = !0;
							break;
						default:
							o = !1;
					}
					if (!o) {
						var r = t(n);
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
					g && g(n, e);
				}),
				(e.options.__b = function (e) {
					var r = e.type;
					if (((n = !0), void 0 === r))
						throw new Error(
							'Undefined component passed to createElement()\n\nYou likely forgot to export your component or might have mixed up default and named imports' +
								m(e) +
								'\n\n' +
								l(e)
						);
					if (null != r && 'object' == typeof r) {
						if (void 0 !== r.__k && void 0 !== r.__e)
							throw new Error(
								'Invalid type passed to createElement(): ' +
									r +
									'\n\nDid you accidentally pass a JSX literal as JSX twice?\n\n  let My' +
									t(e) +
									' = ' +
									m(r) +
									';\n  let vnode = <My' +
									t(e) +
									' />;\n\nThis usually happens when you export a JSX literal and not the component.\n\n' +
									l(e)
							);
						throw new Error(
							'Invalid type passed to createElement(): ' +
								(Array.isArray(r) ? 'array' : r)
						);
					}
					if (
						void 0 !== e.ref &&
						'function' != typeof e.ref &&
						'object' != typeof e.ref &&
						!('$$typeof' in e)
					)
						throw new Error(
							'Component\'s "ref" property should be a function, or an object created by createRef(), but got [' +
								typeof e.ref +
								'] instead\n' +
								m(e) +
								'\n\n' +
								l(e)
						);
					if ('string' == typeof e.type)
						for (var a in e.props)
							if (
								'o' === a[0] &&
								'n' === a[1] &&
								'function' != typeof e.props[a] &&
								null != e.props[a]
							)
								throw new Error(
									'Component\'s "' +
										a +
										'" property should be a function, but got [' +
										typeof e.props[a] +
										'] instead\n' +
										m(e) +
										'\n\n' +
										l(e)
								);
					if ('function' == typeof e.type && e.type.propTypes) {
						if (
							'Lazy' === e.type.displayName &&
							E &&
							!E.lazyPropTypes.has(e.type)
						) {
							var s =
								'PropTypes are not supported on lazy(). Use propTypes on the wrapped component itself. ';
							try {
								var c = e.type();
								E.lazyPropTypes.set(e.type, !0),
									console.warn(s + 'Component wrapped in lazy() is ' + t(c));
							} catch (n) {
								console.warn(
									s +
										"We will log the wrapped component's name once it is loaded."
								);
							}
						}
						var u = e.props;
						e.type.__f &&
							delete (u = (function (n, e) {
								for (var o in e) n[o] = e[o];
								return n;
							})({}, u)).ref,
							(function (n, e, t, r, a) {
								Object.keys(n).forEach(function (t) {
									var i;
									try {
										i = n[t](
											e,
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
										!(i.message in o) &&
										((o[i.message] = !0),
										console.error(
											'Failed prop type: ' +
												i.message +
												((a && '\n' + a()) || '')
										));
								});
							})(e.type.propTypes, u, 0, t(e), function () {
								return l(e);
							});
					}
					i && i(e);
				});
			var T,
				_ = 0;
			(e.options.__r = function (e) {
				y && y(e), (n = !0);
				var o = e.__c;
				if ((o === T ? _++ : (_ = 1), _ >= 25))
					throw new Error(
						'Too many re-renders. This is limited to prevent an infinite loop which may lock up your browser. The component causing this is: ' +
							t(e)
					);
				T = o;
			}),
				(e.options.__h = function (e, o, t) {
					if (!e || !n)
						throw new Error('Hook can only be invoked from render methods.');
					w && w(e, o, t);
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
				j = Object.create({}, I);
			(e.options.vnode = function (n) {
				var e = n.props;
				if (
					null !== n.type &&
					null != e &&
					('__source' in e || '__self' in e)
				) {
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
				(n.__proto__ = j), p && p(n);
			}),
				(e.options.diffed = function (e) {
					var o,
						r = e.type,
						a = e.__;
					if (
						(e.__k &&
							e.__k.forEach(function (n) {
								if ('object' == typeof n && n && void 0 === n.type) {
									var o = Object.keys(n).join(',');
									throw new Error(
										'Objects are not valid as a child. Encountered an object with the keys {' +
											o +
											'}.\n\n' +
											l(e)
									);
								}
							}),
						e.__c === T && (_ = 0),
						'string' == typeof r &&
							(h(r) || 'p' === r || 'a' === r || 'button' === r))
					) {
						var i = d(a);
						if ('' !== i && h(r))
							'table' === r && 'td' !== i && h(i)
								? (console.log(i, a.__e),
									console.error(
										'Improper nesting of table. Your <table> should not have a table-node parent.' +
											m(e) +
											'\n\n' +
											l(e)
									))
								: ('thead' !== r && 'tfoot' !== r && 'tbody' !== r) ||
										'table' === i
									? 'tr' === r &&
										'thead' !== i &&
										'tfoot' !== i &&
										'tbody' !== i
										? console.error(
												'Improper nesting of table. Your <tr> should have a <thead/tbody/tfoot> parent.' +
													m(e) +
													'\n\n' +
													l(e)
											)
										: 'td' === r && 'tr' !== i
											? console.error(
													'Improper nesting of table. Your <td> should have a <tr> parent.' +
														m(e) +
														'\n\n' +
														l(e)
												)
											: 'th' === r &&
												'tr' !== i &&
												console.error(
													'Improper nesting of table. Your <th> should have a <tr>.' +
														m(e) +
														'\n\n' +
														l(e)
												)
									: console.error(
											'Improper nesting of table. Your <thead/tbody/tfoot> should have a <table> parent.' +
												m(e) +
												'\n\n' +
												l(e)
										);
						else if ('p' === r) {
							var c = f(e).filter(function (n) {
								return v.test(n);
							});
							c.length &&
								console.error(
									'Improper nesting of paragraph. Your <p> should not have ' +
										c.join(', ') +
										' as child-elements.' +
										m(e) +
										'\n\n' +
										l(e)
								);
						} else
							('a' !== r && 'button' !== r) ||
								(-1 !== f(e).indexOf(r) &&
									console.error(
										'Improper nesting of interactive content. Your <' +
											r +
											'> should not have other ' +
											('a' === r ? 'anchor' : 'button') +
											' tags as child-elements.' +
											m(e) +
											'\n\n' +
											l(e)
									));
					}
					if (((n = !1), s && s(e), null != e.__k))
						for (var u = [], p = 0; p < e.__k.length; p++) {
							var y = e.__k[p];
							if (y && null != y.key) {
								var b = y.key;
								if (-1 !== u.indexOf(b)) {
									console.error(
										'Following component has two or more children with the same key attribute: "' +
											b +
											'". This may cause glitches and misbehavior in rendering process. Component: \n\n' +
											m(e) +
											'\n\n' +
											l(e)
									);
									break;
								}
								u.push(b);
							}
						}
					if (null != e.__c && null != e.__c.__H) {
						var g = e.__c.__H.__;
						if (g)
							for (var w = 0; w < g.length; w += 1) {
								var E = g[w];
								if (E.__H)
									for (var k = 0; k < E.__H.length; k++)
										if ((o = E.__H[k]) != o) {
											var O = t(e);
											console.warn(
												'Invalid argument passed to hook. Hooks should not be called with NaN in the dependency array. Hook index ' +
													w +
													' in component ' +
													O +
													' was called with NaN.'
											);
										}
							}
					}
				});
		})(),
		(n.resetPropWarnings = function () {
			o = {};
		});
});
//# sourceMappingURL=debug.umd.js.map
