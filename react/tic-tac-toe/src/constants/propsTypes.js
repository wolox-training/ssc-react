import { shape, string, number } from 'prop-types';

export const matchesPropsTypes = shape({
  id: number,
  createdAt: string,
  playerOne: string,
  playerTwo: string,
  winner: string
});
