import { defineComponent, h } from 'vue';
import { useMeta} from 'quasar';

export default defineComponent({
  name: "FreeWebsite",
  setup() {
    useMeta({
      title: 'Free EIS - Build your enterprise information system freely.',
    });

    return () =>
      h('div', {
        class: 'absolute-center q-pb-xl'
      },
      [
        h('div', {
          class: 'text-center text-h2 text-grey'
        }, 'FREE EIS'),
        h('div', {
          class: 'text-center text-h6 text-grey-5'
        }, 'Build your enterprise information system freely!')
      ]
    )
  }
});
