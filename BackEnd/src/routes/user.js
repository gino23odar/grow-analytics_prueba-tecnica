

// Obtener todos los usuarios con paginacion
router.get('/', authenticateJWT, authorizeRole('admin'), async (req, res) => {

});

// Crear usuario
router.post('/', authenticateJWT, authorizeRole('admin'), async (req, res) => {

});

// Editar usuario
router.put('/:id', authenticateJWT, authorizeRole('admin'), async (req, res) => {

});

// Eliminar usuario
router.delete('/:id', authenticateJWT, authorizeRole('admin'), async (req, res) => {

});

module.exports = router;
