import { createRouter, createWebHistory } from "vue-router";
import DetailedProfileView from "@/views/DetailedProfileView.vue";
import ProfileCardView from "@/views/ProfileCardView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MainView from "@/views/MainView.vue"
import TimeLineView from "@/views/TimeLineView.vue"

const routes = [
    {
        path: '/',
        component: MainView,
    },
    {
        path: '/profile',
        component: ProfileView, //하위 컴포넌트를 보여주기 위한 공간
        children:[
            {
                path: '', //기본으로 설정할 이미지를 말한다
                component: ProfileCardView, //프로필 카드
            },
            {
                path: 'ProfileView',
                component: DetailedProfileView, //프로필 세부 내용
            },
        ],
    },
    // {
    //     path: '/ProfileView',
    //     component: ProfileView,
    // },
    {
        path: '/TimeLine',
        component: TimeLineView,
    },
];

const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;