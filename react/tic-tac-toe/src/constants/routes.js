import Game from '../app/screens/Game';
import Login from '../app/screens/Login';

export const ROUTES = [
  {
    component: Game,
    path: '/game',
    private: true
  },

  {
    component: Login,
    path: '/',
    private: false
  }
];

