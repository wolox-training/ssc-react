import Game from '../app/screens/Game';
import Login from '../app/screens/Login';

export const PATHS = {
  game: '/game',
  login: '/'
};

export const ROUTES = [
  {
    component: Game,
    path: PATHS.game,
    private: true
  },

  {
    component: Login,
    path: PATHS.login,
    private: false
  }
];

