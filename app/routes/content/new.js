import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    console.log(this.modelFor('chapters'));
    return this.store.createRecord('content', {
      chapter: this.modelFor('chapters/chapter')
    });
  }
});
