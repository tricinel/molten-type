module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-a11y'],
  rules: {
    'a11y/media-prefers-reduced-motion': true,
    'a11y/no-outline-none': true,
    'a11y/selector-pseudo-class-focus': true,
    'custom-property-empty-line-before': [
      'never',
      { except: ['after-comment'] }
    ]
  }
};
