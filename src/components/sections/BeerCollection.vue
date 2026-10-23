<script setup>
import { computed } from 'vue'
import { useBeerCollection } from '../../composables/useBeerCollection.js'
import BeerToolbar from '../beer/BeerToolbar.vue'
import BeerGrid from '../beer/BeerGrid.vue'
import BeerPagination from '../beer/BeerPagination.vue'
import EmptyState from '../beer/EmptyState.vue'

const props = defineProps({
  beers: { type: Array, required: true },
  locale: { type: String, required: true },
  t: { type: Object, required: true }
})

const emit = defineEmits(['select-beer'])
const collection = useBeerCollection(props.beers)
const firstResult = computed(() => collection.filteredBeers.value.length
  ? (collection.currentPage.value - 1) * 12 + 1
  : 0)
const lastResult = computed(() => Math.min(collection.currentPage.value * 12, collection.filteredBeers.value.length))
</script>

<template>
  <section id="collection" class="beer-collection">
    <div class="section-heading">
      <div>
        <div class="eyebrow"><span></span>{{ t.collectionEyebrow }}</div>
        <h2>{{ t.collectionTitleStart }} <em>{{ t.collectionTitleAccent }}</em></h2>
        <p>{{ t.collectionDescription }}</p>
      </div>
      <div class="result-count"><strong>{{ collection.filteredBeers.value.length }}</strong><span>{{ t.results }}</span></div>
    </div>

    <BeerToolbar
      v-model:query="collection.query.value"
      v-model:country="collection.country.value"
      :countries="collection.countries.value"
      :locale="locale"
      :t="t"
    />

    <BeerGrid
      v-if="collection.visibleBeers.value.length"
      :beers="collection.visibleBeers.value"
      :locale="locale"
      @select="emit('select-beer', $event)"
    />

    <EmptyState
      v-else
      :t="t"
      @clear="collection.clearSearch"
    />

    <div v-if="collection.filteredBeers.value.length" class="collection-bottom">
      <p>{{ t.showing }} <strong>{{ firstResult }}–{{ lastResult }}</strong> {{ t.of }} <strong>{{ collection.filteredBeers.value.length }}</strong> {{ t.posts }}</p>
      <BeerPagination
        :current-page="collection.currentPage.value"
        :total-pages="collection.totalPages.value"
        :page-numbers="collection.pageNumbers.value"
        :t="t"
        @change="collection.goToPage"
      />
      <span class="curated-note">ADSON MITBIER</span>
    </div>
  </section>
</template>

<style scoped>
.beer-collection {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: 105px 0 100px;
  scroll-margin-top: 28px;
}
.section-heading {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 28px;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
}
.eyebrow span {
  width: 25px;
  height: 1px;
  background: var(--accent);
}
h2 {
  margin: 14px 0 9px;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: clamp(30px, 4vw, 43px);
  font-weight: 600;
  letter-spacing: -.045em;
  line-height: 1.1;
}
h2 em {
  color: var(--accent);
  font-weight: 500;
}
.section-heading p {
  margin: 0;
  color: var(--text-soft);
  font-size: 13px;
  line-height: 1.7;
}
.result-count {
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 4px;
  padding-bottom: 3px;
}
.result-count strong {
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: 30px;
  line-height: 1;
}
.result-count span {
  color: var(--text-muted);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .13em;
}
.collection-bottom {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  margin-top: 29px;
}
.collection-bottom p {
  margin: 0;
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .06em;
}
.collection-bottom p strong {
  color: var(--text-soft);
}
.curated-note {
  justify-self: end;
  color: var(--text-muted);
  font-size: 8px;
  font-weight: 800;
  letter-spacing: .13em;
}
@media (max-width: 760px) {
  .beer-collection {
    width: calc(100% - 32px);
    padding: 72px 0;
  }
  .collection-bottom {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  .curated-note {
    justify-self: center;
  }
}
@media (max-width: 480px) {
  .section-heading {
    align-items: flex-start;
  }
  .result-count {
    padding-top: 4px;
  }
  .result-count strong {
    font-size: 24px;
  }
}
</style>
