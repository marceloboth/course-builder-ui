import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('main', { path: '/' }, function() {
    this.route('courses', { resetNamespace: true }, function() {
      this.route('course', { path: ':course_id', resetNamespace: true }, function(){
        this.route('edit');

        this.route('chapters', { resetNamespace: true }, function() {
          this.route('new');

          this.route('chapter', { path: ':chapter_id' }, function() {
            this.route('edit');

            this.route('content', { resetNamespace: true }, function() {
              this.route('new');
              this.route('edit', { path: ':content_id/edit' });
            });
          });
        });
      });
      this.route('new');
    });
  });
});

export default Router;
