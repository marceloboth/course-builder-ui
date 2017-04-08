import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  subtitle: DS.attr(),
  description: DS.attr(),
  price: DS.attr('numeric'),
  duration: DS.attr('numeric')
});
