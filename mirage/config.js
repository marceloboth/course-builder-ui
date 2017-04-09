export default function() {
  this.namespace = 'api/v1';

  this.resource('courses');
  this.resource('chapters');
  this.resource('contents');
}
