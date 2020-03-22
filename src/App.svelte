<script>
  import { time } from "./stores.js";
  import Digit from "./Digit.svelte";
  import Separator from "./Separator.svelte";

  let getComponents = date => {
    let hours = "" + date.getHours();
    hours = hours.padStart(2, "0");

    let minutes = "" + date.getMinutes();
    minutes = minutes.padStart(2, "0");

    let seconds = "" + date.getSeconds();
    seconds = seconds.padStart(2, "0");

    return {
      h1: +hours[0],
      h2: +hours[1],
      m1: +minutes[0],
      m2: +minutes[1],
      s1: +seconds[0],
      s2: +seconds[1]
    };
  };

  $: components = getComponents($time);

  let length = 3;
  let thickness = 1;

  $: {
    document.documentElement.style.setProperty("--sl", length + "em");
  }

  $: {
    document.documentElement.style.setProperty("--st", thickness + "em");
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .digits {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }

  .inputs {
	margin: 0 auto;
	display: inline-block;
    text-align: initial;
  }

  label {
    display: inline-block;
    min-width: 6em;
  }

  .inputs span {
	  display: inline-block;
	  min-width: 6em;
	  text-align: end;
  }
</style>

<main>
  <h1>Svelte Clock</h1>
  <p>
    Visit the
    <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
    to learn how to build Svelte apps.
  </p>
  <div class="inputs">
    <div>
      <label>Length</label>
      <input type="range" min="0" max="10" step="0.125" bind:value={length} />
	  <span>{length}em</span>
    </div>
    <div>
      <label>Thickness</label>
      <input type="range" min="0" max="10" step="0.125" bind:value={thickness} />
	  <span>{thickness}em</span>
    </div>
  </div>
  <div class="digits">
    <Digit character={components.h1} />
    <Digit character={components.h2} />
    <Separator />
    <Digit character={components.m1} />
    <Digit character={components.m2} />
    <Separator />
    <Digit character={components.s1} />
    <Digit character={components.s2} />
  </div>

</main>
