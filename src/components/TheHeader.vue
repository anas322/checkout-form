<template>
  <header>
    <div class="col-1 logo">
      <img src="../assets/logo.svg" alt="Nike logo" width="60" height="60" />
    </div>

    <ul class="col-2 center">
      <li>new</li>
      <li>Men</li>
      <li>women</li>
      <li>kids</li>
      <li class="offer">special offers</li>
    </ul>
    <ul class="col-3 aside">
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
      <li><i class="fa-regular fa-heart"></i></li>
      <li><i class="fa-solid fa-cart-shopping"></i></li>
    </ul>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
  height: 4rem;
  background: #fff;
  overflow: hidden;
}
.col-1 {
  flex: 20%;
  text-align: center;
}
.col-2 {
  flex: 60%;
}
.col-3 {
  flex: 20%;
}
.center {
  list-style-type: none;
  display: flex;
  align-items: center;
  height: 100%;
}
.center li {
  padding: 0 20px;
  height: inherit;
  line-height: 4rem;
  vertical-align: middle;
  font-weight: 500;
  font-size: 130%;
  text-transform: capitalize;
  white-space: nowrap;
  transition: background 0.5s ease;
}
.center li:hover {
  background: #f3f3f3;
  cursor: pointer;
}
.offer {
  color: rgb(247, 79, 67);
}
.aside {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  list-style-type: none;
}
.aside li {
  padding: 10px 10px;
}
.aside li:hover {
  background: #f3f3f3;
  border-radius: 50%;
  cursor: pointer;
}
.icon {
  display: none;
  font-size: 150%;
  margin-right: 10px;
  width: 10px;
  height: 10px;
  position: absolute;
  top: 10px;
  right: 20px;
  padding: 10px;
}

.icon i:hover {
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.6s ease;
  transform: rotate(90deg);
}
</style>
