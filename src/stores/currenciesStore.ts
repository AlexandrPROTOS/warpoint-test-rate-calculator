import { fetchCurrency, UAN, KZT } from '@/api/currency';
import { defineStore } from 'pinia';
import { type Ref, ref } from 'vue';

type Currency = {
  name: string;
  value: number;
};

export const useCurrenciesStore = defineStore('currencysStore', () => {
  const currencies: Ref<Currency[]> = ref([{ name: 'RUB', value: 1 }]);
  const selectedCurrency = ref(currencies.value[0]);

  const selectCurrency = (currency: Currency): void => {
    selectedCurrency.value = currency;
  };

  const addCurrencyInState = async (): Promise<void> => {
    const { rates } = await fetchCurrency();
    currencies.value.push({ name: UAN, value: rates[UAN] });
    currencies.value.push({ name: KZT, value: rates[KZT] });
  };

  return {
    currencies,
    selectedCurrency,
    selectCurrency,
    addCurrencyInState
  };
});
