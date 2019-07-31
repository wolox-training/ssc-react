import isArray from './utils';

export function min(...values) {
  if (values.length) return isArray(values[0]) ? Math.min(...values[0]) : Math.min(...values);
  return undefined;
}

export function copy(values) {
  if (isArray(values)) return [...values];
  return { ...values };
}

export function reverseMerge(val, val2) {
  return [...val2, ...val];
}

export function filterAttribs({ a, b, ...rest }) {
  return rest;
}
