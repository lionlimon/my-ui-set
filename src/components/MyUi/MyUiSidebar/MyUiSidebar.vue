<template>
  <aside class="my-ui-sidebar">
    <nav class="my-ui-sidebar__nav">
      <ul class="my-ui-sidebar__list">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="my-ui-sidebar__item"
        >
          <a
            :class="{ 'my-ui-sidebar__link--active': item === activeItem }"
            class="my-ui-sidebar__link"
            :href="item"
            @click.prevent="$emit('on-link-click', item)"
          >
            {{ item }}
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
	name: 'MyUiSidebar',

	props: {
		activeItem: {
			type: String,
			default: '',
		},

		items: {
			type: Array,
			default: () => [],
		}
	}
}
</script>

<style src="./MyUiSidebar.scss" lang="scss" scoped></style>
