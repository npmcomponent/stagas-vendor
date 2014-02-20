*This repository is a mirror of the [component](http://component.io) module [stagas/vendor](http://github.com/stagas/vendor). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/stagas-vendor`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

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
