<div class="ticker-container">
	<div class="ticker">
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
		<div>HASJAM</div>
	</div>
</div>
<nav>
	<a href="/">Home</a>
	<a href="/">Past Jams</a>
	<a href="/">About</a>
</nav>

<style type="text/scss">
.ticker-container {
	width: 100%;
	font-size: 6rem;
	font-style: italic;
	overflow: hidden;
	border: 1rem solid $drip-red;
	background: $drip-yellow;
	-webkit-text-stroke-width: 4px;
	-webkit-text-stroke-color: $drip-red;
	-webkit-text-fill-color: $drip-yellow;

	.ticker {
		width: 100%;
		padding: 1rem;
		white-space: nowrap;
        animation: moving-left 30s linear infinite;

		div {
			display: inline;
			width: 300px;
		}
	}
}

@keyframes moving-left {
	0% {
		transform: translate3d(0%, 0, 0);
	}
	100% {
		transform: translate3d(-100%, 0, 0);
	}
}

nav {
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 0rem 0 5rem;

	a {
		margin: 0 5rem;
		font-size: 1.6rem;
		text-transform: uppercase;
		padding: 1rem;
	}
}
</style>