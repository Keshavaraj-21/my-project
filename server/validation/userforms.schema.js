const Joi = require("joi");

const userformschema = Joi.object({
  // username: Joi.string()
  //   .regex(/[a-zA-Z]*/)
  //   .min(3)
  //   .required(),
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

const billformschema = Joi.object({
  block: Joi.string().required(),
  maintainace: Joi.string().required(),
  housetax: Joi.string().required(),
  watertax: Joi.string().required(),
  parking: Joi.string().required(),
  charity: Joi.string().required(),
});

const feedbackformschema = Joi.object({
  name: Joi.string()
    .regex(/[a-zA-Z]*/)
    .min(3)
    .required(),
  email: Joi.string()
    .regex(/^[\w]*[\w\.]*(?!\.)@gmail.com/)
    .required(),
  blockname: Joi.string().min(3).required(),
  category: Joi.string().min(3).required(),
  msg: Joi.string().min(5).required(),
});

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

module.exports = {
  userformschema,
  billformschema,
  feedbackformschema,
  billingformschema,
};
