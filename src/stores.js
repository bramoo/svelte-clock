import { readable } from 'svelte/store';

export const time = readable(new Date(), set => {
    let timeout;

    const step = () => {
        let now = new Date();
        set(now);
        timeout = setTimeout(step, 1000 - now.getMilliseconds());
    };

    step();

    return () => {
        clearTimeout(timeout);
    }
});