// backend/src/utils/jwt.js
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = '7d'; // Token válido por 7 dias

/**
 * Gera um token JWT para o usuário
 * @param {Object} user - Dados do usuário (id, email, role)
 * @returns {string} Token JWT
 */
export function generateToken(user) {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role || 'MEMBER'
  };

  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
}

/**
 * Verifica e decodifica um token JWT
 * @param {string} token - Token JWT
 * @returns {Object|null} Payload decodificado ou null se inválido
 */
export function verifyToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
}