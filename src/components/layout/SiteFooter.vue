<script setup>
defineProps({ t: { type: Object, required: true } })
</script>

<template>
  <footer class="site-footer">
    <a class="footer-brand" href="#top">ADSON<span>MITBIER</span></a>
    <p>{{ t.footerTagline }}</p>
    <a class="domain-link" href="https://adsonmitbier.com" target="_blank" rel="noopener noreferrer">ADSONMITBIER.COM <span>↗</span></a>
  </footer>
</template>

<style scoped>
.site-footer {
  width: min(1180px, calc(100% - 48px));
  min-height: 96px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  border-top: 1px solid var(--border-soft);
}
.footer-brand {
  color: var(--text-main);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: .1em;
  text-decoration: none;
  white-space: nowrap;
}
.footer-brand span {
  color: var(--accent);
}
.site-footer p {
  margin: 0;
  color: var(--text-muted);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .12em;
  text-align: center;
}
.domain-link {
  color: var(--text-soft);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .08em;
  text-decoration: none;
  white-space: nowrap;
}
.domain-link span {
  color: var(--accent);
}
@media (max-width: 680px) {
  .site-footer {
    width: calc(100% - 32px);
    min-height: auto;
    padding: 25px 0;
    flex-direction: column;
    gap: 12px;
  }
  .site-footer p {
    line-height: 1.6;
  }
}
</style>
