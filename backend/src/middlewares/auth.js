// backend/src/middlewares/auth.js
import { verifyToken } from '../utils/jwt.js';

/**
 * Middleware para proteger rotas que exigem autenticação
 */
export function authenticate(req, res, next) {
  try {
    // Pegar token do header Authorization
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ error: 'Token não fornecido.' });
    }

    // Formato esperado: "Bearer TOKEN_AQUI"
    const parts = authHeader.split(' ');
    
    if (parts.length !== 2 || parts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Formato de token inválido.' });
    }

    const token = parts[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' });
    }

    // Adiciona dados do usuário na requisição
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Falha na autenticação.' });
  }
}

/**
 * Middleware para verificar se usuário tem role específica
 */
export function authorize(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Não autenticado.' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Acesso negado.' });
    }

    next();
  };
}