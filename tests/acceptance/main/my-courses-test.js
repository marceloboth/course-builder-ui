import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | main/my courses');

test('Must allow user to starting create courses', function(assert) {
  visit('/courses');

  click('.btn-new-course');

  andThen(function() {
    assert.equal(currentURL(), '/courses/new');
  });
});
