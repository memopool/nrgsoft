- ✔️ change icon
- ✔️ background-color / background - unify + transitions
- ✔️ post list border if no data
- ✔️ rename theme obj to highlight
- ✔️ triple dot in tickers and posts
- try fast refresh
- add source-map-explorer (getajob/client/package.json)
- PostList border / Post border-radius?
- move css constants to themes
- try custom cubic-bezier
- handle fetch errors
- post list scroll
- use unique id for posts (nanoid)
- add to readme about personal snippets (color, components, animations)
- add to readme about tickers animation performance
- try posts appearing / disappearing transitions
- handle duplicate posts
- favicon
- style scrollbar
- body bg color background-color: rgba(220, 180, 140, 0.1);
- react-window moving 1px right when drag an item to the right
- provided.innerRef has not been provided with a HTMLElement.
- change scrollbar color
- background color from theme props everywhere
- write about false positive ref error
- analyze-build rimraf
- reducer name, store names 
- write about https://github.com/JannicBeck/undox ?

// standalone AutoSizer package ('react-virtualized-auto-sizer') is a bit
// dated and was the reason of false postive console error 〝provided.innerRef
// has not been provided with a HTMLElement〞, so I had to call AutoSizer via
// precise import from 'react-virtualized' package because it's not
// tree-shakable