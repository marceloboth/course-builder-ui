import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  order: DS.attr('number'),
  course: DS.belongsTo('course')
});
