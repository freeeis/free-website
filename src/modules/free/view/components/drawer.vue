<template>
  <q-drawer :show-if-above="above" v-model="openDrawer" side="left" bordered>
    <q-list>
      <q-expansion-item
        v-for="(menu, idx) in menus" :key="idx"
        :icon="menu.icon"
        :label="$t(menu.label || '')"
        :caption="$t(menu.caption||'')"
        :default-opened="idx === 0"
        @click="menu.link && $router.push(menu.link)"
        >
        <q-item
          clickable
          v-for="(cmenu, cidx) in menu.children || []" :key="cidx"
          @click="cmenu.link && $router.push(cmenu.link)"
          class="q-ml-lg">
          {{$t(cmenu.label || '')}}
        </q-item>
        <!-- <div
          v-for="(cmenu, cidx) in menu.children || []" :key="cidx">
        <a
          :href="`fe#${cmenu.label || ''}`">{{cmenu.label}}</a>
          </div> -->
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
          label: 'FE',
          link: '/fe',
          icon: '',
          children: [
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
          ]
        },
        {
          label: 'BE',
          link: '/be'
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
