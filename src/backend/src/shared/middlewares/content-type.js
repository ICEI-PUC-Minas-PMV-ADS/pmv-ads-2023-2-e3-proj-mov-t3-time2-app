module.exports = (req, res, next) => {
    res.type('Json')
    next()
}