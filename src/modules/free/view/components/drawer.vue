<template>
  <q-drawer :show-if-above="above" v-model="openDrawer" side="left" bordered>
    <q-scroll-area class="full-height">
      <q-item
        clickable
        :class="`lv-${menu.level || 1} ${currentSelected === menu.text ? 'text-primary' : ''}`"
        v-for="(menu, idx) in menus" :key="idx"
        @click="toTitle(menu)"
        >
        {{ menu.text || '' }}
      </q-item>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'FreeWebSiteDrawer',
  props: {
    above: Boolean,
    open: Boolean,
    menus: Array,
  },
  data(){
    return {
    }
  },
  setup(props) {
    const openDrawer = ref(props.open);
    const currentSelected = ref(null);

    watch(() => props.open, (v) => {
      openDrawer.value = v;
    })

    return {
      openDrawer,
      currentSelected,
      toTitle: (m) => {
        if (m && m.text) {
          const el = document.getElementById(m.text);
          if (el) {
            window.scroll({
              top: el.offsetTop - (window.scrollY > el.offsetTop ? 60 : 0),
              left: 0,
              behavior: 'smooth'
            });

            currentSelected.value = m.text;
          }
        }
      },
    }
  }
})
</script>

<style lang="scss" scoped>
.lv-2 {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  padding-top: 16px;
}

.lv-3 {
  font-size: 13px;
  line-height: 13px;
  opacity: 0.8;
  padding-left: 32px;
}

.lv-4 {
  font-size: 13px;
  line-height: 13px;
  opacity: 0.8;
  padding-left: 48px;
}

.lv-5 {
  font-size: 13px;
  line-height: 13px;
  opacity: 0.8;
  padding-left: 64px;
}
</style>
