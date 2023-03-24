import {
  defineComponent,
  h
} from 'vue';
import {
  useI18n
} from 'vue-i18n';

export default defineComponent({
  name: "FreeWebsite",
  setup() {
    const i18n = useI18n();

    return () =>
      h('div', {
          class: 'absolute-center q-pb-xl'
        },
        [
          h('p', {
            align: 'center',
          }, h('img', {
            src: "https://user-images.githubusercontent.com/33030594/227073920-03ed137f-c4f7-4ed7-ae05-d781dd1991f7.png",
            alt: "FreeEIS",
            width: "250",
          })),
          h('div', {
            class: 'text-center text-h2 text-grey'
          }, 'Free EIS'),
          h('div', {
            class: 'text-center text-h6 text-grey-5 q-mt-md'
          }, i18n.t('slogan'))
        ]
      )
  }
});
