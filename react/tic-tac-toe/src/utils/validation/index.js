export const validMail = value => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
export const minLength = value => value && value.length < 8 ? 'Password must be at least 8 characters long' : undefined;
export const required = value => value ? undefined : 'Value is required';
