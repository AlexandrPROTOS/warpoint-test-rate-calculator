<script setup lang="ts">
import PageHeader from '@/components/PageHeader.vue';
import TermsToggle from '@/components/TermsToggle.vue';
import CurrenciesToggle from '@/components/СurrenciesToggle.vue';
import RatesToggle from '@/components/RatesToggle.vue';
import { useCurrenciesStore } from '@/stores/currenciesStore';
import { ElButton } from 'element-plus';
import { simulateOrder } from '@/helpers/order';

const { addCurrencyInState } = useCurrenciesStore();
addCurrencyInState();
</script>

<template>
  <PageHeader />
  <main class="main">
    <CurrenciesToggle class="main__currencies-toggle" />
    <TermsToggle />
    <RatesToggle class="main__rates-list" />
    <div class="order">
      <ElButton type="primary" size="large" @click="simulateOrder">Оформить</ElButton>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  padding: 0 32px 16px;

  &__currencies-toggle {
    margin: 20px 0;
  }

  &__rates-list {
    margin: 20px 0;
  }

  @media (width <= 425px) {
    padding: 0 16px 16px;

    &__currencies-toggle {
      margin: 10px 0;
    }

    &__rates-list {
      margin-top: 10px;
    }
  }
}

.order {
  display: flex;
  justify-content: center;
}
</style>
