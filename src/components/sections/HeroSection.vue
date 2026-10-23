<script setup>
import { ExternalLink } from 'lucide-vue-next'
defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <section class="hero-section">
    <div class="hero-copy">
      <div class="eyebrow"><span></span>{{ t.eyebrow }}</div>
      <h1>{{ t.heroTitleStart }}<br /><em>{{ t.heroTitleAccent }}</em> {{ t.heroTitleEnd }}</h1>
      <p class="hero-description">{{ t.heroDescription }}</p>
      <div class="hero-actions">
        <a class="primary-button" href="#collection">{{ t.exploreCollection }} <span>↘</span></a>
        <a class="text-button" href="https://www.instagram.com/adsoncomcerveja/" target="_blank" rel="noopener noreferrer">{{ t.followJourney }} <ExternalLink :size="14" /></a>
      </div>
      <p class="hero-note"><span></span>{{ t.collectingSince }}</p>
    </div>

    <div class="hero-art" aria-hidden="true">
      <div class="art-orbit orbit-one"></div>
      <div class="art-orbit orbit-two"></div>
      <div class="art-glow"></div>
      <div class="beer-glass"><div class="beer-foam"></div><div class="beer-liquid"></div><div class="glass-shine"></div></div>
      <div class="hero-stamp"><span>THE</span><strong>WORLD</strong><span>IN A GLASS</span><b>✳</b></div>
      <div class="art-caption">ADSON MITBIER <span>·</span> {{ t.aboutStampBottom }}</div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  width: min(1180px, calc(100% - 48px));
  min-height: 490px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.02fr .98fr;
  align-items: center;
  gap: 42px;
  padding: 64px 0 56px;
}
.hero-copy {
  position: relative;
  z-index: 1;
}
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--accent);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .15em;
  line-height: 1.5;
}
.eyebrow span {
  width: 25px;
  height: 1px;
  background: var(--accent);
}
h1 {
  margin: 22px 0 18px;
  color: var(--text-main);
  font-family: var(--font-display);
  font-size: clamp(42px, 5.4vw, 68px);
  font-weight: 600;
  letter-spacing: -.055em;
  line-height: .99;
}
h1 em {
  color: var(--accent);
  font-weight: 500;
}
.hero-description {
  max-width: 490px;
  margin: 0;
  color: var(--text-soft);
  font-size: 15px;
  line-height: 1.85;
}
.hero-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 29px;
}
.primary-button {
  min-height: 47px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 18px;
  border: 1px solid var(--accent);
  border-radius: 10px;
  color: #132019;
  background: var(--accent);
  font-size: 12px;
  font-weight: 800;
  text-decoration: none;
  transition: transform .2s ease, background .2s ease;
}
.primary-button:hover {
  transform: translateY(-2px);
  background: var(--accent-bright);
}
.primary-button span {
  font-size: 17px;
}
.text-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-soft);
  font-size: 12px;
  font-weight: 700;
  text-decoration: none;
}
.text-button:hover {
  color: var(--accent);
}
.hero-note {
  display: flex;
  align-items: center;
  gap: 9px;
  margin: 35px 0 0;
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .11em;
}
.hero-note span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent-glow);
}
.hero-art {
  position: relative;
  min-height: 355px;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(164, 183, 145, .13);
  border-radius: 24px;
  background: radial-gradient(ellipse at 50% 48%, rgba(129, 157, 94, .17), transparent 57%), linear-gradient(145deg, #1c3024, #101a14 78%);
}
.art-orbit {
  position: absolute;
  width: 270px;
  height: 270px;
  border: 1px solid rgba(183, 202, 155, .16);
  border-radius: 50%;
}
.orbit-two {
  width: 355px;
  height: 355px;
  border-style: dashed;
  border-color: rgba(183, 202, 155, .1);
}
.art-glow {
  position: absolute;
  width: 170px;
  height: 170px;
  top: 53px;
  border-radius: 50%;
  background: rgba(192, 164, 94, .13);
  filter: blur(45px);
}
.beer-glass {
  position: relative;
  width: 113px;
  height: 205px;
  margin-top: 13px;
  overflow: hidden;
  border: 3px solid rgba(232, 237, 214, .78);
  border-top-width: 4px;
  border-radius: 10px 10px 25px 25px;
  background: rgba(234, 238, 211, .06);
  box-shadow: 0 18px 55px rgba(0, 0, 0, .32), inset 0 0 15px rgba(255, 255, 255, .12);
  transform: perspective(500px) rotateY(-9deg);
}
.beer-foam {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  border-radius: 5px 5px 14px 14px;
  background: linear-gradient(#fff5d7, #e6d9b4);
}
.beer-liquid {
  position: absolute;
  inset: 23px 0 0;
  background: linear-gradient(100deg, #8b571b, #d99a35 30%, #b56c19 70%, #754313);
}
.glass-shine {
  position: absolute;
  top: 20px;
  left: 13px;
  width: 9px;
  height: 150px;
  border-radius: 50%;
  background: rgba(255, 255, 255, .23);
  filter: blur(2px);
}
.hero-stamp {
  position: absolute;
  right: 9%;
  bottom: 17%;
  width: 115px;
  height: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  border: 1px solid rgba(196, 210, 166, .48);
  border-radius: 50%;
  color: var(--accent);
  transform: rotate(10deg);
}
.hero-stamp span {
  font-size: 8px;
  letter-spacing: .2em;
}
.hero-stamp strong {
  font-size: 18px;
  letter-spacing: .06em;
}
.hero-stamp b {
  margin-top: 1px;
  font-size: 15px;
  font-weight: 400;
}
.art-caption {
  position: absolute;
  bottom: 20px;
  color: #8d9b87;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .14em;
  text-align: center;
}
.art-caption span {
  color: var(--accent);
  padding: 0 6px;
}
@media (max-width: 800px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 35px;
    padding: 48px 0 42px;
  }
  .hero-art {
    min-height: 310px;
  }
  .hero-stamp {
    right: 10%;
    bottom: 15%;
  }
}
@media (max-width: 480px) {
  .hero-section {
    width: calc(100% - 32px);
  }
  .hero-description {
    font-size: 14px;
  }
  .hero-art {
    min-height: 285px;
  }
  .hero-stamp {
    right: 6%;
    width: 98px;
    height: 98px;
  }
  .hero-stamp strong {
    font-size: 15px;
  }
}
</style>
