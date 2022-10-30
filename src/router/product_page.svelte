<style>
</style>
<script>
    import Product from './../component/product.svelte'
    import Topnav from './../component/topnav.svelte';
    import {getItem,setItem} from './../lib/web_storage'
    let actual_item_count = 0
    if(getItem("count_in_cart") === undefined){
        setItem("count_in_cart", 0)
    }else{
        actual_item_count = getItem("count_in_cart")
    }
    function cartchanging(event){
        actual_item_count += 1
        console.log(event.detail.product_id)
    }
</script>
<Topnav item_in_cart={actual_item_count}/>
<Product src="/product/iphone_old.jpg" price=6.99 product_id="iphone_1" on:cartadd={cartchanging}/>