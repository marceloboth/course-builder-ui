import Ember from 'ember';
import ChapterValidations from  '../../../../../validations/chapter';

export default Ember.Controller.extend({
  ChapterValidations,
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
