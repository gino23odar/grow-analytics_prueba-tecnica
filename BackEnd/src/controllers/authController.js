authController.js


const { prisma } = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Registro de usuario
const registerUser = async (req, res) => {
  const { usuario, correo, contrasena, rol_id } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(contrasena, 10);
    const newUser = await prisma.usuario.create({
      data: {
        usuario,
        correo,
        contrasena: hashedPassword,
        rol_id,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Inicio de sesión
const loginUser = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await prisma.usuario.findUnique({ where: { correo } });
    if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });

    const isValid = await bcrypt.compare(contrasena, user.contrasena);
    if (!isValid) return res.status(401).json({ error: 'Password incorrecto' });

    const token = jwt.sign({ id: user.id, rol: user.rol_id }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerUser, loginUser };