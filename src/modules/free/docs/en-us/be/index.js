import { h } from 'vue';

import intruduction from './1.intruduction.md';
import starterKit from './2.starterkit.md';
import makeModule from './3.module.md';
import integration from './4.integration.md';
import builtin from './5.builtin.md';
import others from './10.others.md';

export default {
  c: `${intruduction}${starterKit}${makeModule}${integration}${builtin}${others}`,
  preComponents: [
    h('h1', {
      class: 'text-center q-mb-xl'
    }, ['FreeEIS 后端开发']),

    h('p', {
      align: 'center',
    }, [
      h('img', {
        src: 'https://user-images.githubusercontent.com/33030594/227073920-03ed137f-c4f7-4ed7-ae05-d781dd1991f7.png',
        alt: 'FreeEIS',
        width: '250'
      })
    ])
  ],
};
