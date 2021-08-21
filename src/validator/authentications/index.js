const {
  PostAuthenticationPayloadSchema,
  PutAuthenticationPayloadSchema,
  DeleteAuthenticationPayloadSchema,
} = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const AuthenticationsValidator = {
  validatePostAuthenticationPayload: (payload) => {
    const validationResult = PostAuthenticationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutAuthenticationPayload: (payload) => {
    const valResult = PutAuthenticationPayloadSchema.validate(payload);

    if (valResult.error) {
      throw new InvariantError(valResult.error.message);
    }
  },
  validateDeleteAuthenticationPayload: (payload) => {
    const valResult = DeleteAuthenticationPayloadSchema.validate(payload);

    if (valResult.error) {
      throw new InvariantError(valResult.error.message);
    }
  },
};

module.exports = AuthenticationsValidator;
