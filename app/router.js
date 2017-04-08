import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');

  this.route('main', { path: '/' }, function() {
    this.route('courses', function() {
      this.route('course', { path: ':course_id'}, function(){
        this.route('edit');
      });
      this.route('new');
    });
  });
});

export default Router;
