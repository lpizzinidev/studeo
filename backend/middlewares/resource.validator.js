const { body } = require('express-validator');

const validateResource = (method) => {
  switch (method) {
    case 'createResource': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('link', 'URL is required').not().isEmpty().isURL().trim().escape(),
        body('description').optional().isString().trim().escape(),
      ];
    }
  }
};

module.exports = { validateResource };
