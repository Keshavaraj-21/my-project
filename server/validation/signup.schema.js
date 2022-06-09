const { required } = require("joi");
const Joi = require("joi");

const userformschema = Joi.object({
  username: Joi.string()
    .regex(/[a-zA-Z]*/)
    .min(3)
    .required(),
  phone: Joi.string()
    .max(10)
    .regex(/[+0]{0,2}(91)?\d{10}/)
    .required(),
  email: Joi.string()
    .regex(/^[\w]*[\w\.]*(?!\.)@gmail.com/)
    .required(),
  blockname: Joi.string().min(3).required(),
  password: Joi.string()
    .regex(/[A-Za-z0-9@!_]{6,}/)
    .required(),
  confirmpassword: Joi.string()
    .regex(/[A-Za-z0-9@!_]{6,}/)
    .required(),
});

module.exports = { userformschema };
