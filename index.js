
/*!
 *
 * vendor
 *
 */

/**
 * Expose `vendor`.
 */

module.exports = vendor;

/**
 * Sets property `prop` to value `val` for element `el`.
 *
 * @param {Element} el
 * @param {String} prop
 * @param {String} val
 * @api public
 */

function vendor(el, prop, val) {
  el.style.setProperty('-webkit-' + prop, val);
  el.style.setProperty('-moz-' + prop, val);
  el.style.setProperty('-ms-' + prop, val);
  el.style.setProperty('-o-' + prop, val);
  el.style.setProperty(prop, val);
}
