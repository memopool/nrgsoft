module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-config-prettier',
  ],
  rules: {
    'declaration-block-no-duplicate-properties': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
  }
}
