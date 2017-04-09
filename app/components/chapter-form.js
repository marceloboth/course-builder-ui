import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.attrs.save(this.set('changeset'));
    },
    rollback() {
      this.attrs.rollback(this.set('changeset'));
    }
  }
});
