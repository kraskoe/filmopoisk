import {AppEndpoints} from '../../router/router.constants';
import {MonthString} from '../../api/api.constants';

export const navLinks = [
  {
    link: AppEndpoints.MOVIES,
    icon: 'home-icon',
    text: 'Home',
    size: 16
  },
  {
    link: AppEndpoints.TOP,
    icon: 'star-icon',
    text: 'Trends',
  },
  {
    link: AppEndpoints.PREMIERES,
    params: {
      year: (new Date()).getFullYear(),
      month: MonthString[(new Date()).getMonth()]
    },
    icon: 'hot-icon',
    text: 'Premieres',
  },
  {
    link: AppEndpoints.FAVOURITES,
    icon: 'favourites-icon',
    text: 'Favourites',
  },
]
