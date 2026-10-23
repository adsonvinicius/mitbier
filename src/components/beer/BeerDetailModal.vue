<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { X, Beer, Star, ExternalLink, CalendarDays } from 'lucide-vue-next'
import { countryFlag, countryLabel, formatDate, formatRating } from '../../utils/beer.js'

const props = defineProps({
  beer: { type: Object, required: true },
  locale: { type: String, required: true },
  t: { type: Object, required: true }
})

const emit = defineEmits(['close'])
const closeOnEscape = event => {
  if (event.key === 'Escape') emit('close')
}

onMounted(() => window.addEventListener('keydown', closeOnEscape))
onBeforeUnmount(() => window.removeEventListener('keydown', closeOnEscape))
</script>

<template>
  <div class="modal-backdrop" @click.self="emit('close')">
    <section class="detail-modal" role="dialog" aria-modal="true" :aria-label="beer.name">
      <button class="modal-close" type="button" :aria-label="t.close" @click="emit('close')"><X :size="19" /></button>
      <div class="detail-image">
        <img v-if="beer.images?.[0]" :src="beer.images[0]" :alt="beer.name" />
        <div v-else class="image-placeholder"><Beer :size="48" /></div>
      </div>
      <div class="detail-content">
        <div class="eyebrow"><span></span>{{ t.beerDiscovery }}</div>
        <h2>{{ beer.name }}</h2>
        <p class="detail-country"><span>{{ countryFlag(beer.country) }}</span>{{ countryLabel(beer.country, locale) }}</p>
        <div v-if="beer.rating !== null && beer.rating !== undefined" class="detail-rating"><Star :size="17" fill="currentColor" />{{ formatRating(beer.rating) }} <span>/ 10</span></div>
        <dl>
          <div><dt>{{ t.brewery }}</dt><dd>{{ beer.brewery ? `@${beer.brewery}` : t.notIdentified }}</dd></div>
          <div><dt>{{ t.datePosted }}</dt><dd><CalendarDays :size="14" />{{ formatDate(beer.date, locale) }}</dd></div>
          <div v-if="beer.category"><dt>{{ t.category }}</dt><dd>{{ beer.category }}</dd></div>
        </dl>
        <a v-if="beer.brewery" class="brewery-link" :href="`https://www.instagram.com/${beer.brewery}/`" target="_blank" rel="noopener noreferrer">{{ t.exploreBrewery }} <ExternalLink :size="14" /></a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  z-index: 100;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow-y: auto;
  background: rgba(3, 8, 5, .78);
  backdrop-filter: blur(10px);
}
.detail-modal {
  position: relative;
  width: min(800px, 100%);
  display: grid;
  grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: var(--surface);
  box-shadow: 0 25px 90px rgba(0, 0, 0, .45);
}
.modal-close {
  position: absolute;
  z-index: 2;
  top: 13px;
  right: 13px;
  width: 37px;
  height: 37px;
  display: grid;
  place-items: center;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-main);
  background: rgba(17, 27, 20, .9);
  cursor: pointer;
}
.detail-image {
  min-height: 370px;
  background: linear-gradient(145deg, #24392a, #101a14);
}
.detail-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
.image-placeholder {
  height: 100%;
  min-height: 370px;
  display: grid;
  place-items: center;
  color: var(--accent);
}
.detail-content {
  min-width: 0;
  padding: 42px 32px 30px;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .13em;
}
.eyebrow span {
  width: 20px;
  height: 1px;
  background: var(--accent);
}
h2 {
  margin: 17px 0 10px;
  overflow-wrap: anywhere;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: clamp(27px, 3vw, 36px);
  font-weight: 600;
  letter-spacing: -.04em;
  line-height: 1.12;
}
.detail-country {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: var(--text-soft);
  font-size: 12px;
}
.detail-rating {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 19px;
  color: #f0ca75;
  font-size: 18px;
  font-weight: 800;
}
.detail-rating span {
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 600;
}
dl {
  display: grid;
  gap: 0;
  margin: 24px 0;
  border-top: 1px solid var(--border);
}
dl > div {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr);
  gap: 12px;
  padding: 13px 0;
  border-bottom: 1px solid var(--border-soft);
}
dt {
  color: var(--text-muted);
  font-size: 10px;
}
dd {
  display: flex;
  align-items: center;
  gap: 6px;
  margin: 0;
  overflow-wrap: anywhere;
  color: var(--text-main);
  font-size: 11px;
  font-weight: 700;
}
.brewery-link {
  min-height: 43px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 13px;
  border: 1px solid var(--accent-border);
  border-radius: 9px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;
}
.brewery-link:hover {
  background: var(--accent-wash);
}
@media (max-width: 620px) {
  .modal-backdrop {
    align-items: start;
    padding: 15px;
  }
  .detail-modal {
    grid-template-columns: 1fr;
    margin: auto 0;
  }
  .detail-image {
    height: 240px;
    min-height: 240px;
  }
  .image-placeholder {
    min-height: 240px;
  }
  .detail-content {
    padding: 27px 22px 24px;
  }
}
</style>
