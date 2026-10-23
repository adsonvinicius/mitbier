import { computed, ref, watch } from 'vue'

const PAGE_SIZE = 12

export function useBeerCollection(beers) {
  const query = ref('')
  const country = ref('')
  const currentPage = ref(1)

  const countries = computed(() => {
    return [...new Set(beers.map(beer => beer.country).filter(country => country && country !== 'Unidentified'))]
      .sort((a, b) => a.localeCompare(b))
  })

  const filteredBeers = computed(() => {
    const search = query.value.trim().toLocaleLowerCase()

    return beers.filter(beer => {
      const matchesCountry = !country.value || beer.country === country.value
      const searchableText = [
        beer.name,
        beer.caption,
        beer.country,
        beer.brewery,
        beer.place,
        beer.category
      ].filter(Boolean).join(' ').toLocaleLowerCase()
      const matchesText = !search || searchableText.includes(search)

      return matchesCountry && matchesText
    })
  })

  const totalPages = computed(() => Math.max(1, Math.ceil(filteredBeers.value.length / PAGE_SIZE)))

  const visibleBeers = computed(() => {
    const start = (currentPage.value - 1) * PAGE_SIZE
    return filteredBeers.value.slice(start, start + PAGE_SIZE)
  })

  const pageNumbers = computed(() => {
    const total = totalPages.value
    const current = currentPage.value
    const start = Math.max(1, Math.min(current - 2, total - 4))
    const end = Math.min(total, Math.max(5, current + 2))
    return Array.from({ length: end - start + 1 }, (_, index) => start + index)
  })

  const averageRating = computed(() => {
    const ratings = beers.map(beer => beer.rating).filter(rating => typeof rating === 'number')
    if (!ratings.length) return '—'
    return (ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length).toFixed(1)
  })

  const ratedCount = computed(() => beers.filter(beer => typeof beer.rating === 'number').length)

  watch([query, country], () => {
    currentPage.value = 1
  })

  watch(totalPages, total => {
    if (currentPage.value > total) currentPage.value = total
  })

  function goToPage(page) {
    currentPage.value = Math.min(Math.max(1, page), totalPages.value)
  }

  function clearSearch() {
    query.value = ''
    country.value = ''
    currentPage.value = 1
  }

  return {
    query,
    country,
    countries,
    currentPage,
    filteredBeers,
    visibleBeers,
    totalPages,
    pageNumbers,
    averageRating,
    ratedCount,
    goToPage,
    clearSearch
  }
}
