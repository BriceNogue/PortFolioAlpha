// Views...
import HomeView from '@/views/HomeView.vue';
import ProjectsView from '@/views/ProjectsView.vue';


// Layout...
import AboutLayout from '@/layouts/AboutLayout.vue';
import ProjectsLayout from '@/layouts/ProjectsLayout.vue';

const allRoutes = [{
    path: '/',
    name: 'about_me',
    component: HomeView,
    meta: { layout: AboutLayout }
}, {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: { layout: ProjectsLayout }
}];

export default allRoutes;