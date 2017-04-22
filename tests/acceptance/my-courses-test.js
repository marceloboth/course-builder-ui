import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

import {
  authenticateSession
} from 'course-builder-ui/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | main/my courses');

test('Must allow user to starting create courses', function(assert) {
  authenticateSession(this.application);
  visit('/courses');

  click('.btn-new-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
  });
});

test('Must list all courses created by the user', function(assert) {
  authenticateSession(this.application);
  let courses = server.createList('course', 10);

  visit('/courses');

  andThen(function() {
    assert.equal(currentURL(), '/courses');
    assert.equal(find('.course').length, 10);
    assert.equal(find('.course .course-name:first').text(), courses[0].name);
  });
});


test('User can edit course by click in update button', function(assert) {
  authenticateSession(this.application);
  let course = server.create('course');

  visit('/courses');

  andThen(function() {
    assert.equal(currentURL(), '/courses');
  });

  click('.btn-course-update');

  andThen(() => {
    assert.equal(currentURL(), `/courses/${course.id}/edit`);
  });
});

