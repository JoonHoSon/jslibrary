;(function ($) {
    /**
     * 항목의 길이 반환
     * 
     * @param options
     */
    $.fn.inputLength = function (options) {
        // default option
        defaultOptions = $.extend({
            isTrim: true
        }, options);

        var str = (defaultOptions['isTrim'])? $.trim(this.val()): this.val();
        var koreanCount = 0;
        
        koreanCount = (encodeURI(str) + '%u').match(/%u/g).length - 1;
        
        return str.length + koreanCount;
    };

    /**
     * 레이어 팝업
     *
     * @param jqObject 팝업 jQuery 객체
     */
    $.fn.popupLayer = function (options) {
        // default option
        defaultOptions = $.extend({
            backgroundColor: '#000',
            opacity: 0.2
        }, options);

        var wrapper;

        if ($(document).find('#__popupWrapper').length == 0) {
            $('body').append('<div id="__popupWrapper"><div id="__popupBG"></div></div>');

            wrapper = $('#__popupWrapper');
        } else {
            wrapper = $('#__popupWrapper');
            wrapper.empty().append('<div id="__popupBG"></div>');
        }

        var target = this.clone(true);

        $(wrapper).append(target);

        var bg = $('#__popupBG');

        $(wrapper).css('position', 'fixed').css('_position', 'absolute').css('top', '0').css('left', '0');
        $(wrapper).css('width', '100%').css('height', '100%').css('z-index', '300');

        $(bg).css('width', '100%').css('height', '100%').css('background-color', defaultOptions['backgroundColor']).css('position', 'absolute');
        $(bg).css('top', '0').css('left', '0').css('opacity', defaultOptions['opacity']).css('z-index', '100');

        $(target).css('position', 'absolute').css('top', '50%').css('left', '50%').css('z-index', '101');
        $(target).css('background-color', '#fff');

        if (this.outerHeight() < $(document).height()) {
            $(target).css('margin-top', '-' + this.outerHeight() / 2 + 'px');
        } else {
            $(target).css('top', '0');
        }

        if (this.outerWidth() < $(document).width()) {
            $(target).css('margin-left', '-' + this.outerWidth() / 2 + 'px');
        } else {
            $(target).css('left', '0');
        }

        $(target).show();
        $(wrapper).show();

        $(target).find('.btnClose').bind('click', function (e) {
            $(wrapper).hide();

            e.preventDefault();
        });
    };

    $.fn.zeroFill = function (targetValue, fullLength) {
        if (targetValue == null || fullLength < 0) {
            return '';
        }

        var length = fullLength - targetValue.toString().length;
        var result = '';

        for (var i = 0; i < length; i++) {
            result += '0';
        }

        return result + targetValue.toString();
    };

    $.fn.getLastDateWithObject = function (date) {
        if (date == null) {
            return null;
        }

        return new Date(new Date(date.getFullYear(), date.getMonth() + 1, 1) - 1);
    };

    $.fn.getLastDate = function (date) {
        return $.getLastDateWithObject(date).getDate();
    };

    $.fn.getLastDay = function (date) {
        return $.getLastDateWithObject(date).getDay();
    };
    
    // 화면 가운데 정렬하기
    // 참고 : http://www.hackerex.com/Question/10/제이쿼리로DIV요소를화면가운데에놓기
    $.fn.center = function() {
        this.css('position', 'absolute');
        this.css('top', Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop()) + 'px');
        this.css('left', Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + $(window).scrollLeft()) + 'px');
        
        return this;
    };
})($);
