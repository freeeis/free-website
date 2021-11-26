import { defineComponent, h, computed } from 'vue';
import { useMeta } from 'quasar';
import { marked } from 'marked';

import { Quasar } from 'quasar';
import store from '@/store';

import docs from '../docs';
import HtmlContent from '../view/components/htmlContent.vue';

import './vue.css';

// const tocObj = {
//   add: function(text, level) {
//     var anchor = `#toc${level}${++this.index}`;
//     this.toc.push({anchor, level, text});
//     return anchor;
//   },
//   toHTML: function(){
//     let levelStack = [];
//     let result = '';
//     const addStartUL = () => { result += '<ul>'; };
//     const addEndUL = () => { result += '</ul>\n'; };
//     const addLI = (anchor, text) => { result += '<li><a href="#' + anchor + '">' + text + '<a></li>\n'; };

//     this.toc.forEach(function(item){
//       let levelIndex = levelStack.indexOf(item.level);
//       if(levelIndex === -1) {
//         levelStack.unshift(item.level);
//         addStartUL();
//         addLI(item.anchor, item.text);
//       } else if (levelIndex === 0) {
//         addLI(item.anchor, item.text);
//       } else {
//         while(levelIndex --) {
//           levelStack.shift();
//           addEndUL();
//         }
//         addLI(item.anchor, item.text);
//       }
//     });

//     while(levelStack.length) {
//       levelStack.shift();
//       addEndUL();
//     }

//     this.toc = [];
//     this.index = 0;

//     return result;
//   },
//   toc: [],
//   index: 0,
// }

export default defineComponent({
  name: "FreeWebsiteGuide",
  props: {
    target: {
      type: String,
      default: 'fe'
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
      smartypants: false,
      // highlight: function(code){
      //   return require('highlight.js').highlightAuto(code).value;
      // },
      heading: function(text, level, raw){
        // const anchor = tocObj.add(text, level);
        return `<a id=${anchor} class="anchor-fix"></a><h${level}>${text}</h${level}>\n`
      }
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
        }),
        h('div', {
          class:"contribute-info q-pa-md q-ma-lg text-center",
          style: 'border: 1px solid #E1E1E1'
        }, ['发现了错误或者想要为文档做贡献？ 请到 ', h('a', {href: 'https://github.com/freeeis/free-website/issues'}, 'Github'), ' 告诉我们。 '])
      ]
    )
  }
});
