import Ember from 'ember';

const {
  Component
} = Ember;

export default Component.extend({
  willRender() {
    this.set('timerStart', new Date());
  },
  didRender() {
    this.get('onRender')(new Date() - this.get('timerStart'));
  }
});
