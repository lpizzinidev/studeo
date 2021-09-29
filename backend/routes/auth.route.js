const express = require('express');
const router = express.Router();

const { signIn, signUp } = require('../controllers/auth.controller');

const { validate } = require('../middlewares/validator.middleware');

router.post('/signin', validate('signin'), signIn);
router.post('/signup', validate('signup'), signUp);

module.exports = router;
