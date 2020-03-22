<style>
    .separator {
        margin: 1em;
        display: grid;
        grid-template-columns: var(--st);
        grid-template-rows: var(--sl) repeat(3, var(--st)) var(--sl);
        grid-gap: var(--sg);
    }

    .dot {
        background-color: rgb(0, 0, 0);
    }

    .upper {
        grid-row: 2;
    }

    .lower {
        grid-row: 4;
    }
</style>

<div class="separator">
    <div class="dot upper"></div>
    <div class="dot lower"></div>
</div>