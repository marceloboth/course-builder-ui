import { Factory, faker, association } from 'ember-cli-mirage';

export default Factory.extend({
  title() { return faker.random.word(); },
  order() { return 1; },
  course: association()
});
