<!-- Test.vue -->
<template>
  <div>
    <span>this is a Test component:</span>
    <span :style="{ color: config.color }">{{ config.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'magic-ui-test',

  props: {
    config: {
      type: Object,
      default: () => ({}),
    },
  },

  setup() {},
};
</script>