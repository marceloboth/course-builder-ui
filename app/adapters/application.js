import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  namespace: ENV.apiNamespace,

  ajax() {
    const session = this.get('session');

    if (new Date().getTime() > session.get('data.authenticated.expires_at')) {
      const authenticator = this.container.lookup(session.get('data.authenticated.authenticator'));
      return authenticator._refreshAccessToken().then(() => {
        return this._super(...arguments);
      });
    } else {
      return this._super(...arguments);
    }
  }
});
