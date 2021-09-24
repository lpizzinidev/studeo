const { body } = require('express-validator');

const validateCategory = (method) => {
  switch (method) {
    case 'createCategory': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('description').optional().isString().trim().escape(),
      ];
    }
  }
};

module.exports = { validateCategory };
