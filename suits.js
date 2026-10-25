/**
 * Through the Breach — Malifaux Suits Component
 * Централизованный модуль мастей для всего сайта
 */

const SUITS_DATA = {
  rams: {
    name: 'RAMS',
    color: '#ff7b72',
    bg: 'rgba(248, 81, 73, 0.15)',
    border: 'rgba(248, 81, 73, 0.5)',
    // Утверждённый Вариант 3: Резкий гранёный череп
    svg: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 7 L15.5 9 L14.5 14.5 L12 19 L9.5 14.5 L8.5 9 Z M10.5 11.5 L11.2 12.5 L10 13 Z M13.5 11.5 L14 13 L12.8 12.5 Z"/>
      <path d="M9 7.5 C6.5 5 2.5 6 1.5 9.5 C0.8 12 2 14.5 4.5 15 C6.5 15.5 8 14 7.5 12.5 C7 11 5.5 11.5 5 12.5 C4.5 12 4.5 11 5 10 C6 8.5 8 8.5 9.5 9.5 L10.5 8 Z"/>
      <path d="M15 7.5 C17.5 5 21.5 6 22.5 9.5 C23.2 12 22 14.5 19.5 15 C17.5 15.5 16 14 16.5 12.5 C17 11 18.5 11.5 19 12.5 C19.5 12 19.5 11 19 10 C18 8.5 16 8.5 14.5 9.5 L13.5 8 Z"/>
    </svg>`
  },

  masks: {
    name: 'MASKS',
    color: '#d2a8ff',
    bg: 'rgba(188, 140, 255, 0.15)',
    border: 'rgba(188, 140, 255, 0.5)',
    // Утверждённый Вариант 2: Канон из книги с рожками
    svg: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M4 6.5 L6.5 9.5 L17.5 9.5 L20 6.5 C20.8 9 20.5 14 19 16.5 L16.5 17.5 L15 14.5 L9 14.5 L7.5 17.5 L5 16.5 C3.5 14 3.2 9 4 6.5 Z M7.5 11 C8.6 11 9.5 11.7 9.5 12.5 C9.5 13.3 8.6 14 7.5 14 C6.4 14 5.5 13.3 5.5 12.5 C5.5 11.7 6.4 11 7.5 11 Z M16.5 11 C17.6 11 18.5 11.7 18.5 12.5 C18.5 13.3 17.6 14 16.5 14 C15.4 14 14.5 13.3 14.5 12.5 C14.5 11.7 15.4 11 16.5 11 Z"/>
    </svg>`
  },

  tomes: {
    name: 'TOMES',
    color: '#79b8ff',
    bg: 'rgba(88, 166, 255, 0.15)',
    border: 'rgba(88, 166, 255, 0.5)',
    // Утверждённый Вариант 2: Гримуар с шелковой лентой
    svg: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 6 C4 4.5 5.5 4 7 4.5 L11.5 6 L11.5 18.5 L6.5 17 C5 16.5 4 17 4 18.5 Z M20 6 C20 4.5 18.5 4 17 4.5 L12.5 6 L12.5 18.5 L17.5 17 C19 16.5 20 17 20 18.5 Z"/>
      <path d="M11 6 L13 6 L13 21 L12 19.5 L11 21 Z" fill="#ff7b72"/>
    </svg>`
  },

  // 4 Варианта Crows на выбор для витрины:
  crows_variants: {
    // 1. Чёткое каллиграфическое перо
    feather: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.2 3.8 C15.5 3.5 10.5 7.5 8 11.5 L7 17 L12.5 16 C16.5 13.5 20.5 8.5 20.2 3.8 Z" fill="rgba(63, 185, 80, 0.25)"/>
      <path d="M16 8 L2 22"/>
      <path d="M17.5 14 L10 14"/>
    </svg>`,

    // 2. Гранёная пика ♠
    spade: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L14 6.5 L19.5 12 C20.5 14.5 19.8 17.5 17.5 18.5 C15.5 19.5 13.5 18.5 12.5 17 L13.5 22 L10.5 22 L11.5 17 C10.5 18.5 8.5 19.5 6.5 18.5 C4.2 17.5 3.5 14.5 4.5 12 L10 6.5 Z"/>
    </svg>`,

    // 3. Ворон с карты 1 of Crows (с головой, клювом и размахом крыльев)
    raven_wings: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 4 L14 6 L19 5.5 L22 8 L18.5 10.5 L20.5 13 L17 14 L17.5 17 L14 16 L13 21 L11 21 L10 16 L6.5 17 L7 14 L3.5 13 L5.5 10.5 L2 8 L5 5.5 L10 6 Z"/>
      <circle cx="12" cy="7" r="1.5" fill="#14100c"/>
    </svg>`,

    // 4. Ворон-пика с карты 2 (крылья образуют форму пики ♠)
    spade_raven: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path fill-rule="evenodd" d="M12 2 C13.5 4.5 18 8.5 19.5 13 C20.2 15.5 19 18 16.8 18.5 C14.8 19 13.5 17.5 12.8 16 L13.8 21.5 L10.2 21.5 L11.2 16 C10.5 17.5 9.2 19 7.2 18.5 C5 18 3.8 15.5 4.5 13 C6 8.5 10.5 4.5 12 2 Z M12 6 C13 6 13.8 6.8 13.8 7.8 C13.8 8.8 13 9.5 12 9.5 C11 9.5 10.2 8.8 10.2 7.8 C10.2 6.8 11 6 12 6 Z M12 11 L14 14.5 L10 14.5 Z"/>
    </svg>`
  }
};

/**
 * Универсальная функция получения жетона масти.
 * Работает на любой странице: getSuitChip('rams') или getSuitChip('crows')
 */
function getSuitChip(suitKey, crowVariant = 'feather') {
  const key = suitKey.toLowerCase();
  
  if (key === 'crows') {
    const svg = SUITS_DATA.crows_variants[crowVariant] || SUITS_DATA.crows_variants.feather;
    return `<span class="suit-chip suit-crows">${svg}CROWS</span>`;
  }

  const suit = SUITS_DATA[key];
  if (!suit) return suitKey.toUpperCase();

  return `<span class="suit-chip suit-${key}">${suit.svg}${suit.name}</span>`;
}
