import Ember from 'ember';
import CourseValidations from  '../../../../validations/course';

export default Ember.Controller.extend({
  CourseValidations,
  actions: {
    save(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then(() => {
            this.transitionToRoute('main.courses');
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
    }
  }
});
