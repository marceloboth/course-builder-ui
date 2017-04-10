import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  order: DS.attr('number'),
  course: DS.belongsTo('course'),
  contents: DS.hasMany('contents')
});
