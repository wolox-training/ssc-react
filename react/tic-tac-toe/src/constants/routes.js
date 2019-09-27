import Game from '../app/screens/Game';
import Login from '../app/screens/Login';
import Matches from '../app/screens/Matches';

export const PATHS = {
  game: '/game',
  login: '/',
  matches: '/matches'
};

export const ROUTES = [
  {
    component: Game,
    path: PATHS.game,
    private: true
  },
  {
    component: Matches,
    path: PATHS.matches,
    private: true
  },
  {
    component: Login,
    path: PATHS.login,
    exact: true
  }
];
