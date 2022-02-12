<template>
  <button
    :class="[positionClass, { 'my-ui__toggle--active': isActive }]"
    class="my-ui__toggle"
    @click="$emit('on-toggle')"
  >
    {{ toggleButtonSymbol }}
  </button>
</template>

<script>
export default {
	name: 'MyUiButton',

	props: {
		isActive: {
			type: Boolean,
			default: false,
		},

    position: {
      type: String
    }
	},

	computed: {
		toggleButtonSymbol() {
			return this.isActive ? '⇥' : '⇤';
		},

    positionClass() {
      return `my-ui__toggle--${this.position}`;
    }
	}
}
</script>

<style scoped lang="scss" src="./MyUiButton.scss"></style>

