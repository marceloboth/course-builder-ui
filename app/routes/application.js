import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service(),
  ajax: Ember.inject.service(),

  sessionAuthenticated() {
    this._super(...arguments);
    this.loadUser();
  },

  loadUser() {
    if (!this.get('session.isAuthenticated')) {
      return;
    }

    const request = this.get('ajax').request('session');

    request.then((userData) => {
      userData.data.type = 'users';
      this.store.pushPayload(userData);
      const user = this.store.peekRecord('user', userData.data.id);
      this.set('session.currentUser', user);
    });
  },

  beforeModel() {
    this.loadUser();
  }
});
