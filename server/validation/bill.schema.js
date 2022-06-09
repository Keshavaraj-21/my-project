const { required } = require("joi");
const Joi = require("joi");

const billformschema = Joi.object({
  block: Joi.string().min(3).required(),
  maintainace: Joi.string().required(),
  housetax: Joi.string().required(),
  watertax: Joi.string().required(),
  parking: Joi.string().required(),
  charity: Joi.string().required(),
});

module.exports = { billformschema };
