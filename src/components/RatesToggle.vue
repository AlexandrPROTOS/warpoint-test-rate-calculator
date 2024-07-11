<script setup lang="ts">
import { useRatesStore, type Rate } from '@/stores/ratesStore';
import { useCurrenciesStore } from '@/stores/currenciesStore';

const ratesStore = useRatesStore();
const currenciesStore = useCurrenciesStore();

const roundPrice = (price: number): string => {
  const ceiledPrice = Math.ceil(price * 100) / 100;
  return ceiledPrice.toFixed(2);
};

const getRatePrice = (rateVariant: number): string => {
  return roundPrice(rateVariant * currenciesStore.selectedCurrency.value);
};

const getYearlyBenefit = (rate: Rate): string => {
  const monthlyPrice = currenciesStore.selectedCurrency.value * rate.variants.month;
  const yearlyPrice = currenciesStore.selectedCurrency.value * rate.variants.year;
  return roundPrice(monthlyPrice * 12 - yearlyPrice);
};
</script>
<template>
  <ul class="rates">
    <li
      v-for="rate in ratesStore.rates"
      :key="rate.name"
      class="rates__item"
      :class="{ 'rates__item--active': ratesStore.selectedRate === rate }"
      @click="ratesStore.selectRate(rate)"
    >
      <p>Тариф: "{{ rate.name }}"</p>
      <p>
        Стоимость:
        {{ getRatePrice(rate.variants[ratesStore.selectedTerm.value]) }}
        {{ currenciesStore.selectedCurrency.name }}
      </p>
      <template v-if="ratesStore.selectedTerm.value === 'year'">
        <p>
          Цена за месяц: {{ roundPrice(rate.variants.year / 12) }}
          {{ currenciesStore.selectedCurrency.name }}
        </p>
        <p>
          Общая выгода: {{ getYearlyBenefit(rate) }} {{ currenciesStore.selectedCurrency.name }}
        </p>
      </template>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.rates {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 20px;

  &__item {
    width: 280px;
    padding: 32px 20px;
    text-align: left;
    color: #fff;
    cursor: pointer;
    background-color: rgb(228 225 225 / 0.2);
    border-radius: 24px;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: ease;

    &--active {
      background-color: rgb(57 112 246);
    }
  }

  @media (width <= 650px) {
    flex-direction: column;
    align-items: center;

    &__item {
      padding: 10px 20px;
      text-align: center;
    }
  }

  @media (width <= 425px) {
    &__item p {
      margin: 8px 0;
    }
  }
}
</style>
