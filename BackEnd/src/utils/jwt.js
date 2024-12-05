const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, rol: user.tipo_usuario }, JWT_SECRET, {
    expiresIn: '1h',
  });
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    throw new Error('Token no válido');
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
