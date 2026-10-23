<script setup>
import BeerCard from './BeerCard.vue'

defineProps({
  beers: { type: Array, required: true },
  locale: { type: String, required: true }
})

defineEmits(['select'])
</script>

<template>
  <div class="beer-grid">
    <BeerCard
      v-for="(beer, index) in beers"
      :key="beer.id"
      :beer="beer"
      :index="index"
      :locale="locale"
      @select="$emit('select', $event)"
    />
  </div>
</template>

<style scoped>
.beer-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
@media (max-width: 1000px) {
  .beer-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 15px;
  }
}
@media (max-width: 720px) {
  .beer-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 13px;
  }
}
@media (max-width: 420px) {
  .beer-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }
}
</style>
