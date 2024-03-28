<template>
  <button
    :class="[
      'basic-button',
      { 'btn--active': activeClass },
      { 'block': block },
      colorClass,
      { 'btn--outline': outline },
      { 'round': round }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BasicButton',
  props: {
    activeClass: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: undefined,
      validator: function(value) {
        return ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary', 'septenary', 'octonary', 'nonary', 'denary'].includes(value);
      }
    },
    outline: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    colorClass() {
      if (this.color) {
        return `color-${this.color}`;
      }
      return '';
    }
  }
}
</script>

<style scoped lang="scss">

.basic-button {
  border:none;
  background-color: $color-button;
  color:#fff;

  &:disabled {opacity: 0.5;background: #ccc;color:#000;}

  &.block {width:100%;}
  &.btn--active {border:4px solid #000;}
  &.btn--outline {border:20px solid red;}
  &.color-primary {
    background-color: $color-button-primary;
  }
  &.color-secondary {
    background-color: $color-button-secondary;
  }
  &.color-tertiary {
    background-color: $color-button-tertiary;
  }
  &.color-quaternary {
    background-color: $color-button-quaternary;
  }
  &.color-quinary {
    background-color: $color-button-quinary;
  }
  &.color-senary {
    background-color: $color-button-senary;
  }
  &.color-septenary {
    background-color: $color-button-septenary;
  }
  &.color-octonary {
    background-color: $color-button-octonary;
  }
  &.color-nonary {
    background-color: $color-button-nonary;
  }
  &.color-denary {
    background-color: $color-button-denary;
  }
}


</style>