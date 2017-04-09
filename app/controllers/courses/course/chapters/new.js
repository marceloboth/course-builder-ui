import Ember from 'ember';
import TitleValidations from  '../../../../validations/title';

export default Ember.Controller.extend({
  TitleValidations,
  actions: {
    save(changeset) {
      changeset.validate().then(() => {
        if (changeset.get('isValid')) {
          changeset.save().then(() => {
            this.transitionToRoute('courses');
          });
        }
      });
    },

    rollback(changeset) {
      changeset.rollback();
    }
  }
});
