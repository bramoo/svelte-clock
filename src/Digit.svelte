<script>
  export let character;
  const segmentMap = {
    0: [true, true, true, true, true, true, false],
    1: [false, true, true, false, false, false, false],
    2: [true, true, false, true, true, false, true],
    3: [true, true, true, true, false, false, true],
    4: [false, true, true, false, false, true, true],
    5: [true, false, true, true, false, true, true],
    6: [true, false, true, true, true, true, true],
    7: [true, true, true, false, false, false, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true]
  };

  $: segs = segmentMap[character];
</script>

<style>
  .digit {
    margin: 1em;
    display: grid;
    grid-gap: var(--sg);
    grid-template-columns: var(--st) var(--sl) var(--st);
    grid-template-rows: var(--st) var(--sl) var(--st) var(--sl) var(--st);
  }

  .segment-h,
  .segment-v {
    background-color: rgb(0, 0, 0);
    position: relative;
    opacity: 0;
    transition: opacity 300ms;
  }

  .segment-h:before {
    content: "";
    position: absolute;
    left: var(--shtn);
    bottom: 0;
    width: 0;
    height: 0;
    border-right: var(--sht) solid rgb(0, 0, 0);
    border-top: var(--sht) solid transparent;
    border-bottom: var(--sht) solid transparent;
  }

  .segment-h:after {
    content: "";
    position: absolute;
    right: var(--shtn);
    bottom: 0;
    width: 0;
    height: 0;
    border-left: var(--sht) solid rgb(0, 0, 0);
    border-top: var(--sht) solid transparent;
    border-bottom: var(--sht) solid transparent;
  }

  .segment-v:before {
    content: "";
    position: absolute;
    left: 0;
    top: var(--shtn);
    width: 0;
    height: 0;
    border-bottom: var(--sht) solid rgb(0, 0, 0);
    border-left: var(--sht) solid transparent;
    border-right: var(--sht) solid transparent;
  }

  .segment-v:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: var(--shtn);
    width: 0;
    height: 0;
    border-top: var(--sht) solid rgb(0, 0, 0);
    border-left: var(--sht) solid transparent;
    border-right: var(--sht) solid transparent;
  }

  .on {
    opacity: 1;
  }

  .top {
    grid-column: 2;
    grid-row: 1;
  }

  .top-left {
    grid-column: 1;
    grid-row: 2;
  }

  .top-right {
    grid-column: 3;
    grid-row: 2;
  }

  .middle {
    grid-column: 2;
    grid-row: 3;
  }

  .bottom-left {
    grid-column: 1;
    grid-row: 4;
  }

  .bottom-right {
    grid-column: 3;
    grid-row: 4;
  }

  .bottom {
    grid-column: 2;
    grid-row: 5;
  }
</style>

<div class="digit">
  <div class:on={segs[0]} class="segment-h top" />
  <div class:on={segs[1]} class="segment-v top-right" />
  <div class:on={segs[2]} class="segment-v bottom-right" />
  <div class:on={segs[3]} class="segment-h bottom" />
  <div class:on={segs[4]} class="segment-v bottom-left" />
  <div class:on={segs[5]} class="segment-v top-left" />
  <div class:on={segs[6]} class="segment-h middle" />
</div>
