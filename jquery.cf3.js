$.extend(
    {
        /**
         * 레이어 팝업
         *
         * @param jqObject 팝업 jQuery 객체
         */
        popupLayer: function (jqObject) {
            var wrapper;

            if ($(document).find('#popupWrapper').length == 0) {
                $('body').append('<div id="popupWrapper"><div id="popupBG"></div></div>');

                wrapper = $('#popupWrapper');
            } else {
                wrapper = $('#popupWrapper');
                wrapper.empty().append('<div id="popupBG"></div>');
            }

            var target = $(jqObject).clone(true);

            $(wrapper).append(target);

            var bg = $('#popupBG');

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
        },
        
        /**
         * 0으로 채우기
         * 
         * @param target 대상 숫자
         * @param fullLength 대상 숫자를 포함해서 0으로 채울 길이
         */
        zeroFill: function(target, fullLength) {
            if (target == null || typeof target == 'undefined' || fullLength < 0) {
                return '';
            }

            var length = fullLength - target.toString().length;
            var result = '';

            for (var i = 0; i < length; i++) {
                result += '0';
            }

            return result + target.toString();
        }
    }
)