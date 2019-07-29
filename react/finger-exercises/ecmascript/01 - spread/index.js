import isArray from './utils';

export function min(arg, ...argsep) {
  if (arg) {
    if (isArray(arg)) return Math.min(...arg);
    return Math.min(arg, ...argsep);
  }
  return undefined;
}

export function copy() {

}
