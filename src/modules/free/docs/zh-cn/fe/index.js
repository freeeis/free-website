import { h, ref } from 'vue';
import { QCarousel, QCarouselSlide, QImg, Screen } from 'quasar';

import intruduction from './1.intruduction.md';
import starterKit from './2.starterkit.md';
import makeModule from './3.module.md';
import integration from './4.integration.md';
import builtin from './5.builtin.md';
import others from './10.others.md';


const currentSlide = ref(1);

export default {
  c: `${intruduction}${starterKit}${makeModule}${integration}${builtin}`,

  preComponents: () => {
    console.log(Screen)
    const images = [
      1,2,3,4,5,6,7,8,9,10
    ].map((ii) => h(QCarouselSlide, {
      name: ii,
      style: 'height: 200px',
    }, () => [
      h('div', {
        class: 'row no-wrap items-center justify-center'
      }, [
        Screen.width < 630 ? null : h(QImg, {
          opacity: 0.6,
          height: '110px',
          width: '160px',
          src: `/images/${(ii - 1) || 10}.png`
        }),
        h(QImg, {
          class: 'q-mx-md',
          height: '140px',
          width: '190px',
          src: `/images/${ii}.png`
        }),
        Screen.width < 630 ? null : h(QImg, {
          opacity: 0.6,
          height: '110px',
          width: '160px',
          src: `/images/${(ii + 1) > 10 ? 1 : (ii + 1)}.png`,
        }),
      ]),
    ]));


    return [
      h('h1', {
        class: 'text-center q-mb-xl'
      }, ['FreeEIS 前端开发']),

      h('div', {
        class: 'row full-width items-center justify-center'
      }, [
        h(QCarousel, {
          class: 'q-mt-md',
          height: '200px',

          style: 'background: unset;max-width: 542px',

          'transition-prev': 'slide-right',
          'transition-next': 'slide-left',

          animated: true,
          infinite: true,
          swipeable: true,
          autoplay: 3500,

          modelValue: currentSlide.value,
          'onUpdate:model-value': (val) => {
            currentSlide.value = val;
          },
        },
        () => images,
        ),
      ])
    ]
  },
}
