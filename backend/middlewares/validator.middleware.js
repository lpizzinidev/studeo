const { body } = require('express-validator');

const validate = (method) => {
  switch (method) {
    case 'createCategory': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('description').optional().isString().trim().escape(),
      ];
    }
    case 'createResource': {
      return [
        body('name', 'Name is required').not().isEmpty().trim().escape(),
        body('link', 'URL is required').not().isEmpty().isURL().trim().escape(),
        body('description').optional().isString().trim().escape(),
      ];
    }
  }
};

module.exports = { validate };
