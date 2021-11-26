export default {
  routers: [
    {
      path: '/',
      component: () => import('./view/components/layout.vue'),
      children: [
        {
          path: '',
          components: {
            page: () => import('./view/index.js')
          },
        },
        {
          path: 'guide',
          components: {
            drawer: () => import('./view/components/drawer.vue'),
            page: () => import('./view/guide')
          }
        },
        {
          path: 'interface',
          components: {
            drawer: () => import('./view/components/drawer.vue'),
            page: () => import('./view/guide')
          },
          props: {
            page: {
              target: 'api'
            }
          }
        }
      ]
    }
  ]
}
