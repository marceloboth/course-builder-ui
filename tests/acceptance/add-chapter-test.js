import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add chapter');

test('visiting /courses/chapters/new', function(assert) {
  let course = server.create('course');

  visit(`/courses/${course.id}/chapters/new`);

  andThen(() => {
    assert.equal(currentURL(), `/courses/${course.id}/chapters/new`);
  });

  fillIn('#chapter-title', Array(257).join('e'));
  andThen(() => {
    assert.equal(find('.chapter-title-error').text().trim(), 'Title is too long (maximum is 255 characters)');
  });

  fillIn('#chapter-title', 'Chapter one');

  click('.btn-save-chapter');

  andThen(() => {
    assert.equal(find('.total-of-chapters').text(), 'Number of chapters: 1');
  });
});
