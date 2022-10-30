<style>
</style>
<script>
import { Router } from 'svelte-router-spa'
import ProductPage from './router/product_page.svelte';
const routes = [
  {
    name:"/",
    component: ProductPage
  }
]
</script>
<main>
  <Router {routes} />
</main>