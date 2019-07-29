import isArray from './utils';

export function min(arg, ...arg2) {
  if (isArray(arg)) return Math.min(...arg);
  return Math.min(arg, ...arg2);
}

export function copy() {

}
