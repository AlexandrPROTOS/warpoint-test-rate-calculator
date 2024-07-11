<script setup lang="ts">
import SelectToggleItem from '@/components/SelectToggleItem.vue';
import SelectToggle from '@/components/SelectToggle.vue';
import { useRatesStore } from '@/stores/ratesStore';

const ratesStore = useRatesStore();
</script>

<template>
  <SelectToggle>
    <SelectToggleItem
      v-for="term in ratesStore.terms"
      :key="term.value"
      :label="`Тариф на ${term.label}`"
      :active="ratesStore.selectedTerm.value === term.value"
      @click="ratesStore.selectTerm(term)"
    />
  </SelectToggle>
</template>
