<script setup>
import { Instagram } from 'lucide-vue-next'
defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-emblem" aria-hidden="true"><span>✳</span></div>
    <div class="about-copy">
      <div class="eyebrow"><span></span>{{ t.aboutEyebrow }}</div>
      <h2>{{ t.aboutTitleStart }}<br /><em>{{ t.aboutTitleAccent }}</em></h2>
      <p>{{ t.aboutDescription }}</p>
      <a class="about-link" href="https://www.instagram.com/adsoncomcerveja/" target="_blank" rel="noopener noreferrer"><Instagram :size="16" />{{ t.followInstagram }}<span>↗</span></a>
    </div>
    <div class="about-stamp" aria-hidden="true"><span>{{ t.aboutStampTop }}</span><strong>{{ t.aboutStampMiddle }}</strong><span>{{ t.aboutStampBottom }}</span><b>✳</b></div>
  </section>
</template>

<style scoped>
.about-section {
  width: min(1180px, calc(100% - 48px));
  display: grid;
  grid-template-columns: 90px minmax(0, 1fr) 180px;
  align-items: center;
  gap: 34px;
  margin: 0 auto 100px;
  padding: 48px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background: linear-gradient(115deg, #1b2b20, #142019 70%);
}
.about-emblem {
  width: 74px;
  height: 74px;
  display: grid;
  place-items: center;
  border: 1px solid var(--accent-border);
  border-radius: 50%;
  color: var(--accent);
  font-size: 35px;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--accent);
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .14em;
}
.eyebrow span {
  width: 23px;
  height: 1px;
  background: var(--accent);
}
h2 {
  margin: 13px 0 13px;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: clamp(29px, 3.4vw, 40px);
  font-weight: 600;
  letter-spacing: -.04em;
  line-height: 1.13;
}
h2 em {
  color: var(--accent);
  font-weight: 500;
}
.about-copy p {
  max-width: 620px;
  margin: 0;
  color: var(--text-soft);
  font-size: 12px;
  line-height: 1.9;
}
.about-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  margin-top: 20px;
  color: var(--accent);
  font-size: 11px;
  font-weight: 800;
  text-decoration: none;
}
.about-link span {
  margin-left: 3px;
}
.about-stamp {
  width: 160px;
  height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: 1px solid rgba(183, 202, 155, .35);
  border-radius: 50%;
  color: var(--accent);
  text-align: center;
  transform: rotate(8deg);
}
.about-stamp span {
  max-width: 115px;
  font-size: 7px;
  font-weight: 700;
  letter-spacing: .12em;
}
.about-stamp strong {
  font-size: 19px;
  letter-spacing: .05em;
}
.about-stamp b {
  font-size: 17px;
  font-weight: 400;
}
@media (max-width: 850px) {
  .about-section {
    grid-template-columns: 60px minmax(0, 1fr);
    gap: 22px;
    padding: 32px;
  }
  .about-emblem {
    width: 56px;
    height: 56px;
    font-size: 27px;
  }
  .about-stamp {
    display: none;
  }
}
@media (max-width: 600px) {
  .about-section {
    width: calc(100% - 32px);
    grid-template-columns: 1fr;
    gap: 20px;
    margin-bottom: 70px;
    padding: 25px 22px;
  }
  .about-emblem {
    width: 48px;
    height: 48px;
    font-size: 24px;
  }
}
</style>
