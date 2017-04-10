import { test } from 'qunit';

import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | edit course');

test('Upon course creation users should be allowed to edit any of its fields', function(assert) {
  let course = server.create('course');

  visit(`/courses/${course.id}/edit`);

  andThen(function() {
    assert.equal(currentURL(), `/courses/${course.id}/edit`);
  });

  fillIn('#course-name', 'My awesome course');
  fillIn('#course-subtitle', 'My awesome course is really amazing');
  fillIn('#course-description', "<p>Let's put some html here</p>");
  fillIn('#course-price', 25.00);
  fillIn('#course-duration', 104.5);

  click('.btn-save-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses');
  });
});
