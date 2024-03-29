import { defineComponent, h, computed, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { marked } from 'marked';
import { Screen } from 'quasar';

import docs from '../docs';
import HtmlContent from '../view/components/htmlContent.vue';
import drawer from '../view/components/drawer.vue';

import './vue.css';
import './highlight.css';

export default defineComponent({
  name: "FreeWebsiteGuide",
  props: {
    target: {
      type: String,
      default: 'fe'
    }
  },
  setup(props) {
    const i18n = useI18n();

    // toc
    const toc = ref([]);

    const addToc = (text, level) => {
      toc.value.push({level, text});
    };

    const renderer = new marked.Renderer();
    renderer.heading = function(text, level, raw){
        addToc(text, level);
        return `<a id=${text} class="anchor-point"></a><h${level}>${text}</h${level}>\n`
    };

    const highlight = function(c){
      return require('highlight.js').highlightAuto(c).value;
    };

    marked.setOptions ({
      renderer,
      gfm: true ,
      tables: true ,
      breaks: false ,
      pedantic: false ,
      sanitize: false ,
      smartLists: true ,
      smartypants: false,
      highlight,
    });

    const preComponents = ref([]);
    const postComponents = ref([]);

    const docContent = computed(() => {
      let doc = docs[i18n.locale?.value];
      doc = doc && doc[props.target];

      return doc || '';
    });

    watchEffect(() => {
      const preComps = docContent.value.preComponents;

      if (typeof preComps === 'function') {
        preComponents.value = preComps();
      } else {
        preComponents.value = preComps || [];
      }


      const postComps = docContent.value.postComponents;

      if (typeof postComps === 'function') {
        postComponents.value = postComps();
      } else {
        postComponents.value = postComps || [];
      }
    })

    const htmlText = ref('');

    watchEffect(() => {
      toc.value = [];
      htmlText.value = marked(docContent.value.c || docContent.value);
    })

    const tocList = computed(() => {
      return toc.value;
    });

    return () =>
      h('div', {
        class: 'freeeis-docs theme-default-content full-width full-height q-pb-xl column',
      },
      [
        h('div', {
          class: 'row full-width full-height no-wrap col',
        },[
          Screen.width < 600 ? null : h(drawer, {
            menus: tocList.value,
            open: true,
          }),

          h('div', {
            class: 'full-width',
          },
          [
            ...preComponents.value,

            h(HtmlContent, {
              html: htmlText.value,
              class: 'col',
            }),

            ...postComponents.value,
          ]),
        ]),
        h('div', {
          class:"contribute-info q-pa-md q-ma-lg text-center",
          style: 'border: 1px solid #E1E1E1'
        }, [i18n.t('Contribute1'), h('a', {href: 'https://github.com/freeeis/free-website/issues'}, 'Github'), i18n.t('Contribute2')])
      ]
    )
  }
});
