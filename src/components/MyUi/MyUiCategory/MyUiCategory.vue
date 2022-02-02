<template>
  <div class="my-ui-category" v-if="isActive">
    <slot>Тут пока ничего нет</slot>
  </div>
</template>

<script>

export default {
	// components: {MyUi},
	name: 'MyUiCategory',

	props: {
		name: {
			type: String,
			default: '',
		}
	},

	data: () => ({
		isActive: false,
	}),

	updated() {
		this.setActiveStatus();
	},

	methods: {
		setActiveStatus() {
			const parent = this.$parent;

			if (parent?.currentCategory)
				this.isActive = parent?.currentCategory === this.name;
		}
	}
}
</script>

<style src="./MyUiCategory.scss" lang="scss" scoped></style>
