<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import beersData from './data/beers.json'
import translations from './i18n/translations.json'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import HeroSection from './components/sections/HeroSection.vue'
import CollectionStats from './components/sections/CollectionStats.vue'
import BeerCollection from './components/sections/BeerCollection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import ScaleAvPage from './components/sections/ScaleAvPage.vue'
import BeerDetailModal from './components/beer/BeerDetailModal.vue'

const locale = ref('pt')
const selectedBeer = ref(null)
const currentPage = ref(window.location.hash === '#escala-av' ? 'scale' : 'home')
const t = computed(() => translations[locale.value])
const beers = beersData
const countryCount = computed(() => new Set(beers.map(beer => beer.country).filter(country => country && country !== 'Unidentified')).size)
const averageRating = computed(() => beers.reduce((sum, beer) => sum + Number(beer.rating || 0), 0) / Math.max(beers.length, 1))
const topRatings = computed(() => {
  const counts = beers.reduce((result, beer) => {
    const score = Number(beer.rating)
    result[score] = (result[score] || 0) + 1
    return result
  }, {})

  return Object.entries(counts)
    .sort((a, b) => Number(b[1]) - Number(a[1]))
    .slice(0, 2)
    .map(([score]) => Number(score))
})

const handleHashChange = async () => {
  currentPage.value = window.location.hash === '#escala-av' ? 'scale' : 'home'

  if (currentPage.value === 'home') {
    await nextTick()
    const target = window.location.hash.slice(1)
    if (target && target !== 'top') {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

onMounted(() => {
  window.addEventListener('hashchange', handleHashChange)
  document.documentElement.lang = locale.value === 'pt' ? 'pt-BR' : 'en'
  document.title = locale.value === 'pt'
    ? 'Adson Mitbier | Coleção de Cervejas'
    : 'Adson Mitbier | Beer Collection'
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', handleHashChange)
})

watch(locale, value => {
  document.documentElement.lang = value === 'pt' ? 'pt-BR' : 'en'
  document.title = value === 'pt'
    ? 'Adson Mitbier | Coleção de Cervejas'
    : 'Adson Mitbier | Beer Collection'
})
</script>

<template>
  <div class="site-shell">
    <SiteHeader :locale="locale" :t="t" @change-locale="locale = $event" />

    <main v-if="currentPage === 'home'" id="top">
      <HeroSection :t="t" />
      <CollectionStats
        :t="t"
        :total="beers.length"
        :country-count="countryCount"
        :beers="beers"
      />
      <BeerCollection
        id="collection"
        :beers="beers"
        :locale="locale"
        :t="t"
        @select-beer="selectedBeer = $event"
      />
      <AboutSection :t="t" />
    </main>

    <ScaleAvPage
      v-else
      :t="t"
      :locale="locale"
      :total="beers.length"
      :average="averageRating"
      :top-ratings="topRatings"
    />

    <SiteFooter :t="t" />

    <BeerDetailModal
      v-if="currentPage === 'home' && selectedBeer"
      :beer="selectedBeer"
      :locale="locale"
      :t="t"
      @close="selectedBeer = null"
    />
  </div>
</template>
