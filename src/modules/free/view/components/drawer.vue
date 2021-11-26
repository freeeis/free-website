<template>
  <q-drawer :show-if-above="above" v-model="openDrawer" side="left" bordered>
    <q-list>
      <q-expansion-item
        v-for="(menu, idx) in menus" :key="idx"
        :icon="menu.icon"
        :label="menu.label"
        :caption="menu.caption"
        :default-opened="idx === 0"
        @click="menu.link && $router.push(menu.link)"
        >
        <q-item
          clickable
          v-for="(cmenu, cidx) in menu.children || []" :key="cidx"
          @click="cmenu.link && $router.push(cmenu.link)"
          class="q-ml-lg">
          {{$t(cmenu.label)}}
        </q-item>
      </q-expansion-item>
    </q-list>
  </q-drawer>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'FreeWebSiteDrawer',
  props: {
    above: Boolean,
    open: Boolean,
  },
  data(){
    return {
      menus: [
        {
          label: 'Guide',
          link: '/guide',
          icon: '',
          children: [
            {
              label: 'c1',
              icon: '',
              link: '/guide#1',
            },
            {
              label: 'c1',
              icon: '',
              link: '/guide#1',
            },
            {
              label: 'c1',
              icon: '',
              link: '/guide#1',
            },
            {
              label: 'c1',
              icon: '',
              link: '/guide#1',
            }
          ]
        },
        {
          label: 'Api',
          link: '/interface'
        }
      ]
    }
  },
  setup(props) {
    const openDrawer = ref(props.open);

    watch(() => props.open, (v) => {
      openDrawer.value = v;
    })

    return {
      openDrawer
    }
  }
})
</script>
