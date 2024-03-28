<script setup>
import BasicButton from '@components/atom/button/BasicButton.vue';

import { ref } from 'vue';

const isShown = ref(false); 

function toggle() {
  isShown.value = !isShown.value;
}
</script>

<template>
  <BasicButton>Basic</BasicButton>
  <BasicButton activeClass>activeClass</BasicButton>
  <BasicButton outline>outline</BasicButton>
  <BasicButton block>block</BasicButton>
  <BasicButton color="primary">primary</BasicButton>
  <BasicButton color="secondary">secondary</BasicButton>
  <BasicButton color="tertiary">tertiary</BasicButton>
  <BasicButton color="quaternary">quaternary</BasicButton>
  <BasicButton color="quinary">quinary</BasicButton>
  <BasicButton disabled>disabled</BasicButton>
  <BasicButton activeClass outline block @click="toggle">
    total toggle
    <span v-if="isShown" class="aa">추가</span>
  </BasicButton>

</template>
