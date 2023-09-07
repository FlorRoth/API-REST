const router = require ('express').Router();

const {Book} = require('../../db')

router.get('/', async (req, res) => {
    try {
    const books = await Book.findAll();
    if (!books) {
        return res.status(404).json({ message: 'No se ha encontrado ningun libro' });
    }
    res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al buscar libros' });
    }
});

router.get('/get_data/:bookId', async (req, res) => {
    try {
        const book = await Book.findOne({ where: {id: req.params.bookId} });
    
        if (!book) {
          return res.status(404).json({ message: 'Libro no encontrado' });
        }
        const filteredBookData = {
            "ID": book.ID,
            "field_1": book.field_1,
            "author": book.author,
            "description": book.description,
            "my_numeric_field": book.my_numeric_field
        };
        res.json(filteredBookData);
      } catch (error) {
        res.status(500).json({ message: 'Error al buscar el libro por ID' });
      }
});


router.post('/', async (req, res) => {
    try {
        const books = await Book.create(req.body);
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error: No se ha podido crear el libro correctamente' }); 
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
            res.json(book.ID);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error: No se ha podido crear el libro correctamente' });
    }
});


router.put('/books/:bookId', async (req, res) => {
    try {
    await Book.update(req.body,{
        where: {id: req.params.bookId}
    });
    res.json({success: 'Libro modificado correctamente'});
    } catch (error) {
        res.status(500).json({ message: 'Error: No se ha podido actualizar el libro correctamente' });
    }
});


router.delete('/books/:bookId', async (req, res) => {
    try {
    await Book.destroy({
        where: {id: req.params.bookId}
    });
    res.json({success: 'Libro eliminado correctamente'});
    } catch (error) {
        res.status(500).json({ message: 'Error: No se ha podido eliminar el libro correctamente' });
    }
});

module.exports = router;