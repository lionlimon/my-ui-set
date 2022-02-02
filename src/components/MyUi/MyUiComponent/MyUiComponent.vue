<template>
  <div class="my-ui-component">
    <h3 v-if="tag" class="my-ui-component__title">
      {{ name || tag }}

      <button role="button" class="my-ui-component__copy" @click="copyCode">
        копировать
      </button>
    </h3>
    <slot></slot>
    <pre class="my-ui-component__code-preview" v-if="codePreview">
      {{ codePreview }}
    </pre>
  </div>
</template>

<script>


import generateCodePreview from "../helpers/generateCodePreview";

export default {
	data: () => ({
		innerComponent: null,
		codePreview: '',
		tag: '',
		props: []
	}),

	mounted() {
		this.innerComponent = this.$children[0];
		if (this.innerComponent) {
			const innerComponentNode = this.innerComponent.$vnode;
			this.tag = innerComponentNode?.componentOptions?.tag;

			const propsData = innerComponentNode?.componentOptions?.propsData;

			if (propsData)
				for (let prop in propsData)
					this.props.push({ prop, value: propsData[prop].toString() });

			if (this.tag)
				this.codePreview = generateCodePreview(this.tag, this.props);
		}
	},

	props: {
		name: {
			type: String,
			default: null
		}
	},

	methods: {
		copyCode() {
			if (!this.codePreview) return;
			navigator.clipboard.writeText(this.codePreview);
		}
	}
}
</script>

<style src="./MyUiComponent.scss" lang="scss" scoped></style>
