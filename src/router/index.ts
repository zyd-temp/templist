import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/layout',
        name: 'layout',
        component: () => import('@/layout/index.vue'),
        children: [
            { path: '/', component: () => import('@/views/home.vue') },
        ]
    }
]

const router = createRouter({history: createWebHashHistory(), routes})

export default router