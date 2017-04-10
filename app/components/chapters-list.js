import Ember from 'ember';

export default Ember.Component.extend({
  sortChaptersByOrder: Ember.computed.sort('chapters', 'sortProps'),
  sortProps: ['order']
});
