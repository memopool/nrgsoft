export const subreddits = [
  {
    id: '0',
    link: 'frontend',
    text: 'Frontend',
  },
  {
    id: '1',
    link: 'reactjs',
    text: 'ReactJS',
  },
  {
    id: '2',
    link: 'vuejs',
    text: 'VueJS',
  },
  {
    id: '3',
    link: 'angular',
    text: 'Angular',
  },
  {
    id: '4',
    link: 'elm',
    text: 'Elm Elm Elm Elm Elm Elm Elm',
  },
]

export const posts = [
  {
    id: '0',
    text:
      'I won’t go into too much details about this but in short, the CSS transform creates new composite layer that is uploaded directly to GPU so it doesn’t require the browser to repaint.',
  },
  {
    id: '1',
    text: 'Why? Because it directly occurs in the GPU instead of CPU.',
  },
  {
    id: '2',
    text:
      'Currently most browsers only use GPU acceleration when they have a strong indication that an HTML element would benefit from it.',
  },
  {
    id: '3',
    text:
      'Use Timeline Frame’s mode to investigate what is slowing down your behavior “Show Paint Rects” and “Render Composited Layer Borders” are good pro-moves to verify where your element is being rendered.',
  },
]
