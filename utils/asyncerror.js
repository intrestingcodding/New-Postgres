const asyncerror = (fn) => {
    const errorHander = (req, res, next) => {
        fn(req, res, next).catch(next)
    }
    return errorHander
}

module.exports = asyncerror