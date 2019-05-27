import * as joi from "joi";

const validationSchema = joi.object().keys({
  profileName:      joi.string().trim().required(),
  region:           joi.string().trim().required(),
  secretAccessKey:  joi.string().trim().required(),
  accessKeyId:      joi.string().trim().required(),
  mfaSerial:        joi.string().trim().optional()
});

export function createProfileValidation(input) {
  return joi.validate(input, validationSchema, { abortEarly: false });
}
