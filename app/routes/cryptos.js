import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return this.get('store').findAll('crypto');
  },
  actions: {
    createCrypto(crypto) {
      let newCrypto = this.get('store').createRecord('crypto', crypto);
      newCrypto.save()
      .then(() => this.transitionTo('cryptos'))
      .then(() => this.get('flashMessages').success('New Crypto Added!'))
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem. Please try again.');
      });
    },
      deleteCrypto(crypto) {
        crypto.destroyRecord()
        .then(() => this.transitionTo('cryptos'))
        .then(() => this.get('flashMessages').success('Crypto Deleted!'))
        .catch(() => {
          this.get('flashMessages')
          .danger('There was a problem. Please try again.');
        });
    },
      deleteCharts() {
        charts.destroyRecord()
      }
  }
});
