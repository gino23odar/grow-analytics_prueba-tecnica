const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { authenticateJWT } = require('../middlewares/auth');
const authorizeRole = require('../middlewares/roles');
const { 
  getUsers, 
  createUser, 
  updateUser, 
  deleteUser 
} = require('../controllers/userController');

const router = express.Router();

// Obtener todos los usuarios con paginacion
router.get('/', 
  authenticateJWT, 
  authorizeRole(['admin', 'user']), 
  getUsers
);

// Crear usuario (solo admin)
router.post('/', 
  authenticateJWT, 
  authorizeRole(['admin']), 
  createUser
);

// Editar usuario
router.put('/:id', 
  authenticateJWT, 
  authorizeRole(['admin', 'user']), 
  updateUser
);

// Eliminar usuario
router.delete('/:id', 
  authenticateJWT, 
  authorizeRole(['admin', 'user']), 
  deleteUser
);

module.exports = router;

