import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),

  actions: {
    authenticate(username, password) {
      this.controller.set('isLoggingIn', true);
      this.get('session').authenticate('authenticator:oauth2', username, password)
        .catch(() => this.controller.set('errorMessage', "Wrong login or password"))
        .finally(() => this.controller.set('isLoggingIn', false));
    }
  }
});
