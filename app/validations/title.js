import { validateLength } from 'ember-changeset-validations/validators';

export default {
  title: validateLength({max: 255})
};
