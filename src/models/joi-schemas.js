import Joi from "joi";

export const IdSpec = Joi.alternatives().try(Joi.string(), Joi.object()).description("a valid ID");

export const UserCredentialsSpec = Joi.object()
  .keys({
    email: Joi.string().email().example("homer@simpson.com").required(),
    password: Joi.string().example("secret").required(),
  })
  .label("UserCredentials");

export const UserSpec = UserCredentialsSpec.keys({
  firstName: Joi.string().example("Homer").required(),
  lastName: Joi.string().example("Simpson").required(),
}).label("UserDetails");

export const UserSpecPlus = UserSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("UserDetailsPlus");

export const UserArray = Joi.array().items(UserSpecPlus).label("UserArray");

export const PointSpec = Joi.object()
  .keys({
    pointName: Joi.string().required().example("Naas Canal"),
    category: Joi.string().required().example("Nature"),
    latitude: Joi.string().required().example("12.00"),
    longitude: Joi.string().required().example("-12.00"),
    description: Joi.string().optional().example("Small Canal"),
    placemarkid: IdSpec,
  })
  .label("Point");

export const PointSpecPlus = PointSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PointPlus");

export const PointArraySpec = Joi.array().items(PointSpecPlus).label("PointArray");


export const PlacemarkSpec = Joi.object()
  .keys({
    placeMark: Joi.string().required().example("Dublin"),
    lat: Joi.string().required().example("12.00"),
    long: Joi.string().required().example("-12.00"),
    privacy: Joi.string().valid("public", "private").required(),
    userid: IdSpec,
    points: PointArraySpec,
  })
  .label("Placemarklist");


export const PlacemarkSpecPlus = PlacemarkSpec.keys({
  _id: IdSpec,
  __v: Joi.number(),
}).label("PlacemarkPlus");

export const PlacemarkArraySpec = Joi.array().items(PlacemarkSpecPlus).label("PlacemarkArray");

export const JwtAuth = Joi.object()
  .keys({
    success: Joi.boolean().example("true").required(),
    token: Joi.string().example("eyJhbGciOiJND.g5YmJisIjoiaGYwNTNjAOhE.gCWGmY5-YigQw0DCBo").required(),
  })
  .label("JwtAuth");
