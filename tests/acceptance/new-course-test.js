import { test } from 'qunit';

import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

import {
  authenticateSession
} from 'course-builder-ui/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | main/new course');

test('User must be allowed to create a new course by filling the form', function(assert) {
  authenticateSession(this.application);
  visit('/courses/new');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
  });

  fillIn('#name', 'My awesome course');
  fillIn('#subtitle', 'My awesome course is really amazing');
  fillIn('#description', "<p>Let's put some html here</p>");
  fillIn('#price', 25.00);
  fillIn('#duration', 104.5);

  click('.btn-save-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses');
  });
});

test('User must be noticed if the form input is blank', function(assert) {
  authenticateSession(this.application);
  visit('/courses/new');

  click('.btn-save-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
    assert.equal(find('.panel-nav').text().trim(), 'Fix the errors');
  });
});

test('User must be noticed if the form input contain fields that exceed the limit of characters', function(assert) {
  authenticateSession(this.application);
  visit('/courses/new');

  fillIn('#name', Array(257).join("a"));
  fillIn('#subtitle', Array(257).join("a"));
  fillIn('#price', 1000000.00);
  fillIn('#duration', 10000.0);
  click('.btn-save-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
    assert.equal(find('.panel-nav').text().trim(), 'Fix the errors');
    assert.equal(find('.name-error').text().trim(), 'Name is too long (maximum is 255 characters)');
    assert.equal(find('.subtitle-error').text().trim(), 'Subtitle is too long (maximum is 255 characters)');
    assert.equal(find('.price-error').text().trim(), 'Price must be less than or equal to 999999.99');
    assert.equal(find('.duration-error').text().trim(), 'Duration must be less than or equal to 9999.9');
  });
});
