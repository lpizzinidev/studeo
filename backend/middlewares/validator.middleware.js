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
          .trim()
          .escape(),
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
          .trim()
          .escape(),
        body('confirmPassword')
          .not()
          .equals('password')
          .withMessage('Passwords do not correspond')
          .trim()
          .escape(),
      ];
    }
    case 'createCategory': {
      return [body('name', 'Name is required').not().isEmpty().trim().escape()];
    }
    case 'createResource': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('author').optional().trim().escape(),
        body('duration', 'Insert a valid duration')
          .optional()
          .isNumeric()
          .trim()
          .escape(),
        body('link', 'Insert a valid URL').optional().isURL().trim().escape(),
      ];
    }
  }
};

module.exports = { validate };
