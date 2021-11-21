import Home from '../pages/Home';
import LaneInfo from '../pages/LaneInfo';
import NearBy from '../pages/NearBy';
import SearchMap from '../pages/SearchMap';

const routes = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/lane_info/:RouteName',
        exact: false,
        component: LaneInfo,
    },
    {
        path: '/search_map',
        exact: true,
        component: SearchMap,
    },
    {
        path: '/search_map/:city',
        exact: false,
        component: SearchMap,
    },
    {
        path: '/nearby',
        exact: false,
        component: NearBy,
    },
];

export default routes;