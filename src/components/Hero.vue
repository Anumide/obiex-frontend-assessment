<template>
	<section>
		<div class="hero__section">
			<p class="hero__section-info">
				<span>Featured</span> |
				2019 | Action, Sci-Fi, Drama
			</p>
			<hgroup>
				<h1>Star Wars: The Rise of Skywalker</h1>
				<div>
					<span class="rating">
						<img src="@/assets/images/star.svg" alt="rating">
						9.0
					</span>
					<span>16+</span>
				</div>
			</hgroup>
			<p class="hero__section--movie-info">The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.</p>
			<div class="hero__section--movie-links">
				<a href="">
					<img src="@/assets/images/play-circle.svg" alt="">
					<span>Watch now</span>
				</a>
				<a href="">
					<img src="@/assets/images/info-circle.svg" alt="">
					<span>Learn more</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style scoped>
section {
    padding: 5em 1rem;
}

.hero__section {
    display: flex;
    flex-direction: column;
    gap: 2em;
}

.hero__section-info {
    font-size: 13px;
}

.hero__section-info span {
    color: #E8BA35;
}

hgroup h1 {
    font-size: 30px;
    margin-bottom: 0.7em;
    line-height: 1.5em;
}

hgroup div {
    display: flex;
    align-items: center;
    gap: 20px;
}

hgroup div span:last-child {
    padding: 0.5em 1em;
    border: 1px solid white;
    border-radius: 100px;
}

.rating {
    display: flex;
    align-items: center;
    gap: 2px;
}

.rating img {
    width: 22px;
}

.hero__section--movie-info {
    width: 80%;
    line-height: 1.6em;
    word-spacing: 1px;
}

.hero__section--movie-links {
    display: flex;
    gap: 10px;
}

.hero__section--movie-links a {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 12px 24px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    border-radius: 6px;
}

.hero__section--movie-links a:hover,
.hero__section--movie-links a:focus,
.hero__section--movie-links a:focus,
.hero__section--movie-links a:focus-within {
    outline: 2px solid #1759f2;
}

.hero__section--movie-links a:first-child {
    background-color: #3772FF;
}

.hero__section--movie-links a:last-child {
    border: 1px solid #98B6FF;
    background-color: #21354A;
}

@media screen and (min-width: 1024px) {
    section {
        padding: 8em 6%;
    }

    hgroup h1 {
        font-size: 40px;
    }

    hgroup h1,
    .hero__section--movie-info {
        max-width: 60%;
    }
}

@media screen and (min-width: 1440px) {
    section {
        padding: 5em 8%;
    }

    hgroup h1,
    .hero__section--movie-info {
        max-width: 45%;
    }

}
</style>