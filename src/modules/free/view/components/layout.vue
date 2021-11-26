<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="bg-white text-primary">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="cursor-pointer" @click="$router.push('/')">
          <q-avatar>
            <img src="">
          </q-avatar>
          FreeEIS
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn :label="$t('Home')" flat dense to="/" class="q-mx-sm" icon="home"></q-btn>
        <q-btn :label="$t('Guide')" flat dense to="/guide" class="q-mx-sm" icon="article"></q-btn>
        <q-btn :label="$t('Api')" flat dense to="/interface" class="q-mx-sm" icon="api"></q-btn>

        <q-btn :label="$t('Locale')" flat dense class="q-mx-sm" icon="language">
          <q-menu>
            <q-list>
              <q-item clickable v-close-popup @click="localeChanged('zh-cn')">中文</q-item>
              <q-item clickable v-close-popup @click="localeChanged('en-us')">English</q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn label="" flat dense @click="toGithub" class="q-mx-sm"
          icon="fab fa-github"></q-btn>
      </q-toolbar>
    </q-header>

    <router-view name="drawer" :open="leftDrawerOpen" above />

    <q-page-container>
      <router-view name="page"/>
    </q-page-container>

  </q-layout>
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue';
import store from '@/store';

export default defineComponent({
  name: 'NormalLayout',
  setup () {
    const vm = getCurrentInstance();
    const leftDrawerOpen = ref(false);

    const localeChanged = (l) => {
      vm.proxy.$i18n.locale = l;
      store().commit('app/SET_LOCALE', l);
    }

    return {
      toGithub: () => {
        window.open('https://github.com/freeeis','_blank');
      },
      localeChanged,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
