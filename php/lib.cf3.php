<?php
	/**
	 * 대상 문자열의 길이 반환
	 *
	 * @param string $target
	 * @param bool $isTrim
	 * @param string $charset
	 *
	 * @return int
	 */
	function inputLength($target = '', $isTrim = true, $charset = 'UTF-8') {
		$str = ($isTrim)? preg_replace('/\s/', '', $target): $target;

		return (strtoupper($charset) == 'UTF-8')? mb_strlen($str, $charset): strlen($str);
	}

	/**
	 * 대상 숫자를 지정된 길이만큼 0으로 채워서 반환
	 *
	 * @param string $target
	 * @param int $fullLength
	 *
	 * @return string
	 */
	function zeroFill($target = '', $fullLength = 0) {
		if (!is_numeric($target)) {
			return '';
		}

		if (is_null($target) || $fullLength <= 0) {
			return '';
		}

		$length = $fullLength - strlen($target);
		$result = '';

		for ($i=0; $i < $length; $i++) {
			$result .= '0';
		}

		return $result.$target;
	}
?>