const routes = [

    {
        path: '/',
        // name: 'login',
        component: () => import('@/page/login/lgin.vue'),


    },
    {
        path: '/ce',
        // name: 'practice',
        component: () => import('../page/practice/ce.vue'),

    }, {
        path: '/ca',
        // name: 'page',
        component: () => import('../page/practice/ca.vue'),

    }]
export default routes