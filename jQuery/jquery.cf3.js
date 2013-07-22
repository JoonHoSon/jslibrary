;(function ($) {
    // $.fn.inputLength = function(option) {
    //     var options = $.extend({
    //         'cjk2byte':false
    //     }, option || {});
    $.fn.inputLength = function(options) {
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
    $.fn.popupLayer = function() {
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

        $(bg).css('width', '100%').css('height', '100%').css('background-color', '#000').css('position', 'absolute');
        $(bg).css('top', '0').css('left', '0').css('opacity', '0.2').css('z-index', '100');

        $(target).css('position', 'absolute').css('top', '50%').css('left', '50%').css('z-index', '101');
        $(target).css('background-color', '#fff');

        if ($(jqObject).outerHeight() < $(document).height()) {
            $(target).css('margin-top', '-' + $(jqObject).outerHeight() / 2 + 'px');
        } else {
            $(target).css('top', '0');
        }

        if ($(jqObject).outerWidth() < $(document).width()) {
            $(target).css('margin-left', '-' + $(jqObject).outerWidth() / 2 + 'px');
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

    zeroFill = function(targetValue, fullLength) {
        if (targetValue == null || typeof target == 'undefined' || fullLength < 0) {
            return '';
        }

        var length = fullLength - targetValue.toString().length;
        var result = '';

        for (var i = 0; i < length; i++) {
            result += '0';
        }

        return result + targetValue.toString();
    };
})(jQuery);