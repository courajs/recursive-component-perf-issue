import Ember from 'ember';

function _isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

export function isObject([value]) {
  return _isObject(value) && !Array.isArray(value);
}

export default Ember.Helper.helper(isObject);
