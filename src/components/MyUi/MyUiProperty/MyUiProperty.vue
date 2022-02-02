<template>
	<div class="property" :style="style">
		{{ prop }}: {{ value }}
	</div>
</template>

<script>
import {contrastColor} from "../helpers/constrastColor";

export default {
	name: "MyUiProperty",

	props: {
		prop: {
			type: String,
			default: ''
		},

		value: {
			type: String,
			default: ''
		}
	},

	computed: {
		isColor() {
			return this.prop.includes('color');
		},

		style() {
			return this.isColor ? {
				backgroundColor: this.value,
				color: `#${contrastColor(this.value)}`
			} : {};
		}
	}
}
</script>

<style scoped lang="scss" src="./MyUiProperty.scss"></style>
