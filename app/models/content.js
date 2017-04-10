import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  order: DS.attr('number'),
  chapter: DS.belongsTo('chapter')
});
