<style>
.link{
  margin-left: 1rem;
  margin-right: 1rem;
}
.cooltext {
  text-decoration: none;
  font-size: 30px;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.right {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.left {
  justify-content: flex-start;
}
</style>
<script>
    export let item_in_cart = 0
</script>
<header>
<div class="left">
    <a class="cooltext" href="/">RARE Computer</a>
</div>
<div class="right">
    <div class="directory">
    <div class="subdir">
        <a class="link" href="/">Vintage Computer</a>
    </div>
    </div>
    <a href="/">Cart ({item_in_cart})</a>
</div>
</header>