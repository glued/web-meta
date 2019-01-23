'use strict';
const cssProperties = require('./css-properties.json');
const cssPropertyMap = require('./css-property-map.json');
const cssPseudoSelectors = require('./css-pseudo-selectors.json');
const cssDistanceProps = require('./css-distance-props.json');
const cssColorProps = require('./css-color-props.json');
const htmlTags = require('./html-tags.json');
const htmlAttributeMap = require('./html-attribute-map.json');
const htmlTagAttributesMap = require('./html-tag-attributes-map.json');

module.exports = {
  htmlTags,
  htmlTagAttributesMap,
  htmlAttributeMap,
  cssDistanceProps,
  cssProperties,
  cssColorProps,
  cssPseudoSelectors,
  cssPropertyMap,
};
