import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return this.get('store').findRecord('crypto', params.crypto_id)
  },
  actions:{
    updateCrypto (crypto) {
      crypto.save();
    }
  }
});