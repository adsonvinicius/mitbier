<script setup>
import { computed } from 'vue'
import { ArrowLeft, Beer, ExternalLink, Star } from 'lucide-vue-next'

const props = defineProps({
  t: { type: Object, required: true },
  locale: { type: String, required: true },
  total: { type: Number, required: true },
  average: { type: Number, required: true },
  topRatings: { type: Array, required: true }
})

const formattedAverage = computed(() => new Intl.NumberFormat(
  props.locale === 'pt' ? 'pt-BR' : 'en-US',
  { minimumFractionDigits: 2, maximumFractionDigits: 2 }
).format(props.average))

const formattedRating = score => new Intl.NumberFormat(
  props.locale === 'pt' ? 'pt-BR' : 'en-US',
  { maximumFractionDigits: 1 }
).format(score)

const summary = computed(() => props.t.scaleParagraph3
  .replace('{total}', String(props.total))
  .replace('{average}', formattedAverage.value)
  .replace('{scoreA}', formattedRating(props.topRatings[0] ?? 0))
  .replace('{scoreB}', formattedRating(props.topRatings[1] ?? 0)))
</script>

<template>
  <main id="top" class="scale-page">
    <header class="scale-heading">
      <div class="scale-mark" aria-hidden="true">
        <Beer :size="26" :stroke-width="1.7" />
      </div>
      <p class="scale-eyebrow">{{ t.scaleEyebrow }}</p>
      <h1>{{ t.scaleTitle }}</h1>
      <p class="scale-lead">{{ t.scaleLead }}</p>
    </header>

    <section class="scale-content" :aria-label="t.scaleTitle">
      <article class="scale-paragraph">
        <span class="paragraph-number">01</span>
        <p>{{ t.scaleParagraph1 }}</p>
      </article>

      <article class="scale-paragraph">
        <span class="paragraph-number">02</span>
        <p>{{ t.scaleParagraph2 }}</p>
      </article>

      <article class="scale-paragraph">
        <span class="paragraph-number">03</span>
        <p>{{ summary }}</p>
      </article>

      <div class="scale-summary">
        <div class="summary-score">
          <Star :size="18" />
          <span>{{ formattedAverage }}</span>
          <small>{{ locale === 'pt' ? 'NOTA MÉDIA' : 'AVERAGE RATING' }}</small>
        </div>
        <div class="summary-detail">
          <strong>{{ total }}</strong>
          <span>{{ locale === 'pt' ? 'cervejas avaliadas' : 'beers rated' }}</span>
        </div>
      </div>

      <a class="scale-source" href="https://www.bjcp.org/beer-styles/introduction-to-beer-styles/" target="_blank" rel="noopener noreferrer">
        {{ t.scaleSource }}
        <ExternalLink :size="14" />
      </a>

      <a class="scale-back" href="#collection">
        <ArrowLeft :size="16" />
        {{ t.scaleBack }}
      </a>
    </section>
  </main>
</template>

<style scoped>
.scale-page {
  width: min(900px, calc(100% - 48px));
  min-height: calc(100vh - 184px);
  margin: 0 auto;
  padding: 84px 0 96px;
}

.scale-heading {
  max-width: 720px;
  margin: 0 auto 42px;
  text-align: center;
}

.scale-mark {
  display: grid;
  width: 58px;
  height: 58px;
  margin: 0 auto 22px;
  place-items: center;
  color: var(--accent);
  background: var(--accent-wash);
  border: 1px solid var(--accent-border);
  border-radius: 18px;
}

.scale-eyebrow {
  margin: 0 0 13px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .16em;
}

.scale-heading h1 {
  margin: 0;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: clamp(42px, 7vw, 68px);
  font-weight: 600;
  letter-spacing: -.055em;
  line-height: 1.05;
}

.scale-lead {
  max-width: 570px;
  margin: 18px auto 0;
  color: var(--text-soft);
  font-size: 16px;
  line-height: 1.75;
}

.scale-content {
  padding: clamp(22px, 5vw, 42px);
  background: linear-gradient(145deg, rgba(32, 47, 36, .9), rgba(23, 34, 26, .94));
  border: 1px solid var(--border);
  border-radius: 24px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, .14);
}

.scale-paragraph {
  display: grid;
  grid-template-columns: 38px minmax(0, 1fr);
  gap: 18px;
  padding: 0 0 27px;
}

.scale-paragraph + .scale-paragraph {
  padding-top: 27px;
  border-top: 1px solid var(--border-soft);
}

.paragraph-number {
  padding-top: 4px;
  color: var(--accent);
  font-family: var(--font-display);
  font-size: 18px;
  font-style: italic;
}

.scale-paragraph p {
  margin: 0;
  color: var(--text-soft);
  font-size: 14px;
  line-height: 1.95;
}

.scale-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 2px;
  padding: 20px 0;
  border-top: 1px solid var(--border-soft);
  border-bottom: 1px solid var(--border-soft);
}

.summary-score,
.summary-detail {
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-score {
  color: var(--accent);
}

.summary-score span,
.summary-detail strong {
  color: var(--text-main);
  font-size: 22px;
  font-weight: 800;
  font-variant-numeric: tabular-nums;
}

.summary-score small {
  align-self: center;
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .1em;
}

.summary-detail {
  color: var(--text-soft);
  font-size: 12px;
}

.scale-source {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 24px;
  color: var(--text-muted);
  font-size: 11px;
  line-height: 1.6;
  text-decoration: none;
}

.scale-source:hover {
  color: var(--accent);
}

.scale-back {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  margin-top: 27px;
  color: var(--accent);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}

.scale-back:hover {
  color: var(--accent-bright);
}

@media (max-width: 600px) {
  .scale-page {
    width: calc(100% - 32px);
    padding: 54px 0 64px;
  }

  .scale-heading {
    margin-bottom: 28px;
  }

  .scale-lead {
    font-size: 14px;
  }

  .scale-content {
    padding: 22px 18px;
    border-radius: 18px;
  }

  .scale-paragraph {
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 10px;
    padding-bottom: 22px;
  }

  .scale-paragraph + .scale-paragraph {
    padding-top: 22px;
  }

  .scale-paragraph p {
    font-size: 13px;
    line-height: 1.85;
  }

  .scale-summary {
    align-items: flex-start;
    flex-direction: column;
    gap: 13px;
  }

  .summary-score small {
    margin-left: 2px;
  }
}
</style>
