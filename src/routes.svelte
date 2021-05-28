<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './components/Home.svelte';
    import Page from './components/Page.svelte';

    export let url = '';
</script>
  
<Router {url}>
    <div>
        <Route path="/" component={Home} />
        <Route path="page" component={Page} />
    </div>
</Router>