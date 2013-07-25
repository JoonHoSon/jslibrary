;(function ($) {
	$.extend ({
		/**
		 * 트위터 링크 공유
		 * @param url 공유 대상 URL
		 * @param title 공유시 문구
		 */
		shareTwitter: function(url, title) {
			var href = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(url);

			console.log(href);

			if ($.trim(title) != '') {
				href += '&text=' + encodeURIComponent(title);
			}

			var pop = window.open(href);

			if (pop) {
				pop.focus();
			}
		},

		/**
		 * 페이스북 공유
		 * 
		 * @param url 공유 대상 url
		 * @param title 공유 대상 제목
		 * @param summary 공유대상 요약 내용
		 * @param iamge 공유시 노출 이미지 URL
		 */
		shareFacebook: function(url, title, summary, image) {
			var href = 'http://www.facebook.com/sharer/sharer.php?s=100';
			var parameter = encodeURI('&p[url]') + '=' + encodeURIComponent(url);

			if ($.trim(title) != '') {
				parameter += encodeURI('&p[title]') + '=' + encodeURIComponent(title);
			}

			if ($.trim(summary) != '') {
				parameter += encodeURI('&p[summary]') + '=' + encodeURIComponent(summary);
			}

			if ($.trim(image) != '' && image.toLowerCase(image).indexOf('http://') != -1) {
				parameter += encodeURI('&p[images][0]') + '=' + encodeURIComponent(image);
			}

			var pop = window.open(href + '?' + parameter);

			if (pop) {
				pop.focus();
			}
		}
	});
})($);