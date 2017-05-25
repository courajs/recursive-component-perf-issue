import Ember from 'ember';
import data from '../data';

const {
  Controller
} = Ember;

export default Controller.extend({
  data,

  renderMessage: Ember.computed('renderSpeed', function() {
    let speed = this.get('renderSpeed');
    if (speed) {
      return speed + 'ms';
    } else {
      return "(not yet rendered)";
    }
  })
});
