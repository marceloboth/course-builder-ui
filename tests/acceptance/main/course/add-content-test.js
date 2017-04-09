import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add content');

test('visiting /courses/contents/new', function(assert) {
  let course = server.create('course');

  visit(`/courses/${course.id}/contents/new`);

  andThen(() => {
    assert.equal(currentURL(), `/courses/${course.id}/contents/new`);
  });

  fillIn('#content-title', 'Content one');

  click('.btn-save-content');

  andThen(() => {
    assert.equal(find('.content:first').text(), 'Content one');
  });
});