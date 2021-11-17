module.exports = function selfAs(value) {
	return function (callback) {
		if (typeof callback !== 'function') {
			throw new TypeError('callback is not a function')
		}
		return callback(value)
	}
}
