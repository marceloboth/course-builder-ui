import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/my courses');

test('Must allow user to create courses', function(assert) {
  visit('/courses');

  click('.create-course-btn');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
  });
});
