<script setup>
import { Globe, Instagram, Beer, ExternalLink } from 'lucide-vue-next'

const props = defineProps({
  locale: { type: String, required: true },
  t: { type: Object, required: true }
})

const emit = defineEmits(['change-locale'])
</script>

<template>
  <header class="site-header">
    <a class="brand" href="#top" aria-label="Adson Mitbier - início">
      <span class="brand-icon"><Beer :size="23" :stroke-width="1.8" /></span>
      <span class="brand-wordmark">ADSON<span>MITBIER</span><small>{{ t.brandSubtitle }}</small></span>
    </a>

    <nav class="main-nav" :aria-label="locale === 'pt' ? 'Navegação principal' : 'Main navigation'">
      <a href="#collection">{{ t.navCollection }}</a>
      <a href="#about">{{ t.navAbout }}</a>
      <a href="#escala-av">{{ t.navScale }}</a>
      <a class="instagram-link" href="https://www.instagram.com/adsoncomcerveja/" target="_blank" rel="noopener noreferrer">
        <Instagram :size="16" />
        {{ t.instagram }}
        <ExternalLink :size="13" />
      </a>
    </nav>

    <label class="language-picker">
      <Globe :size="16" aria-hidden="true" />
      <span class="sr-only">{{ t.language }}</span>
      <select :value="locale" :aria-label="t.language" @change="emit('change-locale', $event.target.value)">
        <option value="pt">PT</option>
        <option value="en">EN</option>
      </select>
    </label>
  </header>
</template>

<style scoped>
.site-header {
  width: min(1180px, calc(100% - 48px));
  min-height: 88px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-bottom: 1px solid var(--border-soft);
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 11px;
  color: var(--text-main);
  text-decoration: none;
  flex-shrink: 0;
}
.brand-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  border: 1px solid var(--accent-border);
  border-radius: 14px;
  color: var(--accent);
  background: var(--surface-raised);
}
.brand-wordmark {
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 800;
  letter-spacing: .12em;
  line-height: 1.15;
}
.brand-wordmark span {
  color: var(--accent);
}
.brand-wordmark small {
  margin-top: 5px;
  color: var(--text-muted);
  font-size: 8px;
  font-weight: 600;
  letter-spacing: .16em;
}
.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(16px, 3vw, 34px);
}
.main-nav a {
  color: var(--text-soft);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s ease;
  white-space: nowrap;
}
.main-nav a:hover {
  color: var(--accent);
}
.main-nav .instagram-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}
.language-picker {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 10px;
  color: var(--text-soft);
  background: var(--surface);
}
.language-picker select {
  width: 37px;
  border: 0;
  outline: 0;
  color: var(--text-main);
  background: transparent;
  font: inherit;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.language-picker select option {
  color: #f4f3ec;
  background: #17251d;
}
@media (max-width: 720px) {
  .site-header {
    width: min(100% - 32px, 1180px);
    min-height: 76px;
    flex-wrap: wrap;
    gap: 12px;
    padding: 13px 0;
  }
  .brand-icon {
    width: 39px;
    height: 39px;
  }
  .main-nav {
    order: 3;
    width: 100%;
    justify-content: flex-start;
    gap: 21px;
    overflow-x: auto;
    padding: 3px 0;
  }
  .main-nav a {
    font-size: 12px;
  }
  .language-picker {
    margin-left: auto;
  }
}
</style>
