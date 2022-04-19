<nav class="w-full px-4 py-6 bg-zinc-700 text-white flex items-center">
	<h1 class="text-2xl mr-4">has<span class="font-bold text-red-500">JAM</span></h1>
	<a href="/">Home</a>
	<a href="pastjams">Past Jams</a>
	<a href="about">About</a>
</nav>

<style lang="scss">
	nav {
	  	a {
		  	@apply px-4 py-2 rounded-md hover:bg-zinc-300/40 relative top-0.5;
		  	font-family: var(--ui-text);
		}
	}
.has {
	-webkit-text-stroke-color: $drip-white;
	-webkit-text-fill-color: $drip-white;
}
.ticker-container {
	position: fixed;
	width: 100%;
	bottom: 0px;
	font-size: 4rem;
	font-style: bold;
	overflow: hidden;
	border: 1rem solid $drip-red;
	height: 8rem;
	background: $drip-grey;
	-webkit-text-stroke-width: 2px;
	-webkit-text-stroke-color: $drip-red;
	-webkit-text-fill-color: $drip-red;
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

</style>

<div class="ticker-container">
	<div class="ticker">
		<div><span class="has">has</span>JAM</div>
		<div><span class="has">Pepe</span>La</div>
		<div><span class="has">has</span>JAM</div>
		<div><span class="has">Pepe</span>La</div>
		<div><span class="has">has</span>JAM</div>
		<div><span class="has">Pepe</span>La</div>
		<div><span class="has">has</span>JAM</div>
		<div><span class="has">Pepe</span>La</div>
		<div><span class="has">has</span>JAM</div>
		<div><span class="has">Pepe</span>La</div>
		<div><span class="has">has</span>JAM</div>
		
		
	</div>
</div>