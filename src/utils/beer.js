const countryNames = {
  pt: {
    'Argentina': 'Argentina', 'Australia': 'Austrália', 'Austria': 'Áustria', 'Belgium': 'Bélgica',
    'Brazil': 'Brasil', 'Canada': 'Canadá', 'Chile': 'Chile', 'China': 'China', 'Colombia': 'Colômbia',
    'Croatia': 'Croácia', 'Czechia': 'República Tcheca', 'Czech Republic': 'República Tcheca',
    'Denmark': 'Dinamarca', 'Estonia': 'Estônia', 'Finland': 'Finlândia', 'France': 'França',
    'Germany': 'Alemanha', 'Greece': 'Grécia', 'Hungary': 'Hungria', 'Iceland': 'Islândia',
    'India': 'Índia', 'Ireland': 'Irlanda', 'Italy': 'Itália', 'Japan': 'Japão', 'Latvia': 'Letônia',
    'Lithuania': 'Lituânia', 'Luxembourg': 'Luxemburgo', 'Luxemburg': 'Luxemburgo', 'Mexico': 'México',
    'Netherlands': 'Países Baixos', 'New Zealand': 'Nova Zelândia', 'Norway': 'Noruega', 'Poland': 'Polônia',
    'Portugal': 'Portugal', 'Romania': 'Romênia', 'Russia': 'Rússia', 'Serbia': 'Sérvia',
    'Singapore': 'Singapura', 'Slovakia': 'Eslováquia', 'Slovenia': 'Eslovênia', 'South Africa': 'África do Sul',
    'South Korea': 'Coreia do Sul', 'Spain': 'Espanha', 'Sweden': 'Suécia', 'Switzerland': 'Suíça',
    'Thailand': 'Tailândia', 'Turkey': 'Turquia', 'Ukraine': 'Ucrânia', 'United Kingdom': 'Reino Unido',
    'United States': 'Estados Unidos', 'USA': 'Estados Unidos', 'Uruguay': 'Uruguai', 'Vietnam': 'Vietnã'
  },
  en: {}
}

const flags = {
  Argentina: '🇦🇷', Australia: '🇦🇺', Austria: '🇦🇹', Belgium: '🇧🇪', Brazil: '🇧🇷', Canada: '🇨🇦',
  Chile: '🇨🇱', China: '🇨🇳', Colombia: '🇨🇴', Croatia: '🇭🇷', Czechia: '🇨🇿', 'Czech Republic': '🇨🇿',
  Denmark: '🇩🇰', Estonia: '🇪🇪', Finland: '🇫🇮', France: '🇫🇷', Germany: '🇩🇪', Greece: '🇬🇷',
  Hungary: '🇭🇺', Iceland: '🇮🇸', India: '🇮🇳', Ireland: '🇮🇪', Italy: '🇮🇹', Japan: '🇯🇵', Latvia: '🇱🇻',
  Lithuania: '🇱🇹', Luxembourg: '🇱🇺', Luxemburg: '🇱🇺', Mexico: '🇲🇽', Netherlands: '🇳🇱',
  'New Zealand': '🇳🇿', Norway: '🇳🇴', Poland: '🇵🇱', Portugal: '🇵🇹', Romania: '🇷🇴', Russia: '🇷🇺',
  Serbia: '🇷🇸', Singapore: '🇸🇬', Slovakia: '🇸🇰', Slovenia: '🇸🇮', 'South Africa': '🇿🇦',
  'South Korea': '🇰🇷', Spain: '🇪🇸', Sweden: '🇸🇪', Switzerland: '🇨🇭', Thailand: '🇹🇭', Turkey: '🇹🇷',
  Ukraine: '🇺🇦', 'United Kingdom': '🇬🇧', 'United States': '🇺🇸', USA: '🇺🇸', Uruguay: '🇺🇾', Vietnam: '🇻🇳'
}

export function countryLabel(country, locale = 'pt') {
  if (!country) return '—'
  return countryNames[locale]?.[country] ?? country
}

export function countryFlag(country) {
  return flags[country] ?? '🌍'
}

export function formatDate(timestamp, locale = 'pt') {
  if (!timestamp) return '—'
  const localeCode = locale === 'pt' ? 'pt-BR' : 'en-US'
  return new Intl.DateTimeFormat(localeCode, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(timestamp * 1000))
}

export function formatRating(rating) {
  return rating === null || rating === undefined ? '—' : Number(rating).toFixed(1)
}
