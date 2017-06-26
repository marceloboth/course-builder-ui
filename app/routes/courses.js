import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  model() {
    const user_id = 1
    return this.store.query('course', { filter: { user : user_id }} );
  }
});
