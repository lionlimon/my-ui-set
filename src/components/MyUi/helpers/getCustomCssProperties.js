/**
 * Based on https://css-tricks.com/how-to-get-all-custom-properties-on-a-page-in-javascript/
 */

const isSameDomain = (styleSheet) => {
	if (!styleSheet.href) {
		return true;
	}

	return styleSheet.href.includes(window.location.origin);
};


const isStyleRule = (rule) => rule.type === 1;

/**
 * @param {string} propertiesContainer
 * @return {array}
 */
export function getCustomCssProperties(propertiesContainer = null) {

	return [...document.styleSheets].filter(isSameDomain).reduce(
		(finalArr, sheet) =>
			finalArr.concat(
				[...sheet.cssRules]
					.filter(isStyleRule)
					.filter(!propertiesContainer ? () => true : ((rule) => {
						return rule?.selectorText.includes(propertiesContainer)
					}))
					.reduce((propValArr, rule) => {
					const props = [...rule.style]
						.map((propName) => [
							propName.trim(),
							rule.style.getPropertyValue(propName).trim()
						])
						.filter(([propName]) => propName.indexOf("--") === 0);

					return [...propValArr, ...props];
				}, [])
			),
		[]
	);
}
