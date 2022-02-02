<template>
  <button :class="color">{{ isLoading ? '...' : text }}</button>
</template>

<script>
export default {
  name: 'MyButton',

  props: {
    text: {
      type: String,
      default: 'Кнопка',
    },

    isLoading: {
      type: Boolean,
      default: false
    },

		color: {
			type: String,
			default: null,
		}
  },
};
</script>

<style scoped lang="scss">
button {
	background: #42b983;
	padding: 5px 10px;
	color: white;
	border-radius: 30px;
	border: none;
	transition: transform .25s;
	&.red {
		background-color: tomato;
	}

	&:active {
		transform: scale(0.8);
	}
}
</style>
