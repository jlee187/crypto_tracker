import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateCrypto (crypto){
      return this.sendAction('updateCrypto', crypto)
    }
  }
});
