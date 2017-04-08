import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('logging in the course builder', function(assert) {
  visit('/login');

  fillIn('.username-field', 'username');
  fillIn('.password-field', 'password');

  click('.authenticate-button');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});
