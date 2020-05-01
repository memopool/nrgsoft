const base = {
  highlight: '220, 180, 140',
}

const getHighlightColor = alphaChannel =>
  `rgba(${base.highlight}, ${alphaChannel})`

export default {
  global: {
    background: 'rgb(250, 247, 247)',
    text: 'rgb(75, 75, 75)',
  },
  ticker: {
    width: '160px',
  },
  highlight: {
    weak: getHighlightColor('0.4'),
    medium: getHighlightColor('0.7'),
    strong: getHighlightColor('1'),
  },
}
