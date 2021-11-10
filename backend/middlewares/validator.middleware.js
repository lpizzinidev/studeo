const { body } = require('express-validator');

const validate = (method) => {
  switch (method) {
    case 'signin': {
      return [
        body('email')
          .not()
          .isEmpty()
          .withMessage('E-mail is required')
          .isEmail()
          .withMessage('Insert a valid e-mail')
          .normalizeEmail(),
        body('password')
          .not()
          .isEmpty()
          .withMessage('Password is required')
          .isLength({ min: 6 })
          .withMessage('Password must be at least 6 characters long')
          .trim(),
      ];
    }
    case 'signup': {
      return [
        body('email')
          .not()
          .isEmpty()
          .withMessage('E-mail is required')
          .isEmail()
          .withMessage('Insert a valid e-mail')
          .normalizeEmail(),
        body('password')
          .not()
          .isEmpty()
          .withMessage('Password is required')
          .isLength({ min: 6 })
          .withMessage('Password must be at least 6 characters long')
          .trim(),
        body('confirmPassword')
          .custom((value, { req }) => value === req.body.password)
          .withMessage('Passwords do not correspond')
          .trim(),
      ];
    }
    case 'createCategory': {
      return [body('name', 'Name is required').not().isEmpty().trim()];
    }
    case 'createResource': {
      return [
        body('name', 'Name is required').not().isEmpty().trim(),
        body('author', 'Author is required').not().isEmpty().trim(),
        body('duration')
          .not()
          .isEmpty()
          .withMessage('Duration is required')
          .custom((value) => {
            return new RegExp(/^[0-2][0-9]:[0-5][0-9]$/, 'g').test(value);
          })
          .withMessage('Insert a valid duration')
          .trim(),
        body('link', 'Insert a valid URL').optional().isURL().trim(),
      ];
    }
  }
};

module.exports = { validate };
