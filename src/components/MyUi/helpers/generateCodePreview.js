/**
 * Generate attributes string
 * @param {object} attributes
 * @return {string} - <prop>="<value>"
 */
function generateAttributeString(attributes) {
  return attributes.map((attribute) => {
      if (attribute.prop)
        return `${attribute?.prop}${attribute?.value ? (`="${attribute.value}"`) : ''}`;
    })
    .join(' ');
}

/**
 * Generate component string
 * @param {string} tag
 * @param {object[]} attributes
 * @return {string} - <tag {...attributes}></tag>
 */
function generateCodePreview(tag, attributes) {
  let attributesString;

  if (attributes) attributesString = generateAttributeString(attributes);

  return `<${tag}${attributesString ? ` ${attributesString}` : ''}></${tag}>`;
}

export default generateCodePreview;
