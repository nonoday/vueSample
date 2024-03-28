<script>
import DefaultHeader from '@/layouts/DefaultHeader.vue';
import DefaultFooter from '@/layouts/DefaultFooter.vue';

export default {
  name: "DefaultLayout",
  components: {
    DefaultHeader,
    DefaultFooter,
  },
};
</script>

<template>
  <div class="layout">
    <div class="layout__head">
      <DefaultHeader />
    </div>
    <div class="layout__body">
      <slot />
    </div>
    <div class="layout__foot">
      <DefaultFooter />
    </div>
  </div>
</template>

