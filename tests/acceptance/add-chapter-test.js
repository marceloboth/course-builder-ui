import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add chapter');

test('visiting /courses/chapters/new', function(assert) {
  let course = server.create('course');

  visit(`/courses/${course.id}/chapters/new`);

  andThen(() => {
    assert.equal(currentURL(), `/courses/${course.id}/chapters/new`);
  });

  fillIn('#title', Array(257).join('e'));
  fillIn('#order', '');
  andThen(() => {
    assert.equal(find('.title-error').text().trim(), 'Title is too long (maximum is 255 characters)');
    assert.equal(find('.order-error').text().trim(), 'Order must be a number');
  });

  fillIn('#title', 'Chapter one');
  fillIn('#order', '1');

  click('.btn-save-chapter');

  andThen(() => {
    assert.equal(find('.chapter:first').text(), 'Chapter one');
  });
});
