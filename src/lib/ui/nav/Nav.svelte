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
	</div>
</div>
<nav>
	<a href="/">Home</a>
	<a href="/">Past Jams</a>
	<a href="/">About</a>
</nav>

<style type="text/scss">
.ticker-container {
	position: fixed;
	width: 100%;
	font-size: 4rem;
	font-style: italic;
	overflow: hidden;
	border: 1rem solid $drip-red;
	height: 8rem;
	background: $drip-yellow;
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: $drip-red;
	-webkit-text-fill-color: $drip-yellow;
	z-index: 100;


	.ticker {
		width: 100%;
		white-space: nowrap;
		display: block;
        animation: moving-left 15s linear infinite;	
		z-index: 100;

		div {
			display: inline-block;
			margin: 0 5rem;
		}
	}
}

@keyframes moving-left {
	0% {
		transform: translate3d(0%, 0, 0);
	}
	100% {
		transform: translate3d(-50%, 0, 0);
	}
}

nav {
	position: fixed;
	width: 4.6rem;
	display: flex;
	flex-flow: column;
	margin: 0rem 0 5rem;
	text-orientation: upright;
	border: 1rem solid $drip-red;
	height: 100vh;
	background: $drip-yellow;
	padding: 8rem 0;

	a {
		display: block;
		margin: 2rem 0;
		font-size: 1.6rem;
		text-transform: uppercase;
		writing-mode: sideways-rl;
		color: $drip-red;
	}
}
</style>