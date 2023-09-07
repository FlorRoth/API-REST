const router = require ('express').Router();

const apiBooksRouter = require ('./api/books');

router.use('/', apiBooksRouter);

module.exports = router;