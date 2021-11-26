<template>
  <div v-html="html"></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HtmlContent',
  props: {
    html: String
  }
})
</script>
