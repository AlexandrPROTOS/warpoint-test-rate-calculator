<template>
  <div class="select-toggle">
    <div class="select-toggle__shadow">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.select-toggle {
  display: flex;
  justify-content: center;

  &__shadow {
    display: flex;
    align-items: center;
    padding: 8px;
    background: rgb(228 225 225 / 0.2);
    border-radius: 24px;
  }

  @media (width <= 425px) {
    &__shadow {
      padding: 6px;
    }
  }
}
</style>
