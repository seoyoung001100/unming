import { createRouter, createWebHistory } from "vue-router";
import ProfileView from "@/views/ProfileView.vue";
import MainView from "@/views/MainView.vue"

const routes = [
    {
        path: '/',
        component: MainView,
    },
    {
        path: '/profile',
        component: ProfileView,
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;