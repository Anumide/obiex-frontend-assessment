<template>
	<div>
		<div class="movie--img">
			<img src="" alt="">
		</div>
		<div class="movie--info">
			<h3>The Phantom Menace</h3>
			<p><span>2017</span>  |  <span>1h 53m</span></p>
		</div>
	</div>
</template>

<style scoped>
.movie--img {
    width: 100%;
    height: 260px;
    overflow: hidden;
    border-radius: 4px;
}

.movie--img img {
    width: 100%;
    height: 100%;
}

.movie--info {
    margin: 1rem 0;
}

.movie--info h3 {
    font-size: 16px;
    margin-bottom: 1rem;
}

.movie--info p {
    display: flex;
    gap: 0.8rem;
    font-size: 12px;
    color: #E0E3E8;
}
</style>