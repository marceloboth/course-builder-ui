import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  name() { return faker.random.word(); },
  subtitle() { return faker.random.words(); },
  price() { return 234.99; },
  duration() { return 45.9; },
  description() { return "<p>Text</p>"; },
});
