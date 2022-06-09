const { required } = require("joi");
const Joi = require("joi");

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

module.exports = { feedbackformschema };
