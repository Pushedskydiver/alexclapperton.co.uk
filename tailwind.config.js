function pxToRem(size) {
  return `${size / 16}rem`;
}

module.exports = {
  mode: 'jit',
  content: [
    './src/site/404.njk',
    './src/site/about-me.njk',
    './src/site/contact.njk',
    './src/site/index.njk',
    './src/site/offline.njk',
    './src/site/_includes/_layouts/*.njk',
    './src/site/_includes/_partials/components/*.njk',
    './src/site/_includes/_partials/head.njk',
    './src/site/articles/**/*.njk',
    './src/site/portfolio/**/*.njk',
    './src/scripts/**/*.js',
    './src/functions/**/*.js',
    './src/utils/**/*.js',
  ],
  theme: {
    aspectRatio: {
      'square': '1 / 1',
      '3/2': '3 / 2',
      '4/3': '4 / 3',
      '16/9': '16 / 9',
    },
    lineHeight: {
      xs: pxToRem(20),
      sm: `clamp(${pxToRem(20)}, 1.875vw, ${pxToRem(24)})`,
      base: `clamp(${pxToRem(24)}, 2.188vw, ${pxToRem(28)})`,
      md: `clamp(${pxToRem(24)}, 2.500vw, ${pxToRem(32)})`,
      lg: `clamp(${pxToRem(32)}, 2.813vw, ${pxToRem(36)})`,
      xl: `clamp(${pxToRem(36)}, 3.438vw, ${pxToRem(44)})`,
      xxl: `clamp(${pxToRem(48)}, 4.375vw, ${pxToRem(56)})`,
      xxxl: `clamp(${pxToRem(64)}, 5.625vw, ${pxToRem(72)})`,
    },
    fontFamily: {
      'avenir-next': ['Avenir Next Variable', 'sans-serif'],
      selawik: ['Selawik Variable', 'sans-serif'],
    },
    fontSize: {
      xs: pxToRem(14),
      sm: `clamp(${pxToRem(14)}, 1.250vw, ${pxToRem(16)})`,
      base: `clamp(${pxToRem(16)}, 1.406vw, ${pxToRem(18)})`,
      md: `clamp(${pxToRem(18)}, 1.563vw, ${pxToRem(20)})`,
      lg: `clamp(${pxToRem(20)}, 1.875vw, ${pxToRem(24)})`,
      xl: `clamp(${pxToRem(24)}, 2.188vw, ${pxToRem(28)})`,
      xxl: `clamp(${pxToRem(32)}, 3.125vw, ${pxToRem(40)})`,
      xxxl: `clamp(${pxToRem(56)}, 5vw, ${pxToRem(64)})`,
    },
    screens: {
      xs: '37.5rem',
      sm: '48rem',
      md: '60rem',
      lg: '80rem',
      xl: '90rem',
      xxl: '120rem',
      hov: { 'raw': '(hover)' }
    },
    spacing: {
      0: 0,
      2: pxToRem(2),
      4: pxToRem(4),
      8: pxToRem(8),
      12: pxToRem(12),
      16: pxToRem(16),
      20: pxToRem(20),
      24: pxToRem(24),
      28: pxToRem(28),
      32: pxToRem(32),
      36: pxToRem(36),
      40: pxToRem(40),
      44: pxToRem(44),
      48: pxToRem(48),
      52: pxToRem(52),
      56: pxToRem(56),
      60: pxToRem(60),
      64: pxToRem(64),
      68: pxToRem(68),
      72: pxToRem(72),
      76: pxToRem(76),
      80: pxToRem(80),
      84: pxToRem(84),
      88: pxToRem(88),
      92: pxToRem(92),
      96: pxToRem(96),
      100: pxToRem(100),
    },
    zIndex: {
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      70: 70,
      80: 80,
      90: 90,
      100: 100,
      110: 110,
      120: 120
    },
  },
  variants: {
    extend: {
      // backgroundColor: ['before', 'after', 'checked'],
      // backgroundImage: ['before', 'after'],
      // backgroundSize: ['focus', 'hover'],
      // cursor: ['responsive'],
      // display: ['before', 'after', 'empty'],
      // height: ['before', 'after'],
      // inset: ['before', 'after'],
      // opacity: ['before', 'after'],
      // position: ['before', 'after'],
      // scale: ['group-hover'],
      // transitionDuration: ['before', 'after'],
      // transitionProperty: ['before', 'after'],
      // transitionTimingFunction: ['before', 'after'],
      // visibility: ['before', 'after', 'group-hover'],
      // width: ['before', 'after', 'hover'],
      // zIndex: ['before', 'after']
    }
  },
};
