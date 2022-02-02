<template>
  <div class="my-ui">
    <div
      :class="{ 'my-ui__content--visible': isOpen }"
      class="my-ui__content"
    >
      <MyUiSidebar
        :items="sidebarItems"
        :active-item="currentCategory"

        class="my-ui__sidebar"
        @on-link-click="setCurrentCategory"
      />

      <div class="my-ui__category-detail">
				<my-ui-category v-if="customProperties" name="CSS properties">
					<MyUiProperty v-for="[prop, value] in customProperties" :prop="prop" :value="value" :key="prop" />
				</my-ui-category>
        <!-- only for my-ui-category components -->
        <slot :currentCategory="currentCategory"></slot>
      </div>
    </div>

    <MyUiButton :is-active="isOpen" @on-toggle="isOpen = !isOpen" />
  </div>
</template>

<script>
import MyUiSidebar from "./MyUiSidebar/MyUiSidebar";
import MyUiButton from "./MyUiButton/MyUiButton";
import {getCustomCssProperties} from "./helpers/getCustomCssProperties";
import MyUiCategory from "./MyUiCategory/MyUiCategory";
import MyUiProperty from "./MyUiProperty/MyUiProperty";


export default {
	components: {MyUiProperty, MyUiCategory, MyUiButton, MyUiSidebar},
	data: () => ({
		isOpen: false,
		currentCategory: '',
		sidebarItems: [],
		customProperties: [],
	}),

	mounted() {
		this.customProperties = getCustomCssProperties(this.customCssPropertiesContainer);
		this.customProperties
			.sort((x, y) => (x[0].includes('color') === y[0].includes('color'))? 0 : x[0].includes('color')? -1 : 1);

		this.setSidebarItems();
		this.currentCategory = this.sidebarItems[0] || '';
	},

	props: {
		customCssPropertiesContainer: {
			type: String,
			default: null
		}
	},

	methods: {
		/* Iterates scoped slot components & and makes a list of them **/
		setSidebarItems() {
			if (this.customProperties) {
				this.sidebarItems.push('CSS properties');
			}

			if (typeof this.$scopedSlots?.default !== 'function') return;

			const nodes = this.$scopedSlots.default({
				currentCategory: this.currentCategory,
			});

			if (!nodes) return;

			nodes.forEach((item) => {
        if (!item.componentOptions?.tag) return;

				if (item.componentOptions.tag !== 'MyUiCategory' && item.componentOptions.tag !== 'my-ui-category')
					throw new Error(
						'The interior of the slot must be an MyUiCategory component'
					);

				const props = item.componentOptions?.propsData;
				if (props?.name) this.sidebarItems.push(props.name);
			});
		},

		setCurrentCategory(name) {
			this.currentCategory = name;
		}
	},

}
</script>

<style src="./MyUi.scss" lang="scss" scoped></style>
