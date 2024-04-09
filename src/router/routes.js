// Views...
import AboutView from '@/views/AboutView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import EducationView from '@/views/EducationView.vue';
import SkillsView from '@/views/SkillsView.vue';
import ExperiencesView from '@/views/ExperiencesView.vue';

// Layout...
import AboutLayout from '@/layouts/AboutLayout.vue';
import ProjectsLayout from '@/layouts/ProjectsLayout.vue';

const allRoutes = [{
        path: '/',
        name: 'about_me',
        component: AboutView,
        meta: { layout: AboutLayout }
    },
    {
        path: '/education',
        name: 'education',
        component: EducationView,
        meta: { layout: AboutLayout }
    },
    {
        path: '/skills',
        name: 'skills',
        component: SkillsView,
        meta: { layout: AboutLayout }
    },
    {
        path: '/experiences',
        name: 'experiences',
        component: ExperiencesView,
        meta: { layout: AboutLayout }
    },
    {
        path: '/projects',
        name: 'projects',
        component: ProjectsView,
        meta: { layout: ProjectsLayout }
    },
];

export default allRoutes;