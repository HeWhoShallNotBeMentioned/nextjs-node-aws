const { check } = require('express-validator');

exports.userResgisterValidator = [
  check('name').not().isEmpty().withMessage('Name is required'),
  // .isLength({ max: 32, min: 6 })
  // .withMessage('Name is not the proper length')
  check('email').isEmail().withMessage('Must be a valid email address.'),
  check('password')
    .isLength({ min: 6, max: 32 })
    .withMessage('Password is not the proper length'),
];
