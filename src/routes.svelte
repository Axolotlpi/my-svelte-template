<script>
    import { Router, Route } from 'svelte-routing';
    import Home from './components/Home.svelte';

    export let url = '';
</script>
  
<Router {url}>
    <div>
        <Route path="/" component={Home} />
    </div>
</Router>