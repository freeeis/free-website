export default {
  config: {
    dependencies: ['core-modules', 'themes'],
  },
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
            page: () => import('./view/guide')
          }
        },
        {
          path: 'be',
          components: {
            page: () => import('./view/guide')
          },
          props: {
            page: {
              target: 'be'
            }
          }
        },
        {
          path: 'integration',
          components: {
            page: () => import('./view/guide')
          },
          props: {
            page: {
              target: 'integration'
            }
          }
        }
      ]
    }
  ]
}
