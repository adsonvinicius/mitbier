<script setup>
import { Beer, Search } from 'lucide-vue-next'
defineProps({ t: { type: Object, required: true } })
defineEmits(['clear'])
</script>

<template>
  <div class="empty-state">
    <span class="empty-icon"><Beer :size="28" /></span>
    <h3>{{ t.noResultsTitle }}</h3>
    <p>{{ t.noResultsDescription }}</p>
    <button type="button" class="clear-button" @click="$emit('clear')"><Search :size="15" />{{ t.clearFilters }}</button>
  </div>
</template>

<style scoped>
.empty-state {
  min-height: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 35px 20px;
  border: 1px dashed var(--border);
  border-radius: 16px;
  text-align: center;
}
.empty-icon {
  width: 55px;
  height: 55px;
  display: grid;
  place-items: center;
  border: 1px solid var(--accent-border);
  border-radius: 17px;
  color: var(--accent);
  background: var(--surface);
}
h3 {
  margin: 18px 0 7px;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: 23px;
  font-weight: 600;
}
p {
  margin: 0;
  color: var(--text-soft);
  font-size: 12px;
  line-height: 1.7;
}
.clear-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding: 10px 13px;
  border: 1px solid var(--border);
  border-radius: 9px;
  color: var(--text-main);
  background: var(--surface);
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}
.clear-button:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}
</style>
