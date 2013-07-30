
# vendor

set a css style property with vendor prefixes

## Example

```js
var vendor = require('vendor');
var box = document.getElementById('box');

vendor(box, 'transition', 'all 1s');

setTimeout(function() {
  vendor(box, 'box-shadow', '2px 2px 2px #555');
  vendor(box, 'transform', 'rotate(30deg)');
}, 500);
```

## API

#### vendor(el, prop, val)

## License

MIT
