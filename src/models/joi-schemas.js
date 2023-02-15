import Joi from "joi";

export const UserSpec = {
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const UserCredentialsSpec = {
  email: Joi.string().email().required(),
  password: Joi.string().required(),
};

export const PointSpec = {
  pointName: Joi.string().required(), // title to pointname
  category: Joi.string().required(),
  location: Joi.string().required(),
};

export const PlacemarkSpec = {
  placeMark: Joi.string().required(),
};
