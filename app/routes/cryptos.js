import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('crypto');
  },
  actions: {
    createCrypto(crypto) {
      let newCrypto = this.get('store').createRecord('crypto', crypto);
      newCrypto.save();
    },
      deleteCrypto(crypto) {
        crypto.destroyRecord();
    }
  }
});
