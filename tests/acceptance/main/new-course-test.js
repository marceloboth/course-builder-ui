import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/new course');

test('User must be allowe to create a new course by filling the form', function(assert) {
  visit('/courses/new');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
  });

  fillIn('.course-name-field', 'My awesome course');
  fillIn('.course-subtitle-field', 'My awesome course is really amazing');
  fillIn('.course-description-field', "<p>Let's put some html here</p>");
  fillIn('.course-price-field', 25.00);
  fillIn('.course-duration-field', 104.5);

  click('.btn-save-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses');
  });
});
