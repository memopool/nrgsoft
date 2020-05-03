const base = {
  highlight: '220, 180, 140',
  default: '75, 75, 75',
}

const getHighlightColor = opacity => `rgba(${base.highlight}, ${opacity})`

const getDefaultColor = opacity => `rgba(${base.default}, ${opacity})`

export default {
  global: {
    background: getHighlightColor('0.1'),
    text: getDefaultColor('1'),
  },
  highlight: {
    invisible: getHighlightColor('0.15'),
    semivisible: getHighlightColor('0.25'),
    weak: getHighlightColor('0.4'),
    medium: getHighlightColor('0.7'),
    strong: getHighlightColor('1'),
  },
  default: {
    invisible: getDefaultColor('0.15'),
    semivisible: getDefaultColor('0.25'),
    weak: getDefaultColor('0.65'),
    medium: getDefaultColor('0.85'),
    strong: getDefaultColor('1'),
  },
}
