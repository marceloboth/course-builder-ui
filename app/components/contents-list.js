import Ember from 'ember';

export default Ember.Component.extend({
  sortContentsByOrder: Ember.computed.sort('contents', 'sortProps'),
  sortProps: ['order']
});
