<template>
  <div id="app">
		<!-- this need currentCategory prop -->
		<!-- eslint-disable-next-line vue/no-unused-vars -->
		<MyUi button-position="right-bottom" custom-css-properties-container=".my-ui" #default="{ currentCategory }">
			<MyUiCategory name="Buttons">
				<MyUiComponent>
					<MyButton text="Button"></MyButton>
				</MyUiComponent>

				<MyUiComponent name="MyButton loading">
					<MyButton is-loading></MyButton>
				</MyUiComponent>

				<MyUiComponent name="MyButton red">
					<MyButton color="red" text="Warning!!!!"></MyButton>
				</MyUiComponent>
			</MyUiCategory>

			<MyUiCategory name="Cards">
				<MyUiComponent>
					<MyButton></MyButton>
				</MyUiComponent>
			</MyUiCategory>

			<MyUiCategory name="Labels">
				<MyUiComponent>
					<MyButton></MyButton>
				</MyUiComponent>
			</MyUiCategory>

			<MyUiCategory name="Forms">
				<MyUiComponent>
					<MyButton></MyButton>
				</MyUiComponent>
				<MyUiComponent>
					<MyButton></MyButton>
				</MyUiComponent>
			</MyUiCategory>
		</MyUi>
  </div>
</template>

<script>
/**
 * TODO: Дать выбор положения кнопки открытия попапа с UI китом
 * TODO: Редактор не видит компоненты пакета
 * TODO: Сделать проброс css значений для сочетания с приложением
 * TODO: Много дубликатов кастомных свойств
 */
import MyUi from "./components/MyUi/MyUi";
import MyUiCategory from "./components/MyUi/MyUiCategory/MyUiCategory";
import MyUiComponent from "./components/MyUi/MyUiComponent/MyUiComponent";
import MyButton from "./components/MyUi/MyButton";
export default {
  name: 'App',
	components: {MyButton, MyUiComponent, MyUiCategory, MyUi},
}
</script>
