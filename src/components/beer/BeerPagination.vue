<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps({
  currentPage: { type: Number, required: true },
  totalPages: { type: Number, required: true },
  pageNumbers: { type: Array, required: true },
  t: { type: Object, required: true }
})

defineEmits(['change'])
</script>

<template>
  <nav class="pagination" :aria-label="t.paginationLabel">
    <button class="page-arrow" type="button" :disabled="currentPage === 1" :aria-label="t.previous" @click="$emit('change', currentPage - 1)"><ChevronLeft :size="17" /></button>
    <button
      v-for="page in pageNumbers"
      :key="page"
      type="button"
      class="page-number"
      :class="{ active: page === currentPage }"
      :aria-current="page === currentPage ? 'page' : undefined"
      :aria-label="`${t.page} ${page}`"
      @click="$emit('change', page)"
    >{{ page }}</button>
    <button class="page-arrow" type="button" :disabled="currentPage === totalPages" :aria-label="t.next" @click="$emit('change', currentPage + 1)"><ChevronRight :size="17" /></button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}
.page-arrow, .page-number {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-soft);
  background: var(--surface);
  font: inherit;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: border-color .2s ease, color .2s ease, background .2s ease;
}
.page-arrow:hover:not(:disabled), .page-number:hover {
  border-color: var(--accent-border);
  color: var(--accent);
}
.page-number.active {
  border-color: var(--accent);
  color: #152219;
  background: var(--accent);
}
.page-arrow:disabled {
  opacity: .35;
  cursor: not-allowed;
}
@media (max-width: 420px) {
  .page-arrow, .page-number {
    width: 32px;
    height: 32px;
  }
  .pagination {
    gap: 4px;
  }
}
</style>
