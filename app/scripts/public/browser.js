define(function(require, exports, module) {

	// var ua = window.navigator.userAgent.toLowerCase(),
	// 	_DEBUG = false,
	// 	_iOS = ua.match(/^mozilla/i) == "mozilla" && ua.indexOf('mobile') != -1 && (ua.indexOf('ipod') != -1 || ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1),
	// 	_Android = ua.match(/^mozilla/i) == "mozilla" && ua.indexOf("linux") != -1 && ua.indexOf('android'),
	// 	_WX = ua.indexOf('micromessenger') != -1;

	// exports.bowser = {
	// 	ios: _iOS,
	// 	android: _Android,
	// 	wx: _WX,
	// 	isMobile: _iOS || _Android || _WX
	// };

	var browser = {
		versions: function() {
			var u = navigator.userAgent,
				app = navigator.appVersion;
			return { //移动终端浏览器版本信息
				trident: u.indexOf('Trident') > -1, //IE内核
				presto: u.indexOf('Presto') > -1, //opera内核
				webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
				gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
				mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
				ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
				android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
				iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
				iPad: u.indexOf('iPad') > -1, //是否iPad
				webApp: u.indexOf('Safari') == -1,
				WX: u.toLowerCase().indexOf('micromessenger') != -1
				//是否web应该程序，没有头部与底部
			};
		}(),
		language: (navigator.browserLanguage || navigator.language)
			.toLowerCase()
	};
	exports.bowser = {
		ios: browser.versions.ios,
		android: browser.versions.android,
		wx: browser.versions.WX,
		isMobile: browser.versions.mobile
	};
});