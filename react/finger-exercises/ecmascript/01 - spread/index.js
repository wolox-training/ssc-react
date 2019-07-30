import isArray from './utils';

export function min(arg, ...argsep) {
  if (arg) {
    if (isArray(arg)) return Math.min(...arg);
    return Math.min(arg, ...argsep);
  }
  return undefined;
}

export function copy(arg) {
  if (isArray(arg)) {
    return [...arg];
  }
  const { a, b } = arg;
  return { a, b };
}

export function reverseMerge(arg, arg2) {
  return [...arg2, ...arg];
}

export function filterAttribs(arg) {
  const { a, b, ...rest } = arg;
  return rest;
}
