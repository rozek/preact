!(function (e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports, require('preact'))
		: 'function' == typeof define && define.amd
			? define(['exports', 'preact'], n)
			: n(((e || self).preactDevtools = {}), e.preact);
})(this, function (e, n) {
	var o;
	null !=
		(o =
			'undefined' != typeof globalThis
				? globalThis
				: 'undefined' != typeof window
					? window
					: void 0) &&
		o.__PREACT_DEVTOOLS__ &&
		o.__PREACT_DEVTOOLS__.attachPreact('10.25.2', n.options, {
			Fragment: n.Fragment,
			Component: n.Component
		}),
		(e.addHookName = function (e, o) {
			return n.options.__a && n.options.__a(o), e;
		});
});
//# sourceMappingURL=devtools.umd.js.map
