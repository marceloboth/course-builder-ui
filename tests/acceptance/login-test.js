import {
  test
} from 'qunit';

import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';
import Ember from 'ember';

import {
  currentSession,
  invalidateSession,
  authenticateSession
} from 'course-builder-ui/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | login');

test('visiting /login', function(assert) {
  visit('/login');
  andThen(() => {
    assert.equal(currentURL(), '/login');
  });
});

test('When user is unauthenticated should see authentication form', function(assert) {
  invalidateSession(this.application);
  visit('/');

  andThen(() => {
    const loginFormPresent = find('#login-form').length > 0 ? true : false;
    assert.equal(loginFormPresent, true);
  });
});

test('User must be able to authenticate by form', function(assert) {
  server.create('user', 1);

  invalidateSession(this.application);
  visit('/');

  fillIn('#username', 'admin');
  fillIn('#password', 'admin');
  click('.btn-login');

  andThen(() => {
    const session = currentSession(this.application);
    const isAuthenticated = Ember.get(session, 'isAuthenticated');

    assert.equal(isAuthenticated, true);
  });
});

test('User must be noticed when authentication fail', function(assert) {
  server.create('user', 1);

  invalidateSession(this.application);
  visit('/');

  fillIn('#username', 'admin');
  fillIn('#password', 'wrongpass');
  click('.btn-login');

  andThen(() => {
    const session = currentSession(this.application);
    const isAuthenticated = Ember.get(session, 'isAuthenticated');

    assert.equal(isAuthenticated, false);

    const isShowingLoginFails = find('.login-err').length > 0 ? true : false;
    assert.equal(isShowingLoginFails, true);
  });
});

test('User must be able to ending the session', function(assert) {
  server.create('user', 1);

  authenticateSession(this.application);
  visit('/');
  click('.btn-logout');

  andThen(() => {
    const session = currentSession(this.application);
    const isAuthenticated = Ember.get(session, 'isAuthenticated');

    assert.equal(isAuthenticated,false);
  });
});

