<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    required: true
  }
});
</script>

<template>
  <div class="select-toggle" :class="{ 'select-toggle--active': active }">
    <span class="select-toggle__text">{{ label }}</span>
  </div>
</template>

<style lang="scss" scoped>
.select-toggle {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 4px 12px;
  font: 700 14px / 1.2;
  text-align: center;
  text-shadow: 0 2px 5px transparent;
  color: white;
  cursor: pointer;
  background: 0 0;
  border-radius: 20px;
  transition-duration: 0.3s;
  transition-property: all;
  transition-timing-function: ease;
  column-gap: 8px;

  + .select-toggle {
    margin-left: 6px;
  }

  &--active {
    color: #fff;
    pointer-events: none;
    background: rgb(57 112 246);
  }

  @media (width <= 425px) {
    padding: 4px 9px;
  }
}
</style>
