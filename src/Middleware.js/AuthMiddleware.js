const jwt = require('jsonwebtoken')



const authMiddleware = (req, res, next) => {
    try {

        const token = req.header('x-api-key')
        if (!token) {
            return res.status(403).send({ status: false, message: `Missing authentication token in request` })
        }

        const decoded = jwt.verify(token, 'Admin')

        if (!decoded) {
            return res.status(403).send({ status: false, message: `Invalid authentication token in request` })

        }
        if (Date.now() > (decoded.exp) * 1000) {
            return res.status(404).send({ status: false, message: `Session Expired, Login again` })
        }

        req.userId = decoded.userId;

        next()
    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}



module.exports = {
    authMiddleware
}