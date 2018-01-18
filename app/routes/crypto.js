import Ember from 'ember';

export default Ember.Route.extend({
  classNameBindings: ['chartActive'],
  chartActive: true,
  model (params) {
    return this.get('store').findRecord('crypto', params.crypto_id);
  },

  actions:{
    toggleChart() {
      this.toggleProperty('chartActive');
    },
    updateCrypto (crypto) {
      crypto.save()
      .then(() => this.transitionTo('cryptos'))
      .then(() => this.get('flashMessages').success('Crypto Updated!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    }

  }
});
