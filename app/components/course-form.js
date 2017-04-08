import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save() {
      this.attrs.save(this.get('changeset'));
    },
    reset() {
      this.attrs.rollback(this.get('changeset'));
    }
  }
});
