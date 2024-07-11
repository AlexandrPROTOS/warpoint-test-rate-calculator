<template>
  <header class="page-header">
    <img
      alt="Warpoint Logo"
      class="page-header__logo"
      src="@/assets/Subtract_4.svg"
      width="125"
      height="125"
    />
    <p class="page-header__name">"Тарифный калькулятор"</p>
  </header>
</template>

<style scoped lang="scss">
.page-header {
  &__logo {
    display: block;
    width: 100%;
    max-width: 500px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 32px;
  }

  &__name {
    width: auto;
    margin: 0;
    padding-top: 7px;
    padding-bottom: 4px;
    font-size: 26px;
    font-style: italic;
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    background-color: #e23239;
  }

  @media (width <= 425px) {
    &__logo {
      padding: 0 15px;
    }

    &__name {
      margin-top: -10px;
      font-size: 20px;
    }
  }
}
</style>
