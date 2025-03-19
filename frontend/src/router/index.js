import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/test',
        name: 'Test',
        // Using the lazy loading pattern for the About page
        component: () => import('../views/Test.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export { router };