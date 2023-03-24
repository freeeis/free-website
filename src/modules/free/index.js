import { h } from 'vue';
import drawer from './view/components/drawer.vue';


const feMenus = [

  {
    label: 'Introduction',
    icon: '',
    link: '/fe#Introduction',
  },
  {
    label: '安装运行',
    icon: '',
    link: '/fe#安装运行',
  },
  {
    label: 'c1',
    icon: '',
    link: '/fe#1',
  },
  {
    label: 'c1',
    icon: '',
    link: '/fe#1',
  }
];

const beMenus = [
  {
    label: 'BE',
    link: '/be'
  }
];

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
            // drawer: h(drawer, {
            //   menus: feMenus,
            // }),
            page: () => import('./view/guide')
          }
        },
        {
          path: 'be',
          components: {
            // drawer: h(drawer, {
            //   menus: beMenus,
            // }),
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
            // drawer: h(drawer, {
            //   menus: beMenus,
            // }),
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
