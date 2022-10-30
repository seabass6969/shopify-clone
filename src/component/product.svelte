<style>
:root{
  --width: calc(100vw/5);
}
.imageproduct{
  width: var(--width);
}
.addproduct {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--width);

  border-style: none;
  background-color: #2afcb6;
}
.addproduct:hover{
  background-color: #2afc4d;
}
.pricetag{
  width: var(--width);
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<script>
  import { createEventDispatcher } from "svelte";
  export let src;
  export let price;
  export let product_id;
  const dispatch = createEventDispatcher()
  function clickprice(){
    dispatch("cartadd",{"product_id":product_id})
  }
</script>
<div class="product">
<img class="imageproduct" src={src} alt="Product">
<span class="pricetag">${price}</span>
<button class="addproduct" on:click={clickprice}>
<span class="material-symbols-outlined">add</span>Add to cart
</button>
</div>