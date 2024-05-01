import { createWebHistory, createRouter} from 'vue-router';
import main from '../views/main.vue';
import cities from '../views/cities.vue';
import offers from '../views/offers.vue';

const routes = [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/cities',
        name: 'cities',
        component: cities
    },
    {
        path: '/offers',
        name: 'offers',
        component: offers
    }
];

const router = createRouter({
	history : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
          return { top: 0 }
        }
    },
});

export default router;