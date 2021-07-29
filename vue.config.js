module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
    ? '/test.github.io/' // note the trailing slash
    : '/',
}