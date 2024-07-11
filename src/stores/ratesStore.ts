import { defineStore } from 'pinia';
import { ref } from 'vue';

type Term = {
  label: string;
  value: 'month' | 'year';
};

type Variants = {
  month: number;
  year: number;
};

export type Rate = {
  name: string;
  variants: Variants;
};

export const useRatesStore = defineStore('ratesStore', () => {
  const terms: Term[] = [
    {
      label: 'месяц',
      value: 'month'
    },
    {
      label: 'год',
      value: 'year'
    }
  ];

  const selectedTerm = ref<Term>(terms[0]);

  const selectTerm = (term: Term): void => {
    selectedTerm.value = term;
  };

  const rates: Rate[] = [
    {
      name: 'Cтандартный',
      variants: {
        month: 100,
        year: 1000
      }
    },
    {
      name: 'Продвинутый',
      variants: {
        month: 150,
        year: 1400
      }
    }
  ];

  const selectedRate = ref<Rate>(rates[0]);

  const selectRate = (rate: Rate): void => {
    selectedRate.value = rate;
  };

  return {
    terms,
    selectedTerm,
    selectTerm,
    rates,
    selectedRate,
    selectRate
  };
});
