<script setup>
import { Search, X, ChevronDown } from 'lucide-vue-next'
import { countryFlag, countryLabel } from '../../utils/beer.js'

defineProps({
  query: { type: String, required: true },
  country: { type: String, required: true },
  countries: { type: Array, required: true },
  locale: { type: String, required: true },
  t: { type: Object, required: true }
})

defineEmits(['update:query', 'update:country'])
</script>

<template>
  <div class="beer-toolbar">
    <label class="search-field">
      <Search :size="18" aria-hidden="true" />
      <input
        :value="query"
        type="search"
        :placeholder="t.searchPlaceholder"
        :aria-label="t.searchLabel"
        @input="$emit('update:query', $event.target.value)"
      />
      <button v-if="query" type="button" :aria-label="t.clearSearch" @click="$emit('update:query', '')"><X :size="16" /></button>
    </label>

    <label class="country-field">
      <span>{{ t.countryLabel }}</span>
      <span class="select-wrap">
        <select :value="country" :aria-label="t.countryLabel" @change="$emit('update:country', $event.target.value)">
          <option value="">{{ t.allCountries }}</option>
          <option v-for="item in countries" :key="item" :value="item">{{ countryFlag(item) }} {{ countryLabel(item, locale) }}</option>
        </select>
        <ChevronDown :size="16" aria-hidden="true" />
      </span>
    </label>
  </div>
</template>

<style scoped>
.beer-toolbar {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(210px, 275px);
  gap: 12px;
  margin-bottom: 24px;
}
.search-field, .country-field {
  min-width: 0;
  min-height: 54px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  border: 1px solid var(--border);
  border-radius: 12px;
  color: var(--text-muted);
  background: var(--surface);
}
.search-field:focus-within, .country-field:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-wash);
}
.search-field input {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  color: var(--text-main);
  background: transparent;
  font: inherit;
  font-size: 13px;
}
.search-field input::placeholder {
  color: var(--text-muted);
  opacity: 1;
}
.search-field input::-webkit-search-cancel-button {
  display: none;
}
.search-field button {
  display: grid;
  place-items: center;
  flex-shrink: 0;
  padding: 4px;
  border: 0;
  border-radius: 5px;
  color: var(--text-soft);
  background: transparent;
  cursor: pointer;
}
.country-field {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px;
}
.country-field > span:first-child {
  color: var(--text-muted);
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}
.select-wrap {
  position: relative;
  min-width: 0;
  display: block;
}
.select-wrap select {
  width: 100%;
  min-width: 0;
  padding: 7px 24px 7px 0;
  overflow: hidden;
  border: 0;
  outline: 0;
  appearance: none;
  color: var(--text-main);
  background: transparent;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.select-wrap select option {
  color: #f4f3ec;
  background: #17251d;
}
.select-wrap > svg {
  position: absolute;
  top: 50%;
  right: 0;
  pointer-events: none;
  transform: translateY(-50%);
}
@media (max-width: 620px) {
  .beer-toolbar {
    grid-template-columns: minmax(0, 1fr);
  }
  .country-field {
    grid-template-columns: 70px minmax(0, 1fr);
  }
}
</style>
