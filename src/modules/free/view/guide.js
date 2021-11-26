import { defineComponent, h, computed } from 'vue';
import { useMeta } from 'quasar';
import { marked } from 'marked';

import { Quasar } from 'quasar';
import store from '@/store';

import docs from '../docs';
import HtmlContent from '../view/components/htmlContent.vue';

import './vue.css';

export default defineComponent({
  name: "FreeWebsiteGuide",
  props: {
    target: {
      type: String,
      default: 'guide'
    }
  },
  setup(props) {
    marked.setOptions ({
      renderer: new marked.Renderer(),
      gfm: true ,
      tables: true ,
      breaks: false ,
      pedantic: false ,
      sanitize: false ,
      smartLists: true ,
      smartypants: false
      });

    useMeta({
      title: 'Free EIS - Build your enterprise information system freely.',
    });

    const locale = computed(() => store().getters['app/getLocale'] || Quasar.lang.getLocale().toLowerCase() || 'zh-cn');

    return () =>
      h('div', {
        class: 'freeeis-docs theme-default-content full-width full-height q-pb-xl',
      },
      [
        h(HtmlContent, {
          html: marked(docs[locale.value][props.target])
        })
      ]
    )
  }
});
