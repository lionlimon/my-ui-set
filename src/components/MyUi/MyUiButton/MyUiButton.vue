<template>
  <button
    :class="{ 'my-ui__toggle--active': isActive }"
    class="my-ui__toggle"
    @click="$emit('on-toggle')"
  >
    {{ toggleButtonSymbol }}
  </button>
</template>

<script lang="ts">

export default {
	name: 'MyUiButton',

	props: {
		isActive: {
			type: Boolean,
			default: false,
		}
	},

	computed: {
		toggleButtonSymbol() {
			return this.isActive ? '⇥' : '⇤';
		}
	}
}
</script>
