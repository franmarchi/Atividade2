const jwt = require('jsonwebtoken');

const SECRET = 'segredo_super';

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ mensagem: 'Token não fornecido' });
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), SECRET);
        req.user = decoded;
        next();
    } catch {
        return res.status(401).json({ mensagem: 'Token inválido' });
    }
};

module.exports = authMiddleware;
