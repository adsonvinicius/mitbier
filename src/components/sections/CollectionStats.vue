<script setup>
import { computed } from 'vue'
import { Beer, CalendarDays, Globe2, Star } from 'lucide-vue-next'

const props = defineProps({
  t: { type: Object, required: true },
  total: { type: Number, required: true },
  countryCount: { type: Number, required: true },
  beers: { type: Array, required: true }
})

const averageRating = computed(() => {
  const ratings = props.beers.map(beer => beer.rating).filter(rating => typeof rating === 'number')
  return ratings.length
    ? (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1)
    : '—'
})

const ratedCount = computed(() => props.beers.filter(beer => typeof beer.rating === 'number').length)
</script>

<template>
  <section class="collection-stats" :aria-label="t.collectionEyebrow">
    <div class="stat-item">
      <span class="stat-icon"><Beer :size="19" /></span>
      <div><strong>{{ total }}</strong><span>{{ t.statPosts }}</span></div>
    </div>
    <div class="stat-item">
      <span class="stat-icon"><Globe2 :size="19" /></span>
      <div><strong>{{ countryCount }}</strong><span>{{ t.statCountries }}</span></div>
    </div>
    <div class="stat-item">
      <span class="stat-icon"><Star :size="19" /></span>
      <div><strong>{{ averageRating }}<small>/10</small></strong><span>{{ t.statAverage }}</span></div>
    </div>
    <div class="stat-item">
      <span class="stat-icon"><CalendarDays :size="19" /></span>
      <div><strong>{{ ratedCount }}</strong><span>{{ t.statRated }}</span></div>
    </div>
  </section>
</template>

<style scoped>
.collection-stats {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--surface);
}
.stat-item {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 23px clamp(12px, 2.5vw, 27px);
}
.stat-item + .stat-item {
  border-left: 1px solid var(--border);
}
.stat-icon {
  width: 39px;
  height: 39px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid var(--accent-border);
  border-radius: 12px;
  color: var(--accent);
  background: var(--surface-raised);
}
.stat-item div {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.stat-item strong {
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: 25px;
  font-weight: 600;
  line-height: 1;
}
.stat-item strong small {
  color: var(--text-muted);
  font-family: var(--font-body);
  font-size: 11px;
}
.stat-item div > span {
  overflow: hidden;
  color: var(--text-muted);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .09em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media (max-width: 800px) {
  .collection-stats {
    width: calc(100% - 32px);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .stat-item:nth-child(3) {
    border-left: 0;
    border-top: 1px solid var(--border);
  }
  .stat-item:nth-child(4) {
    border-top: 1px solid var(--border);
  }
}
@media (max-width: 400px) {
  .stat-item {
    gap: 9px;
    padding: 17px 10px;
  }
  .stat-icon {
    width: 33px;
    height: 33px;
  }
  .stat-item strong {
    font-size: 22px;
  }
  .stat-item div > span {
    font-size: 7px;
  }
}
</style>
