function inputLength(target, isTrim) {
	var str = (isTrim && typeof isTrim == 'boolean')? target.replace(/\s/gi, ''): target;
    var koreanCount = 0;
    
    koreanCount = (encodeURI(str) + '%u').match(/%u/g).length - 1;
    
    return str.length + koreanCount;
}

exports.inputLength = inputLength;