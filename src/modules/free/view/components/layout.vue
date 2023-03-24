<template>
  <q-layout view="hHh lpR fFf">
    <q-header reveal bordered class="">
      <q-toolbar>
        <q-toolbar-title class="cursor-pointer row items-center" @click="$router.push('/')">
          <q-avatar class="q-mr-sm">
            <img src="logo.png" style="border: 1px solid #0078DC30; border-radius: 50%;" >
          </q-avatar>
          FreeEIS
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn :label="$t('Home')" flat dense to="/" class="q-mx-sm" icon="home"></q-btn>
        <q-btn :label="$t('Introduction')" flat dense to="/intro" class="q-mx-sm" icon="preview"></q-btn>
        <q-btn :label="$t('FE')" flat dense to="/fe" class="q-mx-sm" icon="article"></q-btn>
        <q-btn :label="$t('BE')" flat dense to="/be" class="q-mx-sm" icon="api"></q-btn>

        <select-locales class="q-mx-sm"></select-locales>
        <theme-switch></theme-switch>

        <q-btn label="" flat dense @click="toGithub" class="q-mx-md"
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
import { defineComponent, ref, watch, computed } from 'vue';
import { useMeta } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: 'NormalLayout',
  setup () {
    const i18n = useI18n();
    const title = ref(i18n.t('websiteTitle'));
    const route = useRoute();

    useMeta(() => ({
      title: title.value
    }));

    watch(i18n.locale, () => {
      title.value = i18n.t('websiteTitle');
    });

    const leftDrawerOpen = ref(true);

    return {
      toGithub: () => {
        window.open('https://github.com/freeeis','_blank');
      },
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      showDrawerToggleBtn: computed(() => {
        return ['/fe','/be'].indexOf(route.fullPath) >= 0;
      })
    }
  }
})
</script>
