import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCrypto () {
      return this.sendAction('updateCrypto', this.get('crypto'));
    }
  }
});
