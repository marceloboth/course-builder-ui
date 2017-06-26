import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  subtitle: DS.attr(),
  description: DS.attr(),
  price: DS.attr('number'),
  duration: DS.attr('number'),
  user: DS.belongsTo('user'),
  chapters: DS.hasMany('chapters')
});
