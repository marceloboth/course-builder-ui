import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      content: this.store.findRecord('content', params.content_id, {
        chapter: this.modelFor('chapters/chapter')
      }),
      chapters: this.modelFor('course').get('chapters')
    });
  },

  setupController(controller, model) {
    controller.set('content', model.content);
    controller.set('chapters', model.chapters);
  }
});
