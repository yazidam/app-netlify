const { check, validationResult } = require("express-validator");

exports.userValidator = [
  check("name").trim().notEmpty().withMessage("name is missing"),
  check("email").normalizeEmail().isEmail().withMessage("email is not valide"),
  check("phone")
    .trim()
    .not()
    .isEmpty()
    .withMessage("phone is missing")
    .isLength({ min: 8, max: 8 })
    .withMessage("phone must be 8 characters long"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();
  if (error.length) res.json({ error: error[0].msg });
  next();
};
