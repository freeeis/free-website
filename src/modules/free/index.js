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
          path: 'intro',
          components: {
            // drawer: () => import('./view/components/drawer.vue'),
            page: () => import('./view/guide')
          },
          props: {
            page: {
              target: 'intro'
            }
          }
        },
        {
          path: 'fe',
          components: {
            // drawer: () => import('./view/components/drawer.vue'),
            page: () => import('./view/guide')
          }
        },
        {
          path: 'be',
          components: {
            // drawer: () => import('./view/components/drawer.vue'),
            page: () => import('./view/guide')
          },
          props: {
            page: {
              target: 'be'
            }
          }
        }
      ]
    }
  ]
}
