import Ember from 'ember';
import CourseValidations from  '../../../validations/course';

export default Ember.Controller.extend({
  CourseValidations,
  actions: {
    save(changeset) {
      changeset.save().then(() => {
        this.transitionToRoute('main.courses');
      });
    }
  }
});
