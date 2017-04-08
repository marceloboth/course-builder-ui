import { validateLength, validateNumber } from 'ember-changeset-validations/validators';

export default {
  name: validateLength({max: 255}),
  subtitle: validateLength({max: 255}),
  price: validateNumber({lte: 999999.99}),
  duration: validateNumber({lte: 9999.9})
};
