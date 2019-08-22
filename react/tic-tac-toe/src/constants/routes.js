import Game from '../app/screens/Game';
import Login from '../app/screens/Login';
import Matches from '../app/screens/Matches';

export const PATHS = {
  game: '/game',
  login: '/',
  matches: '/matches'
};

export const PRIVATE_ROUTES = [
  {
    component: Game,
    path: PATHS.game,
    private: true
  },
  {
    component: Matches,
    path: PATHS.matches,
    private: true
  }
];

export const PUBLIC_ROUTES = [
  {
    component: Login,
    path: PATHS.login
  }
];
