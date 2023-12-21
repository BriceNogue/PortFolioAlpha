import { createRouter, createWebHistory } from 'vue-router'

import AllRoutes from './routes'

const routes = [
    ...AllRoutes,
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes
})

export default router