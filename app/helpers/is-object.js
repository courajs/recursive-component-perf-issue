import Ember from 'ember';
import _ from 'lodash';

export function isObject([value]) {
  return _.isObject(value) && !_.isArray(value);
}

export default Ember.Helper.helper(isObject);
