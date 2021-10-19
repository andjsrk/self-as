module.exports = function selfAs(callback) {
	if (typeof callback !== 'function') {
		throw new TypeError('callback is not a function')
	}
	return callback
}
