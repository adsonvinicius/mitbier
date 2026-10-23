<script setup>
import { Beer, CalendarDays, Star, ArrowUpRight } from 'lucide-vue-next'
import { countryFlag, countryLabel, formatDate, formatRating } from '../../utils/beer.js'

const props = defineProps({
  beer: { type: Object, required: true },
  index: { type: Number, required: true },
  locale: { type: String, required: true }
})

defineEmits(['select'])
</script>

<template>
  <article class="beer-card" tabindex="0" @click="$emit('select', beer)" @keydown.enter="$emit('select', beer)">
    <div class="card-image">
      <img v-if="beer.images?.[0]" :src="beer.images[0]" :alt="beer.name" loading="lazy" />
      <div v-else class="image-placeholder"><Beer :size="38" stroke-width="1.2" /><span>MITBIER Nº {{ String(index + 1).padStart(3, '0') }}</span></div>
      <span class="origin-pill"><span>{{ countryFlag(beer.country) }}</span>{{ countryLabel(beer.country, locale) }}</span>
      <span v-if="beer.rating !== null && beer.rating !== undefined" class="rating-pill"><Star :size="13" fill="currentColor" />{{ formatRating(beer.rating) }}</span>
    </div>

    <div class="card-content">
      <p class="card-kicker">{{ beer.brewery ? `@${beer.brewery}` : (locale === 'pt' ? 'DESCOBERTA CERVEJEIRA' : 'BEER DISCOVERY') }}</p>
      <h3>{{ beer.name }}</h3>
      <div class="card-footer">
        <span><CalendarDays :size="13" />{{ formatDate(beer.date, locale) }}</span>
        <span class="view-icon" aria-hidden="true"><ArrowUpRight :size="17" /></span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.beer-card {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 14px;
  background: var(--surface);
  cursor: pointer;
  transition: transform .22s ease, border-color .22s ease, box-shadow .22s ease;
}
.beer-card:hover, .beer-card:focus-visible {
  border-color: var(--accent-border);
  box-shadow: 0 13px 35px rgba(0, 0, 0, .18);
  outline: 0;
  transform: translateY(-4px);
}
.card-image {
  position: relative;
  aspect-ratio: 1 / 1.08;
  overflow: hidden;
  background: linear-gradient(145deg, #24392a, #101a14);
}
.card-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .4s ease;
}
.beer-card:hover .card-image img {
  transform: scale(1.045);
}
.origin-pill, .rating-pill {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: calc(100% - 20px);
  padding: 7px 9px;
  border: 1px solid rgba(238, 239, 218, .12);
  border-radius: 8px;
  color: #f4f3ec;
  background: rgba(17, 27, 20, .88);
  backdrop-filter: blur(10px);
  font-size: 9px;
  font-weight: 700;
}
.origin-pill {
  top: 10px;
  left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.rating-pill {
  right: 10px;
  bottom: 10px;
  color: #f0ca75;
}
.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 13px;
  color: var(--accent);
}
.image-placeholder span {
  color: #9ba891;
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .13em;
}
.card-content {
  padding: 16px 15px 13px;
}
.card-kicker {
  overflow: hidden;
  margin: 0 0 8px;
  color: var(--accent);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .09em;
  text-overflow: ellipsis;
  white-space: nowrap;
}
h3 {
  min-height: 39px;
  margin: 0;
  overflow-wrap: anywhere;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -.02em;
  line-height: 1.2;
}
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid var(--border-soft);
}
.card-footer > span:first-child {
  min-width: 0;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: var(--text-muted);
  font-size: 9px;
  white-space: nowrap;
}
.view-icon {
  width: 27px;
  height: 27px;
  display: grid;
  place-items: center;
  flex-shrink: 0;
  border: 1px solid var(--border);
  border-radius: 8px;
  color: var(--accent);
}
@media (max-width: 420px) {
  .card-image {
    aspect-ratio: 1 / .85;
  }
  .card-content {
    padding: 16px;
  }
}
</style>
