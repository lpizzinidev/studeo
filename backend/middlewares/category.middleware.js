const { body } = require('express-validator');

const validateCategory = (method) => {
  switch (method) {
    case 'createCategory': {
      return [
        body('name', 'Name is required').trim().not().isEmpty().escape(),
        body('description').optional().trim().isString().escape(),
      ];
    }
  }
};

module.exports = { validateCategory };
