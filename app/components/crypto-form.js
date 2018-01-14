import Ember from 'ember';

export default Ember.Component.extend({
  newCrypto: {
    name: null,
    quantity: null
  },
  actions: {
    createCrypto () {
      this.sendAction('createCrypto', this.get('newCrypto'));
      this.set('newCrypto.name', null);
      this.set('newCrypto.quantity', null);
    }
  }
});
