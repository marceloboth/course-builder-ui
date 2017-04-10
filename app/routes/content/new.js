import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('content', {
      chapter: this.modelFor('chapters/chapter')
    });
  }
});
