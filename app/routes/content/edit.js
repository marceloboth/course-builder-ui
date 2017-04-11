import Ember from 'ember';

export default Ember.Route.extend({
  model({ content_id }) {
    return Ember.RSVP.hash({
      content: this.store.findRecord('content', content_id, {
        chapter: this.modelFor('chapters/chapter')
      })
    });
  },

  setupController(controller, model) {
    controller.set('content', model.content);
  }
});
