import { shape, string, number } from 'prop-types';

export const matchesPropsTypes = shape({
  id: number,
  createdAt: string,
  // eslint-disable-next-line camelcase
  player_one: string,
  // eslint-disable-next-line camelcase
  player_two: string,
  winner: string
});
