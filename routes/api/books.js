const router = require ('express').Router();

const {Book} = require('../../db')


router.get('/get_data/:bookId', async (req, res) => {
    try {
        const book = await Book.findOne({ where: {id: req.params.bookId} });
    
        if (!book) {
          return res.status(404).json({ error: 'Libro no encontrado' });
        }
        const filteredBookData = {
            "ID": book.ID,
            "field_1": book.field_1,
            "author": book.author,
            "description": book.description,
            "my_numeric_field": book.my_numeric_field
        };
        res.status(200).json(filteredBookData);
      } catch (error) {
        res.status(500).json({ error: 'Error al buscar el libro por ID' });
      }
});


router.post('/input/:field', async (req, res) => {
    try {
        const validFields = Object.keys(Book.rawAttributes);
        const field = req.params.field; 
        if (!validFields.includes(field) || typeof req.body[field] !== "string") {
            res.status(400).json({ error: `${field} no es un campo no válido para convertir a mayúscula` });
        }
        else {
            req.body[field] = req.body[field].toUpperCase();
            const book = await Book.create(req.body);
            const bookData = {
                "id": book.ID,
            };
            res.status(200).json(bookData);
        }
    } catch (error) {
        res.status(500).json({ error: 'Error: No se ha podido crear el libro correctamente' });
    }
});


router.put('/:bookId', async (req, res) => {
    try {
    await Book.update(req.body,{
        where: {id: req.params.bookId}
    });
    res.status(200).json({success: 'Libro modificado correctamente'});
    } catch (error) {
        res.status(500).json({ error: 'Error: No se ha podido actualizar el libro correctamente' });
    }
});


router.delete('/:bookId', async (req, res) => {
    try {
    await Book.destroy({
        where: {id: req.params.bookId}
    });
    res.status(200).json({success: 'Libro eliminado correctamente'});
    } catch (error) {
        res.status(500).json({ error: 'Error: No se ha podido eliminar el libro correctamente' });
    }
});

module.exports = router;