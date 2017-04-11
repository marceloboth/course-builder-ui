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

  fillIn('#content-title', Array(257).join('e'));
  fillIn('#content-order', '');
  andThen(() => {
    assert.equal(find('.content-title-error').text().trim(), 'Title is too long (maximum is 255 characters)');
    assert.equal(find('.content-order-error').text().trim(), 'Order must be a number');
  });

  fillIn('#content-title', 'Content one');
  fillIn('#content-order', '1');

  click('.btn-save-content');

  andThen(() => {
    assert.equal(currentURL(), `/courses/${chapter.course.id}/chapters`);
    assert.equal(find('.content:first').text(), 'Content one');
  });
});
