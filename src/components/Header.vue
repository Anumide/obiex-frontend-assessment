<script setup lang="ts">
import { ref } from 'vue'

</script>

<template>
	<header>
		<div>
			<RouterLink to="/"><img src="@/assets/images/Logo.svg" alt="Vader Logo"></RouterLink>
			<form role="search">
				<div class="search__catogory">
					<img src="@/assets/images/search.svg" aria-label="search movie" tabindex="0" alt="Search Icon">
					<div class="search__input">
						<img src="@/assets/images/search.svg" alt="Search Icon">
						<input type="text" aria-label="search movie" placeholder="Search">
					</div>
				</div>
			</form>
		</div>
	</header>
</template>

<style scoped>
header {
	padding: 1rem;
	background-color: #1D283C;
}

header > div {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin: 0 auto;
}

.search__input {
	display: none;
}

.search__input:focus,
.search__input:focus-visible,
.search__input:focus-within {
	outline: 1px solid #fff;
}

.search__input img {
	width: 13px;
}

.search__input input {
	flex-grow: 1;
	background-color: transparent;
	border: 0;
	color: #fff;
}

.search__input input::placeholder {
	color: #8F929B;
	font-size: 12px;
	line-height: 2px;
}

.search__input input:focus,
.search__input input:focus-visible {
	border: 0;
	outline: 0;
}



@media screen and (min-width: 1024px) {
	header form {
		width: 28%;
	}

	header > div {
		max-width: 90vw;
		margin: 4px auto;
	}
	.search__catogory > img {
		display: none;
	}
	.search__input {
		display: flex;
		align-items: center;
		gap: 5px;
		background-color: #1B1F32;
		padding: 8px 6px;
		border-radius: 6px;
		border: 1px solid #494D61;
	}

}

@media screen and (min-width: 1440px) {
	header > div {
		max-width: 85vw;
	}
}

</style>