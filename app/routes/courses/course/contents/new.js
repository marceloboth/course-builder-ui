import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('content', {
      course: this.modelFor('courses/course')
    });
  }
});
