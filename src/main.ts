import "fetch-polyfill"
import './utility/polyfill.js'
import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {},
});

export default app;