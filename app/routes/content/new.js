import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      content: this.store.createRecord('content', {
        chapter: this.modelFor('chapters/chapter')
      }),
      chapters: this.modelFor('course').get('chapters')
    });
  }
});
