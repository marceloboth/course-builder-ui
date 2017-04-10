import { validateLength, validateNumber } from 'ember-changeset-validations/validators';

export default {
  title: validateLength({max: 255}),
  order: validateNumber({positive: true})
};
