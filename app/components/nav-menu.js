import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Component.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
