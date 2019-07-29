import isArray from './utils';

export function min(arg, ...arg2) {
  if (arg) {
    if (isArray(arg)) return Math.min(...arg);
    return Math.min(arg, ...arg2);
  }
  return undefined;
}

export function copy() {

}
