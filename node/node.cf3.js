function inputLength(target, isTrim) {
	var str = (isTrim && typeof isTrim == 'boolean')? target.replace(/\s/gi, ''): target;
    var koreanCount = 0;
    
    koreanCount = (encodeURI(str) + '%u').match(/%u/g).length - 1;
    
    return str.length + koreanCount;
}

function zeroFill(target, fullLength) {
    if (targetValue == null || fullLength < 0) {
        return '';
    }

    var length = fullLength - targetValue.toString().length;
    var result = '';

    for (var i = 0; i < length; i++) {
        result += '0';
    }

    return result + targetValue.toString();
}

exports.inputLength = inputLength;
exports.zeroFill = zeroFill;