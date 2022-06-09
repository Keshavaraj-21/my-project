const { required } = require("joi");
const Joi = require("joi");

const billingformschema = Joi.object({
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
  maintainace: Joi.string().required(),
  housetax: Joi.string().required(),
  watertax: Joi.string().required(),
  parking: Joi.string().required(),
  charity: Joi.string().required(),
});

module.exports = { billingformschema };
