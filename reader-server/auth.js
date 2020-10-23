module.exports = (bypassAuth) => (req, res, next) => {
    if (bypassAuth) {
        next();
    } else {
        const token = req.headers.authorization;
        
        if (!token) {
            res.status(401).json({
                error: new Error('Not authorized')
            });
        } else {
            next();
        }
    }


}