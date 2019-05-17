// All the constant colors should be added here

export const colors = {
  greyBlack: '#222222',
  cyanBlue: '#2f8be6',
  cyanBlueC: '#e68a2f',
  black: '#000',
  darkBlack: '#121212',
  black20: 'rgba(0, 0, 0, 0.2)',
  black40: 'rgba(0, 0, 0, 0.4)',
  black50: 'rgba(0, 0, 0, 0.5)',
  black70: 'rgba(0, 0, 0, 0.7)',
  blue: '#3B5998',
  turquoise: '#3fe0d0',
  powder: '#B0DFE5',
  sky: '#95C8D8',
  electric: '#7EF9FF',
  cobalt: '#0048ba',
  danube: '#6da9d2',
  aliceBlue: '#F0F8FF',
  morningGlory: '#95d6dc',
  gainsboro: '#DCDCDC',
  lightGray: '#D3D3D3',
  silver: '#C0C0C0',
  darkgray: '#A9A9A9',
  gray: '#808080',
  dimgray: '#696969',
  lightSlateGray: '#778899',
  slateGray: '#708090',
  darkSlateGray: '#2F4F4F',
  darkGreen: '#111f10',
  darkGrey: '#eeeeee',
  darkRed: '#ff1100',
  green: '#2b8c2e',
  grey: '#282828',
  grey3: '#333',
  greyLight: '#bebebe',
  greyOff: '#3e3e3e',
  red: '#fa5f5b',
  white: '#fefefe',
  greyWhite: '#efefef',
  offWhite: '#f0f0f0',
  yellow: '#F8B106',
  orange: '#ff6600',
  greenDark: '#277d31ff'
};

const Base = {
  accent: colors.cyanBlue,
  background: colors.white,
  brandPrimary: colors.greenDark,
  disabled: colors.darkGrey,
  primary: colors.greenDark,
  secondary: colors.greyWhite,
  surface: colors.greyWhite,
  tertiary: colors.grey
};

const Text = {
  text: Base.tertiary,
  darkText: colors.greyBlack,
  errorText: colors.red,
  headingtext: colors.blue,
  highlightedText: colors.darkGrey,
  infoText: colors.greyLight,
  lightText: colors.greyWhite,
  linkText: colors.blue,
  placeholderText: colors.greyOff,
  warningText: colors.yellow
};

const Extended = {
  textC: Text.lightText,
  tintColorActive: colors.blue,
  backdrop: colors.greyBlack,
  errorBackground: colors.darkRed,
  inactive: colors.greyLight,
  tintColorInactive: Base.tertiary,
  statusbar: Base.tertiary,
  tabIcon: Base.tertiary,
  tabIconActive: colors.blue,
  tintColor: colors.blue,
  warningBackground: colors.yellow
};

export const Theme = { ...Base, ...Text, ...Extended };
