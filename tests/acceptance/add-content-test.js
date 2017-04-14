import { test } from 'qunit';
import moduleForAcceptance from 'course-builder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | add content');

test('User should can create a new content for the chapter', function(assert) {
  let chapter = server.create('chapter');
  const new_content_path = `/courses/${chapter.course.id}/chapters/${chapter.id}/content/new`;

  visit(new_content_path);

  andThen(() => {
    assert.equal(currentURL(), new_content_path);
  });

  fillIn('#title', Array(257).join('e'));
  fillIn('#order', '');
  andThen(() => {
    assert.equal(find('.title-error').text().trim(), 'Title is too long (maximum is 255 characters)');
    assert.equal(find('.order-error').text().trim(), 'Order must be a number');
  });

  fillIn('#title', 'Content one');
  fillIn('#order', '1');

  click('.btn-save-content');

  andThen(() => {
    assert.equal(currentURL(), `/courses/${chapter.course.id}/chapters`);
    assert.equal(find('.content:first').text(), 'Content one');
  });
});
