import Game from '../app/screens/Game';
import Login from '../app/screens/Login';

export const routes = {
  game: {
    component: Game,
    path: '/'
  },

  login: {
    component: Login,
    path: '/game'
  }
};

