<script setup lang="ts">
import SelectToggleItem from '@/components/SelectToggleItem.vue';
import SelectToggle from '@/components/SelectToggle.vue';
import { useCurrenciesStore } from '@/stores/currenciesStore';

const currenciesStore = useCurrenciesStore();
</script>

<template>
  <SelectToggle>
    <SelectToggleItem
      v-for="currency in currenciesStore.currencies"
      :key="currency.value"
      :label="currency.name"
      :active="currenciesStore.selectedCurrency.value === currency.value"
      @click="currenciesStore.selectCurrency(currency)"
    />
  </SelectToggle>
</template>
